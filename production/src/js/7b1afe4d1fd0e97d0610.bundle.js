"use strict";
(self["webpackChunkbubble_bash_landing_page"] = self["webpackChunkbubble_bash_landing_page"] || []).push([[679],{

/***/ 526:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/loaders/img-loader.js + 19 modules
var img_loader = __webpack_require__(242);
;// CONCATENATED MODULE: ./src/handler/imageHandler.js
//i dont know how to name this function
//simply this function selecting img element base on classname
function getImgDocument(classname) {
  return document.getElementsByClassName(classname);
}

//add alternative attribute on image document
function addAlt({ document, alt, order }) {
  if (alt) {
    if (alt.length === 1) {
      document[order].alt = alt[0];

      return document;
    }

    document[order].alt = alt[order];
  }
  return document;
}

//add width size attribute on image document
function addWidth({ document, size, order }) {
  if (size) {
    document[order].width = size;
  }
  return document;
}

function addLazyLoading({ document, order }) {
  document[order].loading = "lazy";
  return document;
}

function addAttribute({ document, size, alt, order }) {
  document = addAlt({ document, order, alt });
  document = addWidth({ document, order, size });
  document = addLazyLoading({ document, order });
  return document;
}

;// CONCATENATED MODULE: ./src/loaders/load_img.js



function loadMultipleDocument({ document, source, alt, width }) {
  let listOfDocument = [];
  for (let i = 0; i < document.length; i++) {
    if (source.length === 1) {
      addAttribute({ document: document, size: width, alt: alt, order: i });
      document[i].src = source[0];
      listOfDocument.push(document[i]);
    } else {
      addAttribute({ document: document, size: width, alt: alt, order: i });
      document[i].src = source[i];
      listOfDocument.push(document[i]);
    }
  }
  return listOfDocument;
}

function load_img({ classname, source = [], alt = false, width = false }) {
  let document = getImgDocument(classname);

  if (document.length != 0) {
    return loadMultipleDocument({ document, source, alt, width });
  }

  addAttribute({ document: document, size: width, alt: alt, order: 0 });
  return document[0];
}
//icon logo on header

load_img({
  classname: "icon_logo",
  source: [img_loader/* Logo */.TR],
  alt: ["Icon logo"],
  width: 35,
});

load_img({
  classname: "banner_img",
  source: [img_loader/* BannerPicture */.rO],
  alt: ["Banner Image"],
});

load_img({
  classname: "card-services_image",
  source: [
    img_loader/* ServiceIcon_1 */.Sm,
    img_loader/* ServiceIcon_2 */.Bf,
    img_loader/* ServiceIcon_3 */.XY,
    img_loader/* ServiceIcon_4 */.__,
    img_loader/* ServiceIcon_5 */.CJ,
    img_loader/* ServiceIcon_6 */.lF,
  ],
  alt: [
    "figma icon",
    "code icon",
    "chart icon",
    "record icon",
    "Medium Icon",
    "Pen Icon",
  ],
});

load_img({
  classname: "portofolio-card_image",
  source: [
    img_loader/* ProjectPicture_1 */.g0,
    img_loader/* ProjectPicture_2 */.md,
    img_loader/* ProjectPicture_3 */.ls,
  ],
  alt: ["ProjectPicture 1", "ProjectPicture 2", "ProjectPicture 3"],
});

load_img({
  classname: "profile-img",
  source: [img_loader/* Profile_1 */.OQ, img_loader/* Profile_2 */.v4, img_loader/* Profile_3 */.DE],
  alt: ["Image Profile 1", "Image Profile 2", "Image Profile 3"],
});

load_img({
  classname: "footer-icon",
  source: [
    img_loader/* facebookLogo */.Ev,
    img_loader/* twitterLogo */.X4,
    img_loader/* instagramLogo */.Jg,
    img_loader/* linkedInLogo */.Ys,
  ],
  alt: ["facebook logo", "twitter logo", "instagram logo", "linkedin logo"],
  width: 32,
});

load_img({
  classname: "btn-icon",
  source: [img_loader/* ArrowIcon */.e0],
  alt: ["arrow icon"],
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [289], () => (__webpack_exec__(526)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);