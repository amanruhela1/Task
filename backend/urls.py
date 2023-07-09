# urls.py

from django.urls import path
from .views import upload_document

urlpatterns = [
    path('upload', upload_document, name='index'),
    # Other URL patterns
]
