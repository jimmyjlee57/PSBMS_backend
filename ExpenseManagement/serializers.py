from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import *

class UserDetailsSerializers(serializers.ModelSerializer):
	class Meta:
		model = UserDetails
		fields ='__all__'

class ExpensesSerializers(serializers.ModelSerializer):
	class Meta:
		model = Expenses
		fields ='__all__'

class ReminderSerializers(serializers.ModelSerializer):
	class Meta:
		model = Reminder
		fields ='__all__'

class BillMonitorSerializers(serializers.ModelSerializer):
	class Meta:
		model = BillMonitor
		fields ='__all__'