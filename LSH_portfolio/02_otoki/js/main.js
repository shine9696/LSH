//lang 메뉴
const btn = document.querySelector(".lang p > a");
const con = document.querySelector(".lang_menu");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  con.classList.toggle("on");
});

// swiper 기본설정
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: updateProgress,
  },
  speed: 1000,
});

const current = document.querySelector(".fraction .current");
const total = document.querySelector(".fraction .total");
const progressBar = document.querySelector(".progress-line span");
const btnPause = document.querySelector(".btn-pause");
const btnPlay = document.querySelector(".btn-play");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

// 전체 슬라이드 수 (loop 상태 고려)
const totalSlides = 6;
total.textContent = "06";

// 슬라이드 변경 시 숫자 & 진행바 업데이트
function updateProgress() {
  let realIndex = swiper.realIndex + 1;
  current.textContent = realIndex < 10 ? "0" + realIndex : realIndex;
  let percent = (realIndex / totalSlides) * 100;
  progressBar.style.width = percent + "%";
}

// 초기 실행
updateProgress();

// 재생/멈춤 버튼
btnPlay.style.display = "none";
btnPause.addEventListener("click", () => {
  swiper.autoplay.stop();
  btnPause.style.display = "none";
  btnPlay.style.display = "flex";
});
btnPlay.addEventListener("click", () => {
  swiper.autoplay.start();
  btnPlay.style.display = "none";
  btnPause.style.display = "flex";
});

// 이전/다음 버튼
btnNext.addEventListener("click", () => swiper.slideNext());
btnPrev.addEventListener("click", () => swiper.slidePrev());

const items = document.querySelectorAll(".section04 ul li");

items.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    items.forEach((el) => el.classList.remove("on"));
    this.classList.add("on");
  });
});

AOS.init({
  //offset: 120, 기본값
  delay: 0,
  easing: "ease out",
  duration: 500,
  once: false,
});
