import "./navHandler.js";

let height = 0;
window.onscroll = () => {
  height = window.scrollY;
  if (height >= 402) {
    document.querySelector("header").classList.add("header-bg");
    document.querySelector(".navbar-btn").classList.add("navbar-btn_black");
  } else if (height < 402) {
    document.querySelector("header").classList.remove("header-bg");
    document.querySelector(".navbar-btn").classList.remove("navbar-btn_black");
  }
};
