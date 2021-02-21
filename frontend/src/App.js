import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppToolbar from "./components/toolbar/AppToolbar";
import Search from "./components/search/Search";
import Layout from "./components/layout/Layout";
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        margin: "40px"
    }
}));


function App() {
    const classes = useStyles();

    const [page, setPage] = useState(1);
    const [searchName, setSearchName] = useState("eve");
    const [moviesList, setMoviesList] = useState([]);
    const [pagesAmmount, setPagesAmmount] = useState(1);

    useEffect(() => {
        getData()
    }, []);

    const getPage = (event, pageNum) => {
        setPage(pageNum + 1);
        getData();
    }

    const getData = () => {
        const url = "http://127.0.0.1:8000/api/movies/";
        let modifiedUrl = url + searchName + "/"
        if (page > 0) {
            modifiedUrl += page + "/"
        }
        fetch(modifiedUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setMoviesList(data['Search']);
                setPagesAmmount(Math.ceil((parseInt(data['totalResults']) / 10)));
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className={classes.root}>
            <AppToolbar/>
            <Search name={searchName} setName={setSearchName} getData={getData}/>
            <Layout movies={moviesList}/>
            <Pagination onChange={getPage} className={classes.pagination} count={pagesAmmount} showFirstButton showLastButton/>
        </div>
    );
}

export default App;
