from django.conf.urls import url, include 
from . import views


urlpatterns=[
    url(r'^redirect/$', views.redirects),
    url(r'^redirected/$', views.redirected),
    url(r'^render-html/$', views.renderHtml),
    url(r'^render-template/form-handler/$', views.formHandler),
    url(r'^render-template/$', views.renderTemplate),    
    url('', views.index)
]