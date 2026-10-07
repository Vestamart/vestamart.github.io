'use strict';

const flexMovie = document.querySelector('.flex-movie');

if (flexMovie) {
  const changeMovieState = () => {
    flexMovie.classList.toggle('is-active');
    flexMovie.setAttribute('aria-pressed', String(flexMovie.classList.contains('is-active')));
  };

  flexMovie.addEventListener('click', changeMovieState);
  flexMovie.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      changeMovieState();
    }
  });
}
