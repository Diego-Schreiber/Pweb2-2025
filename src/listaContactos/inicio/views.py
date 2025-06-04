from django.shortcuts import render
from django.http import HttpResponse

def myHomeView(request, *args, **kwargs):
    return render(request, "home.html", {})

def anotherView(request):
    return HttpResponse('<h1>Sólo otra página</h1>')
