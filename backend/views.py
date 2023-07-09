
# views.py
from django.shortcuts import render, redirect
from .models import Document

def upload_document(request):
    if request.method == 'POST':
        subject_name = request.POST['subjectName']
        description = request.POST['description']
        document_file = request.FILES['documentFile']
        link = request.POST.get('link', '')

        try:
            document = Document(subject_name=subject_name, description=description, document_file=document_file, link=link)
            document.save()
            return redirect('document_list')  # Redirect to a page that displays the uploaded documents
        except Exception as e:
            error_message = f"Error occurred while saving the document: {str(e)}"
            return render(request, 'index.html', {'error_message': error_message})

    return render(request, 'index.html')
