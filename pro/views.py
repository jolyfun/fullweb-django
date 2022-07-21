from django.urls import reverse_lazy
from django.shortcuts import redirect, render
from .forms import *
from django.contrib.auth.views import LoginView
from .utils import *
from django.core.mail import send_mail
from django.views.generic import CreateView

def main(request):
    context = {'title': "Home"}
    return render(request, 'pro/index.html', context=context)

def number(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('Main')
    else:
        form = RegisterForm()
    return render(request, 'pro/register.html', {"form": form})

def email(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            email = send_mail(form.cleaned_data['email'], form.cleaned_data['content'], 
'dnnd1264@gmail.com', ['karasev.ilya398@gmail.com'], fail_silently=False)
            if email:
                return redirect('Main')
            else:
                pass
    else:
        form = ContactForm()
    return render(request, 'pro/form-email.html', {"form": form})