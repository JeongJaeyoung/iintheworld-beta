from rest_framework.routers import DefaultRouter
from .views import CommentViewSet, AnnouncementListAPIView, AnnouncementCreateAPIView, AnnouncementRetrieveAPIView, \
    PostViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('posts', PostViewSet)
router.register(r'posts/(?P<post_pk>\d+)/comments', CommentViewSet)

urlpatterns = [
    path('announcements/new/', AnnouncementCreateAPIView.as_view()),
    path('announcements/', AnnouncementListAPIView.as_view()),
    path('announcements/<int:pk>', AnnouncementRetrieveAPIView.as_view()),

    path('', include(router.urls)),
]