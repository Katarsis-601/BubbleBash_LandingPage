//logo header
import Logo from "../asset/Logo .svg"
//image banner
import BannerPicture from "../asset/BannerPicture.svg"
//image card services
import FigmaIcon from "../asset/ServicesFigma.svg"
import CodeIcon from "../asset/ServicesCode.svg"
import ChartIcon from "../asset/ServicesBranding.svg"
import CameraIcon from "../asset/ServicesEditing.svg"
import MediumIcon from "../asset/ServicesMedium.svg"
import PenIcon from "../asset/ServicesPen.svg"

function load_img(classname, img_name, order = 0, alt = false) {
    if (alt) {
        document.getElementsByClassName(classname)[order].src = alt
    }
    return document.getElementsByClassName(classname)[order].src = img_name
}
//icon logo on header
load_img("icon_logo", Logo)

//banner image on banner
load_img("banner_img", BannerPicture)

//card image on services content
load_img("card-services_image", FigmaIcon, 0, "figma icon")
load_img("card-services_image", CodeIcon, 1, "code icon")
load_img("card-services_image", MediumIcon, 2, "MediumIcon")
load_img("card-services_image", ChartIcon, 3, "ChartIcon")
load_img("card-services_image", CameraIcon, 4, "CameraIcon")
load_img("card-services_image", PenIcon, 5, "PenIcon")

