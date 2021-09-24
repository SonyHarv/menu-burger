import { $ } from "./selector.js";

export default function menuBurger(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      $(panel).classList.toggle("is-active");
      $(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      $(panel).classList.remove("is-active");
      $(panelBtn).classList.remove("is-active");
    }
  });
}
