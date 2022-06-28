from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='Main'),
    path('register', views.RegisterViews.as_view(), name='register'),
    path('auth', views.LoginViews.as_view(), name='auth'),
    path('logout', views.logout_user, name='logout'),
    path('email', views.email, name='email')
]
