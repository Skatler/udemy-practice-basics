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
const promoTitle = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');

blockAdvertisement.remove();

promoTitle.textContent = 'ДРАМА';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
});
