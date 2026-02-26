from django.urls import path
from .views import ContactEmailView

urlpatterns = [
    path('contact/', ContactEmailView.as_view(), name='contact_email'),
]
