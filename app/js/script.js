// mobile navbar

let navToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navBar.classList.toggle("active");
});

// scroll-to-top Functionality

let scrollBtn = document.querySelector(".scroll-to-top");
// scroll to top BTN

window.onscroll = scrollToTop;

function scrollToTop() {
  let scrollHeight = window.scrollY;
  scrollHeight > 700
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
}

// navigation

let navListItems = document.querySelectorAll(".nav__item a");

function scrollToSection(navLinks) {
  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // remove any active class on navLink on click
      navLinks.forEach((item) => item.classList.remove("active"));
      // add active class when clicking a nav link
      e.currentTarget.classList.add("active");
      // smooth scroll to desired section automatically
      let sectionToGo = document.querySelector(e.target.dataset.nav).offsetTop;
      window.scrollTo({
        top: sectionToGo,
        behaviour: "smooth",
      });
    });
  });
}

scrollToSection(navListItems);
