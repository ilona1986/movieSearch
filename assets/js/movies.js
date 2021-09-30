import {
    addMovieList,
    clearMovieMarkup,
    createMarkup,
    createStyle,
    inputSearch,
    movieList,
    triggerMode
} from "./dom.js";

let siteUrl = null;
let searchLast = null;
let count = 0;

const debounce = (() => {
    let timer = null;

    return (cb, ms) => {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(cb, ms)
    }
})();

const getData = (url) => fetch(url)
    .then((res) => res.json())
    .then((json) => {
        if (!json || !json.Search) throw Error('Сервер вернул неправильный объект.');
        return json.Search;
    });

const inputSearchHandler = (e) => {
    debounce(() => {
        const searchString = e.target.value.trim();

        if (searchString && searchString.length > 3 && searchLast !== searchString) {
            if (!triggerMode || count >= 3) {
                clearMovieMarkup(movieList);
                count = 0;
            }
            getData(`${siteUrl}?apikey=4ad12d14&s=${searchString}`)
                .then((movies) => movies.forEach(movie => addMovieList(movie)))
                .catch((err) => console.log(err));
        }
        count++;
        searchLast = searchString;
    }, 2000);
};

export const appInit = (url) => {
    createMarkup();
    createStyle();
    siteUrl = url;

    inputSearch.addEventListener('keyup', inputSearchHandler);
};