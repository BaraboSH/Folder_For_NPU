from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def default(request):
    return  HttpResponse("<h1>Application5</h1>")

def index(request):
    years = [2017,2018,2019,2020,2021]
    context = {
        'name':'Nikita',
        'lastname':'Trembitskyi',
        'job_year':years,
        'contact':{
            'nickname':'barabos',
            'phone':'380636006060',
            'email':'znikita99@mail.com'
        }
    }
    return render(request,'App5/index.html',context)

def condition(request):
    days = [1,2,3,4,5,6,7]
    dayOfTheWeek = ['Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота','Неділя']
    context={
        'current_user':'admin',
        'days': days[3],
        'status': 'online',
        'email':'znikita99@gmail.com',
        'dayOfTheWeek':dayOfTheWeek[days[3] - 1]
    }
    return render(request, 'App5/condition.html', context)

def content(request):
    return render(request, 'App5/content.html')

def wrapper(request):
    return render(request, 'App5/wrapper.html')

