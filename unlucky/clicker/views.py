from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.generics import GenericAPIView

from django.http import HttpResponse, HttpRequest
from django.views.decorators.csrf import csrf_exempt
from .models import Event
from .models import Obrazki
from .serializers import EventSerializer
from .serializers import ObrazekSerializer
import json

"""
class EventList(GenericAPIView):
    queryset = Event.objects.all()  # lowercase!
    serializer_class = EventSerializer

    def get(self, request):
        serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data)

"""

@csrf_exempt
class SomeClass(View):
    def get(self, request):
        return HttpResponse("Hello")

    def post(self, request):
        print(json.loads(request.post))
        print(json.loads(request.body))
        print(json.loads("xDDDD"))
        return HttpResponse("Done")


class EventList(APIView):

    def get(self, request):
        event = Event.objects.all()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data)

    def post(self):
        pass


class ObrazkiList(APIView):

    def get(self, request):
        obrazki = Obrazki.objects.all()
        serializer = ObrazekSerializer(obrazki, many=True)
        return Response(serializer.data)

    def post(self):
        pass


@csrf_exempt
def myawesomeview(request):
    print(request.POST)
    print(request.body)


@csrf_exempt
class hello(View):
    def get(self, request):
        return HttpResponse("Hello")

    def post(self, request):
        print("KAPAPPAPPAPAPAPAPA")
        context = {}
        context['office_form'] = json.loads(request.post)
        context['success'] = {"msg": "successfully updated. "}
        context['error'] = {"msg": "error can not update. "}
        return HttpResponse(json.dumps(context), content_type="application/json")

    #return HttpResponse(HttpRequest.post)


@csrf_exempt
def req(request):
    print(request.post)
    print("KAPAPPAPPAPAPASKMDKMKSMDKSMKKDKMDSKMDSPAPA")
    x = str(request.post) + str(request.post)
    # return Response(request.post)
    return HttpResponse(HttpRequest.post)


"""
def rest(request):

    artistname = request.POST.get("artiste") # should get 'da vinci'
    response_data = {}
    response_data = serializers.serialize("json", Art.objects.filter(artist__contains=artistname))
    return HttpResponse(json.dumps(response_data), content_type="application/json")
"""