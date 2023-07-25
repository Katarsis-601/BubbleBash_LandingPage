//i dont know how to name this function
//simply this function selecting img element base on classname
export function getImgDocument(classname) {
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

export function addAttribute({ document, size, alt, order }) {
  document = addAlt({ document, order, alt });
  document = addWidth({ document, order, size });
  document = addLazyLoading({ document, order });
  return document;
}
