from django.shortcuts import render, redirect
from django.http import HttpResponse


# Create your views here.
def redirects(request):
    return redirect('/application4/redirected/')
    
def redirected(request):
    return HttpResponse('<h2>You were redirected</h2>')

def renderHtml(request):
    _html = """
    <html lang="en">
    <head>
        <title>Django</title>
    </head>
    <body>
        <h1>Html</h1>
    </body>
    </html>
    """
    return HttpResponse(_html)

def renderTemplate(request):
    return render(request,"index.html")

def formHandler(request):
    if(request.method=="GET"):
        return HttpResponse('<h2>Get-method</h2>')
    if(request.method=="POST"):
        return HttpResponse('<h2>POST-method</h2>')
         
def index(request):
    return HttpResponse('<h2>Application4</h2>')         