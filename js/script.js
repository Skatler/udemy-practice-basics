document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img');
  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    // eslint-disable-next-line no-unused-vars
    const favorite = checkbox.checked;

    if (newFilm) {
      movieDB.movies.push(newFilm);
      // eslint-disable-next-line no-use-before-define
      sortArr(movieDB.movies);
      // eslint-disable-next-line no-use-before-define
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'драмма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  function sortArr(arr) {
    arr.sort();
  }

  function createMovieList(films, parent) {
    parent.innerHTML = '';

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
        </li>
      `;
    });
  }
  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});
