from rest_framework import serializers
from . models import Event

from . models import Obrazki

class ObrazekSerializer(serializers.ModelSerializer):

    class Meta:
        model = Obrazki
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
        #fields = ('event_title', 'event_description', 'event_image', 'event_choice_1','event_choice_2')
