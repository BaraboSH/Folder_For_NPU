from django.http import HttpResponse

def page(request, pageId):
   if(pageId and int(pageId) > 0):
        return HttpResponse("<h2>You are reading reviews page <mark>{0}</mark></h2>".format(pageId))

def comments(request, comment):
    if(comment):
        return HttpResponse("<h2>Your comment has number <mark>{0}</mark></h2>".format(comment))
    return HttpResponse("<h2>First comment</h2>")

def actions(request, pageId, action):
    if(int(pageId)>0 and action == "edit"):
        return HttpResponse("<h2>You are editing page <mark>{0}</mark></h2>".format(str(pageId)))
    if(int(pageId)>0 and action == "delete"):
        return HttpResponse("<h2>You are deleting page <mark>{0}</mark></h2>".format(str(pageId)))
    if(int(pageId)>0 and action == "answer"):
        return HttpResponse("<h2>You are discussing page <mark>{0}</mark></h2>".format(str(pageId)))
    else:
        return HttpResponse('<h1 style="color:red">Wrong operation<h1>')