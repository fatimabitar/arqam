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
  left: "-100%",
  ease: Power1.easeInOut,
  delay: 3,
})
  .call(removeElement(".first"))
  .to(
    ".second",
    1,
    {
      left: "100%",
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
    y: 30,
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
    ease: "easeOut",
  });

/* Mission and vision */
let tl2 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".mission-vision",
    start: "-=200",
    end: "+=200",
  },
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

/* Images secion*/
let tl3 = gsap.timeline({
  defaults: {
    duration: 0.7,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".images-sec",
    start: "-=300",
    end: "+=1200",
  },
});
tl3
  .from(".row-1 .img-div", {
    opacity: 0,
    y: 310,
  })
  .from(".row-1 .text-div", {
    opacity: 0,
    y: 50,
  })
  .from(".row-2 .img-div", {
    opacity: 0,
    y: 310,
  })
  .from(".row-2 .text-div", {
    opacity: 0,
    y: 50,
  })
  .from(".row-3 .img-div", {
    opacity: 0,
    y: 310,
  })
  .from(".row-3 .text-div", {
    opacity: 0,
    y: 50,
  });

/* services secion*/

let tl4 = gsap.timeline({
  defaults: {
    duration: .1,
    ease: Circ.easeOut,
  },
  scrollTrigger: {
    trigger: ".services",
    start: "-=300",
    end: "+=1000",
    pin: false,
    yoyo:true,
  },
});
tl4
  .from(".services-title h2", {
    y: 30,
    opacity: 0,
  })
  .from(".service-box", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
  });

/* About */
let tl5 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".about",
    start: "-=300",
    end: "+=500",
  },
  smoothChildTiming: true,
});
tl5
  .from(".about .about-title", {
    y: 30,
    opacity: 0,
  })
  .from(".about .lead", {
    y: 30,
    opacity: 0,
  });

/* Contact */
let tl6 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".contact",
    start: "-=800",
    end: "+=600",
  },
  delay: 1,
});
tl6
  .from(".contact .about-title", {
    y: 30,
    opacity: 0,
  })
  .from(".contact .lead", {
    y: 30,
    opacity: 0,
  });
