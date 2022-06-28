from django.contrib import admin
from django.urls import path, include
import pro

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pro.urls')),
]
