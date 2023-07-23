/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/text-style.css":
/*!****************************!*\
  !*** ./css/text-style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/handler/headerHandler.js":
/*!**************************************!*\
  !*** ./src/handler/headerHandler.js ***!
  \**************************************/
/***/ (() => {

let height = 0
window.onscroll = () => {
    height = window.scrollY
    if (height >= 402) {
        document.querySelector("header").classList.add("header-bg")
    } else if (height < 402) {
        document.querySelector("header").classList.remove("header-bg")
    }
}





/***/ }),

/***/ "./src/handler/load_img.js":
/*!*********************************!*\
  !*** ./src/handler/load_img.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loaders/img-loader.js */ "./src/loaders/img-loader.js");

function load_img({ classname, img_name, order = 0, alt = false, size = false }) {
    let listOfDocument = []
    if (alt) {
        document.getElementsByClassName(classname)[order].src = alt
    }
    if (size) {
        document.getElementsByClassName(classname)[order].width = size
    }

    if (order != 0) {
        for (let i = 0; i < order; i++) {
            listOfDocument.push(document.getElementsByClassName(classname)[i].src = img_name)
        }
        return listOfDocument
    }

    return document.getElementsByClassName(classname)[order].src = img_name
}
//icon logo on header

load_img({
    classname: "icon_logo",
    img_name: _loaders_img_loader_js__WEBPACK_IMPORTED_MODULE_0__.Logo
})



//banner image on banner
load_img("banner_img", BannerPicture)

//card image on services content
load_img("card-services_image", FigmaIcon, 0, "figma icon")
load_img("card-services_image", CodeIcon, 1, "code icon")
load_img("card-services_image", MediumIcon, 2, "MediumIcon")
load_img("card-services_image", ChartIcon, 3, "ChartIcon")
load_img("card-services_image", CameraIcon, 4, "CameraIcon")
load_img("card-services_image", PenIcon, 5, "PenIcon")

//project image
load_img("portofolio-card_image", ProjectPicture_1, 0, "ProjectPicture_1")
load_img("portofolio-card_image", ProjectPicture_2, 1, "ProjectPicture_2")
load_img("portofolio-card_image", ProjectPicture_3, 2, "ProjectPicture_3")

//profile image

load_img("profile-img", Profile_1, 0, "Profile Picture 1")
load_img("profile-img", Profile_2, 1, "Profile Picture 2")
load_img("profile-img", Profile_3, 2, "Profile Picture 3")

load_img("btn-icon", ArrowIcon, 0, "arrow icon")
load_img("btn-icon", ArrowIcon, 1, "arrow icon")


/***/ }),

/***/ "./src/handler/navHandler.js":
/*!***********************************!*\
  !*** ./src/handler/navHandler.js ***!
  \***********************************/
/***/ (() => {

for (let i = 0; i < document.getElementsByClassName("nav-btn").length; i++) {
    document.getElementsByClassName("nav-btn")[i].addEventListener("click", () => {
        switch (i) {
            case 0:
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
                break;
            case 1:
                window.scrollTo({
                    top: 1350,
                    behavior: "smooth"
                })
                break;
            case 2:
                window.scrollTo({
                    top: 2175,
                    behavior: "smooth"
                })
                break;
            case 3:
                window.scrollTo({
                    top: 2675,
                    behavior: "smooth"
                })
                break;
            case 4:
                window.scrollTo({
                    top: 3145,
                    behavior: "smooth"
                })
                break;
        }
    })
}


/***/ }),

/***/ "./src/loaders/img-loader.js":
/*!***********************************!*\
  !*** ./src/loaders/img-loader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowIcon: () => (/* reexport default export from named module */ asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   BannerPicture: () => (/* reexport default export from named module */ asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   Logo: () => (/* reexport default export from named module */ asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   Profile_1: () => (/* reexport default export from named module */ asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   Profile_2: () => (/* reexport default export from named module */ asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   Profile_3: () => (/* reexport default export from named module */ asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   ProjectPicture_1: () => (/* reexport default export from named module */ asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ProjectPicture_2: () => (/* reexport default export from named module */ asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   ProjectPicture_3: () => (/* reexport default export from named module */ asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   ServiceIcon_1: () => (/* reexport default export from named module */ asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ServiceIcon_2: () => (/* reexport default export from named module */ asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   ServiceIcon_3: () => (/* reexport default export from named module */ asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ServiceIcon_4: () => (/* reexport default export from named module */ asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ServiceIcon_5: () => (/* reexport default export from named module */ asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ServiceIcon_6: () => (/* reexport default export from named module */ asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var asset_Logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! asset/Logo .svg */ "./asset/Logo .svg");
/* harmony import */ var asset_BannerPicture_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! asset/BannerPicture.svg */ "./asset/BannerPicture.svg");
/* harmony import */ var asset_ServicesFigma_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! asset/ServicesFigma.svg */ "./asset/ServicesFigma.svg");
/* harmony import */ var asset_ServicesCode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! asset/ServicesCode.svg */ "./asset/ServicesCode.svg");
/* harmony import */ var asset_ServicesBranding_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! asset/ServicesBranding.svg */ "./asset/ServicesBranding.svg");
/* harmony import */ var asset_ServicesEditing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! asset/ServicesEditing.svg */ "./asset/ServicesEditing.svg");
/* harmony import */ var asset_ServicesMedium_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! asset/ServicesMedium.svg */ "./asset/ServicesMedium.svg");
/* harmony import */ var asset_ServicesPen_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! asset/ServicesPen.svg */ "./asset/ServicesPen.svg");
/* harmony import */ var asset_ProjectPicture_1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! asset/ProjectPicture-1.svg */ "./asset/ProjectPicture-1.svg");
/* harmony import */ var asset_ProjectPicture_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! asset/ProjectPicture-2.svg */ "./asset/ProjectPicture-2.svg");
/* harmony import */ var asset_ProjectPicture_3_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! asset/ProjectPicture-3.svg */ "./asset/ProjectPicture-3.svg");
/* harmony import */ var asset_ProfilePicture_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! asset/ProfilePicture-1.png */ "./asset/ProfilePicture-1.png");
/* harmony import */ var asset_ProfilePicture_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! asset/ProfilePicture-2.png */ "./asset/ProfilePicture-2.png");
/* harmony import */ var asset_ProfilePicture_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! asset/ProfilePicture-3.png */ "./asset/ProfilePicture-3.png");
/* harmony import */ var asset_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! asset/ArrowRight.svg */ "./asset/ArrowRight.svg");
//logo header

//image banner

//image card services






//load project image



//load profile image










//i still dont know how to refactoring this code :(

/***/ }),

/***/ "./asset/ArrowRight.svg":
/*!******************************!*\
  !*** ./asset/ArrowRight.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ArrowRight.svg";

/***/ }),

/***/ "./asset/BannerPicture.svg":
/*!*********************************!*\
  !*** ./asset/BannerPicture.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/BannerPicture.svg";

/***/ }),

/***/ "./asset/Logo .svg":
/*!*************************!*\
  !*** ./asset/Logo .svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Logo .svg";

/***/ }),

/***/ "./asset/ProfilePicture-1.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProfilePicture-1.png";

/***/ }),

/***/ "./asset/ProfilePicture-2.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProfilePicture-2.png";

/***/ }),

/***/ "./asset/ProfilePicture-3.png":
/*!************************************!*\
  !*** ./asset/ProfilePicture-3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProfilePicture-3.png";

/***/ }),

/***/ "./asset/ProjectPicture-1.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-1.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProjectPicture-1.svg";

/***/ }),

/***/ "./asset/ProjectPicture-2.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-2.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProjectPicture-2.svg";

/***/ }),

/***/ "./asset/ProjectPicture-3.svg":
/*!************************************!*\
  !*** ./asset/ProjectPicture-3.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ProjectPicture-3.svg";

/***/ }),

/***/ "./asset/ServicesBranding.svg":
/*!************************************!*\
  !*** ./asset/ServicesBranding.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ServicesBranding.svg";

/***/ }),

/***/ "./asset/ServicesCode.svg":
/*!********************************!*\
  !*** ./asset/ServicesCode.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ServicesCode.svg";

/***/ }),

/***/ "./asset/ServicesEditing.svg":
/*!***********************************!*\
  !*** ./asset/ServicesEditing.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ServicesEditing.svg";

/***/ }),

/***/ "./asset/ServicesFigma.svg":
/*!*********************************!*\
  !*** ./asset/ServicesFigma.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ServicesFigma.svg";

/***/ }),

/***/ "./asset/ServicesMedium.svg":
/*!**********************************!*\
  !*** ./asset/ServicesMedium.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ServicesMedium.svg";

/***/ }),

/***/ "./asset/ServicesPen.svg":
/*!*******************************!*\
  !*** ./asset/ServicesPen.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_text_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/text-style.css */ "./css/text-style.css");
/* harmony import */ var _handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/headerHandler.js */ "./src/handler/headerHandler.js");
/* harmony import */ var _handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_handler_headerHandler_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler/navHandler.js */ "./src/handler/navHandler.js");
/* harmony import */ var _handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_handler_navHandler_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _handler_load_img_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler/load_img.js */ "./src/handler/load_img.js");





})();

/******/ })()
;