const gnb_btn = document.querySelector(".gnb_btn");
const all_menu_list = document.querySelector(".all-menu-list");
const nav_li = document.querySelectorAll(".gnb-list_box > li");
const notice_item = document.querySelectorAll(".notice-box .notice-item");
const notice_content = document.querySelectorAll(".main-news-notice-wrap .notice-content");

function addActive(item) {
  item.target.classList.toggle("active");
  console.log(item.target.classList);
  if (gnb_btn.classList.contains("active") == true) {
    all_menu_list.classList.add("active");
  } else {
    all_menu_list.classList.remove("active");
  }
}

nav_li.forEach(function (item, index) {
  item.addEventListener("mouseenter", function () {
    item.classList.add("active");
  }),
    item.addEventListener("mouseleave", function () {
      item.classList.remove("active");
    });
});

notice_item.forEach(function(item, index) {
  item.addEventListener("click", function(){
    notice_item.forEach(function(item){
      item.classList.remove("active");
    })
    this.classList.add("active");
    notice_content.forEach(function(item){
      item.classList.remove("active");
    })
    notice_content[index].classList.add("active");
  })
})


gnb_btn.addEventListener("click", addActive);

