from rest_framework import serializers
from .models import Person


class CustomModelSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        super(CustomModelSerializer, self).__init__(*args, **kwargs)
        if fields:
            delete_fields = set(self.fields.keys()) - set(fields)
            for d_fields in delete_fields:
                self.fields.pop(d_fields)


class LoginSerializer(serializers.Serializer):
    username = serializers.EmailField()
    password = serializers.CharField()

    class Meta:
        fields = ('username', 'password',)


class PersonSerializer(CustomModelSerializer):

    class Meta:
        model = Person
        fields = '__all__'
