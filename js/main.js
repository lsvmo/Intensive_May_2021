const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".button-close");

const toggleMenu = (event) => {
    menu.classList.toggle("navbar-is-open");
};

menuButton.addEventListener("click", toggleMenu);

closeMenuButton.addEventListener("click", toggleMenu);

