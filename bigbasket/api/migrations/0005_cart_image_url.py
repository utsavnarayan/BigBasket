# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-17 09:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20161217_0852'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='image_url',
            field=models.CharField(default='http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg', max_length=200),
            preserve_default=False,
        ),
    ]
