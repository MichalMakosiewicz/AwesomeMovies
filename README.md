# AwesomeMovies

My implementation of movies aplication based on OMDb.

## Requirements

```
Docker:            20.10.3
docekr-compose:    1.25.0
node.js:           v14.15.4
```

## Setup

1. Clone repository
2. in ./ (root dir for project) run comands:
    ```
    sudo docker-compose build
    sudo docker-compose up
    ```
    (keep terminal running)
    
    Then in new terminal:
    ```
    sudo docker exec -it awesomemovies_web_1 python manage.py migrate
    sudo docker exec -it awesomemovies_web_1 python manage.py makemigrations
    sudo docker exec -it awesomemovies_web_1 python manage.py migrate
    ```
3. in another terminal go to `/frontend`
4. run commands
  ```
  npm install
  npm run start
  ```
5. The app should start on `http://localhost:3000/`
