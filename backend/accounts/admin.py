from django.contrib import admin
from .models import User
from mall.models import CartProduct, Product, Order, OrderedProduct, OrderPayment


class CartProductInline(admin.TabularInline):
    model = CartProduct
    extra = 0

class OrderInline(admin.TabularInline):
    model = Order
    extra = 0


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'pk', 
        'username', 
        'email', 
        'is_verified', 
        'is_staff', 
        'is_superuser', 
        'auth_provider', 
        'created_at', 
        'updated_at'
        ]
    inlines = [CartProductInline, OrderInline]

