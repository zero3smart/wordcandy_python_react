"""apps URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from main.views import  IndexView
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

admin.site.site_header = "WORDCANDY.IO"

from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='WORDCANDY.IO API')

urlpatterns = [
    url(r'^$', IndexView.as_view(), name="index"),
    url(r'^dashboard/$', IndexView.as_view(), name="dashboard"),
    url(r'^sign-in/$', IndexView.as_view(), name="sign_in"),
    url(r'^sign-up/$', IndexView.as_view(), name="sign_up"),
    url(r'^profile/$', IndexView.as_view(), name="profile"),
    url(r'^admin/', admin.site.urls),
    url(r'^docs/$', schema_view),
    url(r'^v1/', include('rest_auth.urls')),
    url(r'^v1/registration/', include('rest_auth.registration.urls')),
    url(r'^v1/dashboard/', include('api.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)