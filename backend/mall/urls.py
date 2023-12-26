from django.urls import path

from .views import (
    ProductListAPIView,
    ProductRetrieveAPIView,
    CartProductListAPIView,
    CartProductDeleteAPIView,
    CartProductsDeleteAPIView,

    order_new,
    order_pay,
    order_check,
    order_detail,
    order_list, CartProductAPIView
)

urlpatterns = [
    # 상품(강의) 조회
    path('products/', ProductListAPIView.as_view(), name='product_list'),
    path('products/<str:name_en>/', ProductRetrieveAPIView.as_view(), name='product_retrieve'),

    # 수강바구니 담기
    path('cart-products/<int:pk>/', CartProductAPIView.as_view()),
    path('cart/', CartProductListAPIView.as_view(), name='cart_products'),
    path('cart/<int:pk>/', CartProductDeleteAPIView.as_view(), name='cart_product_delete'),
    path('cartproducts/delete/', CartProductsDeleteAPIView.as_view(), name='cart_products_delete'),

    # 주문하기
    # step1. 주문 생성
    path('orders/new/', order_new, name='order_new'),
    # step2. 생성된 주문 결제
    path('orders/<int:pk>/pay', order_pay, name='order_pay'),
    # step3. 포트원을 통해 결제 검증을 통해 OrderPayment 업데이트 #직접 고객이 해당 url을 쳐서 들어가진 않음(백엔드 내부 로직임)
    path('orders/<int:order_pk>/check/<int:payment_pk>/', order_check, name='order_check'),
    # step4. 개별 주문 결제 내역 조회 페이지로 라우팅 #직접 고객이 해당 url을 쳐서(frontend에서 요청 보내서) 들어갈 수 있음
    path('orders/<int:pk>/', order_detail, name='order_detail'),

    # 주문 내역 확인
    path('orders/', order_list, name='order_list'),  # 전체 주문 결제 내역 조회
]