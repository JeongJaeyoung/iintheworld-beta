import requests
from django.conf import settings  # local, prod가 알아서 구분됨
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.hashers import make_password

User = get_user_model()

# 카카오 - 소셜 로그인
class KakaoLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        code = request.data['code']

        data = {
            'grant_type': 'authorization_code',
            'client_id': settings.KAKAO_REST_API_KEY,
            # 'redirect_uri': 'http://localhost:3000/accounts/kakao/login/callback',
            # 'redirect_uri': 'https://iintheworld-beta.com/accounts/kakao/login/callback',
            'redirect_uri': f'{settings.DOMAIN}/accounts/kakao/login/callback',
            'code': code,
            'client_secret': settings.KAKAO_CLIENT_SECERT
        }
        token_headers = {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
        kakao_token_response = requests.post('https://kauth.kakao.com/oauth/token', data=data,
                                             headers=token_headers)

        # STEP2. 받아온 token을 활용하여 카카오에 회원정보 요청
        kakao_token_json = kakao_token_response.json()
        kakao_access_token = kakao_token_json.get('access_token')
        headers = {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Authorization': f"Bearer {kakao_access_token}"
        }
        user_info_response = requests.get('https://kapi.kakao.com/v2/user/me', headers=headers)
        user_info_json = user_info_response.json()
        email = user_info_json['kakao_account']['email']

        if not User.objects.filter(email=email).exists():
            password = 'password'
            hashed_password = make_password(password)

            user = User.objects.create(
                email=email,
                password=hashed_password,
                is_verified=True,
                auth_provider='kakao',
            )
            user.save()
            user_instance = User.objects.get(email=email)
            django_token = user_instance.token()
            django_access_token = django_token.get('access')
            django_refresh_token = django_token.get('refresh')

            data = {
                'social_access_token': kakao_access_token,
                'django_access_token': django_access_token,
                'auth_provider': 'kakao',
                'avatar_url': user_instance.avatar_url
            }

            # 회원가입 후 로그인
            response = Response()
            response.set_cookie(
                key='django_refresh_token',
                value=django_refresh_token,
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            )

            response.set_cookie(
                key='kakao_refresh_token',
                value=kakao_token_json.get('refresh_token'),
                # expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=True,
                samesite='Lax',
                secure=False,
            )
            response.data = {"Success": "카카오 소셜 로그인 성공", "email": email, 'data': data}
            return response

        # 회원가입 된 상태라면 곧바로 로그인
        elif User.objects.filter(email=email).exists():
            user_instance = User.objects.get(email=email)
            django_token = user_instance.token()
            django_access_token = django_token.get('access')
            django_refresh_token = django_token.get('refresh')

            data = {
                'social_access_token': kakao_access_token,
                'django_access_token': django_access_token,
                'auth_provider': 'kakao',
                'avatar_url': user_instance.avatar_url
            }

            response = Response()
            response.set_cookie(
                key='django_refresh_token',
                value=django_refresh_token,
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            )

            response.set_cookie(
                key='kakao_refresh_token',
                value=kakao_token_json.get('refresh_token'),
                # expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=True,
                samesite='Lax',
                secure=False,
            )
            response.data = {"Success": "카카오 소셜 로그인 성공", "email": email, 'data': data}
            return response


@api_view(['GET'])
@authentication_classes([])
@permission_classes([AllowAny])
def refresh_access_token_kakao(request):
    kakao_refresh_token = request.COOKIES.get('kakao_refresh_token')

    # https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#refresh-token

    data = {
        'client_id': settings.KAKAO_REST_API_KEY,
        'client_secret': settings.KAKAO_CLIENT_SECERT,
        'grant_type': 'refresh_token',
        'refresh_token': kakao_refresh_token
    }

    kakao_token_api = 'https://kauth.kakao.com/oauth/token'

    try:
        kakao_token_response = requests.post(kakao_token_api, data=data)
    except Exception as e:
        return Response({'msg', str(e)})
    return Response({
        # 'social_access_token': django_access_token,
        # 'email': user.email,
        # 'avatar_url': user.avatar_url,
        # 'auth_provider': user.auth_provider,
    }, status=status.HTTP_200_OK)


# 카카오 - 소셜 로그아웃
class KakaoLogoutAPIView(APIView):
    """
    카카오계정과 함께 로그아웃
    https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#logout-of-service-and-kakaoaccount
    """
    # permission_classes = [AllowAny]

    # def post(self, request):
    #     social_access_token = request.data['social_access_token']

        # 카카오 단순 로그아웃 : https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#logout
        # headers = {
        #     'Content-Type': 'application/x-www-form-urlencoded',
        #     'Authorization': f'Bearer {social_access_token}'
        # }
        # logout_response = requests.post('https://kapi.kakao.com/v1/user/logout', headers=headers)
        # if logout_response.status_code == 200:
        #     data = {
        #         'django_access_token': None,
        #         'auth_provider': None,
        #         'avatar_url': None,
        #         'name_from_email': None,
        #         'username': None,
        #         'social_access_token': None,
        #     }
        #     response = Response()
        #     response.data = {"Success": "카카오 소셜 로그아웃 성공하였습니다.", "data": data}
        #     return response
        # else:
        #     return Response({'message': '카카오 소셜 로그아웃을 실패하였습니다.'}, status=logout_response.status_code)

        # params = {
        #     'client_id': settings.KAKAO_REST_API_KEY,
        #     # https://developers.kakao.com/console/app/955237/product/login/advanced
        #     # 'logout_redirect_uri': 'http://localhost:3000/accounts/kakao/logout/callback',
        #     # 'logout_redirect_uri': 'https://iintheworld-beta.com/accounts/kakao/login/callback',
        #     'logout_redirect_uri': f'{settings.DOMAIN}/accounts/kakao/login/callback',
        # }
        # kakao_token_response = requests.get('https://kauth.kakao.com/oauth/logout', params=params)
        # if kakao_token_response.status_code == 200:
        #     data = {
        #         'django_access_token': None,
        #         'auth_provider': None,
        #         'avatar_url': None,
        #         'name_from_email': None,
        #         'username': None,
        #         'social_access_token': None,
        #     }
        #     response = Response()
        #     response.data = {"Success": "카카오 소셜 로그아웃 성공하였습니다.", "data": data}
        #     return response
        # else:
        #     return Response({'msg': '카카오 소셜 로그아웃을 실패하였습니다.'})