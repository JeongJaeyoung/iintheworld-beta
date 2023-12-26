from celery import shared_task
from django.core.mail import send_mail
import time

@shared_task
def mock_action():
    time.sleep(5)