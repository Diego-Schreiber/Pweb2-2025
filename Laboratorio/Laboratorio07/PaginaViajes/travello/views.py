from django.shortcuts import render
from .models import Destination

def index(request):

    dests = Destination.objects.all() 
 
    return render(request, 'travello/index.html', {'dests': dests})
