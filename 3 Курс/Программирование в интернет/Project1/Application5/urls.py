from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^user$',views.index),
    url(r'^content$', views.content),
    url(r'^condition$', views.condition),
    url('', views.wrapper),
]