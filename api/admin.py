from django.contrib import admin

from .models import Template, Shop, Subscribe

class TemplateAdmin(admin.ModelAdmin):
    list_display = ['name', 'shop']
    date_hierarchy = 'created_date'


admin.site.register(Template, TemplateAdmin)


class ShopAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    date_hierarchy = 'created_date'

admin.site.register(Shop, ShopAdmin)


class SubscribeAdmin(admin.ModelAdmin):
    list_display = ['email', ]
    date_hierarchy = 'created_date'

admin.site.register(Subscribe, SubscribeAdmin)