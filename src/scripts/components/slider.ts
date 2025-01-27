// @ts-ignore
import Swiper, { Navigation, Pagination, A11y } from "swiper";

export default function initSliders() {
  const testimonialsSliderElement = document.getElementById("testimonials-slider");
  if (testimonialsSliderElement) {
    new Swiper(testimonialsSliderElement, {
      modules: [Navigation, Pagination, A11y],
      speed: 1200,

      pagination: {
        el: ".testimonials__pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".testimonials__prev-button",
        nextEl: ".testimonials__next-button",
      },

      breakpoints: {
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },

        640: {
          spaceBetween: 16,
          slidesPerView: 2,
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        1200: {
          spaceBetween: 80,
          slidesPerView: 3,
        },
      },
    });
  }
}
