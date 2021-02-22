import json

from .models import FavouriteMovie

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import requests
from omdb import URL
from django.core import serializers


class GetMoviesView(APIView):
    def get(self, request, s=None, page=None, y=None):
        try:
            response = requests.get(URL + generate_url(s, page, y))
        except requests.RequestException:
            return Response({"message": "Omdb request error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(json.loads(response.content), status=response.status_code)


def generate_url(s=None, page=None, y=None):
    parameters = ""
    if s:
        parameters += f"&s={s}"
    else:
        parameters += f"&s=eve"
    if page:
        parameters += f"&page={page}"
    if y:
        parameters += f"&y={y}"
    return parameters


class FavouritesView(APIView):

    def get(self, request):
        movies_instance = FavouriteMovie.objects.all()
        data = serializers.serialize('json', movies_instance)
        movies = []
        for movie_j in json.loads(data):
            movie = movie_j["fields"]
            movie["imdbID"] = movie_j["pk"]
            movies.append(movie)
        return Response(movies, status=status.HTTP_200_OK)

    def post(self, request):
        body_uni = request.body.decode('utf-8')
        body = json.loads(body_uni)
        print(body)
        content = body
        try:
            movie_id = content.get("movie_id")
            title = content.get("title")
            year = content.get("year")
            movie_type = content.get("type")
            poster = content.get("poster")
        except AttributeError:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        model_instance = FavouriteMovie(id=movie_id, title=title, year=year, type=movie_type, poster=poster)
        model_instance.save()
        return Response(status=status.HTTP_201_CREATED)
