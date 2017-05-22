from django.contrib import admin

from .models import Template, Shop, Subscribe, Word, Export


class TemplateAdmin(admin.ModelAdmin):
    list_display = ['name', 'shop']
    date_hierarchy = 'created_date'

admin.site.register(Template, TemplateAdmin)


class ExportAdmin(admin.ModelAdmin):
    list_display = ['keywords',]
    date_hierarchy = 'created_date'

admin.site.register(Export, ExportAdmin)


class ShopAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    date_hierarchy = 'created_date'

admin.site.register(Shop, ShopAdmin)


class SubscribeAdmin(admin.ModelAdmin):
    list_display = ['email', ]
    date_hierarchy = 'created_date'

admin.site.register(Subscribe, SubscribeAdmin)


class WordAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    date_hierarchy = 'created_date'

admin.site.register(Word, WordAdmin)