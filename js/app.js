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
  ease: Power1.easeInOut,
  delay: 3,
})
  .call(removeElement(".first"))
  .to(
    ".second",
    1,
    {
      xPercent: "100",
      ease: Power1.easeInOut,
      delay: 3,
    },
    "0"
  )
  .call(removeElement(".second"));

// //Hero animations
let tl1 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeInOut,
  },
  delay: 3.6,
});
tl1
  .from(".navbar", {
    y: -30,
    opacity: 0,
  })
  .from(".logo", {
    y: 30,
    opacity: 0,
  })
  .from(".hero .title", {
    y: 30,
    opacity: 0,
  })
  .from(".hero .lead", {
    y: 30,
    opacity: 0,
  })
  .from(".hero .btn", {
    y: 30,
    opacity: 0,
    duration: 0.2,
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

gsap.from(".mission", {
  y: 25,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".mission-vision",
    start: "-=200",
    end: "+=300",
  },
});
gsap.from(".vision", {
  y: 25,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".mission-vision",
    start: "-=200",
    end: "+=300",
  },
  delay: 0.2,
});

/* Images secion*/
// let tl3 = gsap.timeline({
//   defaults: {
//     duration: 0.8,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".images-sec",
//     start: "-=300",
//     end: "+=1200",
//   },
// });
gsap.from(".row-1 .img-div", {
  opacity: 0,
  yPercent: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
});
gsap.from(".row-1 .text-div", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
  delay: 0.5,
});
gsap.from(".row-2 .img-div", {
  opacity: 0,
  yPercent: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
  delay: 1,
});
gsap.from(".row-2 .text-div", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
  delay: 1.5,
});
gsap.from(".row-3 .img-div", {
  opacity: 0,
  yPercent: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
  delay: 2,
});
gsap.from(".row-3 .text-div", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
  delay: 2.5,
});

/* services secion*/

// let tl4 = gsap.timeline({
//   defaults: {
//     duration: 0.1,
//     ease: Power1.easeOut,
//   },
//   scrollTrigger: {
//     trigger: ".services",
//     start: "-=300",
//     end: "+=1100",
//   },
// });
gsap.from(".services-title h2", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".services",
    start: "-=300",
    end: "+=1100",
  },
});
gsap.from(".service-box", {
  yPercent: 10,
  opacity: 0,
  stagger: 0.1,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".services",
    start: "-=300",
    end: "+=1100",
  },
  delay: 0.5,
});

/* About */
// let tl5 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".about",
//     start: "-=300",
//     end: "+=500",
//   },
// });
// tl5
gsap.from(".about .about-title", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    start: "-=300",
    end: "+=500",
  },
  duration: 0.5,
});
gsap.from(".about .lead", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about",
    start: "-=300",
    end: "+=500",
  },
  duration: 0.5,
  delay: 0.5,
});

/* Contact */
// let tl6 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".contact",
//     start: "-=800",
//     end: "+=600",
//   },
//   delay: 1,
// });
gsap.from(".contact .about-title", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact",
    start: "-=800",
    end: "+=600",
  },
  delay: 1,
  duration: 0.5,
});
gsap.from(".contact .lead", {
  y: 30,
  opacity: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact",
    start: "-=800",
    end: "+=600",
  },
  delay: 1.5,
  duration: 0.5,
});
