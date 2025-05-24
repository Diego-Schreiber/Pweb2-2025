from django.db import models
from productos.models import Producto

class Venta(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)

class DetalleVenta(models.Model):
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
