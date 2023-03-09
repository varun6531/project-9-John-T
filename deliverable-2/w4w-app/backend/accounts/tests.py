import json

from accounts.models import PlayUser, PlayUserManager
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

# Create your tests here.
class RegistrationUserTestCase(APITestCase):
    def test_user_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        response = self.client.post('/accounts/register-user/', data)
        self.assertEqual(response.status_code, 200)

    def test_user_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        response = self.client.post('/accounts/register-user/', data)        
        self.assertEqual(response.status_code, 400)

class RegistrationStudentTestCase(APITestCase):
    def test_student_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 200)

    def test_student_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "grade": "12", "school": "Toronto High School"}
        response = self.client.post('/accounts/register-student/', data)
        self.assertEqual(response.status_code, 400)

class RegistrationTeacherTestCase(APITestCase):
    def test_teacher_registration(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 200)

    def test_teacher_registration_fail(self):
        data = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "wrongpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21",
                "school": "Toronto High School"}
        response = self.client.post('/accounts/register-teacher/', data)
        self.assertEqual(response.status_code, 400) 

class LoginTestCase(APITestCase):
    def test_login(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "testpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 200)

    def test_login_fail(self):
        new_user = {"email": "testemail@rocketmail.com", "password": "testpass", 
                "password2": "testpass", "first_name": "Central", "last_name": "Cee", 
                "city": "Toronto", "country": "Canada", "type": "student", "age": "21"}
        self.client.post('/accounts/register-user/', new_user)
        data = {"email": "testemail@rocketmail.com", "password": "wrongpass"}
        response = self.client.post('/accounts/login/', data)
        self.assertEqual(response.status_code, 401)
