// mobile navbar

let navToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navBar.classList.toggle("active");
});
