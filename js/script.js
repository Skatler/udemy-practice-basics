const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

const blockAdvertisement = document.querySelector('.promo__advertisement');
blockAdvertisement.remove();

const promoTitle = document.querySelector('.promo__genre');
promoTitle.textContent = 'ДРАМА';

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
});
