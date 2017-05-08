from rest_framework import serializers

from api.models import Shop, Template


class SynonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)


class AntonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)


class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        exclude = ()


class ShopSerializer(serializers.ModelSerializer):
    teamplates = serializers.SerializerMethodField('is_teamplates')

    class Meta:
        model = Shop
        exclude = ()
        fields = ('id', 'teamplates', 'name')

    def is_teamplates(self, obj):
        templates = Template.objects.filter(shop=obj)
        serializer = TemplateSerializer(templates, many=True)
        return serializer.data