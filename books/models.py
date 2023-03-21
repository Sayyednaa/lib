from django.db import models

# Create your models here.

class BookList(models.Model):
    Book_Name=models.CharField(max_length=100)
    Description=models.CharField(max_length=100)
    CurrentPoser=models.CharField(max_length=50)
    pdf=models.FileField(upload_to='static/pdf',blank=True,null=True)
    Image=models.ImageField(upload_to="static/img")



    def __str__(self):
         return self.Book_Name