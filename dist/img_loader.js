"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbubble_bash_landing_page"] = self["webpackChunkbubble_bash_landing_page"] || []).push([["img_loader"],{

/***/ "./src/handler/imageHandler.js":
/*!*************************************!*\
  !*** ./src/handler/imageHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAttribute: () => (/* binding */ addAttribute),\n/* harmony export */   getImgDocument: () => (/* binding */ getImgDocument)\n/* harmony export */ });\n//i dont know how to name this function\n//simply this function selecting img element base on classname\nfunction getImgDocument(classname) {\n  return document.getElementsByClassName(classname);\n}\n\n//add alternative attribute on image document\nfunction addAlt({ document, alt, order }) {\n  if (alt) {\n    if (alt.length === 1) {\n      document[order].alt = alt[0];\n\n      return document;\n    }\n\n    document[order].alt = alt[order];\n  }\n  return document;\n}\n\n//add width size attribute on image document\nfunction addWidth({ document, size, order }) {\n  if (size) {\n    document[order].width = size;\n  }\n  return document;\n}\n\nfunction addLazyLoading({ document, order }) {\n  document[order].loading = \"lazy\";\n  return document;\n}\n\nfunction addAttribute({ document, size, alt, order }) {\n  document = addAlt({ document, order, alt });\n  document = addWidth({ document, order, size });\n  document = addLazyLoading({ document, order });\n  return document;\n}\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/handler/imageHandler.js?");

/***/ }),

/***/ "./src/loaders/load_img.js":
/*!*********************************!*\
  !*** ./src/loaders/load_img.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-loader */ \"./src/loaders/img-loader.js\");\n/* harmony import */ var _handler_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handler/imageHandler.js */ \"./src/handler/imageHandler.js\");\n\n\n\nfunction loadMultipleDocument({ document, source, alt, width }) {\n  let listOfDocument = [];\n  for (let i = 0; i < document.length; i++) {\n    if (source.length === 1) {\n      (0,_handler_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: i });\n      document[i].src = source[0];\n      listOfDocument.push(document[i]);\n    } else {\n      (0,_handler_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: i });\n      document[i].src = source[i];\n      listOfDocument.push(document[i]);\n    }\n  }\n  return listOfDocument;\n}\n\nfunction load_img({ classname, source = [], alt = false, width = false }) {\n  let document = (0,_handler_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.getImgDocument)(classname);\n\n  if (document.length != 0) {\n    return loadMultipleDocument({ document, source, alt, width });\n  }\n\n  (0,_handler_imageHandler_js__WEBPACK_IMPORTED_MODULE_1__.addAttribute)({ document: document, size: width, alt: alt, order: 0 });\n  return document[0];\n}\n//icon logo on header\n\nload_img({\n  classname: \"icon_logo\",\n  source: [_img_loader__WEBPACK_IMPORTED_MODULE_0__.Logo],\n  alt: [\"Icon logo\"],\n  width: 35,\n});\n\nload_img({\n  classname: \"banner_img\",\n  source: [_img_loader__WEBPACK_IMPORTED_MODULE_0__.BannerPicture],\n  alt: [\"Banner Image\"],\n});\n\nload_img({\n  classname: \"card-services_image\",\n  source: [\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_1,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_2,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_3,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_4,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_5,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ServiceIcon_6,\n  ],\n  alt: [\n    \"figma icon\",\n    \"code icon\",\n    \"chart icon\",\n    \"record icon\",\n    \"Medium Icon\",\n    \"Pen Icon\",\n  ],\n});\n\nload_img({\n  classname: \"portofolio-card_image\",\n  source: [\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_1,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_2,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.ProjectPicture_3,\n  ],\n  alt: [\"ProjectPicture 1\", \"ProjectPicture 2\", \"ProjectPicture 3\"],\n});\n\nload_img({\n  classname: \"profile-img\",\n  source: [_img_loader__WEBPACK_IMPORTED_MODULE_0__.Profile_1, _img_loader__WEBPACK_IMPORTED_MODULE_0__.Profile_2, _img_loader__WEBPACK_IMPORTED_MODULE_0__.Profile_3],\n  alt: [\"Image Profile 1\", \"Image Profile 2\", \"Image Profile 3\"],\n});\n\nload_img({\n  classname: \"footer-icon\",\n  source: [\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.facebookLogo,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.twitterLogo,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.instagramLogo,\n    _img_loader__WEBPACK_IMPORTED_MODULE_0__.linkedInLogo,\n  ],\n  alt: [\"facebook logo\", \"twitter logo\", \"instagram logo\", \"linkedin logo\"],\n  width: 32,\n});\n\nload_img({\n  classname: \"btn-icon\",\n  source: [_img_loader__WEBPACK_IMPORTED_MODULE_0__.ArrowIcon],\n  alt: [\"arrow icon\"],\n});\n\n\n//# sourceURL=webpack://bubble-bash-landing-page/./src/loaders/load_img.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loaders/load_img.js"));
/******/ }
]);