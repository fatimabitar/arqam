//  Preloader
const preloader = document.getElementById("preloader-container");
TweenMax.staggerTo(
  $("svg.preloader circle"),
  1.5,
  { strokeDashoffset: 392.68, repeat: -1, ease: Back.easeOut.config(2) },
  0.1
);
setTimeout(() => {
  preloader.classList.add("done");
}, 2500);
function removeElement(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  return function () {
    element.parentNode.removeChild(element);
  };
}

// //Hero animations
let tl1 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeInOut,
  },
  smoothChildTiming: true,
  delay: 2.5,
});
tl1
  .from(".navbar", {
    y: -200,
  })
  .from(".logo", {
    scale: 0,
  })
  .from(".hero .title", {
    y: -30,
    opacity: 0,
  })
  .from(".hero .lead", {
    y: 30,
    opacity: 0,
  })
  .from(".hero .btn", {
    opacity: 0,
    ease: "easeOut",
  });

/* Mission and vision */

let tl2 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeIn,
    markers: true,
  },
  scrollTrigger: {
    trigger: ".mission-vision",
    start: "top top",
    end: "0% 0%",
  },
  smoothChildTiming: true,
});
tl2
  .from(".mission", {
    y: 25,
    opacity: 0,
  })
  .from(".vision", {
    y: 25,
    opacity: 0,
  });

/* Gallery */
let tl3 = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".images-sec",
    start: "top top",
    end: "0% 0%",
  },
  smoothChildTiming: true,
});
tl3
  .from(".row-1", {
    opacity: 0,
    x: 1000,
    stagger: 0.2,
  })
  .from(".row-2", {
    opacity: 0,
    x: -1000,
    stagger: 0.2,
  })
  .from(".row-3", {
    opacity: 0,
    x: 1000,
    stagger: 0.2,
  });

/* Services */
// let tl4 = gsap.timeline({
//   defaults: {
//     duration: 0.5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".services",
//     start: "top top",
//     end: "0% 0%",
//   },

//   smoothChildTiming: true,
// });
// tl4
//   .from(".services-title h2", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".services-title h2", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".box-1", {
//     x: "2000",
//   },"<")
//   .from(".box-2", {
//     x: "1500",
//   })
//   .from(".box-3", {
//     x: "800",
//   },"<");

// tl3
//   .from(".services-title h2", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".box-1", {
//     x: "2000",
//   })
//   .from(".box-2", {
//     x: "1500",
//   })
//   .from(".box-3", {
//     x: "800",
//   })
//   .from(".box-4", {
//     x: "-1000",
//   })
//   .from(".box-5", {
//     x: "-1500",
//   })
//   .from(".box-6", {
//     x: -2000,
//     duration: 0.5,
//   })
//   .from(".box-7", {
//     x: "2000",
//   })
//   .from(".box-8", {
//     x: "1500",
//   })
//   .from(".box-9", {
//     x: "800",
//     duration: 0.5,
//   });

// /* About */
// let tl4 = gsap.timeline({
//   defaults: {
//     duration: 5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".about",
//     scrub: 2,
//     start: "top top",
//     end: "0% 0%",
//     pin: true,
//   },
//   smoothChildTiming: true,
// });
// tl4
//   .from(".about .about-title", {
//     y: 25,
//     opacity: 0,
//   })
//   .from(".about .lead", {
//     y: 25,
//     opacity: 0,
//   });

// /* Contact */
// let tl5 = gsap.timeline({
//   defaults: {
//     duration: 5,
//     ease: Power1.easeInOut,
//   },
//   scrollTrigger: {
//     trigger: ".contact",
//     scrub: 2,
//     start: "top top",
//     end: "0% 0%",
//     pin: true,
//   },
//   smoothChildTiming: true,
// });
// tl5
//   .from(".contact .about-title", {
//     y: 25,
//     opacity: 0,
//   })
//   .from(".contact .lead", {
//     y: 25,
//     opacity: 0,
//   });
