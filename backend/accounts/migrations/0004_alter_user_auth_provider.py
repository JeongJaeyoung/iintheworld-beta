# Generated by Django 4.2.4 on 2023-09-26 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_user_auth_provider'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='auth_provider',
            field=models.CharField(choices=[('email', 'Email'), ('google', 'Google'), ('kakao', 'Kakao'), ('naver', 'Naver')], default='email', max_length=50),
        ),
    ]