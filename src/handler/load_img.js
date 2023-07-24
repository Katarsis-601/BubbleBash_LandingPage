import * as image from "../loaders/img-loader.js";
import { getImgDocument, addAttribute } from "./imageHandler.js";

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
  source: [image.Logo],
  alt: ["Icon logo"],
  width: 35,
});

load_img({
  classname: "banner_img",
  source: [image.BannerPicture],
  alt: ["Babber Image"],
});

load_img({
  classname: "card-services_image",
  source: [
    image.ServiceIcon_1,
    image.ServiceIcon_2,
    image.ServiceIcon_3,
    image.ServiceIcon_4,
    image.ServiceIcon_5,
    image.ServiceIcon_6,
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
    image.ProjectPicture_1,
    image.ProjectPicture_2,
    image.ProjectPicture_3,
  ],
});

load_img({
  classname: "profile-img",
  source: [image.Profile_1, image.Profile_2, image.Profile_3],
});
load_img({ classname: "btn-icon", source: [image.ArrowIcon] });
