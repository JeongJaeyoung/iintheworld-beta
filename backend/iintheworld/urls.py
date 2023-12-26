from django.urls import path
from .views import get_bok_data, get_fred_data

urlpatterns = [
    path('econ-data/bok/', get_bok_data, name='get-bok-data'),
    path('econ-data/fred/', get_fred_data, name='get-fred-data'),
]