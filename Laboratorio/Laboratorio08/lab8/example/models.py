from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=10) 

class Framework(models.Model):
    name = models.CharField(max_length=10)
    language = models.Foreignkey(Language, on_delete=models.CASCADE) 


