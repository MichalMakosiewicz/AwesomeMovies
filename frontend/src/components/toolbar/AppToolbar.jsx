import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        color: "black"
    },
    title: {
        display: "flex",
        justifyContent: "right"
    },
    button1: {
        marginLeft: "5%",
        display: "flex",
        justifyContent: "center"
    },
    button2: {
        marginLeft: "10px",
        display: "flex",
        justifyContent: "center"
    }
}));


function AppToolbar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Awesome Movies
                    </Typography>
                    <Button className={classes.button1} color="inherit">Movies</Button>
                    <Button className={classes.button2} color="inherit">Favourites</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppToolbar;
