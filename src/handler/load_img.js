import * as image from "../loaders/img-loader.js"
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
    img_name: image.Logo
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
