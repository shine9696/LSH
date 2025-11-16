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
  easing: "ease out",
  duration: 500,
  once: false,
});

//btn_top
document.querySelector(".btn_top a").onclick = function (e) {
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

// let tap = document.querySelector(".tap");
// let tapTop = tap.offsetTop; // tap의 원래 위치 Y값 저장

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset >= tapTop - 0) {
//     // 헤더 높이만큼 보정
//     tap.classList.add("fixed");
//   } else {
//     tap.classList.remove("fixed");
//   }
// });
const tap = document.querySelector(".tap");
const tapTop = tap.offsetTop;
const tapHeight = tap.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= tapTop) {
    // fixed 상태 부여 (항상 고정)
    tap.classList.add("fixed");

    // 처음 fixed될 때만 부드러운 등장 애니메이션
    tap.classList.add("before-fixed");
    setTimeout(() => {
      tap.classList.remove("before-fixed");
    }, 10);

    // 아래 콘텐츠가 튀지 않도록 빈 공간 유지
    tap.parentElement.style.paddingBottom = tapHeight + "px";
  } else {
    // 원래 위치로 돌아감
    tap.classList.remove("fixed");
    tap.classList.remove("before-fixed");
    tap.parentElement.style.paddingBottom = "0px";
  }
});
