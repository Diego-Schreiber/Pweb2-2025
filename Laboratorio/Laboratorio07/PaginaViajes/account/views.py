from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages

def login(request):
    if  request.method == 'POST':
         username = request.POST['username']
         password = request.POST['password']  

         user=auth.authenticate(username=username, password=password)

         if user is not None:
            auth.login(request, user)
            return redirect("/")  
         else:
            messages.info(request,'invalid credentials')  
            return redirect('login')   
    else:
        return render(request,'account/login.html') 

def register(request):

    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
   
        if password1==password2:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Usuario repetido')
                return redirect('register')
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'email repetido')
                return redirect('register')
            else:
                user = User.objects.create_user(username=username,password=password1, email=email, first_name=first_name, last_name=last_name)    
                user.save();
                return redirect('login')
        else: 
           messages.info(request,'different passwords')
           return redirect('register')
        return redirect('/')

    else:
        return render(request, 'account/register.html')
