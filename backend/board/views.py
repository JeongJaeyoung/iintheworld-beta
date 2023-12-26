from django.db.models import F
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from board.models import Announcement, Post, Comment
from board.pagination import PostPageNumberPagenation, AnnouncementPageNumberPagenation
from board.permissions import CustomReadOnly
from board.serializers import (
    AnnouncementCreateSerializer,
    AnnouncementListSerializer,
    AnnouncementRetrieveSerializer,
    PostSerializer,
    CommentSerializer,
    CommentCreateSerializer, PostCreateSerializer, PostUpdateSerializer
)


class AnnouncementCreateAPIView(CreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementCreateSerializer
    # pagination_class = AnnouncementPagination
    # permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class AnnouncementListAPIView(ListAPIView):
    queryset = Announcement.objects.all().order_by('-created_at')
    serializer_class = AnnouncementListSerializer
    permission_classes = [AllowAny]
    pagination_class = AnnouncementPageNumberPagenation


class AnnouncementRetrieveAPIView(RetrieveAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementRetrieveSerializer
    permission_classes = [AllowAny]
    lookup_field = 'pk'


# 자유 게시판
class PostViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by(F('id').desc())
    permission_classes = [CustomReadOnly]
    pagination_class = PostPageNumberPagenation

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return PostSerializer
        elif self.action == 'update':
            return PostUpdateSerializer
        return PostCreateSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)






# 댓글
class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [CustomReadOnly]

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter(post__pk=self.kwargs['post_pk']) # urls.py에서 추출
        return qs

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return CommentSerializer
        return CommentCreateSerializer

    def perform_create(self, serializer):
        post = get_object_or_404(Post, pk=self.kwargs['post_pk'])
        serializer.save(author=self.request.user, post=post)