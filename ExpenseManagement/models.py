from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class UserDetails(models.Model):

    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    first_Name = models.CharField(max_length=200, null=True)
    last_Name = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    address = models.CharField(max_length=200, null=True)
    date_created = models.DateField(auto_now_add=True)
    birth_date = models.DateField(blank=True, null=True)

    def __str__(self):
        if (self.first_Name and self.last_Name):
            display = (self.first_Name + " " + self.last_Name)
        else:
            display = str(self.date_created)
        return display

class Expenses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True)
    description = models.TextField()
    amount = models.DecimalField(blank=True, null=True,  max_digits=19, decimal_places=2)
    dateTime = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title