export function hamburgerMenu(menu) {
  const $menu = document.getElementById(menu),
    $inputs = document.querySelectorAll(".input");
  $menu.classList.toggle("show");
  $inputs.forEach((el) => el.classList.toggle("z-i--1"));
}
