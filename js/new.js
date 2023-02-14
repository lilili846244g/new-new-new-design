/******************** Mobile  Navbar  ************************ */

var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline({
  paused: true,
});

menuBar.to(
  ".bar-1",
  0.5,
  {
    attr: {
      d: "M8,2 L2,8",
    },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);
menuBar.to(
  ".bar-2",
  0.5,
  {
    autoAlpha: 0,
  },
  "start"
);
menuBar.to(
  ".bar-3",
  0.5,
  {
    attr: {
      d: "M8,8 L2,2",
    },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);
menuBar.reverse();

var t1 = gsap.timeline();
t1.to(".fullpage-menu", 0, {
  display: "block",
  ease: "Expo.easeInOut",
});
t1.from(".menu-bg span", 1, {
  x: "100%",
  stagger: 0.1,
  ease: "Expo.easeInOut",
});
t1.to(".mb-ts-nav", 0, {
  display: "block",
});
t1.from(
  ".mb-link ",
  1.5,
  {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);

t1.reverse();

menuToggle.addEventListener("click", function () {
  menuBar.reversed(!menuBar.reversed());
  t1.reversed(!t1.reversed());
});

/********************* Desktop Navbar  **************************** */

gsap.set(".ts-hero__sections", {
  zIndex: (i, target, targets) => targets.length - i,
});
const links = gsap.utils.toArray("nav ul li a");
const sections = gsap.utils.toArray(".section-main .ts-hero__sections");
const navImg = gsap.utils.toArray("nav ul li img");

links.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(".section-main", {
      duration: 1,
      scrollTo: { y: sections[index], autoKill: true, ease: "power2" },
    });

    for (let i = 0; i < 6; i++) {
      prev = links;
      if (prev[i].classList.contains("active")) {
        prev[i].classList.remove("active");
      }
    }
    btn.classList.add("active");
  });
});

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "to top",
    end: "bottom bottom",
    //markers: true,
    onToggle: (self) => {
      if (self.isActive) {
        gsap.to(links[i], { fontWeight: 700 });
        gsap.to(navImg[i], { opacity: 1 });
      } else {
        gsap.to(links[i], { fontWeight: 100 });
        gsap.to(navImg[i], { opacity: 0 });
      }
    },
  });
});

/*********************  Change Background Color  *****************************/

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.utils.toArray(".ts-hero__sections").forEach(function (elem) {
  var color = elem.getAttribute("data-color");
  ScrollTrigger.create({
    trigger: elem,
    start: "30% 90%",
    end: "bottom 98%",
    onEnter: () => gsap.to(".bkg-an", { backgroundColor: color }),
    /*   onLeave: () => gsap.to(".bkg-an", { backgroundColor: rgba(38, 38, 38, 1) }),
    onLeaveBack: () => gsap.to(".bkg-an", { backgroundColor: "transparent" }), */
    onEnterBack: () => gsap.to(".bkg-an", { backgroundColor: color }),
    //markers: true,
  });
});

/*********************
   Scroll Animate 
**********************/

// =================== section 0 ==========================
gsap.from(".hero-logo", 0.5, {
  y: -20,
  opacity: 0,
  ease: "easeIn",
});
gsap.from(".hero-text h1", 1, {
  y: -20,
  opacity: 0,
  ease: "easeIn",
});
gsap.from(".hero-text p", 1, {
  opacity: 0,
  y: -20,
  ease: "easeIn",
  stagger: 0.5,
});

// =================== section 1 ==========================
gsap.from(".ts-hero__section-1", 0.5, {
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 80%",
    end: "10% bottom",
    scrub: 1,
  },
});
gsap;
gsap.from(".section-1-img", 1, {
  scale: 3,
  opacity: 0,
  ease: "easeIn",

  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 60%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec1-hero-title h1", 2, {
  y: 50,
  opacity: 0,
  ease: "easeInOut",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from("#section-1-p", 2, {
  y: -50,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 50%",
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
    scrub: 3,
  },
});

// =================== section 2 ==========================
gsap.from(".ts-hero__section-2", 1, {
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-2",
    //markers: true,
    start: "top 80%",
    end: "bottom 90%",
    scrub: 1,
  },
});
/* gsap.from(".section-2-img", 1, {
  scale: 3,
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
}); */
gsap.from(".sec2-hero-title h1", 2, {
  y: 50,
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
  y: -50,
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
    start: "top 60%",
    end: "bottom bottom",
    scrub: 3,
  },
});
// =================== section 3 ==========================
gsap.from(".ts-hero__section-3", 1, {
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-3",
    //markers: true,
    start: "top 80%",
    end: "bottom 90%",
    scrub: 1,
  },
});
gsap.from(".section-3-img", 1, {
  scale: 3,
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
  y: 50,
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
  y: -50,
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
    start: "top 60%",
    end: "bottom bottom",
    scrub: 3,
  },
});
// =================== section 4 ==========================
gsap.from(".ts-hero__section-4", 1, {
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-4",
    //markers: true,
    start: "top 80%",
    end: "bottom 90%",
    scrub: 1,
  },
});
gsap.from(".section-4-img", 1, {
  scale: 3,
  opacity: 0,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".sec4-hero-title-img",
    //  markers: true,
    start: "top 60%",
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
    scrub: 3,
  },
});

// =================== 企業責任-1  section 5  ==========================
gsap.from(".soso-img", 1, {
  y: -20,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-5-hero",
    //markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from("#so-so-logo-5a", 1, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-5-hero",
    //  markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-5-right h1", 1, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-5-hero",
    //  markers: true,
    start: "top 42%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-5-right p", 2, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-5-hero",
    //  markers: true,
    start: "top 43%",
    end: "bottom bottom",
    scrub: 3,
  },
});
// =================== 企業責任-2 section-5 ==========================
gsap.from(".soso-img-5a", 1, {
  y: -20,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-6-hero",
    //markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from("#so-so-logo-6a", 1, {
  opacity: 0,
  x: -20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-6-hero",
    //  markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-6-left h1", 1, {
  opacity: 0,
  x: -20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-6-hero",
    //  markers: true,
    start: "top 42%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-6-left p", 2, {
  opacity: 0,
  x: -20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-6-hero",
    //  markers: true,
    start: "top 43%",
    end: "bottom bottom",
    scrub: 3,
  },
});
// =================== 企業責任-3 section-5 ==========================
gsap.from(".soso-img-5b", 1, {
  y: -20,
  opacity: 0,
  ease: "ease",
  scrollTrigger: {
    trigger: ".ts-hero__section-7-hero",
    // markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from("#so-so-logo-7b", 1, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-7-hero",
    //  markers: true,
    start: "top 40%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-7-right h1", 1, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-7-hero",
    //  markers: true,
    start: "top 42%",
    end: "bottom bottom",
    scrub: 3,
  },
});
gsap.from(".section-7-right p", 2, {
  opacity: 0,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".ts-hero__section-7-hero",
    //  markers: true,
    start: "top 43%",
    end: "bottom bottom",
    scrub: 3,
  },
});

/******************** END *******************************/
