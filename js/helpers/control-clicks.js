import { hamburgerMenu } from "./hamburger-menu.js";
import { notReadyYet } from "./not-able-yet.js";

export function controlClicks() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".icon-menu *") || e.target.matches(".icon-menu")) {
      hamburgerMenu("menu-hidden");
    }
    if (e.target.matches("#download-app") || e.target.matches("#add-a-song")) {
      notReadyYet();
    }
  });
}
