import re

from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from mall.models import Order, OrderedProduct
from .models import User


class SignupSerializer(ModelSerializer):
    email = serializers.EmailField(
        required = True,
        # 아이디 중복 검증 #frontend에서 에러 멘트 처리(이미 존재하는 아이디입니다.)
        validators = [UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password']

    def create(self, validated_data):
        # 새로운 유저 생성
        user = User.objects.create(email = validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        
        return user


class LoginSerializer(ModelSerializer):
    email = serializers.EmailField(min_length=3, max_length=255)
    password = serializers.CharField(min_length=3, max_length=68, write_only=True) #역직렬화(클라이언트 -> 서버)만 가능
    username = serializers.CharField(min_length=1, max_length=255, read_only=True, default="")
    name_from_email = serializers.SerializerMethodField()
    tokens = serializers.SerializerMethodField()
    auth_provider = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()

    def get_name_from_email(self, obj):
        at_index = obj['email'].find("@")
        extracted_name = obj['email'][:at_index]
        return extracted_name

    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])
        return {
            'refresh': user.token()['refresh'],
            'access': user.token()['access'],
        }

    def get_auth_provider(self, obj):
        user = User.objects.get(email=obj['email'])
        return user.auth_provider

    def get_avatar_url(self, obj):
        user = User.objects.get(email=obj['email'])
        return user.avatar_url

    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'name_from_email', 'tokens', 'auth_provider', 'avatar_url']

    def validate(self, attrs):
        # 클라이언트로부터 입력받은 email, password를 통한 로그인 검증 과정
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        user = authenticate(email=email, password=password)
        filtered_user_by_email = User.objects.filter(email=email)

        if filtered_user_by_email.exists() and filtered_user_by_email[0].auth_provider != 'email':
            raise serializers.ValidationError('이미 가입된 소셜 로그인 계정입니다. ' + filtered_user_by_email[0].auth_provider + '를 통해 로그인해주세요.')
        if user and not user.is_verified:
            raise serializers.ValidationError('이메일 인증이 완료되지 않았습니다.')
        if user is None:
            raise serializers.ValidationError('아이디 또는 비밀번호가 일치하지 않습니다.')
        return attrs


class SocialLoginSerializer(Serializer):
    email = serializers.EmailField()


# 3. 비밀번호 찾기
class PasswordForgetSerializer(ModelSerializer):
    def validate(self, attrs):
        email = attrs.get('email', '')
        user = User.objects.filter(email=email).first()
        if user is None:
            raise serializers.ValidationError('등록되지 않은 이메일 입니다.')
        return attrs

    class Meta:
        model = User
        fields = ['email']


# 4. 비밀번호 변경 CASE1 : 비밀번호를 아는 경우
class PasswordChangeSerializer(Serializer):
    currentPassword = serializers.CharField(required=True)
    newPassword = serializers.CharField(required=True)

    def validate_currentPassword(self, value):
        email = self.context['request'].user.email
        if not authenticate(username=email, password=value):
            raise serializers.ValidationError("현재 비밀번호가 일치하지 않습니다.")
        return value


# 3. 비밀번호 변경 CASE2 : 비밀번호를 모르는 경우
class PasswordChangeEmailRequestSerializer(Serializer):
    email = serializers.EmailField(min_length=2)


class PasswordChangeUsingEmailSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']



# 5. 로그아웃
class LogoutSerializer(Serializer):
    def save(self, **kwargs):
        try:
            request = self.context.get('request')
            django_refresh_token = request.COOKIES.get('django_refresh_token')
            RefreshToken(django_refresh_token).blacklist()
        except TokenError:
            self.fail('bad_token')

    # python manage.py flushexpiredtokens


# 6. 회원탈퇴
class SignoutSerializer(ModelSerializer):
    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        user = authenticate(email=email, password=password)

        if user is None:
            raise serializers.ValidationError('비밀번호가 일치하지 않습니다.')
        return attrs

    class Meta:
        model = User
        fields = ['email', 'password']


# 7. 프로필
class ProfileSerializer(ModelSerializer):
    purchased_products = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()

    # def get_purchased_products(request):
    def get_purchased_products(self, obj):
        user = User.objects.get(email=obj.email)
        orders = Order.objects.filter(user=user) #주문 건이 여러개
        serialized_orders = []

        for order in orders:
            ordered_products = OrderedProduct.objects.filter(order=order)
            serialized_ordered_products = []

            for ordered_product in ordered_products:
                product = ordered_product.product
                serialized_product = {
                    'product_name':product.name,
                    'product_price': product.price,
                    'product_name_en': product.name_en
                    # 'product_photo': product.photo,
                }

                serialized_ordered_products.append(serialized_product)

            serialized_order = {
                'order_id': order.uid,  # 주문의 고유 식별자 또는 다른 필드 사용
                'ordered_products': serialized_ordered_products,
                'total_amount': order.total_amount,
                'status': order.status,
                'created_at': order.created_at,
                'updated_at': order.updated_at,
            }
            serialized_orders.append(serialized_order)

        return serialized_orders

    def get_avatar_url(self, obj):
        user = User.objects.get(email=obj.email)
        return user.avatar_url

    class Meta:
        model = User
        fields = ['avatar_url', 'email', 'purchased_products']


class CustomTokenRefreshSerializer(Serializer):
    refresh = serializers.CharField()