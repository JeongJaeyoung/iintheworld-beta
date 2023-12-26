from django.conf import settings
from django.db import transaction
from django.shortcuts import redirect
from django.urls import reverse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from mall.models import Product, CartProduct, Order, OrderPayment
from .serializers import CartProductSerializer, ProductListSerializer, ProductRetrieveSerializer, OrderSerializer, \
    OrdersListSerializer


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.filter(status=Product.Status.ACTIVE).order_by('id')
    serializer_class = ProductListSerializer
    permission_classes = [AllowAny]


class ProductRetrieveAPIView(RetrieveAPIView):
    queryset = Product.objects.filter(status=Product.Status.ACTIVE)
    serializer_class = ProductRetrieveSerializer
    permission_classes = [AllowAny]
    lookup_field = 'name_en'


# 수강바구니
class CartProductListAPIView(ListAPIView):
    serializer_class = CartProductSerializer

    def get_queryset(self):
        return CartProduct.objects.filter(user=self.request.user)


class CartProductAPIView(APIView):
    #수강바구니 조회
    def get(self, request):
        serializer = CartProductSerializer()

    # 수강바구니 생성
    @transaction.atomic
    def post(self, request, pk):
        product = get_object_or_404(Product, id=pk)
        data = {
            'quantity': 1,
            'user': request.user.pk,
            'product': product.pk,
        }
        serializer = CartProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CartProductDeleteAPIView(DestroyAPIView):
    queryset = CartProduct.objects.all()
    serializer_class = CartProductSerializer

    def delete(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CartProduct.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class CartProductsDeleteAPIView(DestroyAPIView):
    serializer_class = CartProductSerializer

    def get_queryset(self):
        # 현재 사용자와 연결된 CartProduct만 반환합니다.
        return CartProduct.objects.filter(user=self.request.user)

    def delete(self, request, *args, **kwargs):
        # 현재 사용자와 연결된 모든 CartProduct 가져오기
        queryset = self.get_queryset()
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def order_new(request):
    # 수강바구니에 담긴 것을 묶어서 하나의 주문으로 만들기
    cart_product_qs = CartProduct.objects.filter(user=request.user)
    order = Order.create_from_cart(request.user, cart_product_qs)
    # cart_product_qs.delete()
    return redirect('order_pay', order.pk)


@api_view(['GET'])
def order_pay(request, pk):
    # 주문으로 만든 것을 결제
    order = get_object_or_404(Order, pk=pk, user=request.user)

    if not order.can_pay():
        return Response({"detail": "현재 결제를 할 수 없는 주문입니다."}, status=status.HTTP_400_BAD_REQUEST)

    payment = OrderPayment.create_by_order(order) # Order 기반으로 OrderPayment 만들기
    check_url = reverse('order_check', args=[order.pk, payment.pk])
    payment_props = {
        'pg': 'html5_inicis',
        'pay_method': 'card',
        'merchant_uid': payment.merchant_uid,
        'name': payment.name,
        'amount': payment.desired_amount,
        'buyer_name': payment.buyer_name,
        'buyer_email': payment.buyer_email,
        'm_redirect_url': request.build_absolute_uri(check_url),
        'order_pk': order.pk,
        'payment_pk': payment.pk,
    }

    # 아래의 데이터를 가지고 포트원에서 결제 진행
    response_data = {
        'portone_shop_id': settings.PORTONE_SHOP_ID,
        'payment_props': payment_props,
        'next_url': check_url,
    }

    return Response(response_data, status=status.HTTP_200_OK)


def order_check(request, order_pk, payment_pk):
    payment = get_object_or_404(OrderPayment, pk=payment_pk, order__pk=order_pk)
    payment.update()
    return redirect("order_detail", order_pk)


@api_view(['GET'])
def order_detail(request, pk):
    order = get_object_or_404(Order, pk=pk, user=request.user)
    serializer = OrderSerializer(order)
    return Response({"order": serializer.data})


@api_view(['GET'])
def order_list(request):
    """
    주문 목록 페이지. 해당 페이지의 각 주문(Order) 링크를 클릭하면,
    '한번의 결제에서 구매'한 '여러 물품의 품목과 수량이 보여지는 detail 페이지'로 이동
    """
    order_qs = Order.objects.all().filter(user=request.user, status=Order.Status.PAID)
    serializer = OrdersListSerializer(order_qs, many=True)
    return Response({"orders_list": serializer.data})