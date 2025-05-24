from django import forms
from .models import DetalleVenta
from productos.models import Producto

class DetalleVentaForm(forms.ModelForm):
    class Meta:
        model = DetalleVenta
        fields = ['producto', 'cantidad']
