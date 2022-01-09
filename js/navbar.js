let navbar = document.querySelector(".navbar");

/* Toggle active class */
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

onscroll = function () {
  if (window.pageYOffset > 500) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};
