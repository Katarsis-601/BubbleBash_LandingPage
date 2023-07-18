import Logo from "../asset/Logo .svg"

function load_img(classname, img_name, order = 0) {
    return document.getElementsByClassName(classname)[order].src = img_name
}

load_img("icon_logo", Logo)