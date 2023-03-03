import Swiper, { Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Autoplay]);
const swiper = new Swiper(".team__content", {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  dots: true,
  navigation: {
    nextEl: ".team__slider-btn--next",
    prevEl: ".team__slider-btn--prev",
  },
  breakpoints: {
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const swiperHero = new Swiper(".hero__slider", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  dots: true,
  navigation: {
    nextEl: ".team__slider-btn--next",
    prevEl: ".team__slider-btn--prev",
  },
});
