from django.contrib import admin
from .models import Category, Tag, Product, CartProduct, Order, OrderedProduct, OrderPayment

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Tag)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display =  ['id', 'category', 'name', 'name_en', 'photo', 'price', 'status']

@admin.register(CartProduct)
class CartProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'product', 'quantity']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'total_amount', 'status', 'created_at', 'updated_at']

@admin.register(OrderedProduct)
class OrderedProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'order', 'user_email', 'name', 'price', 'quantity', 'created_at', 'updated_at']
    search_fields = ['order__user__email']  # 사용자 이메일로 검색할 수 있도록 추가

    def user_email(self, obj):
        return obj.order.user.email if obj.order.user else None

@admin.register(OrderPayment)
class OrderedPaymentAdmin(admin.ModelAdmin):
    list_display = ['id', 'meta', 'uid', 'order', 'name', 'desired_amount', 'buyer_name', 'buyer_email', 'pay_method', 'pay_status', 'is_paid_ok']