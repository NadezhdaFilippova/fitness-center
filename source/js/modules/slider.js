import '../vendor/swiper.js';
import {debounce} from '../utils/debounce';

const trainers = document.querySelector('[data-trainers-swiper]');
const reviews = document.querySelector('[data-reviews-swiper]');

const initTrainersSwiper = ()=> {
  trainers.classList.remove('no-js');

  const trainersSwiper = new Swiper(trainers, {
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesOffsetAfter: 56,
        slidesOffsetBefore: -56,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesOffsetAfter: 30,
        slidesOffsetBefore: -30,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const debouncedSwiper = debounce(initTrainersSwiper, 100);

window.addEventListener('resize', ()=> {
  // if (window.innerWidth >= 1200) {

    debouncedSwiper();
  // }
});

initTrainersSwiper();


if (reviews) {

  const reviewsSwiper = new Swiper(reviews, {
    autoHeight: true,
    navigation: {
      nextEl: '.reviews-controls__button--next',
      prevEl: '.reviews-controls__button--prev',
    },
  });
}
