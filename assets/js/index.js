import menuBurger from "./menu-burger.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuBurger(".panel-btn", ".panel", ".menu a");
});
