from django.shortcuts import render
from .models import Destination

def index(request):

    dest1= Destination()
    dest2= Destination()
    dest3= Destination()

    dest1.name = 'Mumbai'
    dest1.desc = 'The city that never sleeps'
    dest1.img = 'destination_1.jpg'
    dest1.price = 700
    dest1.offer = False

    dest2.name ='Indonesia'
    dest2.desc = 'Ni idea de indonesia'
    dest2.img= 'destination_2.jpg'
    dest2.price = 679
    dest2.offer = True

    dest3.name = 'San Francisco'
    dest3.desc = 'Aqui hay un puente creo'
    dest3.img = 'destination_3.jpg'
    dest3.price = 679
    dest3.offer = False

    dests= [dest1,dest2,dest3]
 
    return render(request, 'travello/index.html', {'dests': dests})
