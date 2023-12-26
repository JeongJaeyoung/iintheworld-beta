import environ
import os

from datetime import timedelta
from pathlib import Path

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

environ.Env.read_env(os.path.join(BASE_DIR, '.envs', '.base', '.django'))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',

    #third apps
    'drf_yasg',
    'corsheaders',

    'django_extensions',
    'djcelery_email',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',

    #local app
    'accounts',
    'iintheworld',
    'mall',
    'board',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


GRAPH_MODELS = {
    #db diagram
  'all_applications': True,
  'group_models': True,
}

AUTH_USER_MODEL = 'accounts.User'

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Seoul'

USE_I18N = True

USE_TZ = True

INTERNAL_IPS = [
    "127.0.0.1",
]


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/
STATIC_URL = '/staticfiles/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') #수집된 정적 파일들이 위치할 디렉토리를 설정

MEDIA_URL = '/mediafiles/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'mediafiles')


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': ['rest_framework_simplejwt.authentication.JWTAuthentication'],
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.IsAuthenticated'],
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(seconds=3600),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ALGORITHM": "HS256",
    'AUTH_COOKIE': 'refresh_token',
    'AUTH_COOKIE_HTTP_ONLY': True,
    'AUTH_COOKIE_SAMESITE': 'Lax',
    'AUTH_COOKIE_SECURE': False,
}

CORS_ALLOW_CREDENTIALS = True


# 로깅
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "filters": {"require_debug_false": {"()": "django.utils.log.RequireDebugFalse"}},
    "formatters": {
        "verbose": {
            "format": "%(levelname)s %(asctime)s %(module)s "
            "%(process)d %(thread)d %(message)s"
        }
    },
    "handlers": {
        "mail_admins": {
            "level": "ERROR",
            "filters": ["require_debug_false"],
            "class": "django.utils.log.AdminEmailHandler",
        },
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "verbose",
        },
    },
    "root": {"level": "INFO", "handlers": ["console"]},
    "loggers": {
        "django.request": {
            "handlers": ["mail_admins"],
            "level": "ERROR",
            "propagate": True,
        },
        "django.security.DisallowedHost": {
            "handlers": ["console", "mail_admins"],
            "level": "ERROR",
            "propagate": True,
        },
    },
}

SITE_ID = 1


# CELERY
CELERY_BROKER_URL = env("CELERY_BROKER_URL")
CELERY_RESULT_BACKEND = CELERY_BROKER_URL
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TASK_SERIALIZER = "json"
CELERY_RESULT_SERIALIZER = "json"
CELERY_RESULT_BACKEND_MAX_RETRIES = 10
CELERY_TASK_SEND_SENT_EVENT = True


# ACCOUNTS 앱
# 이메일 전송
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env('EMAIL_HOST')  # 이메일 호스트 주소
EMAIL_HOST_USER = env("EMAIL_HOST_USER") # 이메일 호스트 계정 사용자 이름
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD') # 이메일 호스트 계정 비밀번호
EMAIL_PORT = 587
EMAIL_USE_TLS = True
# EMAIL_USE_SSL = True  # SSL 사용 설정
DEFAULT_FROM_EMAIL = env('EMAIL_HOST_USER')  # 이메일 발신 주소

# 소셜 로그인
GOOGLE_CONFIG = {
    'GOOGLE_CLIENT_ID': env('GOOGLE_CLIENT_ID'),
    'GOOGLE_CLIENT_SECRET': env('GOOGLE_CLIENT_SECRET'),
}
KAKAO_REST_API_KEY = env('KAKAO_REST_API_KEY')
KAKAO_CLIENT_SECERT = env('KAKAO_CLIENT_SECERT')
NAVER_CONFIG = {
    'NAVER_CLIENT_ID': env('NAVER_CLIENT_ID'),
    'NAVER_REDIRECT_URI': env('NAVER_REDIRECT_URI'),
    'NAVER_CLIENT_SECRET': env('NAVER_CLIENT_SECRET'),
    'NAVER_STATE':'NAVER_STATE',
}
naver_login_url = 'https://nid.naver.com/oauth2.0/authorize'


# IINTHEWORLD 앱
BOK_API_KEY = env('BOK_API_KEY')
FRED_API_KEY = env('FRED_API_KEY')


# MALL 앱
PORTONE_SHOP_ID = env('PORTONE_SHOP_ID')
PORTONE_API_KEY = env('PORTONE_API_KEY')
PORTONE_API_SECRET = env('PORTONE_API_SECRET')

