from django.urls import path
from . import views



urlpatterns = [
    path('', views.inicio, name='index'),
    path('situacion/', views.situacion, name='situacion'),
    path('causas/', views.causas, name='causas'),
    path('propuesta/', views.propuesta, name='propuesta'),
    path('vision/', views.vision, name='vision'),
]