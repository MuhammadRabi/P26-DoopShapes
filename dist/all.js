let navToggle=document.querySelector(".menu-toggle"),navBar=document.querySelector("nav");navToggle.addEventListener("click",(()=>{navToggle.classList.toggle("active"),navBar.classList.toggle("active")}));let scrollBtn=document.querySelector(".scroll-to-top");function scrollToTop(){window.scrollY>700?scrollBtn.classList.add("show"):scrollBtn.classList.remove("show"),scrollBtn.addEventListener("click",(()=>{window.scrollTo({behavior:"smooth",top:0})}))}window.onscroll=scrollToTop;let navListItems=document.querySelectorAll(".nav__item a");function scrollToSection(o){o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),o.forEach((o=>o.classList.remove("active"))),e.currentTarget.classList.add("active");let t=document.querySelector(e.target.dataset.nav).offsetTop;window.scrollTo({top:t,behaviour:"smooth"})}))}))}scrollToSection(navListItems);
//# sourceMappingURL=all.js.map