from django.shortcuts import render
from django.views.generic.base import TemplateView
from .models import Human

# Create your views here.
class List(TemplateView):
    humans = Human.objects.all()
    lastAddedhuman = Human.objects.all()[:1]
    firstThree = Human.objects.all()[:3]
    humanFromFirstCompany = Human.objects.filter(Company='DataArt')
    humanBornIn2000 = Human.objects.filter(Birth__year=2000)
    orderedDescBirth = Human.objects.order_by('-Birth')
    humanName = Human.objects.filter(Name = 'Misha')
    orderedSalary = Human.objects.order_by("Salary")
    lTSalary = Human.objects.filter(Salary__lte = 1000)

    def get(self, request, **kwargs):
        context = {
            'humans' : self.humans,
            'lastAddedhuman' : self.lastAddedhuman,
            'firstThree' : self.firstThree,
            'humanFromFirstCompany' : self.humanFromFirstCompany,
            'humanBornIn2000' : self.humanBornIn2000,
            'orderedDescBirth' : self.orderedDescBirth,
            'humanName' : self.humanName,
            'orderedSalary' : self.orderedSalary, 
            'lTSalary' : self.lTSalary
        }   
        return render(request, "data/get.html", context)

    def post(self, request, **kwargs):
        if request.method == "POST":
            searchCompany = request.POST['search'] #if no files
            humanCompany = Human.objects.filter(Company = searchCompany)
        context = {
            'form': humanCompany
        }
        return render(request, "data/post.html", context)