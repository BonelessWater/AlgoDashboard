from django.shortcuts import render, redirect
import logging
import os
from dotenv import load_dotenv
from .models import *

def home(request):
    return render(request, 'home.html')
