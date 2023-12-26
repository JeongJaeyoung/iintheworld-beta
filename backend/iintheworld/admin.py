from django.contrib import admin

from iintheworld.models import EconDataApiKeys


# Register your models here.
@admin.register(EconDataApiKeys)
class EconDataApiKeysAdmin(admin.ModelAdmin):
    list_display = ['id', 'bok_api_key']