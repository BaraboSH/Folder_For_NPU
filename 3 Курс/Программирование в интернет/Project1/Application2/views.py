from  django.http import HttpResponse
from datetime import datetime
# Create your views here.



def index(request):
    return HttpResponse("<h1>Application2</h1>")    
def product(request):
    return HttpResponse("<h2>Application2/product</h2>")
def productWithYear(request,year):
    _year = str(datetime.now().year)
    if(year == _year):
        return HttpResponse("<h2>Its current year<h2>")
    return HttpResponse("<h2>It’s year basic folder <mark>" + str(year) + "</mark></h2>")

def productWithYearAndMonth(request, year, month):
    if(int(month) > 0 and int(month) < 13):
        return HttpResponse("<h2>It’s month basic folder <mark>" + str(month) + "</mark></h2>")
    return HttpResponse("<h2>There is no such month<h2>")
def productWithYearAndMonthAndDay(request,year,month,day):
    if(int(day) > 0 and int(day) < 31):
        return HttpResponse("<h2>It’s day basic folder <mark>" + str(day) + "</mark></h2>")
    return HttpResponse("<h2>There is no such days</h2>")

def otherValue(request, value):
    return HttpResponse("<h2>Your argument is <mark>" + str(value) + "</mark></h2>")

def productId(request,productId = 1):
    if(int(productId) == 1):
        return HttpResponse("<h2>First product page</h2>")
    if(int(productId) >= 0):
       return HttpResponse("<h2>Product page with number <mark>{0}</mark></h2>".format(productId))