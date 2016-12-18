from django.shortcuts import render

from django.contrib.auth.models import User, Group
from models import Item, Cart
from rest_framework import viewsets
from bigbasket.api.serializers import UserSerializer, GroupSerializer, ItemSerializer, CartSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CartViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cart to be viewed or edited.
    """
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
