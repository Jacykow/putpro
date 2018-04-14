from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#from rest_framework.generics import GenericAPIView

from . models import Event
from . models import Obrazki
from . serializers import EventSerializer
from . serializers import ObrazekSerializer
import json

"""
class EventList(GenericAPIView):
    queryset = Event.objects.all()  # lowercase!
    serializer_class = EventSerializer

    def get(self, request):
        serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data)

"""

class SomeClass(View):
    def get(self, request):
        return HttpResponse("Hello")
    def post(self, request):
        print (request.post)
        print (request.body)
        print(json.loads(request.body))
        return HttpResponse("Done")


class EventList(APIView):

    def get(self, request):
        event = Event.objects.all()
        serializer = EventSerializer(event, many = True)
        return Response(serializer.data)

    def post(self):
        pass

class ObrazkiList(APIView):

    def get(self, request):
        obrazki = Obrazki.objects.all()
        serializer = ObrazekSerializer(obrazki, many = True)
        return Response(serializer.data)

    def post(self):
        pass

def myawesomeview(request):
    print (request.POST)
    print (request.body)

def hello(request):
    return HttpResponse("Hello world")

"""
def rest(request):

    artistname = request.POST.get("artiste") # should get 'da vinci'
    response_data = {}
    response_data = serializers.serialize("json", Art.objects.filter(artist__contains=artistname))
    return HttpResponse(json.dumps(response_data), content_type="application/json")
"""