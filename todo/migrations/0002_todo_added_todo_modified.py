# Generated by Django 4.0.5 on 2022-06-09 02:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='added',
            field=models.DateTimeField(auto_now_add=True, db_index=True, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='modified',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
