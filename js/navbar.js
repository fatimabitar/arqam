let navbar = document.querySelector(".navbar");

/* Toggle active class */
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

// onscroll = function () {
//   if (window.pageYOffset > 500) {
//     navbar.classList.add("bg-dark");
//   } else {
//     navbar.classList.remove("bg-dark");
//   }
//   var scrollPosition = document.documentElement.scrollTop;

//   sections.forEach((section) => {
//     if (
//       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
//       scrollPosition <
//         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
//     ) {
//       var currentId = section.attributes.id.value;
//       removeAllActiveClasses();
//       addActiveClass(currentId);
//     }
//   });
// };

// var removeAllActiveClasses = function () {
//   document.querySelectorAll("nav a").forEach((el) => {
//     el.classList.remove("active");
//   });
// };

// var addActiveClass = function (id) {
//   // console.log(id);
//   var selector = `nav a[href="#${id}"]`;
//   document.querySelector(selector).classList.add("active");
// };
onscroll = function(){
  if (window.pageYOffset > 500) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
