//back to top
let backToTop = document.getElementById("toTopButton");

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 500) {
    //Show Back To Top button
    backToTop.style.transform = "scale(1)";
  } else {
    // Hide Back To Top button
    backToTop.style.transform = "scale(0)";
  }
}

backToTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
