from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView

from .social_login_google import GoogleLoginAPIView, GoogleLogoutAPIView, refresh_access_token_google
from .social_login_kakao import KakaoLoginAPIView, KakaoLogoutAPIView, refresh_access_token_kakao
from .social_login_naver import NaverLoginAPIView
from .views import SignupAPIView, EmailVerificationAPIView, LoginAPIView, ProfileAPIView, refresh_access_token, \
    PasswordChangeAPIView, PasswordChangeEmailRequest, \
    PasswordUpdateUsingTokenAPI, LogoutAPIView, SignoutAPIView, PasswordForgetAPIView

app_name = 'accounts'


urlpatterns = [
    # jwt 토큰
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', refresh_access_token, name='token_refresh'),
    path('token/refresh/google', refresh_access_token_google, name='token_refresh_google'),
    path('token/refresh/kakao', refresh_access_token_kakao, name='token_refresh_kakao'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # 1. 회원가입
    path('signup/', SignupAPIView.as_view(), name='signup'),
    path('email-verification/', EmailVerificationAPIView.as_view(), name='email-verification'),

    # 2. 로그인
    path('login/', LoginAPIView.as_view(), name='login'),
    path('google/login/code/', GoogleLoginAPIView.as_view()),
    path('naver/login/data', NaverLoginAPIView.as_view()),
    path('kakao/login/code', KakaoLoginAPIView.as_view()),

    # 3. 비밀번호 찾기
    path('password-forget/', PasswordForgetAPIView.as_view(), name='password-forget'),

    # 4. 비밀번호 변경
    path('password-change/', PasswordChangeAPIView.as_view(), name='password-change'),
    path('password-change-email-request/', PasswordChangeEmailRequest.as_view(), name='password-change-email-request'),
    path('password-change-finish/', PasswordUpdateUsingTokenAPI.as_view(), name='password-reset-confirm'),

    # 5. 로그아웃
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('google/logout/', GoogleLogoutAPIView.as_view(), name='google-logout'),
    path('kakao/logout/', KakaoLogoutAPIView.as_view(), name='kakao-logout'),

    # 6. 회원탈퇴
    path('signout/', SignoutAPIView.as_view(), name='signout'),

    # 7. 프로필
    path('profile/', ProfileAPIView.as_view(), name='profile'),
    path('profile/image-change/', ProfileAPIView.as_view(), name='profile-image-change'),
]