import os

from .base import *


PROD_MODE=True

DEBUG = False

DOMAIN = 'https://iintheworld-beta.com'
DOMAIN_BACKEND = 'https://iintheworld-beta.com'

ALLOWED_HOSTS = ['158.247.243.8', 'iintheworld-beta.com', 'www.iintheworld-beta.com']

CORS_ALLOWED_ORIGINS = [
    'http://158.247.243.8',
    'http://158.247.243.8:8000',
    'http://iintheworld-beta.com',
    'http://www.iintheworld-beta.com',
    'https://iintheworld-beta.shop',
    'https://www.iintheworld-beta.com',
]

CORS_ORIGIN_WHITELIST = [
    'http://158.247.243.8',
    'http://158.247.243.8:8000',
    'http://iintheworld-beta.com',
    'http://www.iintheworld-beta.com',
    'https://iintheworld-beta.com',
    'https://www.iintheworld-beta.com',
]

CSRF_TRUSTED_ORIGINS = [
    'http://158.247.243.8',
    'http://158.247.243.8:8000',
    'http://iintheworld-beta.com',
    'http://www.iintheworld-beta.com',
    'https://iintheworld-beta.com',
    'https://www.iintheworld-beta.com',
]

# Database
DATABASES = {"default": env.db("DATABASE_URL")}