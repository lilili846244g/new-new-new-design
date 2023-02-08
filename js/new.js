gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 80%",
    onEnter: () => gsap.to(".section-main", { backgroundColor: color }),
    onLeave: () =>
      gsap.to(".section-main", { backgroundColor: "rgba(38, 38, 38, 1)" }),
    onLeaveBack: () =>
      gsap.to(".section-main", { backgroundColor: rgb(248, 238, 238) }),
    onEnterBack: () => gsap.to(".section-main", { backgroundColor: color }),
    markers: true,
  });
});
