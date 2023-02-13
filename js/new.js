gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "top bottom",
    end: "bottom 98%",
    onEnter: () => gsap.to(".bkg-an", { backgroundColor: color }),
    /*   onLeave: () => gsap.to(".bkg-an", { backgroundColor: rgba(38, 38, 38, 1) }),
    onLeaveBack: () => gsap.to(".bkg-an", { backgroundColor: "transparent" }), */
    onEnterBack: () => gsap.to(".bkg-an", { backgroundColor: color }),
    //  markers: true,
  });
});

// =================== section 0 ==========================
gsap.from(".hero-logo", 0.5, {
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-0",
    start: "top top",
    end: "bottom center",
    scrub: 1,
  },
});
gsap.from(".hero-text h1", 1, {
  y: -20,
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-text-con",
    //markers: true,
    start: "top -10%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".hero-text p", 1, {
  opacity: 0,
  x: -10,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-text-con",
    // markers: true,
    start: "top -10%",
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
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 60%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec1-hero-title h1", 2, {
  x: 100,
  opacity: 0,
  ease: "easeInOut",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 60%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-1-p", 2, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 60%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#scetion-1-an p", 3, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scetion-1-an",
    //markers: true,
    start: "top 60%",
    end: "bottom bottom",
    scrub: 1,
  },
});

// =================== section 2 ==========================
gsap.from(".section-2-img", 1, {
  scale: 10,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec2-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec2-hero-title h1", 2, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec2-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-2-p", 2, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec2-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#scetion-2-an p", 3, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scetion-2-an",
    //  markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});
// =================== section 3 ==========================
gsap.from(".section-3-img", 1, {
  scale: 10,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec3-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec3-hero-title h1", 2, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec3-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-3-p", 2, {
  x: 100,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec3-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#scetion-3-an p", 3, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scetion-3-an",
    //  markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});
// =================== section 4 ==========================
gsap.from(".section-4-img", 1, {
  scale: 10,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec4-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec4-hero-title h1", 2, {
  y: 50,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec4-hero-title-img",
    //  markers: true,
    start: "top 51%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-4-p", 2, {
  y: -50,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec4-hero-title-img",
    //  markers: true,
    start: "top 52%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#scetion-4-an p", 3, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#scetion-4-an",
    //  markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

// =================== 企業責任-1  section 5  ==========================
gsap.from(".soso-img", 1, {
  y: -50,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-5-hero",
    //  markers: true,
    start: "-20% top",
    end: "10% center",
    scrub: 3,
  },
});

// =================== 企業責任-2 section-5 ==========================
gsap.from(".soso-img-5a", 2, {
  y: -50,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-6-hero",
    //  markers: true,
    start: "-20% top",
    end: "10% center",
    scrub: 3,
  },
});
// =================== 企業責任-2 section-6 ==========================
gsap.from(".soso-img-5b", 2, {
  y: -50,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-7-hero",
    //  markers: true,
    start: "-20% top",
    end: "10% center",
    scrub: 3,
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
    //  markers: true,
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
