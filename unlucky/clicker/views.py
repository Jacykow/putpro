from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#from rest_framework.generics import GenericAPIView

from . models import Event
from . serializers import EventSerializer


"""
class EventList(GenericAPIView):
    queryset = Event.objects.all()  # lowercase!
    serializer_class = EventSerializer

    def get(self, request):
        serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data)

"""
class EventList(APIView):

    def get(self, request):
        event = Event.objects.all()
        serializer = EventSerializer(event, many = True)
        return Response(serializer.data)

    def post(self):
        pass
