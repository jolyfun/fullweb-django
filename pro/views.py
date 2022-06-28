from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.shortcuts import redirect, render
from flask import request_finished
from .forms import *
from django.contrib.auth.views import LoginView
from django.contrib.auth import logout
from django.contrib.auth import login
from .utils import *
from django.core.mail import send_mail
from pyexpat.errors import messages

def main(request):
    context = {
        'title': "Home"
    }
    return render(request, 'pro/index.html', context=context)

class RegisterViews(CreateView):
    form_class = RegisterForm
    template_name = 'pro/register.html'
    success_url = reverse_lazy('Main')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Register/Регистрация"
        return context

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('Main')

class LoginViews(DataMixin, LoginView):
    form_class = LoginForm
    template_name = 'pro/auth.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Авторизация"
        return context

def logout_user(request):
    logout(request)
    return redirect('home')

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
    return render(request, 'pro/email.html', {"form": form})