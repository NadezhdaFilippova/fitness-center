import '../vendor/swiper.js';

console.log('hello world');

const sliders = document.querySelector('.swiper');
const reviews = document.querySelector('[data-reviews-swiper]');

if (sliders) {

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    // resizeObserver: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


if (reviews) {

  const reviewsSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // loop: false,
    autoHeight: true,
    loopAdditionalSlides: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
