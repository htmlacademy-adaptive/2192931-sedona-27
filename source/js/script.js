const menuBtn = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("main-nav__list--active");
  menuBtn.classList.toggle("main-nav__toggle--active");
});

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
