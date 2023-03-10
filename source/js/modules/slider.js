const trainers = document.querySelector('[data-trainers-swiper]');
const reviews = document.querySelector('[data-reviews-swiper]');

trainers.classList.remove('no-js');

trainers.classList.remove('no-js');
const trainersSwiperParams = {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 0,
      initialSlide: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetAfter: 56,
      slidesOffsetBefore: -56,
      initialSlide: 2,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesOffsetAfter: 30,
      slidesOffsetBefore: -30,
      initialSlide: 2,
    },
  },
  navigation: {
    nextEl: '.trainers__button-slider--next',
    prevEl: '.trainers__button-slider--prev',
  },
};

const initTrainersSwiper = () => new Swiper(trainers, trainersSwiperParams);

initTrainersSwiper();

const slideDuplicates = document.querySelectorAll('.swiper-slide-duplicate');

slideDuplicates.forEach((item) => {
  item.removeAttribute('tabindex');
});


const initReviewsSwiper = () => new Swiper(reviews, {
  autoHeight: true,
  navigation: {
    nextEl: '.reviews-controls__button--next',
    prevEl: '.reviews-controls__button--prev',
  },
});

initReviewsSwiper();
