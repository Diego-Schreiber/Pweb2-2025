from django.shortcuts import render, redirect
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

def descripcion_view(request):
    personas = Persona.objects.all()
    return render(request, 'personas/descripcion.html', {'personas': personas})

def persona_create_view(request):
    form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('personas_lista')
    return render(request, 'personas/personasCreate.html', {'form': form})

def search_view(request):
    query = request.GET.get('query', '')
    resultados = Persona.objects.filter(nombre__icontains=query) if query else None
    return render(request, 'personas/search.html', {'resultados': resultados})
