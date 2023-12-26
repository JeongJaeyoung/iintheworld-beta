import requests
from django.conf import settings  # local, prod가 알아서 구분됨
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

User = get_user_model()


# 네이버 - 소셜 로그인
class NaverLoginAPIView(APIView):
    # STEP1. frontend(react)에서 보내준 code와 state 값을 받은 뒤, 이를 활용해 네이버로부터 token 받아오기
    # STEP2. 받아온 token을 활용하여 네이버에 회원정보 요청
    permission_classes = [AllowAny]

    def post(self, request):
        # STEP1. frontend(react)에서 보내준 code와 state 값을 받은 뒤, 이를 활용해 네이버로부터 token 받아오기
        code = request.data['code']
        state = request.data['state']
        request_data = {
            'grant_type': 'authorization_code',
            'client_id': settings.NAVER_CONFIG['NAVER_CLIENT_ID'],
            'client_secret': settings.NAVER_CONFIG['NAVER_CLIENT_SECRET'],
            'code': code,
            'state': state,
        }
        token_headers = {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
        token_response = requests.post('https://nid.naver.com/oauth2.0/token', data=request_data, headers=token_headers)

        # STEP2. 받아온 token을 활용하여 네이버에 회원정보 요청
        token_json = token_response.json()
        naver_access_token = token_json.get('access_token')
        headers = {"Authorization": f"Bearer {naver_access_token}"}
        user_info_response = requests.get('https://openapi.naver.com/v1/nid/me', headers=headers)

        # STEP3. 받아온 네이버 회원정보으로 로그인 또는 회원가입 진행
        user_info_json = user_info_response.json()
        user_info = user_info_json.get('response')
        if not user_info:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        email = user_info.get('email')
        if not User.objects.filter(email=email).exists():
            user = User.objects.create(
                email=email,
                is_verified=True,
                auth_provider='naver',
            )
            user.save()
            user_instance = User.objects.get(email=email)
            django_token = user_instance.token()
            django_access_token = django_token.get('access')
            django_refresh_token = django_token.get('refresh')

            data = {
                'social_access_token': naver_access_token,
                'django_access_token': django_access_token,
                'auth_provider': 'naver',
            }

            # 회원가입 후 로그인
            response = Response()
            response.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=token_response.json()['refresh_token'],
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            )
            response.data = {"Success": "네이버 소셜 로그인 성공", "email": email, 'data': data}
            return response
        # 회원가입 된 상태라면 곧바로 로그인
        elif User.objects.filter(email=email).exists():
            user_instance = User.objects.get(email=email)
            django_token = user_instance.token()
            django_access_token = django_token.get('access')
            django_refresh_token = django_token.get('refresh')

            data = {
                'social_access_token': naver_access_token,
                'django_access_token': django_access_token,
                'auth_provider': 'naver',
            }

            response = Response()
            response.set_cookie(
                key='refresh_token',
                value=token_response.json()['refresh_token'],
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
            )
            response.data = {"Success": "소셜 로그인 성공", "email": email, 'data': data}
            return response