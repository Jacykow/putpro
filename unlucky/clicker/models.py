from django.db import models

# Create your models here.

from django.utils import timezone

class Event(models.Model):
    id = models.AutoField(primary_key=True)

    event_title = models.CharField("event_title", max_length=60)
    event_description = models.CharField("event_description", max_length=250)
    event_image = models.CharField("event_image_url", max_length=2000)

    event_choice_1 = models.CharField("event_choice_1", max_length=500)
    event_choice_2 = models.CharField("event_choice_2", max_length=500)
    #string url, , , 2 opcje tekst i efekt

    def __str__(self):
        return self.event_title