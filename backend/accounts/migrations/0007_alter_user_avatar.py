# Generated by Django 4.2.4 on 2023-12-10 00:14

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='/accounts/default_avatar.png', help_text='프로필 사진을 업로드 해주세요.', upload_to=accounts.models.avatar_upload_to),
        ),
    ]