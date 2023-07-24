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

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./css/style.css?");

/***/ }),

/***/ "./css/text-style.css":
/*!****************************!*\
  !*** ./css/text-style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./css/text-style.css?");

/***/ }),

/***/ "./src/handler/headerHandler.js":
/*!**************************************!*\
  !*** ./src/handler/headerHandler.js ***!
  \**************************************/
/***/ (() => {

eval("let height = 0\nwindow.onscroll = () => {\n    height = window.scrollY\n    if (height >= 402) {\n        document.querySelector(\"header\").classList.add(\"header-bg\")\n    } else if (height < 402) {\n        document.querySelector(\"header\").classList.remove(\"header-bg\")\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/headerHandler.js?");

/***/ }),

/***/ "./src/handler/imageHandler.js":
/*!*************************************!*\
  !*** ./src/handler/imageHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAttribute: () => (/* binding */ addAttribute),\n/* harmony export */   getImgDocument: () => (/* binding */ getImgDocument)\n/* harmony export */ });\n//i dont know how to name this function\n//simply this function selecting img element base on classname\nfunction getImgDocument(classname) {\n  return document.getElementsByClassName(classname);\n}\n\n//add alternative attribute on image document\nfunction addAlt({ document, alt, order }) {\n  if (alt) {\n    if (alt.length === 1) {\n      document[order].alt = alt[0];\n\n      return document;\n    }\n\n    document[order].alt = alt[order];\n  }\n  return document;\n}\n\n//add width size attribute on image document\nfunction addWidth({ document, size, order }) {\n  if (size) {\n    document[order].width = size;\n  }\n  return document;\n}\n\nfunction addAttribute({ document, size, alt, order }) {\n  document = addAlt({ document, order, alt });\n  document = addWidth({ document, order, size });\n\n  return document;\n}\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/imageHandler.js?");

/***/ }),

/***/ "./src/handler/load_img.js":
/*!*********************************!*\
  !*** ./src/handler/load_img.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loaders/img-loader.js */ \"./src/loaders/img-loader.js\");\n/* harmony import */ var _imageHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageHandler.js */ \"./src/handler/imageHandler.js\");\n\n\n\nfunction loadMultipleDocument({ document, source, alt, width }) {\n  let listOfDocument = [];\n  for (let i = 0; i < document.length; i++) {\n    if (source.length === 1) {\n      (0,_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: i });\n      document[i].src = source[0];\n      listOfDocument.push(document[i]);\n    } else {\n      (0,_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: i });\n      document[i].src = source[i];\n      listOfDocument.push(document[i]);\n    }\n  }\n  return listOfDocument;\n}\n\nfunction load_img({ classname, source = [], alt = false, width = false }) {\n  let document = (0,_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.getImgDocument)(classname);\n\n  if (document.length != 0) {\n    return loadMultipleDocument({ document, source, alt, width });\n  }\n\n  (0,_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: 0 });\n  return document[0];\n}\n//icon logo on header\n\nload_img({\n  classname: \"icon_logo\",\n  source: [_loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.Logo],\n  alt: [\"Icon logo\"],\n  width: 35,\n});\n\nload_img({\n  classname: \"banner_img\",\n  source: [_loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.BannerPicture],\n  alt: [\"Banner Image\"],\n});\n\nload_img({\n  classname: \"card-services_image\",\n  source: [\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_1,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_2,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_3,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_4,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_5,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_6,\n  ],\n  alt: [\n    \"figma icon\",\n    \"code icon\",\n    \"chart icon\",\n    \"record icon\",\n    \"Medium Icon\",\n    \"Pen Icon\",\n  ],\n});\n\nload_img({\n  classname: \"portofolio-card_image\",\n  source: [\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_1,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_2,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_3,\n  ],\n  alt: [\"ProjectPicture 1\", \"ProjectPicture 2\", \"ProjectPicture 3\"],\n});\n\nload_img({\n  classname: \"profile-img\",\n  source: [_loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.Profile_1, _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.Profile_2, _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.Profile_3],\n  alt: [\"Image Profile 1\", \"Image Profile 2\", \"Image Profile 3\"],\n});\n\nload_img({\n  classname: \"footer-icon\",\n  source: [\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.facebookLogo,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.twitterLogo,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.instagramLogo,\n    _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.linkedInLogo,\n  ],\n  alt: [\"facebook logo\", \"twitter logo\", \"instagram logo\", \"linkedin logo\"],\n  width: 32,\n});\n\nload_img({\n  classname: \"btn-icon\",\n  source: [_loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.ArrowIcon],\n  alt: [\"arrow icon\"],\n});\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/load_img.js?");

/***/ }),

/***/ "./src/handler/navHandler.js":
/*!***********************************!*\
  !*** ./src/handler/navHandler.js ***!
  \***********************************/
/***/ (() => {

eval("for (let i = 0; i < document.getElementsByClassName(\"nav-btn\").length; i++) {\n    document.getElementsByClassName(\"nav-btn\")[i].addEventListener(\"click\", () => {\n        switch (i) {\n            case 0:\n                window.scrollTo({\n                    top: 0,\n                    behavior: \"smooth\"\n                })\n                break;\n            case 1:\n                window.scrollTo({\n                    top: 1350,\n                    behavior: \"smooth\"\n                })\n                break;\n            case 2:\n                window.scrollTo({\n                    top: 2175,\n                    behavior: \"smooth\"\n                })\n                break;\n            case 3:\n                window.scrollTo({\n                    top: 2675,\n                    behavior: \"smooth\"\n                })\n                break;\n            case 4:\n                window.scrollTo({\n                    top: 3145,\n                    behavior: \"smooth\"\n                })\n                break;\n        }\n    })\n}\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/navHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_text_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/text-style.css */ \"./css/text-style.css\");\n/* harmony import */ var _handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/headerHandler.js */ \"./src/handler/headerHandler.js\");\n/* harmony import */ var _handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler/navHandler.js */ \"./src/handler/navHandler.js\");\n/* harmony import */ var _handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _handler_load_img_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler/load_img.js */ \"./src/handler/load_img.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/index.js?");

/***/ }),

/***/ "./src/loaders/img-loader.js":
/*!***********************************!*\
  !*** ./src/loaders/img-loader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArrowIcon: () => (/* reexport default export from named module */ asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_18__),\n/* harmony export */   BannerPicture: () => (/* reexport default export from named module */ asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   Logo: () => (/* reexport default export from named module */ asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   Profile_1: () => (/* reexport default export from named module */ asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__),\n/* harmony export */   Profile_2: () => (/* reexport default export from named module */ asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__),\n/* harmony export */   Profile_3: () => (/* reexport default export from named module */ asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__),\n/* harmony export */   ProjectPicture_1: () => (/* reexport default export from named module */ asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__),\n/* harmony export */   ProjectPicture_2: () => (/* reexport default export from named module */ asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__),\n/* harmony export */   ProjectPicture_3: () => (/* reexport default export from named module */ asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__),\n/* harmony export */   ServiceIcon_1: () => (/* reexport default export from named module */ asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   ServiceIcon_2: () => (/* reexport default export from named module */ asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   ServiceIcon_3: () => (/* reexport default export from named module */ asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   ServiceIcon_4: () => (/* reexport default export from named module */ asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   ServiceIcon_5: () => (/* reexport default export from named module */ asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   ServiceIcon_6: () => (/* reexport default export from named module */ asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__),\n/* harmony export */   facebookLogo: () => (/* reexport default export from named module */ asset_facebookLogo_svg__WEBPACK_IMPORTED_MODULE_14__),\n/* harmony export */   instagramLogo: () => (/* reexport default export from named module */ asset_InstagramLogo_svg__WEBPACK_IMPORTED_MODULE_15__),\n/* harmony export */   linkedInLogo: () => (/* reexport default export from named module */ asset_LinkedInLogo_svg__WEBPACK_IMPORTED_MODULE_17__),\n/* harmony export */   twitterLogo: () => (/* reexport default export from named module */ asset_twitterLogo_svg__WEBPACK_IMPORTED_MODULE_16__)\n/* harmony export */ });\n/* harmony import */ var asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! asset/Logo .svg */ \"./asset/Logo .svg\");\n/* harmony import */ var asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! asset/BannerPicture.svg */ \"./asset/BannerPicture.svg\");\n/* harmony import */ var asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! asset/ServicesFigma.svg */ \"./asset/ServicesFigma.svg\");\n/* harmony import */ var asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! asset/ServicesCode.svg */ \"./asset/ServicesCode.svg\");\n/* harmony import */ var asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! asset/ServicesBranding.svg */ \"./asset/ServicesBranding.svg\");\n/* harmony import */ var asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! asset/ServicesEditing.svg */ \"./asset/ServicesEditing.svg\");\n/* harmony import */ var asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! asset/ServicesMedium.svg */ \"./asset/ServicesMedium.svg\");\n/* harmony import */ var asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! asset/ServicesPen.svg */ \"./asset/ServicesPen.svg\");\n/* harmony import */ var asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! asset/ProjectPicture-1.svg */ \"./asset/ProjectPicture-1.svg\");\n/* harmony import */ var asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! asset/ProjectPicture-2.svg */ \"./asset/ProjectPicture-2.svg\");\n/* harmony import */ var asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! asset/ProjectPicture-3.svg */ \"./asset/ProjectPicture-3.svg\");\n/* harmony import */ var asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! asset/ProfilePicture-1.png */ \"./asset/ProfilePicture-1.png\");\n/* harmony import */ var asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! asset/ProfilePicture-2.png */ \"./asset/ProfilePicture-2.png\");\n/* harmony import */ var asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! asset/ProfilePicture-3.png */ \"./asset/ProfilePicture-3.png\");\n/* harmony import */ var asset_facebookLogo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! asset/facebookLogo.svg */ \"./asset/facebookLogo.svg\");\n/* harmony import */ var asset_InstagramLogo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! asset/InstagramLogo.svg */ \"./asset/InstagramLogo.svg\");\n/* harmony import */ var asset_twitterLogo_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! asset/twitterLogo.svg */ \"./asset/twitterLogo.svg\");\n/* harmony import */ var asset_LinkedInLogo_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! asset/LinkedInLogo.svg */ \"./asset/LinkedInLogo.svg\");\n/* harmony import */ var asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! asset/ArrowRight.svg */ \"./asset/ArrowRight.svg\");\n//logo header\n\n//image banner\n\n//image card services\n\n\n\n\n\n\n//load project image\n\n\n\n//load profile image\n\n\n\n\n\n\n\n\n\n\n\n\n\n//i still dont know how to refactoring this code :(\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/loaders/img-loader.js?");

/***/ }),

/***/ "./asset/ArrowRight.svg":
/*!******************************!*\
  !*** ./asset/ArrowRight.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ArrowRight.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ArrowRight.svg?");

/***/ }),

/***/ "./asset/BannerPicture.svg":
/*!*********************************!*\
  !*** ./asset/BannerPicture.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/BannerPicture.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/BannerPicture.svg?");

/***/ }),

/***/ "./asset/InstagramLogo.svg":
/*!*********************************!*\
  !*** ./asset/InstagramLogo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/InstagramLogo.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/InstagramLogo.svg?");

/***/ }),

/***/ "./asset/LinkedInLogo.svg":
/*!********************************!*\
  !*** ./asset/LinkedInLogo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/LinkedInLogo.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/LinkedInLogo.svg?");

/***/ }),

/***/ "./asset/Logo .svg":
/*!*************************!*\
  !*** ./asset/Logo .svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Logo .svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/Logo_.svg?");

/***/ }),

/***/ "./asset/ProfilePicture-1.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProfilePicture-1.png\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProfilePicture-1.png?");

/***/ }),

/***/ "./asset/ProfilePicture-2.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProfilePicture-2.png\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProfilePicture-2.png?");

/***/ }),

/***/ "./asset/ProfilePicture-3.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProfilePicture-3.png\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProfilePicture-3.png?");

/***/ }),

/***/ "./asset/ProjectPicture-1.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-1.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProjectPicture-1.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProjectPicture-1.svg?");

/***/ }),

/***/ "./asset/ProjectPicture-2.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-2.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProjectPicture-2.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProjectPicture-2.svg?");

/***/ }),

/***/ "./asset/ProjectPicture-3.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-3.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ProjectPicture-3.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ProjectPicture-3.svg?");

/***/ }),

/***/ "./asset/ServicesBranding.svg":
/*!************************************!*\
  !*** ./asset/ServicesBranding.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesBranding.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesBranding.svg?");

/***/ }),

/***/ "./asset/ServicesCode.svg":
/*!********************************!*\
  !*** ./asset/ServicesCode.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesCode.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesCode.svg?");

/***/ }),

/***/ "./asset/ServicesEditing.svg":
/*!***********************************!*\
  !*** ./asset/ServicesEditing.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesEditing.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesEditing.svg?");

/***/ }),

/***/ "./asset/ServicesFigma.svg":
/*!*********************************!*\
  !*** ./asset/ServicesFigma.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesFigma.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesFigma.svg?");

/***/ }),

/***/ "./asset/ServicesMedium.svg":
/*!**********************************!*\
  !*** ./asset/ServicesMedium.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesMedium.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesMedium.svg?");

/***/ }),

/***/ "./asset/ServicesPen.svg":
/*!*******************************!*\
  !*** ./asset/ServicesPen.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ServicesPen.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/ServicesPen.svg?");

/***/ }),

/***/ "./asset/facebookLogo.svg":
/*!********************************!*\
  !*** ./asset/facebookLogo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/facebookLogo.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/facebookLogo.svg?");

/***/ }),

/***/ "./asset/twitterLogo.svg":
/*!*******************************!*\
  !*** ./asset/twitterLogo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/twitterLogo.svg\";\n\n//# sourceURL=webpack://bubble-bash-landing-page/./asset/twitterLogo.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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