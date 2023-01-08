# Generated by Django 4.1.5 on 2023-01-06 19:53

import apps.products.services.utils
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(max_length=120, upload_to=apps.products.services.utils.ImageHandler.path, validators=[django.core.validators.validate_image_file_extension]),
        ),
    ]