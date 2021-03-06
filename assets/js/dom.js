export let movieList = null;
export let inputSearch = null;
export let triggerMode = false;

export const createElement = ({
  type,
  attrs,
  container = null,
  position = 'append',
  evt = null,
  handler = null
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key !== 'innerText') {
      el.setAttribute(key, attrs[key]);
    } else {
      el.innerHTML = attrs[key];
    }
  });

  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);
  if (evt && handler && typeof handler === 'function') el.addEventListener(evt, handler);

  return el;
};

export const createStyle = () => {
  const headStyle = document.createElement('style')

  headStyle.innerHTML = `
    * {box-sizing: border-box;}
  body {margin: 0;}
  .content {
    background-color: hsl(249, 9%, 44%);
    background-image: url('assets/img/fon.jpg');
    background-position: 85% 20%; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 2450px; 
    opacity: 0.95;
  }
  .container {
    font-family: Arial, "Helvetica Neue", sans-serif;
    padding: 20px;
    max-width: 1280px;
    margin: 0 auto;
  }
  .container h1 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 0px 0px 20px blue, 0px 0px 20px blue, 0px 0px 20px blue;
  }
  .search {
    margin-bottom: 30px;
  }
  .search__label-input {
    display: block;
    margin-bottom: 7px;
  }
  .search__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .search__input {
    display: block;
    padding: 10px 15px;
    width: 400px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .search__label-checkbox {
    display: block;
    font-size: 12px;
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .movie__image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }`;

  document.head.append(headStyle);
};

export const createStyleAnother = () => {
  const headStyle = document.createElement('style')

  headStyle.innerHTML = `
    * {box-sizing: border-box;}
  body {margin: 0;}
  .content {
    background-color: hsl(249, 9%, 44%);
    background-image: url('assets/img/fon.jpg');
    background-position: 37% 20%; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 1000px; 
    opacity: 0.95;
  }
  .container {
    font-family: Arial, "Helvetica Neue", sans-serif;
    padding: 20px;
    max-width: 1280px;
    margin: 0 auto;
  }
  .container h1 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 0px 0px 20px blue, 0px 0px 20px blue, 0px 0px 20px blue;
  }
  .search {
    margin-bottom: 30px;
  }
  .search__label-input {
    display: block;
    margin-bottom: 7px;
  }
  .search__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .search__input {
    display: block;
    padding: 10px 15px;
    width: 400px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .search__label-checkbox {
    display: block;
    font-size: 12px;
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .movie__image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }`;

  document.head.append(headStyle);
};

export const createStyleSecond = () => {
  const headStyle = document.createElement('style')

  headStyle.innerHTML = `
    * {box-sizing: border-box;}
  body {margin: 0;}
  .content {
    background-color: hsl(249, 9%, 44%);
    background-image: url('assets/img/fon.jpg');
    background-position: 85% 20%; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 1720px; 
    opacity: 0.95;
  }
  .container {
    font-family: Arial, "Helvetica Neue", sans-serif;
    padding: 20px;
    max-width: 1280px;
    margin: 0 auto;
  }
  .container h1 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 0px 0px 20px blue, 0px 0px 20px blue, 0px 0px 20px blue;
  }
  .search {
    margin-bottom: 30px;
  }
  .search__label-input {
    display: block;
    margin-bottom: 7px;
  }
  .search__wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .search__input {
    display: block;
    padding: 10px 15px;
    width: 400px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .search__label-checkbox {
    display: block;
    font-size: 12px;
  }
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .movie__image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }`;

  document.head.append(headStyle);
};

export const createMarkup = () => {
  const content = createElement({
    type: 'div',
    attrs: { class: 'content' },
    container: document.body,
    position: 'prepend'
  });

  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: content,
  });

  createElement({
    type: 'h1',
    attrs: { innerText: '???????????????????? ?????? ???????????? ??????????????' },
    container
  });

  const searchBox = createElement({
    type: 'div',
    attrs: { class: 'search' },
    container
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-input',
      for: 'search',
      innerText: '?????????? ??????????????'
    },
    container: searchBox
  });

  createElement({
    type: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      placeholder: '?????????????? ?????????????? ??????????...',
      type: 'text'
    },
    container: searchBox
  });

  const searchWrap = createElement({
    type: 'div',
    attrs: { class: 'search__wrap' },
    container: searchBox
  });

  createElement({
    type: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox'
    },
    container: searchWrap,
    evt: 'click',
    handler: () => triggerMode = !triggerMode
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-checkbox',
      for: 'checkbox',
      innerText: '?????????????????? ???????????? ?? ?????????????????????????? ????????????'
    },
    container: searchWrap
  });

  createElement({
    type: 'div',
    attrs: { class: 'movies' },
    container
  });

  movieList = document.querySelector('.movies');
  inputSearch = document.querySelector('#search');
};

export const clearMovieMarkup = (el) => el && (el.innerHTML = '');

export const addMovieList = (movie) => {
  const item = createElement({
    type: 'div',
    attrs: { class: 'movie' },
    container: movieList
  });

  createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/no-image-available.jpg',
      alt: movie.Title,
      title: movie.Title
    },
    container: item
  });
};