from __future__ import unicode_literals

from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=255)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.name


class Template(models.Model):
    shop = models.ForeignKey(Shop)
    title = models.CharField(max_length=255)
    product_name = models.CharField(max_length=255, blank=True)
    first_description = models.CharField(max_length=255, blank=True)
    second_description = models.CharField(max_length=255, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.title
