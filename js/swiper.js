let totalNum = document.querySelectorAll(".main-area-slide .swiper-slide").length;

const nowIndexText = document.querySelector(".now-index");
const totalLengText = document.querySelector(".total-leng");
totalLengText.innerText = totalNum;
var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next.swiper-btn",
    prevEl: ".swiper-button-prev.swiper-btn",
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
  nowIndexText.innerText = this.realIndex + 1;
});

var mysecondSwiper = new Swiper(".swiper-container2", {
  slidesPerView: 5,
  spaceBetween: 24,
  navigation: {
    nextEl: ".banner-wrap .swiper-button-next.custom1",
    prevEl: ".banner-wrap .swiper-button-prev.custom1",
  },
  speed: 3000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    reverseDirection: true,
  }
});

$(".swiper-auto-play").each(function(){
  $(this).click(function(){
    if ($(this).hasClass("pause")) {
      console.log("true");
      $(this).removeClass("pause");
      mysecondSwiper.autoplay.stop();
      return false;
    } else {
      $(this).addClass("pause");
      mysecondSwiper.autoplay.start();
      return false;
    }
  })
})
