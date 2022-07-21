from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='Main'),
    path('number', views.number, name='number'),
    path('email', views.email, name='email')
]
