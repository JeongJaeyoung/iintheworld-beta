# Generated by Django 4.2.4 on 2023-12-21 22:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('iintheworld', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='econdataapikeys',
            name='user',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='econdataapikeys',
            name='bok_api_key',
            field=models.CharField(max_length=200),
        ),
    ]
