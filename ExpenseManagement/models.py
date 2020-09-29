from django.contrib.auth.models import User
from django.db import models
from datetime import datetime

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
    description = models.TextField(blank=True, null=True)
    amount = models.DecimalField(blank=True, null=True,  max_digits=19, decimal_places=2)
    dateTime = models.DateTimeField(blank=True, default=datetime.now)

    def __str__(self):
        return self.title

class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True, null=True)
    reminderDateTime = models.DateTimeField(blank=True, default=datetime.now)
    createDateTime = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title

class BillMonitor(models.Model):
    BOOL_CHOICES = [('Yes', 'Yes'), ('No', 'No')]
    FREQUENCY_CHOICES = [('Weekly', 'Weekly'), ('BiWeekly', 'BiWeekly'), ('Monthly', 'Monthly'),
                         ('Quarterly','Quarterly'),('Semiannually','Semiannually'),('Annually','Annually')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True, null=True)
    dueDateTime = models.DateTimeField(blank=True, default=datetime.now)
    recursive = models.CharField(max_length=5, choices=BOOL_CHOICES,null=True)
    recursiveFrequency = models.CharField(max_length=15, choices=FREQUENCY_CHOICES,null=True)

    def __str__(self):
        return self.title

