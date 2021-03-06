# Generated by Django 4.0.5 on 2022-06-11 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medclinic', '0005_alter_appointment_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='degree',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='photo',
            field=models.ImageField(blank=True, upload_to='doctor'),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='post',
            field=models.CharField(max_length=255),
        ),
    ]
