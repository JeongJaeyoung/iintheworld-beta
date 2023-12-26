# 1. Category
# 2. Product
# 3. CartProduct
# 4. Order #한줄 내역 #총액
# 5. OrderedProduct #여러줄 내역 #한 줄에 한 상품의 가격, 수량
# 6. AbstractPortOnePayment
# 7. OrderPayment #결제내역

import logging
from typing import List
from uuid import uuid4

from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import UniqueConstraint
from django.http import Http404
from django.utils.functional import cached_property
from iamport import Iamport
from django.urls import reverse

from accounts.models import User
from django.conf import settings

logger = logging.getLogger(__name__)

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(TimestampedModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = verbose_name_plural = '1. Category 상품 분류'


class Tag(models.Model):
    name = models.CharField(null=True, max_length=50)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = verbose_name_plural = '태그'


class Product(TimestampedModel):
    class Status(models.TextChoices):
        ACTIVE = 'a', '정상'
        SOLD_OUT = 's', '품절'
        OBSOLETE = 'o', '단종'
        INACTIVE = 'i', '비활성화'

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, db_index=True)
    name_en = models.CharField(max_length=50)
    status = models.CharField(choices=Status.choices, default=Status.ACTIVE, max_length=1)
    photo = models.ImageField(upload_to='mall/product/photo/%Y/%m/%d')
    price = models.PositiveIntegerField() #0 포함
    tag = models.ManyToManyField(Tag, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"<{self.pk}> {self.name}"

    class Meta:
        verbose_name = verbose_name_plural = '2. Product 상품'
        ordering = ['-pk']


class CartProduct(models.Model):
    """
    수강바구니에 들어가는 한 줄의 상품목록
    ex) 
    --------------------------------------------------------
    |  user  |              product            |  quantity  |
    --------------------------------------------------------
    | 김철수  |  내가 사는 세상 - 이론, 입문편    |    1개    | 
    --------------------------------------------------------
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart_product_set')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(1)])

    @property
    def amount(self):
        # 한 줄의 총액
        return self.product.price * self.quantity

    def __str__(self):
        return f"<{self.pk}> {self.product.name} - {self.quantity}"

    class Meta:
        verbose_name = verbose_name_plural = '3. CartProduct 수강바구니 상품'
        constraints = [UniqueConstraint(fields=['user', 'product'], name='unique_user_product')]


class Order(TimestampedModel):
    # 한 줄로 표현됨
    # 결제자, 총액
    class Status(models.TextChoices):
        REQUESTED = "requested", "주문요청"
        FAILED_PAYMENT = "failed_payment", "결제실패"
        PAID = "paid", "결제완료"
        PREPARED_PRODUCT = "prepared_product", "상품준비중"
        CANCELLED = "cancelled", "주문취소"

    uid = models.UUIDField(default=uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_set = models.ManyToManyField(Product, through='OrderedProduct', blank=False)
    total_amount = models.PositiveIntegerField()
    status = models.CharField(
        choices=Status.choices,
        max_length=20,
        default=Status.REQUESTED,
        db_index=True
    )

    def get_absolute_url(self) -> str:
        return reverse('order_detail', args=[self.pk])

    def can_pay(self) -> bool:
        return self.status in (self.Status.REQUESTED, self.Status.FAILED_PAYMENT)

    def cancel(self, reason=''):
        for payment in self.orderpayment_set.all():
            payment.cancel(reason=reason)

    def update(self):
        for payment in self.orderpayment_set.all():
            payment.update()

    @property
    def name(self) -> str:
        first_product = self.product_set.first()
        if first_product is None:
            return '등록된 상품이 없습니다.'
        size = self.product_set.all().count()
        if size < 2:
            return first_product.name
        return f'{first_product.name} 외 {size - 1}건'

    @classmethod
    def create_from_cart(cls, user, cart_product_qs):
        """
        수강바구니에 있는 여러 줄의 상품들을 하나의 주문으로 합치기
        """
        cart_product_list : List[CartProduct] = list(cart_product_qs)
        total_amount = sum(cart_product.amount for cart_product in cart_product_list)
        order = cls.objects.create(user=user, total_amount=total_amount)
        
        ordered_product_list = []
        # 수강바구니에 있는 상품 한줄 한줄 주문으로 추가한 뒤, 하나의 개체로 묶어 굽기
        for cart_product in cart_product_list:
            product = cart_product.product
            ordered_product = OrderedProduct(
                product = product,
                order=order,
                name = product.name,
                price = product.price,
                quantity = cart_product.quantity
            )            
            ordered_product_list.append(ordered_product)
        OrderedProduct.objects.bulk_create(ordered_product_list)
        
        return order
    
    class Meta:
        ordering = ['-pk']
        verbose_name = verbose_name_plural = '4. Order 주문'


class OrderedProduct(TimestampedModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, db_constraint=False)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, db_constraint=False)
    name = models.CharField('상품명', max_length=50, help_text='주문 시점의 상품명을 저장합니다.')
    price = models.PositiveIntegerField('상품가격', help_text='주문 시점의 상품가격을 저장합니다.')
    quantity = models.PositiveIntegerField('상품수량')

    class Meta:
        verbose_name = verbose_name_plural = '5. OrderedProduct 주문상품'


class OrderPayment(models.Model):
    class PayMethod(models.TextChoices):
        CARD = 'card', '체크카드/신용카드'

    class PayStatus(models.TextChoices):
        READY = 'ready', '결제 준비'
        PAID = 'paid', '결제 완료'
        CANCELLED = 'cancelled', '결제 취소'
        FAILED = 'failed', '결제 실패'

    meta = models.JSONField('포트원 결제내역', default=dict, editable=False)
    uid = models.UUIDField(default=uuid4, editable=False) #쇼핑몰 결제식별자
    name = models.CharField(max_length=200) #결제명
    desired_amount = models.PositiveIntegerField(editable=False) #결제금액
    buyer_name = models.CharField(max_length=100, editable=False) #구매자 이름
    buyer_email = models.EmailField(editable=False) #구매자 이메일
    pay_method = models.CharField(max_length=20, choices=PayMethod.choices, default=PayMethod.CARD) #결제수단
    pay_status = models.CharField( max_length=20, choices=PayStatus.choices, default=PayStatus.READY) #결제상태
    is_paid_ok = models.BooleanField(default=False, db_index=True, editable=False) #결제성공여부

    @property
    def merchant_uid(self) -> str:
        return str(self.uid)

    @cached_property
    def api(self):
        return Iamport(imp_key=settings.PORTONE_API_KEY, imp_secret=settings.PORTONE_API_SECRET)

    def update(self, response=None):
        """
        포트원에 결제정보 요청을 통해
        OrderPayment의 meta를 업데이트하여
        고객이 결제정보를 조회가능하게 함.
        """
        if response is None:
            try:
                self.meta = self.api.find(merchant_uid=self.merchant_uid)
            except (Iamport.ResponseError, Iamport.HttpError) as e:
                logger.error(str(e), exc_info=e)
                raise Http404('포트원에서 결제내역을 찾을 수 없습니다.')
        else:
            self.meta = response

        self.pay_status = self.meta["status"]
        self.is_paid_ok = self.api.is_paid(self.desired_amount, response=self.meta)
        self.save()

        if self.is_paid_ok:
            self.order.status = Order.Status.PAID
            self.order.save()
            # 다수의 결제시도
            self.order.orderpayment_set.exclude(pk=self.pk).delete()

        elif self.pay_status == self.PayStatus.FAILED:
            self.order.status = Order.Status.FAILED_PAYMENT
            self.order.save()

        elif self.pay_status == self.PayStatus.CANCELLED:
            self.order.status = Order.Status.CANCELLED
            self.order.save()

    def cancel(self, reason=""):
        try:
            response = self.api.cancel(reason, merchant_uid=self.merchant_uid)
            self.update(response)
        except Iamport.ResponseError:
            self.update()
    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    @classmethod
    def create_by_order(cls, order: Order) -> 'OrderPayment':
        return cls.objects.create(
            order=order,
            name=order.name,
            desired_amount=order.total_amount,
            buyer_name=order.user.username,
            buyer_email=order.user.email,
        )

    class Meta:
        verbose_name = verbose_name_plural = '6. OrderPayment 결제내역'


class Coupon(models.Model):
    pass