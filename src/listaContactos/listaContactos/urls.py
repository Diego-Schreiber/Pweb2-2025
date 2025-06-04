from django.contrib import admin
from django.urls import path, include
from inicio.views import myHomeView, anotherView
from personas.views import listar_personas
from personas import views

urlpatterns = [
    path('', myHomeView, name='pagina_inicio'),
    path('another/', anotherView, name='otra_pagina'),
    path('personas/', listar_personas, name='lista_personas'),
    path('admin/', admin.site.urls),
    path('personas/nueva/', views.persona_create, name='persona_create'),
    path('personas/', include('personas.urls')),
]
