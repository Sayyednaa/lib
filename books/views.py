from django.shortcuts import render
from django.http import HttpResponse , HttpRequest
from books.models import BookList
# Create your views here.
def index(request):
    db=BookList.objects.all()
    return render(request,'index.html',{"db":db})