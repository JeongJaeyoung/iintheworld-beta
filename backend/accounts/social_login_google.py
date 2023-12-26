import requests
from django.conf import settings  # local, prod가 알아서 구분됨
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .serializers import SocialLoginSerializer

User = get_user_model()


# 구글 - 소셜 로그인
class GoogleLoginAPIView(GenericAPIView):
    serializer_class = SocialLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        code = request.data['code']
        data = {
            'code': code,
            'client_id': settings.GOOGLE_CONFIG['GOOGLE_CLIENT_ID'],
            'client_secret': settings.GOOGLE_CONFIG['GOOGLE_CLIENT_SECRET'],
            'grant_type': 'authorization_code',
            # 'redirect_uri': 'http://localhost:3000/accounts/google/login/callback/',
            # 'redirect_uri': 'https://iintheworld-beta.com/accounts/google/login/callback/',
            'redirect_uri': f'{settings.DOMAIN}/accounts/google/login/callback/',
        }

        google_token_api = 'https://oauth2.googleapis.com/token'

        try:
            # 토큰(access & refresh) 발급 받기
            google_token_response = requests.post(google_token_api, data=data)
        except Exception as e:
            return Response({'msg', str(e)})

        if google_token_response.status_code == 200:
            access_token = google_token_response.json().get('access_token')
            google_access_token = {'access_token': access_token}
            # 회원정보 가져오기
            user_data = requests.get('https://www.googleapis.com/oauth2/v2/tokeninfo', params=google_access_token)
            email = user_data.json()['email']

            # 구글에서 가져온 회원정보를 활용하여 회원가입
            if not User.objects.filter(email=email).exists():
                user = User.objects.create(
                    email=email,
                    is_verified=True,
                    auth_provider='google',
                )
                user.save()

                # 회원가입 후 로그인
                user_instance = User.objects.get(email=email)
                django_token = user_instance.token()
                django_access_token = django_token.get('access')
                django_refresh_token = django_token.get('refresh')

                data = {
                    # 구글 access_token은 회원가입으로 django db에 저장할 필요만 있을뿐,
                    # 장고에서 발급한 access_token, refresh_token으로 내부 로직 구현
                    'social_access_token': google_token_response.json()['access_token'],
                    'auth_provider': 'google',
                    'django_access_token': django_access_token,
                    # 'django_refresh_token': django_refresh_token,
                    'avatar_url': user_instance.avatar_url
                }

                response = Response()
                response.set_cookie(
                    # 장고에서 발급한 refresh token 사용
                    key='django_refresh_token',
                    value=django_refresh_token,
                    expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                    httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                    samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                    secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                )

                response.set_cookie(
                    # 구글에서 발급한 refresh token 사용
                    key='google_refresh_token',
                    value=google_token_response.json()['refresh_token'],
                    # expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                    httponly=True,
                    samesite='Lax',
                    secure=False,
                )

                response.data = {"Success": "소셜 로그인 성공", "email": email, 'data': data}
                return response

            # 회원가입 된 상태라면 곧바로 로그인
            elif User.objects.filter(email=email).exists():
                user_instance = User.objects.get(email=email)
                django_token = user_instance.token()
                django_access_token = django_token.get('access')
                django_refresh_token = django_token.get('refresh')

                data = {
                    'social_access_token': google_token_response.json()['access_token'],
                    'auth_provider': 'google',
                    'django_access_token': django_access_token,
                    # 'django_refresh_token': django_refresh_token,
                    'avatar_url': user_instance.avatar_url
                }

                response = Response()
                response.set_cookie(
                    # 장고에서 발급한 refresh token 사용
                    key='django_refresh_token',
                    value=django_refresh_token,
                    expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                    httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                    samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                    secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                )

                if 'refresh_token' in google_token_response.json():
                    response.set_cookie(
                        # 구글에서 발급한 refresh token 사용
                        key='google_refresh_token',
                        value=google_token_response.json()['refresh_token'],
                        # expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                        httponly=True,
                        samesite='Lax',
                        secure=False,
                    )
                else:
                    # 새로고침시 refresh token이 발급되지 않는다면 access_token을 활용
                    logout_response = requests.post(
                        'https://oauth2.googleapis.com/revoke',
                        {'token': google_token_response.json()['access_token']},
                    )
                    data = {
                        'social_access_token': None,
                        'auth_provider': None,
                        'django_access_token': None,
                        # 'django_refresh_token': django_refresh_token,
                        'avatar_url': None
                    }

                    response.data = {"alert_message": "이전에 처리되지 않은 로그아웃을 진행하였습니다. 재로그인해주세요!", "email": email, 'data': data}
                    return response

                response.data = {"Success": "소셜 로그인 성공", "email": email, 'data': data}
                return response
        else:
            return Response({'error': '구글 토큰 발급에 실패하였습니다.'}, status=google_token_response.status_code)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([AllowAny])
def refresh_access_token_google(request):
    google_refresh_token = request.COOKIES.get('google_refresh_token')

    # https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#offline
    data = {
        'client_id': settings.GOOGLE_CONFIG['GOOGLE_CLIENT_ID'],
        'client_secret': settings.GOOGLE_CONFIG['GOOGLE_CLIENT_SECRET'],
        'grant_type': 'refresh_token',
        'refresh_token': google_refresh_token
    }

    google_token_api = 'https://oauth2.googleapis.com/token'


    try:
        google_token_response = requests.post(google_token_api, data=data)
    except Exception as e:
        return Response({'msg', str(e)})
    return Response({
        'social_access_token': google_token_response.json()['access_token'],
        # 'email': user.email,
        # 'avatar_url': user.avatar_url,
        # 'auth_provider': user.auth_provider,
    }, status=status.HTTP_200_OK)


# 1.2. 구글 - 소셜 로그아웃
class GoogleLogoutAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        social_access_token = request.data['social_access_token']
        logout_response = requests.post(
            'https://oauth2.googleapis.com/revoke',
            {'token': social_access_token},
        )

        data = {
            'django_access_token': None,
            'auth_provider': None,
            'avatar_url': None,
            'name_from_email': None,
            'username': None,
            'social_access_token': None,
        }
        response = Response()
        response.data = {"Success": "구글 소셜 로그아웃 성공하였습니다.", "data": data}
        return response