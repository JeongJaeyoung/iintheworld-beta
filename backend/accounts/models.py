from datetime import date

from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import UserManager, PermissionsMixin
from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken


def avatar_upload_to(instance, filename):
    if instance.pk:
        # 이미 존재하는 인스턴스라면
        return f'accounts/avatar/{date.today().year}/{date.today().month}/{date.today().day}/{filename}'
    else:
        # 새로운 인스턴스라면
        return f'accounts/default_avatar.png'

AUTH_PROVIDER= {
    'email': 'email',
    'google': 'google',
    'apple': 'apple',
    'kakao': 'kakao',
    'naver': 'naver',
    }


class User(AbstractBaseUser, PermissionsMixin):
    class AuthProvider(models.TextChoices):
        EMAIL = "email",
        GOOGLE = "google",
        KAKAO = "kakao",
        NAVER = "naver",

    username = models.CharField(max_length=50, blank=True)
    email = models.EmailField(max_length=50, unique=True)
    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    auth_provider = models.CharField(
        choices=AuthProvider.choices,
        max_length=50,
        default=AuthProvider.EMAIL
    )
    avatar = models.ImageField(
        # blank=True,
        upload_to=avatar_upload_to,
        help_text='프로필 사진을 업로드 해주세요.',
        default='/accounts/default_avatar.png'
    )

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    USERNAME_FIELD = 'email' #해당 필드는 unique 필요. username은 중복가능해야하기에 email로 한 것임
    REQUIRED_FIELDS = ['username'] # python manage.py createsuperuser 할 때 필요

    objects = UserManager()

    @property
    def avatar_url(self):
        if self.avatar:
            return f'{settings.DOMAIN_BACKEND}' + self.avatar.url
        else:
            return f'{settings.DOMAIN_BACKEND}/mediafiles/accounts/default_avatar.png'

    def __str__(self):
        return self.email

    def token(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }