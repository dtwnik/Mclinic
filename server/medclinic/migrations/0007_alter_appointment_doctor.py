# Generated by Django 4.0.5 on 2022-06-11 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medclinic', '0006_alter_doctor_degree_alter_doctor_photo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='doctor',
            field=models.CharField(max_length=255),
        ),
    ]