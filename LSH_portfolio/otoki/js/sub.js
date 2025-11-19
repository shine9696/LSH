//lang 메뉴
const btn = document.querySelector(".lang p > a");
const con = document.querySelector(".lang_menu");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  con.classList.toggle("on");
});

AOS.init({
  //offset: 120,
  delay: 0,
  easing: "ease",
  duration: 500,
  once: false,
});

//btn_top
document.querySelector(".btn_top a").onclick = function (e) {
  e.preventDefault();
  function moveUp() {
    let now = window.pageYOffset;
    if (now > 0) {
      window.scrollTo(0, now - 200);
      requestAnimationFrame(moveUp);
    }
  }
  moveUp();
};

//btn_top 시작지점
window.addEventListener("scroll", function () {
  let btn = document.querySelector(".btn_top");
  let h3 = document.querySelector(".section02 > .box h3");
  let trigger = h3.offsetHeight;
  if (window.pageYOffset > trigger) {
    btn.classList.add("on");
  } else {
    btn.classList.remove("on");
  }
});

const tap = document.querySelector(".tap");
const tapTop = tap.offsetTop;
const tapHeight = tap.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= tapTop) {
    tap.classList.add("fixed");
    tap.classList.add("before-fixed");
    setTimeout(() => {
      tap.classList.remove("before-fixed");
    }, 10);
    tap.parentElement.style.paddingBottom = tapHeight + "px";
  } else {
    // 원래 위치로 돌아감
    tap.classList.remove("fixed");
    tap.classList.remove("before-fixed");
    tap.parentElement.style.paddingBottom = "0px";
  }
});
