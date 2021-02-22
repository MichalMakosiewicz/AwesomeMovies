from django.urls import path
from movies_api.views import GetMoviesView, FavouritesView

urlpatterns = [
    path('movies/', GetMoviesView.as_view()),
    path('movies/<str:s>/', GetMoviesView.as_view()),
    path('movies/<str:s>/<int:page>/', GetMoviesView.as_view()),
    path('movies/<str:s>/<int:page>/<int:y>/', GetMoviesView.as_view()),
    path('favourite/', FavouritesView.as_view()),
]
