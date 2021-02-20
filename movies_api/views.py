import json

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import requests
from omdb import URL


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
