/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/text-style.css":
/*!****************************!*\
  !*** ./css/text-style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/load_img.js":
/*!*************************!*\
  !*** ./src/load_img.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/Logo .svg */ "./asset/Logo .svg");
/* harmony import */ var _asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/BannerPicture.svg */ "./asset/BannerPicture.svg");
/* harmony import */ var _asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/ServicesFigma.svg */ "./asset/ServicesFigma.svg");
/* harmony import */ var _asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/ServicesCode.svg */ "./asset/ServicesCode.svg");
/* harmony import */ var _asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/ServicesBranding.svg */ "./asset/ServicesBranding.svg");
/* harmony import */ var _asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/ServicesEditing.svg */ "./asset/ServicesEditing.svg");
/* harmony import */ var _asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asset/ServicesMedium.svg */ "./asset/ServicesMedium.svg");
/* harmony import */ var _asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asset/ServicesPen.svg */ "./asset/ServicesPen.svg");
/* harmony import */ var _asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/ProjectPicture-1.svg */ "./asset/ProjectPicture-1.svg");
/* harmony import */ var _asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asset/ProjectPicture-2.svg */ "./asset/ProjectPicture-2.svg");
/* harmony import */ var _asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../asset/ProjectPicture-3.svg */ "./asset/ProjectPicture-3.svg");
/* harmony import */ var _asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../asset/ProfilePicture-1.png */ "./asset/ProfilePicture-1.png");
/* harmony import */ var _asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../asset/ProfilePicture-2.png */ "./asset/ProfilePicture-2.png");
/* harmony import */ var _asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../asset/ProfilePicture-3.png */ "./asset/ProfilePicture-3.png");
/* harmony import */ var _asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../asset/ArrowRight.svg */ "./asset/ArrowRight.svg");
//logo header

//image banner

//image card services






//load project image



//load profile image






function load_img(classname, img_name, order = 0, alt = false, size = false) {
    if (alt) {
        document.getElementsByClassName(classname)[order].src = alt
    }
    if (size) {
        document.getElementsByClassName(classname)[order].width = size
    }
    return document.getElementsByClassName(classname)[order].src = img_name
}
//icon logo on header
load_img("icon_logo", _asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__)
load_img("icon_logo", _asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__, 1)


//banner image on banner
load_img("banner_img", _asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__)

//card image on services content
load_img("card-services_image", _asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__, 0, "figma icon")
load_img("card-services_image", _asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__, 1, "code icon")
load_img("card-services_image", _asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__, 2, "MediumIcon")
load_img("card-services_image", _asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__, 3, "ChartIcon")
load_img("card-services_image", _asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__, 4, "CameraIcon")
load_img("card-services_image", _asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__, 5, "PenIcon")

//project image
load_img("portofolio-card_image", _asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__, 0, "ProjectPicture_1")
load_img("portofolio-card_image", _asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__, 1, "ProjectPicture_2")
load_img("portofolio-card_image", _asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__, 2, "ProjectPicture_3")

//profile image

load_img("profile-img", _asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__, 0, "Profile Picture 1")
load_img("profile-img", _asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__, 1, "Profile Picture 2")
load_img("profile-img", _asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__, 2, "Profile Picture 3")

load_img("btn-icon", _asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_14__, 0, "arrow icon")
load_img("btn-icon", _asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_14__, 1, "arrow icon")


/***/ }),

/***/ "./asset/ArrowRight.svg":
/*!******************************!*\
  !*** ./asset/ArrowRight.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ArrowRight.svg";

/***/ }),

/***/ "./asset/BannerPicture.svg":
/*!*********************************!*\
  !*** ./asset/BannerPicture.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/BannerPicture.svg";

/***/ }),

/***/ "./asset/Logo .svg":
/*!*************************!*\
  !*** ./asset/Logo .svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Logo .svg";

/***/ }),

/***/ "./asset/ProfilePicture-1.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProfilePicture-1.png";

/***/ }),

/***/ "./asset/ProfilePicture-2.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProfilePicture-2.png";

/***/ }),

/***/ "./asset/ProfilePicture-3.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProfilePicture-3.png";

/***/ }),

/***/ "./asset/ProjectPicture-1.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-1.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProjectPicture-1.svg";

/***/ }),

/***/ "./asset/ProjectPicture-2.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-2.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProjectPicture-2.svg";

/***/ }),

/***/ "./asset/ProjectPicture-3.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-3.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ProjectPicture-3.svg";

/***/ }),

/***/ "./asset/ServicesBranding.svg":
/*!************************************!*\
  !*** ./asset/ServicesBranding.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesBranding.svg";

/***/ }),

/***/ "./asset/ServicesCode.svg":
/*!********************************!*\
  !*** ./asset/ServicesCode.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesCode.svg";

/***/ }),

/***/ "./asset/ServicesEditing.svg":
/*!***********************************!*\
  !*** ./asset/ServicesEditing.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesEditing.svg";

/***/ }),

/***/ "./asset/ServicesFigma.svg":
/*!*********************************!*\
  !*** ./asset/ServicesFigma.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesFigma.svg";

/***/ }),

/***/ "./asset/ServicesMedium.svg":
/*!**********************************!*\
  !*** ./asset/ServicesMedium.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesMedium.svg";

/***/ }),

/***/ "./asset/ServicesPen.svg":
/*!*******************************!*\
  !*** ./asset/ServicesPen.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ServicesPen.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_text_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/text-style.css */ "./css/text-style.css");
/* harmony import */ var _load_img_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load_img.js */ "./src/load_img.js");



})();

/******/ })()
;