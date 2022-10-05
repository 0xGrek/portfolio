const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close"),
    portfolioItem = document.querySelectorAll(".portfolio__item");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});
portfolioItem.addEventListener("click", () => {
    portfolioItem.classList.add("active");
});

const counters = document.querySelectorAll(".skills__raitings-counter"),
    lines = document.querySelectorAll(".skills__raitings-line span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
