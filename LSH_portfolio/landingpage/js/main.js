new fullpage("#fullpage", {
  autoScrolling: true,
  scrollBar: false,
  navigation: true,
  verticalCentered: false,
  fixedElements: ".gnb-wrap",
});

// AOS.init({ once: false });
// const sectionLength = $(".section").length;
// $("#fullpage").fullpage({
//   verticalCentered: false,
//   //scrollbar: true,
//   navigation: true,
//   css3: true,
//   navigationPosition: "right",
//   afterLoad: function (anchorLink, index) {
//     $("[data-aos]").removeClass("aos-animate");

//     // 현재 섹션만 애니메이션 실행
//     $(".section")
//       .eq(index - 1)
//       .find("[data-aos]")
//       .addClass("aos-animate");
//   },
// });
