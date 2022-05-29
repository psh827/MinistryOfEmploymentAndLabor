let totalNum = document.querySelectorAll(".swiper-slide").length;

const nowIndexText = document.querySelector(".now-index");
const totalLengText = document.querySelector(".total-leng");
totalLengText.innerText = totalNum;
var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
let nowIndex = 1;
nowIndexText.innerText = nowIndex;
mySwiper.on("slideChange", function () {
  nowIndex++;
  nowIndexText.innerText = nowIndex;
  if (nowIndex > 13) {
    nowIndex = 1;
  }
});
$(".swiper-auto-play").on("click", function () {
  if ($(this).hasClass("pause")) {
    console.log("hello");
    $(this).removeClass("pause");
    mySwiper.autoplay.stop();
    return false;
  } else {
    $(this).addClass("pause");
    mySwiper.autoplay.start();
    return false;
  }
});
