/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/css/style.css?");

/***/ }),

/***/ "./src/css/text-style.css":
/*!********************************!*\
  !*** ./src/css/text-style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/css/text-style.css?");

/***/ }),

/***/ "./src/handler/headerHandler.js":
/*!**************************************!*\
  !*** ./src/handler/headerHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navHandler.js */ \"./src/handler/navHandler.js\");\n/* harmony import */ var _navHandler_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navHandler_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet height = 0;\nwindow.onscroll = () => {\n  height = window.scrollY;\n  if (height >= 402) {\n    document.querySelector(\"header\").classList.add(\"header-bg\");\n    document.querySelector(\".navbar-btn\").classList.add(\"navbar-btn_black\");\n  } else if (height < 402) {\n    document.querySelector(\"header\").classList.remove(\"header-bg\");\n    document.querySelector(\".navbar-btn\").classList.remove(\"navbar-btn_black\");\n  }\n};\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/headerHandler.js?");

/***/ }),

/***/ "./src/handler/navHandler.js":
/*!***********************************!*\
  !*** ./src/handler/navHandler.js ***!
  \***********************************/
/***/ (() => {

eval("(function () {\n  let nav = document.querySelector(\"nav\");\n  let status_navbar = false;\n  let btn_navbar = document.getElementsByClassName(\"navbar-btn\")[0];\n\n  window.addEventListener(\"resize\", () => {\n    if (window.innerWidth <= 992) {\n      status_navbar = false;\n      navbarHandler(status_navbar);\n    } else if (window.innerWidth > 992) {\n      status_navbar = false;\n      nav.style.display = \"flex\";\n    }\n  });\n\n  btn_navbar.addEventListener(\"click\", () => {\n    status_navbar = !status_navbar;\n    navbarHandler(status_navbar);\n  });\n\n  function navbarHandler(status) {\n    if (status) {\n      nav.style.display = \"flex\";\n    } else {\n      nav.style.display = \"none\";\n    }\n  }\n  for (let i = 0; i < document.getElementsByClassName(\"nav-btn\").length; i++) {\n    document\n      .getElementsByClassName(\"nav-btn\")\n      [i].addEventListener(\"click\", () => {\n        switch (i) {\n          case 0:\n            window.scrollTo({\n              top: 0,\n              behavior: \"smooth\",\n            });\n            break;\n          case 1:\n            window.scrollTo({\n              top: 1350,\n              behavior: \"smooth\",\n            });\n            break;\n          case 2:\n            window.scrollTo({\n              top: 2175,\n              behavior: \"smooth\",\n            });\n            break;\n          case 3:\n            window.scrollTo({\n              top: 2675,\n              behavior: \"smooth\",\n            });\n            break;\n          case 4:\n            window.scrollTo({\n              top: 3145,\n              behavior: \"smooth\",\n            });\n            break;\n        }\n      });\n  }\n})();\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/navHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_text_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/text-style.css */ \"./src/css/text-style.css\");\n/* harmony import */ var _handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/headerHandler.js */ \"./src/handler/headerHandler.js\");\n\n\n\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;