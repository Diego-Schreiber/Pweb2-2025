from django.shortcuts import render, redirect
from .forms import AlumnoForm, CursoForm, NotaForm

def agregar_alumno(request):
    if request.method == 'POST':
        form = AlumnoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('academico:alumno_ok')
    else:
        form = AlumnoForm()
    return render(request, 'academico/agregar_alumno.html', {'form': form})

def agregar_curso(request):
    if request.method == 'POST':
        form = CursoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('academico:curso_ok')
    else:
        form = CursoForm()
    return render(request, 'academico/agregar_curso.html', {'form': form})

def agregar_nota(request):
    if request.method == 'POST':
        form = NotaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('academico:nota_ok')
    else:
        form = NotaForm()
    return render(request, 'academico/agregar_nota.html', {'form': form})
