from django.urls import include, path
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
router.register(r'Doctor', DoctorViewSet)
router.register(r'Appointment', AppointmentViewSet)
router.register(r'User', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', CustomObtainAuthToken.as_view()),
]