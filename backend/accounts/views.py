# 사용자 계정 관련 VIEWS #Users #accounts
# 1. 기본 회원계정
#   1.1. 회원가입

# 2. 로그인
#   2.1 일반 로그인
#   2.2. 로그인 연장기능

# 3. 비밀번호 찾기

# 4. 비밀번호 변경
# 4.1. 비밀번호 알고있는 경우
# 4.2. 비밀번호 모르고 있는 경우

# 5. 로그아웃

# 6. 회원탈퇴

# 7. 프로필

import jwt
import requests
# from config import settings
from django.conf import settings # local, prod가 알아서 구분됨
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.db import transaction
from django.utils.encoding import smart_bytes, smart_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import generics, permissions
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.generics import UpdateAPIView, GenericAPIView, CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken, BlacklistMixin, AccessToken

from .serializers import SignupSerializer, LoginSerializer, LogoutSerializer, ProfileSerializer, \
    PasswordChangeSerializer, PasswordChangeEmailRequestSerializer, PasswordChangeUsingEmailSerializer, \
    SocialLoginSerializer, SignoutSerializer, PasswordForgetSerializer
from .tasks import mock_action
from .utils import Util

User = get_user_model()


# 1. 기본 회원 계정
# 1.1. 회원가입 : step1. ~ 이메일 인증 메일 발송 VIEW
class SignupAPIView(CreateAPIView):
    #'def post(self, request, *args, **kwargs):(상속함수)' -> 'def create(self, request, *args, **kwargs):' 실행
    serializer_class = SignupSerializer
    permission_classes= [AllowAny]

    @transaction.atomic #유저 db 등록, 인증 메일 전송을 한 단위로
    def create(self, request, *args, **kwargs):
        # 상속(함수 오버라이딩) 로직 start
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer) # serializers.save() -> serializers.py의 def create(self, validated_data): 실행
        headers = self.get_success_headers(serializer.data)
        # 상속(함수 오버라이딩) 로직 end

        # 추가 로직 start : 이메일 인증 메일 전송
        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])
        refresh_token = RefreshToken.for_user(user) #simple jwt 토큰 활용

        #local에선 localhost:3000, prod에선 클라우드 서버 ip
        frontend_url = f'{settings.DOMAIN}/accounts/signup/email-verification'

        abs_url = frontend_url + '?refresh_token=' + str(refresh_token)

        data = {
            'to': user.email,
            'email_title': '회원가입을 위한 이메일입니다.',
            'email_content': abs_url,
            'user': user.username,
            'verification_url': abs_url,
        }
        Util.send_email_signup_email_verification.delay(data)
        # 추가 로직 end

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# 1.1.회원가입 : step2. 이메일 인증 VIEW
class EmailVerificationAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        refresh_token = request.data['refreshToken']
        algorithm = settings.SIMPLE_JWT['ALGORITHM']

        try:
            payload = jwt.decode(refresh_token, settings.SECRET_KEY, algorithms=[algorithm])
            user = User.objects.get(id=payload['user_id'])

            if RefreshToken(refresh_token).check_blacklist():
                pass

            if not user.is_verified:
                user.is_verified = True
                user.save()
                # refresh token이 사용되면 blacklist에 추가해서 다시는 전송될 때 에러처리 가능하게함
                RefreshToken(refresh_token).blacklist()
                return Response({'message': '이메일 인증을 통한 회원가입을 완료하였습니다.'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({'error': '인증키의 유효기간이 만료되었습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError:
            return Response({'error': '사용할 수 없는 인증키입니다.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # 기타 예외 상황에 대한 처리
            # RefreshToken(refresh_token).check_blacklist() -> e : Token is blacklisted
            return Response({'error': f'알 수 없는 오류: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# 2. 로그인
# 2.1. 일반 로그인
class LoginAPIView(GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request): #직접 만든 함수
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        response = Response()
        response.set_cookie(
            key = 'django_refresh_token',
            value = serializer.data['tokens']['refresh'],
            expires = settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
            httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
            samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
            secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
        )
        data = {
            'django_access_token':serializer.data['tokens']['access'],
            'auth_provider': serializer.data['auth_provider'],
            'avatar_url': serializer.data['avatar_url'],
            'name_from_email': serializer.data['name_from_email'],
            'username': serializer.data['username'],
        }
        response.data = {"Success": "로그인 성공", "data":data}
        return response


# 2.2. 로그인 연장기능
# access_token이 만료된 경우 : 쿠키에 담겨있는 refresh_token으로 access_token 재발급
@api_view(['GET'])
@authentication_classes([])
@permission_classes([AllowAny])
def refresh_access_token(request):
    django_refresh_token = request.COOKIES.get('django_refresh_token')

    try:
        refresh_token_obj = RefreshToken(django_refresh_token)
        user_id = refresh_token_obj.payload['user_id']
        user = User.objects.get(id=user_id)
        django_access_token = str(refresh_token_obj.access_token)
    except Exception as e:
        return Response({'message': 'Invalid refresh token'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response({
        'django_access_token': django_access_token,
        'email': user.email,
        'avatar_url': user.avatar_url,
        'auth_provider': user.auth_provider,
    }, status=status.HTTP_200_OK)


# 3. 비밀번호 찾기
class PasswordForgetAPIView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = PasswordForgetSerializer

    def post(self, request):
        email = request.data['email']
        try:
            user = User.objects.get(email=email)
        except Exception as e:
            # 기타 예외 상황에 대한 처리
            # RefreshToken(refresh_token).check_blacklist() -> e : Token is blacklisted
            return Response({'non_field_errors': '등록되지 않은 이메일입니다.'}, status=status.HTTP_400_BAD_REQUEST)

        uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
        token = PasswordResetTokenGenerator().make_token(user) # 장고 기본 토큰 사용
        base_url = f'{settings.DOMAIN}/accounts/password-reset'
        abs_url = base_url + '?uid64=' + uidb64 + '&token=' + token

        data = {
            'to': user.email,
            'email_title': '비밀번호 변경을 위한 이메일입니다.',
            'email_content': abs_url,
            'user': user.username,
            'verification_url': abs_url,
        }
        Util.send_email_password_change(data)

        return Response({'msg': '비밀번호 변경 case2'}, status=status.HTTP_200_OK)



# 4. 비밀번호 변경
# 4.1. 비밀번호 알고있는 경우
class PasswordChangeAPIView(UpdateAPIView):
    serializer_class = PasswordChangeSerializer

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)

        # 비밀번호 변경
        new_password = serializer.validated_data['newPassword']
        instance.set_password(new_password)
        instance.save()

        return Response({'message': '비밀번호가 성공적으로 변경되었습니다.'}, status=status.HTTP_200_OK)


# 4.2. 비밀번호 모르는 경우 - 이메일 인증 사용
class PasswordChangeEmailRequest(GenericAPIView):
    serializer_class = PasswordChangeEmailRequestSerializer

    @transaction.atomic
    def get(self, request):
        email_data = {'email': request.user.email} #여기서의 'email'이 serialzer의 필드명(email)과 같아야함
        serializer = self.serializer_class(data=email_data)
        serializer.is_valid(raise_exception=True)
        email = request.user.email

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user) # 장고 기본 토큰 사용
            base_url = f'{settings.DOMAIN}/accounts/password-reset'
            # relative_url = reverse('accounts:password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})
            # abs_url = base_url + relative_url
            abs_url = base_url + '?uid64=' + uidb64 + '&token=' + token

            data = {
                'to': user.email,
                'email_title': '비밀번호 변경을 위한 이메일입니다.',
                'email_content': abs_url,
                'user': user.username,
                'verification_url': abs_url,
            }
            Util.send_email_password_change(data)

            return Response({'msg': '비밀번호 변경 case2'}, status=status.HTTP_200_OK)


class PasswordUpdateUsingTokenAPI(UpdateAPIView):
    serializer_class = PasswordChangeUsingEmailSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        pass

    def update(self, request, *args, **kwargs):
        id = smart_str(urlsafe_base64_decode(request.data['uid64']))
        user = User.objects.get(id=id)
        email = user.email

        if not PasswordResetTokenGenerator().check_token(user, request.data['token']):
            return Response({'msg': '더 이상 토큰이 유효하지 않습니다.'}, status=status.HTTP_401_UNAUTHORIZED)
        # fixme : 토큰 블랙리스트 추가
        # 토큰 유효성 검사 통과한 경우 비밀번호 변경

        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        new_password = serializer.validated_data['password']
        user.set_password(new_password)
        user.save()

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)



# 5. 로그아웃
class LogoutAPIView(GenericAPIView):
    # simplejwt-blacklist 사용
    serializer_class = LogoutSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()

        data = {
            'django_access_token': None,
            'auth_provider': None,
            'avatar_url': None,
            'name_from_email': None,
            'username': None,
        }
        response = Response()
        response.data = {"Success": "로그아웃 성공", "data":data}
        return response


# 6. 회원탈퇴
class SignoutAPIView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = SignoutSerializer

    def get_object(self):
        return self.request.user

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_destroy(instance)
        data = {
            'django_access_token': None,
            'auth_provider': None,
            'avatar_url': None,
            'name_from_email': None,
            'username': None,
        }
        response = Response()
        response.data = {"Success": "로그아웃 성공", "data":data}
        return response
        return Response(status=status.HTTP_204_NO_CONTENT)


# 7. 프로필
class ProfileAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        serializer.is_valid(raise_exception=True)
        if serializer.is_valid():
            serializer.save(avatar=request.data.get('profileImage'))
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)