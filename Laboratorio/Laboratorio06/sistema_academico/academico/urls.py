from django.urls import path
from . import views
from django.shortcuts import render

app_name = 'academico'

urlpatterns = [
    path('alumno/', views.agregar_alumno, name='agregar_alumno'),
    path('curso/', views.agregar_curso, name='agregar_curso'),
    path('nota/', views.agregar_nota, name='agregar_nota'),

    path('ok/alumno/', lambda r: render(r, 'academico/ok.html', {'msg': 'Alumno agregado'}), name='alumno_ok'),
    path('ok/curso/', lambda r: render(r, 'academico/ok.html', {'msg': 'Curso agregado'}), name='curso_ok'),
    path('ok/nota/', lambda r: render(r, 'academico/ok.html', {'msg': 'Nota registrada'}), name='nota_ok'),
]
