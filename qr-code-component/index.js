let tl = gsap.timeline({ defaults: { opacity: 1, ease: "linear" } });

function init() {
  tl
    // Card animations
    .from(".card", {
      y: 50,
      duration: 5,
      rotation: 360 * 3,
      ease: "elastic.out(1,0.5)",
    })
    .from(
      ".card",
      {
        opacity: 0,
        scale: 0,
        duration: 0.45,
      },
      "<"
    )
    // Stars animation - staggered twinkle effect
    .from(".star", {
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 2,
        from: "random",
      },
    })
    // Continuous twinkling loop for stars
    .to(".star", {
      opacity: 1,
      scale: 1.3,
      duration: 1.5,
      stagger: {
        amount: 3,
        from: "random",
        repeat: -1,
        yoyo: true,
      },
      ease: "sine.inOut",
    });

  GSDevTools.create();
}

window.addEventListener("load", function () {
  init(); // do the stuff :D
});
