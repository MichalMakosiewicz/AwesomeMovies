from django.db import models


class FavouriteMovie(models.Model):
    id = models.CharField(max_length=200, primary_key=True)
    title = models.CharField(max_length=100)
    year = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    poster = models.CharField(max_length=200)
