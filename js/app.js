gsap.registerPlugin(ScrollTrigger);

//Hero animations
let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Power1.easeInOut,
  },
  smoothChildTiming: true,
});
tl.from(".navbar", {
  y: -200,
})
  .from(".logo", {
    scale: 0,
  })
  .from(".hero .lead", {
    y: 30,
    opacity: 0,
    delay: 1,
  })
  .from(".hero .btn", {
    opacity: 0,
    ease: "easeOut",
  });

/* Mission and vision */

let tl1 = gsap.timeline({
  defaults: {
    duration: 2,
    ease: Power1.easeIn,
  },
  scrollTrigger: {
    trigger: ".mission-vision",
    scrub: 1,
    start: "top top",
    end: "10% 10%",
    pin: true,
  },
  smoothChildTiming: true,
});
tl1
  .from(".mission", {
    y: 25,
    opacity: 0,
  })
  .from(".vision", {
    y: 25,
    opacity: 0,
  });

/* Gallery */
let tl2 = gsap.timeline({
  defaults: {
    duration: 4,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".vision",
    scrub: 2,
    start: "top top",
    end: "0% 0%",
    pin: true,
  },
  smoothChildTiming: true,
});
tl2.from(".img-1 , .img-2 ,.img-3", {
  opacity: 0,
  x: 1000,
  stagger: 0.5,
});

/* Services */
let tl3 = gsap.timeline({
  defaults: {
    duration: 5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".services",
    scrub: 2,
    start: "top top",
    end: "0% 0%",
    pin: true,
  },
  smoothChildTiming: true,
});
tl3
  .from(".services-title h2", {
    y: -100,
    opacity: 0,
  })
  .from(".box-1", {
    x: "2000",
  })
  .from(".box-2", {
    x: "1500",
  })
  .from(".box-3", {
    x: "800",
  })
  .from(".box-4", {
    x: "-1000",
  })
  .from(".box-5", {
    x: "-1500",
  })
  .from(".box-6", {
    x: -2000,
    duration: 0.5,
  })
  .from(".box-7", {
    x: "2000",
  })
  .from(".box-8", {
    x: "1500",
  })
  .from(".box-9", {
    x: "800",
    duration: 0.5,
  });

/* About */
let tl4 = gsap.timeline({
  defaults: {
    duration: 5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".about",
    scrub: 2,
    start: "top top",
    end: "0% 0%",
    pin: true,
  },
  smoothChildTiming: true,
});
tl4
  .from(".about .about-title", {
    y: 25,
    opacity: 0,
  })
  .from(".about .lead", {
    y: 25,
    opacity: 0,
  });

/* Contact */
let tl5 = gsap.timeline({
  defaults: {
    duration: 5,
    ease: Power1.easeInOut,
  },
  scrollTrigger: {
    trigger: ".contact",
    markers: true,
    scrub: 2,
    start: "top top",
    end: "0% 0%",
    pin: true,
  },
  smoothChildTiming: true,
});
tl5
  .from(".contact .about-title", {
    y: 25,
    opacity: 0,
  })
  .from(".contact .lead", {
    y: 25,
    opacity: 0,
  });
