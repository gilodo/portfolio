// МЕНЮ-ГАМБУРГЕР
const burger = document.querySelector(".hamburger-menu");
const navBlock = document.querySelector(".nav");

burger.addEventListener("click", function() {
  burger.classList.toggle("active");
  navBlock.classList.toggle("active");
  document.body.classList.toggle("hidden");
});