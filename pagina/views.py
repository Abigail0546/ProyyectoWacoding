from django.shortcuts import render

# Create your views here.

def inicio(request):
    return render(request, 'index.html')

def situacion(request):
    return render(request, 'situacion.html')


def causas(request):
    return render(request, 'causas.html')

def propuesta(request):
    return render(request, 'propuesta.html')

def vision(request):
    return render(request, 'vision.html')