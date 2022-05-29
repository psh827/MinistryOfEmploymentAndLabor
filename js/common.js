const gnb_btn = document.querySelector(".gnb_btn");
const all_menu_list = document.querySelector(".all-menu-list");
const nav_li = document.querySelectorAll(".gnb-list_box > li");

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

gnb_btn.addEventListener("click", addActive);
// nav_li.addEventListener("mouseenter", addActive);
