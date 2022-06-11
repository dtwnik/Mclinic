from django.db import models
from rest_framework.authtoken.admin import User


class Doctor(models.Model):
    name = models.CharField(max_length=255, unique=True)
    photo = models.ImageField(upload_to='doctor', blank=True)
    post = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Доктора"


class Appointment(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    number = models.CharField(max_length=11)
    email = models.EmailField(max_length=255)
    date =  models.DateField()
    doctor = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    post = models.CharField(max_length=255, blank=True)

    class Meta:
        verbose_name_plural = "Записи"