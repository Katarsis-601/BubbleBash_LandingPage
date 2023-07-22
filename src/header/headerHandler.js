let height = 0
window.onscroll = () => {
    height = window.scrollY
    if (height >= 402) {
        document.querySelector("header").classList.add("header-bg")
    } else if (height < 402) {
        document.querySelector("header").classList.remove("header-bg")

    }
}



