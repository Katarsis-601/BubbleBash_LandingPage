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
//load project image
import ProjectPicture_1 from "../asset/ProjectPicture-1.svg"
import ProjectPicture_2 from "../asset/ProjectPicture-2.svg"
import ProjectPicture_3 from "../asset/ProjectPicture-3.svg"
//load profile image
import Profile_1 from "../asset/ProfilePicture-1.png"
import Profile_2 from "../asset/ProfilePicture-2.png"
import Profile_3 from "../asset/ProfilePicture-3.png"
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

//project image
load_img("portofolio-card_image", ProjectPicture_1, 0, "ProjectPicture_1")
load_img("portofolio-card_image", ProjectPicture_2, 1, "ProjectPicture_2")
load_img("portofolio-card_image", ProjectPicture_3, 2, "ProjectPicture_3")

//profile image

load_img("profile-img", Profile_1, 0, "Profile Picture 1")
load_img("profile-img", Profile_2, 1, "Profile Picture 2")
load_img("profile-img", Profile_3, 2, "Profile Picture 3")