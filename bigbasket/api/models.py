from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    quantity = models.IntegerField()
    price = models.IntegerField()
    image_url = models.CharField(max_length=200)


class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()



