const btn = document.querySelector(".lang p > a");
const con = document.querySelector(".lang_menu");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  con.classList.toggle("on");
});
let page = document.querySelectorAll("#page ul li");
page.forEach(function (v, k) {
  v.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(`#section0${k + 1}`);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
let section = document.querySelector("section").clientHeight;
function pageinit() {
  page.forEach(function (v) {
    v.querySelector("a").classList.remove("onblue", "onwhite");
  });
}
let ht = document.documentElement.scrollTop;
//console.log(section);
if (ht < section) {
  page.forEach(function (v) {
    v.querySelector("a").classList.add("onborder");
    page[0].querySelector("a").classList.add("onblue");
  });
}
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(3 * section);
  pageinit();
  if (ht < section) {
    page[0].querySelector("a").classList.add("onblue");
    page.forEach(function (v) {
      v.querySelector("a").classList.add("onborder");
      page[0].querySelector("a").classList.add("onblue");
    });
  } else if (ht >= section && ht < 2 * section) {
    page[1].querySelector("a").classList.add("onwhite");
    page.forEach(function (v) {
      v.querySelector("a").classList.remove("onborder");
      document.querySelector(".water img").style.opacity = 14;
    });
  } else if (ht >= 2 * section && ht < 3 * section) {
    page[2].querySelector("a").classList.add("onwhite");
    document.querySelector(".water img").style.opacity = 0;
  } else if (ht >= 3 * section) {
    page[3].querySelector("a").classList.add("onwhite");
  }
};
document.querySelector(".menu_open").onclick = function (e) {
  e.preventDefault();
  document.querySelector("nav").style.left = 0;
};
document.querySelector(".close").onclick = function () {
  document.querySelector("nav").style.left = "100%";
};

AOS.init({
  //offset: 120, 기본값
  delay: 1000,
  easing: "ease",
  duration: 1000,
  once: false,
});

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
