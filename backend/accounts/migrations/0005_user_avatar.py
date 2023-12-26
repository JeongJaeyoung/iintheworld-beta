# Generated by Django 4.2.4 on 2023-10-21 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_user_auth_provider'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, help_text='프로필 사진을 업로드 해주세요.', upload_to='accounts/avatar/%Y/%m/%d'),
        ),
    ]