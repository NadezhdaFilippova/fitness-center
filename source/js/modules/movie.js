const movie = document.querySelector('.movie');
const link = movie.querySelector('.movie__link');
// const movieImage = movie.querySelector('.movie__back');
const playButton = movie.querySelector('.movie__button');
const id = '9TZXsZItgdw';

const generateUrl = (elem)=> {
  const query = '?autoplay=1&loop=1&&playlist=9TZXsZItgdw';
  return 'https://www.youtube.com/embed/' + elem + query;
};

const createIframe = (elem) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', generateUrl(elem));
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.classList.add('movie__back');

  return iframe;
};

const setupMovie = ()=> {

  movie.addEventListener('click', ()=> {
    const iframe = createIframe(id);
    link.remove();
    playButton.remove();
    movie.appendChild(iframe);
  });

  link.removeAttribute('href');
  movie.classList.add('movie--enabled');
};

const replaceMovie = ()=> {
  if (movie) {
    setupMovie();
  }
};


export {replaceMovie};
