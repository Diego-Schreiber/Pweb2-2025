from django.shortcuts import render
from .models import Persona

def listar_personas(request):
    personas = Persona.objects.all()
    return render(request, "personas.html", {'personas': personas})

def mi_vista(request):
    datos = {'nombre': 'Ana', 'edad': 25}
    return render(request, 'mi_template.html', datos)
