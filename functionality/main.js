"use strict";

const d = document;
const $ham_btn = d.querySelector(".ham-btn");
const $ham_icon = d.querySelector(".ham-icon");
const $close_icon = d.querySelector(".close-icon");
const $menu_background = d.querySelector(".menu-box-background");
const $menu = d.querySelector(".nav-bar .menu-box");

$ham_btn.addEventListener("click", () => {
  $ham_icon.classList.toggle("clicked");
  $close_icon.classList.toggle("clicked");
  $menu_background.classList.toggle("clicked");
  $menu.classList.toggle("clicked");
});
