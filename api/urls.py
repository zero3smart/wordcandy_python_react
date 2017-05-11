from django.conf.urls import include, url

from .views import SynonymsView, AntonymsView, ExcelView, KeywordToolView, ShopList, SubscribeView

urlpatterns = [
    url(r'^synonyms/$', SynonymsView.as_view(), name='synonyms'),
    url(r'^antonyms/$', AntonymsView.as_view(), name='antonyms'),
    url(r'^keywordtool/$', KeywordToolView.as_view(), name='keywordtool'),
    url(r'^excel/$', ExcelView.as_view(), name='excel'),
    url(r'^templates/$', ShopList.as_view(), name='templates'),
    url(r'^subscribe/$', SubscribeView.as_view(), name='subscribe'),
]