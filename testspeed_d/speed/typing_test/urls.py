from django.urls import path, include
from rest_framework import routers
from .api_views import CustomTextViewSet
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'/custom-texts/', CustomTextViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]