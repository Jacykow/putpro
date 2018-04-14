from django.db import models

# Create your models here.

from django.utils import timezone

class Event(models.Model):
    id = models.AutoField(primary_key=True)

    event_title = models.CharField("event_title", max_length=60)
    event_description = models.CharField("event_description", max_length=250)
    event_image = models.CharField("event_image_url", max_length=5000)

    event_choice_1 = models.CharField("event_choice_1", max_length=500)
    event_choice_2 = models.CharField("event_choice_2", max_length=500)
    stress1 = models.IntegerField("stress1",default=0)
    friends1 = models.IntegerField("friends1",default=0)
    cigaretes1 = models.IntegerField("cigaretes1",default=0)
    alcochol1 = models.IntegerField("alcochol1",default=0)
    drugs1 = models.IntegerField("drugs1",default=0)
    stress2 = models.IntegerField("stress2", default=0)
    friends2 = models.IntegerField("friends2", default=0)
    cigaretes2 = models.IntegerField("cigaretes2", default=0)
    alcochol2 = models.IntegerField("alcochol2", default=0)
    drugs2 = models.IntegerField("drugs2", default=0)
    #string url, , , 2 opcje tekst i efekt

class Obrazki(models.Model):
    id = models.AutoField(primary_key=True)
    obrazek_nazwa = models.CharField("obrazek_nazwa", max_length=60)
    obrazek_image = models.CharField("event_image_url", max_length=5000)

    stress3 = models.IntegerField("stress3", default=0)
    friends3 = models.IntegerField("friends3", default=0)
    cigaretes3 = models.IntegerField("cigaretes3", default=0)
    alcochol3 = models.IntegerField("alcochol3", default=0)
    drugs3 = models.IntegerField("drugs3", default=0)



    def __str__(self):
        return self.obrazek_nazwa