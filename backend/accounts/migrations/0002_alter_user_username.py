# Generated by Django 4.2.4 on 2023-09-02 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]