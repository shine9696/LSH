var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  resizeObserver: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
AOS.init({
  duration: 800,
});
