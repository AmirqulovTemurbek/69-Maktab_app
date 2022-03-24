// navbar menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close nav
const closeNav = () => {
    menu.style.e.display = "none";
    closeBtn.styldisplay= "none";
    menuBtn.style.display= "inline-block";
}

closeBtn.addEventListener('click', closeNav)