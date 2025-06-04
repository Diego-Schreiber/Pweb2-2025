from django.urls import path
from . import views

urlpatterns = [
    path('', views.descripcion_view, name='personas_lista'),
    path('crear/', views.persona_create_view, name='persona_crear'),
    path('buscar/', views.search_view, name='persona_buscar'),
]
