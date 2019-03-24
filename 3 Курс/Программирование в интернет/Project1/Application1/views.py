from  django.http import HttpResponse
def index(request):
    return HttpResponse("<h1>Application1</h1>")
