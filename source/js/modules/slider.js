import '../vendor/swiper.js';

const trainers = document.querySelector('[data-trainers-swiper]');
const reviews = document.querySelector('[data-reviews-swiper]');

if (trainers) {

  const swiper = new Swiper(trainers, {
    direction: 'horizontal',
    loop: true,
    // loopedSlidesLimit: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesOffsetAfter: 30,
        slidesOffsetBefore: -30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesOffsetAfter: 56,
        slidesOffsetBefore: -56,
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

  const reviewsSwiper = new Swiper(reviews, {
    autoHeight: true,
    navigation: {
      nextEl: '.reviews-controls__button--next',
      prevEl: '.reviews-controls__button--prev',
    },
  });
}
