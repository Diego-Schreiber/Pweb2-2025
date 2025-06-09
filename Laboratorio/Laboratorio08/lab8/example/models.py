from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=10)
    def _str_(self):
        return self.name 

class Framework(models.Model):
    name = models.CharField(max_length=10)
    language = models.ForeignKey(Language, on_delete=models.CASCADE) 
    def _str_(self):
        return self.name

