gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "top bottom",
    end: "bottom 95%",
    onEnter: () => gsap.to(".bkg-an", { backgroundColor: color }),
    /*   onLeave: () => gsap.to(".bkg-an", { backgroundColor: rgba(38, 38, 38, 1) }),
    onLeaveBack: () => gsap.to(".bkg-an", { backgroundColor: "transparent" }), */
    onEnterBack: () => gsap.to(".bkg-an", { backgroundColor: color }),
    // markers: true,
  });
});

// =================== section 0 ==========================
gsap.from(".hero-logo ", 0.5, {
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-0",
    start: "top top",
    end: "bottom center",
    scrub: 1,
  },
});
gsap.from(".hero-text h1 ", 0.5, {
  Y: -100,
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-text-con",
    //markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".hero-text p", 2, {
  opacity: 0,
  x: -20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-text-con",
    // markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

// =================== section 1 ==========================
gsap.from(".section-1-img", 1, {
  scale: 10,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 30%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec1-hero-title h1", 1, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 30%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-1-p", 0.8, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 35%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#scetion-1-an p", 2, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scetion-1-an",
    markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});
/***************************************************/

/* let links = gsap.utils.toArray(".ts-menu li a");
links.forEach((a) => {
  let element = document.querySelector(a.getAttribute("href")),
    linkST = ScrollTrigger.create({
      trigger: element,
      start: "top top",
    }),
    highlightST = ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom bottom",
      markers: true,
      onToggle: (self) => self.isActive && setActive(a),
    });
  a.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: linkST.start });
  });
});

function setActive(link) {
  links.forEach((el) => el.classList.remove("active"));
  link.classList.add("active");
}
 */
