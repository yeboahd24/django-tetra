from django.urls import  path

from .views import index


app_name = 'todo'


urlpattern = [
    path('', index, name='index'),
]