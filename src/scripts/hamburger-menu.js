// МЕНЮ-ГАМБУРГЕР
const burger = document.querySelector(".hamburger-menu");
const navBlock = document.querySelector(".header__menu");

burger.addEventListener("click", function() {
  burger.classList.toggle("active");
  navBlock.classList.toggle("header__menu_mobile");
  document.body.classList.toggle("hidden");
});