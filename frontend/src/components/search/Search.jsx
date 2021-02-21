import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
    },
    year: {
        marginLeft: "10px",
        colorSecondary: "00897b"
    },
    searchButton: {
        marginLeft: "20px"
    },
}));

function Search(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                color="secondary"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={props.name}
                onChange={e => props.setName(e.currentTarget.value)}/>
            <Button
                className={classes.searchButton}
                color="inherit"
                onClick={props.getData}>Search</Button>
        </div>
    );
}

export default Search;
