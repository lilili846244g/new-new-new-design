gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(".section-main", { backgroundColor: color }),
    onLeave: () => gsap.to(".section-main", { backgroundColor: "transparent" }),
    onLeaveBack: () =>
      gsap.to(".section-main", { backgroundColor: transparent }),
    onEnterBack: () => gsap.to(".section-main", { backgroundColor: color }),
    markers: true,
  });
});
