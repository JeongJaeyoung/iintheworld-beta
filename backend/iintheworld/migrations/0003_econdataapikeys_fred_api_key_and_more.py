# Generated by Django 4.2.4 on 2023-12-21 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iintheworld', '0002_econdataapikeys_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='econdataapikeys',
            name='fred_api_key',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='econdataapikeys',
            name='bok_api_key',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]