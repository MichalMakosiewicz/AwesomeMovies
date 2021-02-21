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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>

        </Card>
);
}

export default Movie;
