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
  duration: 800,
  once: false,
});

const swiper = new Swiper(".subtxt", {
  slidesPerView: 3,
  speed: 800,
  navigation: {
    nextEl: ".bright",
    prevEl: ".bleft",
  },
});
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 600) {
    document.querySelector(".top").style.backgroundColor =
      "rgba(255,255,255,0.8)";
  } else {
    document.querySelector(".top").style.backgroundColor = "transparent";
  }
};
//scrollup 버튼
document.querySelector(".scrollup a").onclick = function (e) {
  e.preventDefault();
  function moveUp() {
    let now = window.pageYOffset;
    if (now > 0) {
      window.scrollTo(0, now - 100);
      requestAnimationFrame(moveUp);
    }
  }
  moveUp();
};
