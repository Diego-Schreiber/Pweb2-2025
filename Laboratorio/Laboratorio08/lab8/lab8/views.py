from django.shortcuts import render
from django.core.mail import send_mail

def index(request):
    send_mail('Hola de Diego', 'Este es un mensaje de prueba','dschreiber@unsa.edu.pe',('diegoschlan@gmail.com'), fail_silently=False)
    return render(request, 'example/index.html')

