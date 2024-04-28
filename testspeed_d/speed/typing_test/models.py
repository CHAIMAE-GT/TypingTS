from django.db import models
from django.contrib.auth.models import User
from django.db import models

class DifficultySelector(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class CustomText(models.Model):
    text = models.TextField()

    def __str__(self):
        return f"Custom Text {self.id}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add additional fields as needed

    def __str__(self):
        return self.user.username
