from django.conf.urls import url
from .views import LoginView, PersonsView
from rest_framework import routers


router = routers.SimpleRouter()

router.register(r'persons', PersonsView, base_name='person')

urlpatterns = [
    url(r'^login/', LoginView.as_view()),
]

urlpatterns += router.urls
