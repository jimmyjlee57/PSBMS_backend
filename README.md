# 3311-Team-6

### Getting Started
Before you start make sure you have the Python 3.8 or higher installed in you operating system.<br/>

### Running the Application
By default, the configuration uses SQLite, so migrate models to database follow the steps listed below: <br/>
* Make sure within the repo for ```python manage.py makemigrations``` followed by ```python manage.py migrate```
* Now the Database is set, so to create a superuser run ```python manage.py createsuperuser```
    *System wil prompt you for username, email and password
 * You can now login to backend of th application at ```http://127.0.0.1:8000/admin/``` 