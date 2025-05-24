from django.urls import path
from . import views

app_name = 'ventas'

urlpatterns = [
    path('crear/', views.crear_venta, name='crear_venta'),
    path('exitosa/', lambda request: render(request, 'ventas/venta_exitosa.html'), name='venta_exitosa'),
]
