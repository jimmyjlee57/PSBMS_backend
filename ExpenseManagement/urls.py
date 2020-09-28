from django.shortcuts import render
from django.http import JsonResponse

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from ExpenseManagement import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('expenses/', views.expensesList, name="expensesList"),
    path('expenses/<str:pk>', views.expenseDetails, name="expenseDetails"),

]

urlpatterns = format_suffix_patterns(urlpatterns)