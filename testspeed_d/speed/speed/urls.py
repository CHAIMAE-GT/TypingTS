
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('api/', include('typing_test.urls')), 
    path('admin/', admin.site.urls),
    
]
