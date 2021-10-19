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
