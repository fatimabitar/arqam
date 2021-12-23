let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.pageYOffset > 500) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};
