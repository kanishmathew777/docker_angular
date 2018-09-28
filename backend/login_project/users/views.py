from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework import status

from utilities.response import success_response, error_response
from .serializers import LoginSerializer, PersonSerializer

from django.contrib.auth.models import User
from .models import Person
# Create your views here.


class LoginView(APIView):

    authentication_classes = []
    permission_classes = []

    def post(self, request, *args, **kwargs):
        from rest_framework.authtoken.models import Token
        serializer = LoginSerializer(data=request.data)
        error_message = 'Login attempt failed'

        if serializer.is_valid():
            username = serializer.data['username'].strip()
            password = serializer.data['password'].strip()

            try:
                user = User.objects.get(username=username)

            except User.DoesNotExist:
                print('user does not exists')

            else:
                authenticated = user.check_password(password)

                if authenticated:
                    token, created = Token.objects.get_or_create(user=user)
                    response = {
                        'token': token.key
                    }
                    return success_response(response, status.HTTP_200_OK)

            error_message = 'email or password is invalid'
            return error_response(message=error_message, error=serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

        else:
            return error_response(message=error_message, error=serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


class PersonsView(ViewSet):

    # authentication_classes = []
    # permission_classes = []

    def create(self, request):
        person_serailizer = PersonSerializer(data=request.data)
        if person_serailizer.is_valid():
            person_serailizer.save()
            return success_response(person_serailizer.data, status.HTTP_200_OK)
        else:
            error_message = 'email or password is invalid'
            return error_response(message=error_message, error=person_serailizer.errors,
                                  status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        request.data['id'] = pk
        person_serailizer = PersonSerializer(data=request.data, fields=['id', 'first_name',
                                                                        'last_name'])
        error_message = 'serializer error'
        if person_serailizer.is_valid():
            try:
                person = Person.objects.get(id=request.data['id'])
                setattr(person, 'first_name', person_serailizer.data['first_name'])
                setattr(person, 'last_name', person_serailizer.data['last_name'])
                person.save()
                return success_response(person_serailizer.data, status.HTTP_200_OK)
            except:
                return error_response(message=error_message, error='Person not found',
                                      status=status.HTTP_400_BAD_REQUEST)
        else:
            return error_response(message=error_message, error=person_serailizer.errors,
                                  status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        persons = Person.objects.all().order_by('id')
        person_serailizer = PersonSerializer(persons, many=True)

        return success_response(person_serailizer.data, status=status.HTTP_200_OK)
