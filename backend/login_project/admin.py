import django
import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'proj_settings.settings'
django.setup()
from django.contrib.auth.models import User

try:
    User.objects.get(username=os.environ['ADMIN_USERNAME'])
except User.DoesNotExist:
    u = User(username=os.environ['ADMIN_USERNAME'])
    u.set_password(os.environ['ADMIN_PASSWORD'])
    u.is_superuser = True
    u.is_staff = True
    u.save()