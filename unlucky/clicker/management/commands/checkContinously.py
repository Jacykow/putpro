from django.core.management.base import BaseCommand
#from populate_stocks import loop


from clicker.models import Event

class Command(BaseCommand):
   help = "loop"

   def handle_noargs(self, **options):
      while True:
         loop()

   def handle(self, *args, **options):
      while True:
          loop()
      return


def loop():
   #