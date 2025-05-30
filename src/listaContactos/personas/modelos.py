from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    apellidos = models.CharField(max_length=100, verbose_name="Apellidos")
    edad = models.IntegerField(verbose_name="Edad")
    donador = models.BooleanField(default=False, verbose_name="Es donador?")
    
    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"
    
    def __str__(self):
        return f"{self.nombre} {self.apellidos}"
