class Sliders {
  private readonly sliders = [
    {
      selector: "#testimonials-slider",
      options: {
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
      },
    },
    {
      selector: "#services-slider",
      options: {
        speed: 1200,
        spaceBetweem: 20,
        pagination: {
          el: ".services-slider__pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        },
        navigation: {
          prevEl: ".services-slider__prev-button",
          nextEl: ".services-slider__next-button",
        },
        breakpoints: {
          0: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 3.1,
          },
          1360: {
            spaceBetween: 20,
            slidesPerView: 4.02,
          },
        },
      },
    },
  ];

  constructor() {
    this.initSliders();
  }

  initSliders() {
    this.sliders.forEach(slider => {
      if (document.querySelector(slider.selector)) {
        //@ts-expect-error Swiper is connected globally
        if (typeof Swiper !== "undefined") {
          //@ts-expect-error Swiper is connected globally
          new Swiper(slider.selector, slider.options);
        }
      }
    });
  }
}

export default Sliders;
