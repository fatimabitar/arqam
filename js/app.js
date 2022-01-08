//reusable function
//Remove an Element after the animation is done..
function removeElement(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  return function () {
    element.parentNode.removeChild(element);
  };
}
//  Preloader
const tl = gsap.timeline();
tl.to(".first", 1, {
  xPercent: "-100",
  ease: Power1.easeIn,
  delay: 3,
})
  .call(removeElement(".first"))
  .to(
    ".second",
    1,
    {
      xPercent: "100",
      ease: Power1.easeInOut,
    },
    "3"
  )
  .call(removeElement(".second"));

//Hero animations
gsap.from(".navbar", {
  y: -30,
  opacity: 0,
  delay: 3.6,
  duration: 0.3,
  ease: Power2.easeInOut,
});
gsap.from(".hero .title", {
  y: 30,
  opacity: 0,
  delay: 3.9,
  duration: 0.5,
  ease: Power2.easeInOut,
});
gsap.from(".hero .lead", {
  y: 30,
  opacity: 0,
  delay: 4.4,
  duration: 0.5,
  ease: Power2.easeInOut,
});
gsap.from(".hero .btn", {
  y: 30,
  opacity: 0,
  delay: 4.9,
  duration: 0.1,
  ease: Power4.easeInOut,
});
/* Mission and vision */
// let tl2 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".mission-vision",
//     start: "-=200",
//     end: "+=300",
//   },
// });
// let tl8 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".mission-vision",
//     start: "+=150",
//     end: "+=300",
//   },
// });

// tl2.from(".mission", {
//   y: 25,
//   opacity: 0,
// });
// tl8.from(".vision", {
//   y: 25,
//   opacity: 0,
// });
