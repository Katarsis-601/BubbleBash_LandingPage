(self["webpackChunkbubble_bash_landing_page"] = self["webpackChunkbubble_bash_landing_page"] || []).push([[179],{

/***/ 828:
/***/ (() => {

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


/***/ }),

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

/***/ 690:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/handler/headerHandler.js
var headerHandler = __webpack_require__(828);
// EXTERNAL MODULE: ./src/handler/navHandler.js
var navHandler = __webpack_require__(939);
;// CONCATENATED MODULE: ./asset/Logo .svg
const Logo_namespaceObject = __webpack_require__.p + "images/708288128f46282e5fa0.svg";
;// CONCATENATED MODULE: ./asset/BannerPicture.svg
const BannerPicture_namespaceObject = __webpack_require__.p + "images/90492f555a431d39137c.svg";
;// CONCATENATED MODULE: ./asset/ServicesFigma.svg
const ServicesFigma_namespaceObject = __webpack_require__.p + "images/60573b7498a143930706.svg";
;// CONCATENATED MODULE: ./asset/ServicesCode.svg
const ServicesCode_namespaceObject = __webpack_require__.p + "images/49d27c6a475e00adf771.svg";
;// CONCATENATED MODULE: ./asset/ServicesBranding.svg
const ServicesBranding_namespaceObject = __webpack_require__.p + "images/167db378d8c1ec41fe3a.svg";
;// CONCATENATED MODULE: ./asset/ServicesEditing.svg
const ServicesEditing_namespaceObject = __webpack_require__.p + "images/29b5be2ed03f7f47f279.svg";
;// CONCATENATED MODULE: ./asset/ServicesMedium.svg
const ServicesMedium_namespaceObject = __webpack_require__.p + "images/a4daa0b49257e3e68c85.svg";
;// CONCATENATED MODULE: ./asset/ServicesPen.svg
const ServicesPen_namespaceObject = __webpack_require__.p + "images/7200a9c951dd63d5324f.svg";
;// CONCATENATED MODULE: ./asset/ProjectPicture-1.svg
const ProjectPicture_1_namespaceObject = __webpack_require__.p + "images/9848d5c9c5fd7082418d.svg";
;// CONCATENATED MODULE: ./asset/ProjectPicture-2.svg
const ProjectPicture_2_namespaceObject = __webpack_require__.p + "images/a018bf87f74816ffb3e4.svg";
;// CONCATENATED MODULE: ./asset/ProjectPicture-3.svg
const ProjectPicture_3_namespaceObject = __webpack_require__.p + "images/7bb4d7c744bae74b9473.svg";
;// CONCATENATED MODULE: ./asset/ProfilePicture-1.png
const ProfilePicture_1_namespaceObject = __webpack_require__.p + "images/4c031afbed4bedc771f6.png";
;// CONCATENATED MODULE: ./asset/ProfilePicture-2.png
const ProfilePicture_2_namespaceObject = __webpack_require__.p + "images/a90452a54fb962f5dfe4.png";
;// CONCATENATED MODULE: ./asset/ProfilePicture-3.png
const ProfilePicture_3_namespaceObject = __webpack_require__.p + "images/e428a07562beec8dc36f.png";
;// CONCATENATED MODULE: ./asset/facebookLogo.svg
const facebookLogo_namespaceObject = __webpack_require__.p + "images/f28994435f56b094ee31.svg";
;// CONCATENATED MODULE: ./asset/InstagramLogo.svg
const InstagramLogo_namespaceObject = __webpack_require__.p + "images/1e4977f062889dc8ad48.svg";
;// CONCATENATED MODULE: ./asset/twitterLogo.svg
const twitterLogo_namespaceObject = __webpack_require__.p + "images/b473b0d9d6554a6cf444.svg";
;// CONCATENATED MODULE: ./asset/LinkedInLogo.svg
const LinkedInLogo_namespaceObject = __webpack_require__.p + "images/6211932f178abae575f0.svg";
;// CONCATENATED MODULE: ./asset/ArrowRight.svg
const ArrowRight_namespaceObject = __webpack_require__.p + "images/52920c5d9620ceaff15f.svg";
;// CONCATENATED MODULE: ./src/loaders/img-loader.js
//logo header

//image banner

//image card services






//load project image



//load profile image













//i still dont know how to refactoring this code :(

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

;// CONCATENATED MODULE: ./src/handler/load_img.js



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
  source: [Logo_namespaceObject],
  alt: ["Icon logo"],
  width: 35,
});

load_img({
  classname: "banner_img",
  source: [BannerPicture_namespaceObject],
  alt: ["Banner Image"],
});

load_img({
  classname: "card-services_image",
  source: [
    ServicesFigma_namespaceObject,
    ServicesCode_namespaceObject,
    ServicesBranding_namespaceObject,
    ServicesEditing_namespaceObject,
    ServicesMedium_namespaceObject,
    ServicesPen_namespaceObject,
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
    ProjectPicture_1_namespaceObject,
    ProjectPicture_2_namespaceObject,
    ProjectPicture_3_namespaceObject,
  ],
  alt: ["ProjectPicture 1", "ProjectPicture 2", "ProjectPicture 3"],
});

load_img({
  classname: "profile-img",
  source: [ProfilePicture_1_namespaceObject, ProfilePicture_2_namespaceObject, ProfilePicture_3_namespaceObject],
  alt: ["Image Profile 1", "Image Profile 2", "Image Profile 3"],
});

load_img({
  classname: "footer-icon",
  source: [
    facebookLogo_namespaceObject,
    twitterLogo_namespaceObject,
    InstagramLogo_namespaceObject,
    LinkedInLogo_namespaceObject,
  ],
  alt: ["facebook logo", "twitter logo", "instagram logo", "linkedin logo"],
  width: 32,
});

load_img({
  classname: "btn-icon",
  source: [ArrowRight_namespaceObject],
  alt: ["arrow icon"],
});

;// CONCATENATED MODULE: ./src/index.js






/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(690));
/******/ }
]);