from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField()
    donador = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"
