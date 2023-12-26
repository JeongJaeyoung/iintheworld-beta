from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import CartProduct, Product, OrderPayment, Order


class ProductListSerializer(ModelSerializer):
    # Category 모델의 pk 아닌 name 추출 - Foreign
    category = serializers.CharField(source='category.name')
    # Tag 모델의 pk가 아닌 name 추출 - ManyToMany
    tag_names = serializers.StringRelatedField(many=True, source='tag')
    class Meta:
        model = Product
        fields = ['id', 'name', 'name_en', 'description', 'status', 'photo', 'price', 'category' ,'tag_names']
        # fields = '__all__'


class ProductRetrieveSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartProductSerializer(ModelSerializer):
    product_name = serializers.SerializerMethodField()
    product_price = serializers.SerializerMethodField()

    def get_product_name(self, obj):
        return obj.product.name

    def get_product_price(self, obj):
        return obj.product.price

    def validate(self, attrs):
        # validation1. 이미 수강바구니에 추가된 상품을 또다시 추가하려면 에러 발생시킴
        cart_products = CartProduct.objects.filter(user=attrs['user'])
        user_cart_products = []
        cart_product_names_list = [cart_product.product.name for cart_product in cart_products]
        user_cart_products.extend(cart_product_names_list)

        if attrs['product'].name in user_cart_products:
            raise serializers.ValidationError("이미 수강바구니에 담긴 상품입니다.")

        # validation2. 이미 결제한 상품을 수강바구니에 추가하려면 에러 발생시킴
        # 한명의 유저가 결제한 모든 주문들 조회(각 주문 : products(여러 상품들)에 대한 통합 결제)
        order_payments = OrderPayment.objects.filter(buyer_email = attrs['user'])

        user_purchased_products = []
        for order_payment in order_payments:
            # 내부로직 : 하나의 OrderPayment(결제건) 속에 있는 결제 상품들 추출
            products = order_payment.order.product_set.all()
            product_names_list = [product.name for product in products]
            user_purchased_products.extend(product_names_list)

        if attrs['product'].name in user_purchased_products:
            raise serializers.ValidationError("이미 구매한 상품입니다")

        return attrs

    class Meta:
        model = CartProduct
        fields = ['id', 'user', 'product', 'product_name', 'product_price', 'quantity']


class CartProductCreateSerializer(ModelSerializer):

    class Meta:
        model = CartProduct
        fields = ['id']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrdersListSerializer(serializers.ModelSerializer):
    product_set = ProductRetrieveSerializer(many=True)
    class Meta:
        model = Order
        exclude = ['total_amount', 'user']
