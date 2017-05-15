import os
import sys
from apps.settings import *

ALLOWED_HOSTS = ['*']

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# email verification
AUTH_USER_EMAIL_UNIQUE = True
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'pbrfcompany@gmail.com'
EMAIL_HOST_PASSWORD = 'Keep1984calm'
EMAIL_PORT = 587
DEFAULT_FROM_EMAIL = 'beta.pbrf.ru'

# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'pbrf',
        'USER': 'pbrfadmin',
        'PASSWORD': 'pbrfpassword1234',
        'HOST': 'localhost',
        'PORT': ''
    }
}