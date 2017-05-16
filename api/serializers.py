from rest_framework import serializers

from api.models import Shop, Template, Subscribe


class SynonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)


class AntonymsSerializer(serializers.Serializer):
    word = serializers.CharField(max_length=255)


class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        exclude = ()


class SubscribeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscribe
        exclude = ()


class ShopSerializer(serializers.ModelSerializer):
    templates = serializers.SerializerMethodField('is_templates')

    class Meta:
        model = Shop
        exclude = ()
        fields = ('id', 'templates', 'name')

    def is_templates(self, obj):
        templates = Template.objects.filter(shop=obj).order_by('sort')
        serializer = TemplateSerializer(templates, many=True)
        return serializer.data