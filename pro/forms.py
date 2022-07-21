from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import *

class RegisterForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['number'] # Сделать так, чтобы пользователь смог вводить своё значение в number 

class ContactForm(forms.Form):
    email = forms.CharField(label="Ваш email",
    widget=forms.EmailInput(attrs={'class': 'form-control footer__input-email'}))

    content = forms.CharField(label="Ваша заявка или предложение",
    widget=forms.Textarea(attrs={'class': 'form-control footer__textarea'}))

"""
эта форма отвечает за отправку имейлов
"""