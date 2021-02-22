import React from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {CardActions, CardMedia, IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        backgroundColor: "#F5F5F5",
        margin: "10px"
    },
    header: {
        height: "70px"
    },
    media: {
        height: 400,
    },
    like: {
        justifyContent: "center"
    }
}));


function Movie(props) {

    const classes = useStyles();

    const addToFavourites = () => {
        fetch("http://127.0.0.1:8000/api/favourite/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": props.data.Title,
                "year": props.data.Year,
                "movie_id": props.data.imdbID,
                "type": props.data.Type,
                "poster": props.data.Poster
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.data.Title}
                subheader={props.data.Year}
                className={classes.header}>
            </CardHeader>
            <CardMedia
                className={classes.media}
                image={props.data.Poster}
                title="Paella dish"
            />
            <CardActions
                className={classes.like}
                disableSpacing>
                <IconButton onClick={addToFavourites} aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>

        </Card>
    );
}

export default Movie;
