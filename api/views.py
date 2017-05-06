from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import HttpResponse
from django.conf import settings

import requests
from datetime import datetime

from .serializers import SynonymsSerializer, AntonymsSerializer

from openpyxl.writer.excel import save_virtual_workbook
from openpyxl import Workbook


class SynonymsView(APIView):

    def get(self, request, format=None):
        """
        Return words with synonyms
        """
        data = {}
        data['synonyms'] = []
        tags = request.GET.get('tags', '')
        for tag in tags.split(','):
            result = requests.get('https://wordsapiv1.p.mashape.com/words/{0}/synonyms'.format(tag),
                                  headers={
                "X-Mashape-Key": settings.MASHAPE,
                "Accept": "application/json",
            })
            if 'synonyms' in result.json():
                data['synonyms'] += result.json()['synonyms']
        return Response(data)


class AntonymsView(APIView):

    def get(self, request, format=None):
        """
        Return words with antonyms
        """
        data = {}
        data['antonyms'] = []
        tags = request.GET.get('tags', '')
        for tag in tags.split(','):
            result = requests.get('https://wordsapiv1.p.mashape.com/words/{0}/antonyms'.format(tag),
                                  headers={
                "X-Mashape-Key": settings.MASHAPE,
                "Accept": "application/json",
            })
            if 'antonyms' in result.json():
                data['antonyms'] += result.json()['antonyms']
        return Response(data)


class KeywordToolView(APIView):

    def get(self, request, format=None):
        """
        Return result from keywordtool
        """
        keywords = request.GET.get('tags', '')
        result = {
            'keywords': []
        }

        for word in keywords.split(','):
            payload = {
                'apikey': settings.KEYWORDTOOL,
                'keyword': '[{0}]'.format(word),
                'output': 'json',
                'country': 'us',
                'language': 'en',
                'metrics': 'true',
                'metrics_location': '2840',
                'metrics_language': 'en'
            }
            data = requests.get('http://api.keywordtool.io/v2/search/suggestions/amazon', params=payload)
            for item in data.json()['results']:
                for sub_item in data.json()['results'][item]:
                    try:
                        if sub_item['volume']:
                            result['keywords'].append({
                                'name': sub_item['string'],
                                'volume': sub_item['volume']
                            })
                    except Exception as e:
                        pass

        return Response(result)


class ExcelView(APIView):

    def get(self, request, format=None):
        """
        Return excel file
        """
        filename = "wordcandy.xlsx"
        wb = Workbook()
        response = HttpResponse(save_virtual_workbook(
            wb), content_type='application/vnd.ms-excel')
        response["Content-Disposition"] = 'attachment; filename="' + \
            filename + '"'
        response.write(save_virtual_workbook(wb))
        return response