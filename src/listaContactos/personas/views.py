from django.shortcuts import render
from .models import Persona

def listar_personas(request):
    personas = Persona.objects.all()
    return render(request, "personas.html", {'personas': personas})
