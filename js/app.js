//GSAP animations

//Hero animations
let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Power1.easeInOut,
    scrub: 1,
  },
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
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
