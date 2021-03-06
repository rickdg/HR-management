from django.db import models

from tms.models.country import Country
from tms.models.user import User
from tms.models.site import Site

"""
TODO
version 1
    reference to country
    reference to user
    refer to site
    email
    email_password
    skype
    skype_password
    status active or suspended
    phone_number
    created_date
    suspended_date
    registered_date
    recital
    title
    overview
version 2
    avatar
    tags - tech tags like Python, Django
    balance
    is_payment_account
"""


class Account(models.Model):
    first_name = models.CharField(max_length=15, null=False, help_text='')
    last_name = models.CharField(max_length=15, null=False, help_text='')
    email = models.EmailField(max_length=30, null=False, help_text='Email')
    email_password = models.CharField(max_length=40, null=False, help_text='Email password')
    skype = models.CharField(max_length=30, null=True, help_text='Skype username. It could be null.')
    skype_password = models.CharField(max_length=30, null=True, help_text='Skype password. It could be null.')
    status = models.BooleanField(default=True, help_text='It represents whether account is active or not.')
    phone_number = models.CharField(max_length=14, null=True, help_text='Phone number related to this account.'
                                                                        'It could be null')
    created_date = models.DateField(null=False, help_text='The date when the account is created.')
    suspended_date = models.DateField(null=True, help_text='The date when the account is suspended.')
    registered_date = models.DateTimeField(auto_now_add=True)
    recital = models.TextField(max_length=1000, null=True, help_text='May include zipcode, '
                                                                     'address and other information.')
    title = models.CharField(max_length=150, null=False, help_text='Title')
    overview = models.TextField(max_length=5000, null=False, help_text='Overview')
    deleted_at = models.DateTimeField(null=True, help_text='deleted date')

    country = models.ForeignKey(Country, null=True, on_delete=models.SET_NULL, help_text='')
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, help_text='Owner of account')
    site = models.ForeignKey(Site, null=True, on_delete=models.SET_NULL, help_text='Working site')

    is_payment_account = models.BooleanField(null=False, default=False, help_text='Indicates whether it is payment gateway account or not')

    pass
