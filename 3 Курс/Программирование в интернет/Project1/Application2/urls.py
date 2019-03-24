from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^product/(?P<year>\d{3,4})/(?P<month>\d{1,2})/(?P<day>\d{1,2})', views.productWithYearAndMonthAndDay, name='productYearMonthDay'),
    url(r'^product/(?P<year>\d{3,4})/(?P<month>\d{1,2})', views.productWithYearAndMonth, name='productYearMonth'),
    url(r'^product/(?P<year>\d{3,4})', views.productWithYear, name='productYear'),
    url(r'^product$', views.product, name = 'product'),
    url(r'^folder/product(?P<productId>\d+)',views.productId, name = 'productId'),
    url(r'^folder',views.productId, name = 'productId'),
    url(r'^(?P<value>\w+)', views.otherValue, name = 'other'),
    url('', views.index, name = 'home'),
]