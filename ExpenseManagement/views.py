from django.shortcuts import render

from rest_framework import status
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

from .models import *

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List All Expenses':'/expenses/',
        'Expense Detail':'/expenses/<str:pk>/'
		}
	return Response(api_urls)


#Expenses
@api_view(['GET', 'POST'])
def expensesList(request, format=None):
    #List all Expenses or create new
    if request.method == 'GET':
        expenses = Expenses.objects.all()
        serializer = ExpensesSerializers(expenses, many= True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ExpensesSerializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def expenseDetails(request, pk, format=None):
    #List all Expenses or create new
    try:
        expense = Expenses.objects.get(id = pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ExpensesSerializers(expense)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ExpensesSerializers(expense, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        expense.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)