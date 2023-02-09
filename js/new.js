gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "top bottom",
    end: "bottom 95%",
    onEnter: () => gsap.to(".bkg-an", { backgroundColor: color }),
    onLeave: () => gsap.to(".bkg-an", { backgroundColor: rgba(38, 38, 38, 1) }),
    onLeaveBack: () =>
      gsap.to(".bkg-an", { backgroundColor: rgba(38, 38, 38, 1) }),
    onEnterBack: () => gsap.to(".bkg-an", { backgroundColor: color }),
    markers: true,
  });
});
