from django.conf.urls import url, include 
from . import views

new_pattern = [
    url(r'^comments/(?:(?P<comment>\d+))?', views.comments)
]
ACTION=[
    url(r'^(?P<action>\w+)', views.actions)
]

urlpatterns =[
    url(r'^new_patterns/', include(new_pattern)),
    url(r'^review/page-(?P<pageId>\d+)/', include(ACTION)),
    url(r'^review/(?:page-(?P<pageId>\d+))?', views.page)
]