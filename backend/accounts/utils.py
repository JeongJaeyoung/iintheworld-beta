from django.core.mail import send_mail
from django.template.loader import render_to_string
from config import settings
from celery import shared_task
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)


class Util:
    @staticmethod
    @shared_task
    def send_email_signup_email_verification(data):
        #이메일 인증을 통한 회원가입 마무리
        subject = data['email_title']
        message = data['email_content']
        from_email = settings.base.EMAIL_HOST_USER
        recipient_list = [data['to']]
        html_message = render_to_string(
            'signup_verification.html',
            {
                'verification_url': data['verification_url'],
            }
        )
        send_mail(subject, message, from_email, recipient_list, fail_silently=False, html_message=html_message)
        logger.info(f"Verification email sent to {data['to']}")

    @staticmethod
    def send_email_password_change(data):
        # 비밀번호 변경
        subject = data['email_title']
        message = data['email_content']
        from_email = settings.base.EMAIL_HOST_USER
        recipient_list = [data['to']]
        html_message = render_to_string(
            'password_change.html',
            {
                'user': data['user'],
                'verification_url': data['verification_url'],
            }
        )
        send_mail(subject, message, from_email, recipient_list, fail_silently=False, html_message=html_message)

