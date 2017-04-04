from rest_framework import serializers


class SynonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)

class AntonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)
