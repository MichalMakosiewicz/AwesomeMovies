import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Movie from "../movie/Movie";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "40px",
        alignItems: "center",
        justifyContent: "center"
    }
}));


function Layout(props) {

    const classes = useStyles();

    const movies = props.movies.map((movie, key) => {
        return <Movie key={key} data={movie}/>
    });

    return (
        <div className={classes.root}>
            {movies}
        </div>
    );
}

export default Layout;
