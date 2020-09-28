from rest_framework import serializers
from .models import *

class UserDetailsSerializers(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields ='__all__'