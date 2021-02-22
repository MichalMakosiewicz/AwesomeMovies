import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../layout/Layout";


const useStyles = makeStyles((theme) => ({
    root: {
        color: "black"
    }
}));


function Favourites(props) {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getFavourites();
    }, [])

    const getFavourites = () => {
        fetch("http://127.0.0.1:8000/api/favourite/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log("succ")
                setMovies(mapMovies(data))
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const mapMovies = (movies) => {
        return movies.map((movie) => {
            return {
                "Title": movie.title,
                "Year": movie.year,
                "imdbID": movie.imdbID,
                "Type": movie.type,
                "Poster": movie.poster
            }
        })
    }

    return (
        <div className={classes.root}>
            <Layout movies={movies}/>
        </div>
    );
}

export default Favourites;
