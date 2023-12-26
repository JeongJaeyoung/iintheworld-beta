from django.db import models
from accounts.models import User

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Announcement(TimestampedModel):
    # 공지사항
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()


class Post(TimestampedModel):
    # 유저가 등록한 게시물
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='board/%Y/%m', blank=True, null=True)
    like = models.PositiveIntegerField(default=0)


    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.title


class Comment(TimestampedModel):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.TextField('MESSAGE')

    @property
    def short_content(self):
        return self.message[:10]

    def __str__(self):
        return self.short_content