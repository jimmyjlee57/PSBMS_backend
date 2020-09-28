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