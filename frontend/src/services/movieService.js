const url = "http://127.0.0.1:8000/api/";

export const getMoviesData = (name, page) => {
    let modifiedUrl = url + name + "/"
    if (page > 0) {
        modifiedUrl += page + "/"
    }
    return fetch(modifiedUrl).then((response) => {
        if (response.status === 200) {
            return response.body;
        } else {
            return false;
        }
    })
}
