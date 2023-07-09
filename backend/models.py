# models.py

from django.db import models

class Document(models.Model):
    subject_name = models.CharField(max_length=100)
    description = models.TextField()
    document_file = models.FileField(upload_to='documents/')
    link = models.URLField(blank=True)

    def __str__(self):
        return self.subject_name
