let timeline = gsap.timeline({ defaults: { opacity: 1, ease: "linear" } });

const init = () => {
  timeline
    .from(".card", { opacity: 0, duration: 0.8, x: -50 })
    .from(".card__image", { opacity: 0, duration: 0.5, scale: 3 })
    .from(".card__content > *", {
      opacity: 0,
      scale: 5,
      stagger: { each: 0.2, from: "random", ease: "power1.out" },
    })
    .to(".card", {
      filter: "drop-shadow(12px 12px 0 rgba(0, 0, 0, 0.3))",
      duration: 1,
      ease: "power2.out",
    });
  // .from(".card__image", {opacity: 0, duration: 0.5, scale: 3}, "-=0.4")
  // .from(".card__date", {opacity: 0, duration: 0.5, scale: 3}, "-=0.4")
  // .from(".card__category", {opacity: 0, duration: 0.4, scale: 3}, "-=0.3")
  // .from(".card__title", {opacity: 0, duration: 0.4, scale: 3}, "-=0.3")
  // .from(".card__description", {opacity: 0, duration: 0.4, scale: 3}, "-=0.2")
  // .from(".card__author", {opacity: 0, duration: 0.4, scale: 3}, "-=0.2")

  GSDevTools.create();
};

window.addEventListener("load", () => {
  init();
});
