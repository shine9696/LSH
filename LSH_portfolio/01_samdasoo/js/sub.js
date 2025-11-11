const btn = document.querySelector(".lang p > a");
const con = document.querySelector(".lang_menu");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  con.classList.toggle("on");
});
AOS.init({
  //offset: 120, 기본값
  delay: 1000,
  easing: "ease",
  duration: 1000,
  once: false,
});

const swiper = new Swiper(".subtxt", {
  slidesPerView: 1,
  speed: 800,
  navigation: {
    nextEl: ".bright",
    prevEl: ".bleft",
  },
});
