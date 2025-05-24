"""
URL configuration for sistema_academico project.

from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("¡Bienvenido al sistema académico!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('academico/', include('academico.urls')),
    path('', home),  # ruta raíz muestra mensaje simple
]

