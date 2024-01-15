export const menu = () => {
  let btns = document.querySelectorAll(".o-box--menu-btn");
  let btn = Array.prototype.slice.call(btns, 0);
  let menu = document.querySelector("#spMenu");
  function init() {
    if (menu.getAttribute("tabindex") != "-1") {
      for (var k = 0; k < btns.length; k++) {
        btns[k].classList.remove("is-open");
        btns[k].setAttribute("aria-expanded", "false");
        btns[k].setAttribute("aria-label", "menu open");
        btns[k].blur();
      }
      document.body.classList.remove("is-fixed");
      menu.setAttribute("tabindex", "-1");
      menu.setAttribute("aria-hidden", "true");
    }
  }
  function check() {
    if (menu.getAttribute("tabindex") == "-1") {
      for (var j = 0; j < btns.length; j++) {
        btns[j].classList.add("is-open");
        btns[j].setAttribute("aria-expanded", "true");
        btns[j].setAttribute("aria-label", "menu close");
      }
      document.body.classList.add("is-fixed");
      menu.setAttribute("tabindex", "");
      menu.setAttribute("aria-hidden", "false");
    } else {
      for (var k = 0; k < btns.length; k++) {
        btns[k].classList.remove("is-open");
        btns[k].setAttribute("aria-expanded", "false");
        btns[k].setAttribute("aria-label", "menu open");
        btns[k].blur();
      }
      document.body.classList.remove("is-fixed");
      menu.setAttribute("tabindex", "-1");
      menu.setAttribute("aria-hidden", "true");
    }
  }
  btn.forEach((target) => {
    target.addEventListener("click", () => {
      check();
    });
  });
  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("resize", () => {
    init();
  });
};
