// NAV VARIABLES
const navIcon = document.querySelector("#nav_icon");
const navMenu = document.querySelector(".nav");
const body = document.querySelector("body");
const navList = document.querySelectorAll(".navigation");

function disableBodyOverflow(value){
    value ? body.style.overflow = "hidden" : body.style.overflow = "inherit";
}

// nav menu animation
navIcon.addEventListener("click", () => {
    if (navIcon.classList.contains("open")) {
        closeNavbar();
    } else {
        navIcon.classList.add("open");
        navMenu.classList.remove("nav_close");
        navMenu.classList.add("nav_open");
        disableBodyOverflow(true);
    }
});

navList.forEach(navAnchor => {
    navAnchor.addEventListener("click", () => {
        if(navIcon.classList.contains("open")) closeNavbar();
    })
})

