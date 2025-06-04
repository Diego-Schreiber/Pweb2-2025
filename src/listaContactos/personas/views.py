from django.shortcuts import render
from .models import Persona
from .forms import PersonaForm

def listar_personas(request):
    personas = Persona.objects.all()
    return render(request, "personas.html", {'personas': personas})

def mi_vista(request):
    datos = {'nombre': 'Ana', 'edad': 25}
    return render(request, 'mi_template.html', datos)

def persona_create(request):
    form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = PersonaForm() 
    return render(request, 'personas/personasCreate.html', {'form': form})
