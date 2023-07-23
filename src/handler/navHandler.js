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
