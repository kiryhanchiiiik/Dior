const swiperTop = new Swiper(".top__swiper", {
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll("accourderon__triger").forEach((item) => {
  item.addEvenListener("click", () => {
    item.parentNode.classList.toggle("accourderon__item--active");
  });
});
