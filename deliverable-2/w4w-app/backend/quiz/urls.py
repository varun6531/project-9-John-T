from django.urls import path
from .views import *

urlpatterns = [
    path('answer/', AnswerView.as_view(), name='answer'),
    path('send-email/', SendEmailView.as_view(), name='send-email'),
]
