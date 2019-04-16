from django.contrib import admin
from django.conf.urls import include, url
urlpatterns = [
    url(r'', include('Application1.urls')),
    url(r'^application2/', include('Application2.urls')),
    url(r'^application3/', include('Application3.urls')),
    url(r'^application4/', include('Application4.urls')),
    url(r'^application5/', include('Application5.urls')),
    url(r'^applicationmodels/', include('applicationmodels.urls')),
    url(r'^appdatabase/',include('appdatabase.urls')),
    url(r'admin/', admin.site.urls),

]
