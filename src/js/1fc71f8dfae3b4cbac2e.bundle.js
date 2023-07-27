(self["webpackChunkbubble_bash_landing_page"] = self["webpackChunkbubble_bash_landing_page"] || []).push([[179],{

/***/ 939:
/***/ (() => {

(function () {
  let nav = document.querySelector("nav");
  let status_navbar = false;
  let btn_navbar = document.getElementsByClassName("navbar-btn")[0];

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 992) {
      status_navbar = false;
      navbarHandler(status_navbar);
    } else if (window.innerWidth > 992) {
      status_navbar = false;
      nav.style.display = "flex";
    }
  });

  btn_navbar.addEventListener("click", () => {
    status_navbar = !status_navbar;
    navbarHandler(status_navbar);
  });

  function navbarHandler(status) {
    if (status) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }
  for (let i = 0; i < document.getElementsByClassName("nav-btn").length; i++) {
    document
      .getElementsByClassName("nav-btn")
      [i].addEventListener("click", () => {
        switch (i) {
          case 0:
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            break;
          case 1:
            window.scrollTo({
              top: 1350,
              behavior: "smooth",
            });
            break;
          case 2:
            window.scrollTo({
              top: 2175,
              behavior: "smooth",
            });
            break;
          case 3:
            window.scrollTo({
              top: 2675,
              behavior: "smooth",
            });
            break;
          case 4:
            window.scrollTo({
              top: 3145,
              behavior: "smooth",
            });
            break;
        }
      });
  }
})();


/***/ }),

/***/ 249:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/handler/navHandler.js
var navHandler = __webpack_require__(939);
;// CONCATENATED MODULE: ./src/handler/headerHandler.js


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

;// CONCATENATED MODULE: ./src/index.js





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(249));
/******/ }
]);