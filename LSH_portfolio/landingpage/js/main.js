const gnb = document.querySelector(".gnb-wrap");
const section01 = document.querySelector(".section01");

window.addEventListener("scroll", () => {
  const triggerPoint = section01.offsetTop - 100; // section01 시작 100px 전 지점
  const scrollY = window.scrollY;

  if (scrollY >= triggerPoint) {
    // fixed + 애니메이션
    gnb.classList.add("gnb-fixed");

    setTimeout(() => {
      gnb.classList.add("show");
    }, 10);
  } else {
    // 원래 위치로
    gnb.classList.remove("gnb-fixed", "show");
  }
});

// 메뉴 fixed
window.addEventListener("scroll", () => {
  const triggerPoint = section01.offsetTop - 100;
  const scrollY = window.scrollY;

  if (scrollY >= triggerPoint) {
    gnb.classList.add("gnb-fixed");
    setTimeout(() => gnb.classList.add("show"), 10);
  } else {
    gnb.classList.remove("gnb-fixed", "show");
  }
});

let cinematicPlayed = true; // 효과 한 번만 재생
let isAnimating = false;

const landing = document.querySelector(".landing");

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollBar: false,
  navigation: true,
  verticalCentered: false,
  fixedElements: ".gnb-wrap",
});
