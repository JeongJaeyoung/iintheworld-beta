import re

from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from accounts.models import User
from board.models import Announcement, Post, Comment


class AuthorSerializer(ModelSerializer):
    # 고객 이메일 @ 앞부분 추출하여 이름으로 설정
    name_from_email = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()
    name_from_email = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()

    def get_name_from_email(self, obj):
        at_index = obj.email.find("@")
        extracted_name = obj.email[:at_index]
        return extracted_name

    def get_avatar_url(self, obj):
        if re.match(r'^https?://', obj.avatar_url):
            print(123)
            print(obj.avatar_url)
            return obj.avatar_url

        if 'request' in self.context:
            scheme = self.context['request'].scheme  # http or https
            print(111)
            print(scheme)
            host = self.context['request'].get_host()
            return scheme + '://' + host + obj.avatar_url

    class Meta:
        model = User  # User 모델로 설정
        fields = ['username', 'name_from_email', 'avatar_url', 'email']


#공지사항
class AnnouncementCreateSerializer(ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['title', 'content']

    def create(self, validated_data):
        author = self.context['request'].user
        post = Post.objects.create(author=author, **validated_data)
        return post


class AnnouncementListSerializer(ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'author', 'created_at']


class AnnouncementRetrieveSerializer(ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'content', 'author', 'created_at']


#POST
class PostSerializer(ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'content', 'created_at']


class PostCreateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']


class PostUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content']


#COMMENT
class CommentSerializer(ModelSerializer):
    author = AuthorSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'author','message', 'created_at']


class CommentCreateSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['message']