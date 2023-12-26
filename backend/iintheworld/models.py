from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class EconDataApiKeys(models.Model):
    bok_api_key = models.CharField(max_length=200, blank=True)
    fred_api_key = models.CharField(max_length=200, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.bok_api_key}'