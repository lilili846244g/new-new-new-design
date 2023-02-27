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
  display: "block",
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

var mbLink = gsap.utils.toArray(".mb-ts-menu .mb-link a");
mbLink.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    t1.reverse();
    menuBar.reverse();
  });
});

/********************* Desktop Navbar  **************************** */

gsap.set(".ts-hero__sections", {
  zIndex: (i, target, targets) => targets.length - i,
});
const links = gsap.utils.toArray("nav .ts-menu li a");
const sections = gsap.utils.toArray(".section-main .ts-hero__sections");
const navImg = gsap.utils.toArray("nav .ts-menu li .navImg");

links.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(".section-main", {
      duration: 1,
      scrollTo: { y: sections[index], ease: "power2" },
    });

    /*  for (let i = 0; i < 6; i++) {
      prev = links;
      if (prev[i].classList.contains("active")) {
        prev[i].classList.remove("active");
      }
    }
    btn.classList.add("active");  */
  });
});

/* sections.forEach((section, i) => {
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
}); */

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    //markers: true,
    onLeave: () => {
      if (links[i + 1]) {
        gsap.to(links[i + 1], { fontWeight: 700 });
        gsap.to(links[i], { fontWeight: 100 });
        gsap.to(navImg[i + 1], { opacity: 1 });
        gsap.to(navImg[i], { opacity: 0 });
      }
    },
    onEnterBack: () => {
      gsap.to(links[i], { fontWeight: 700 });
      gsap.to(navImg[i], { opacity: 1 });
      if (links[i + 1]) {
        gsap.to(links[i + 1], { fontWeight: 100 });
        gsap.to(navImg[i + 1], { opacity: 0 });
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
    start: "62% 90%",
    end: "bottom 98%",
    onEnter: () => gsap.to(".section-main", { backgroundColor: color }),
    /*onLeave: () =>
      gsap.to(".bkg-an", { backgroundColor: "rgba(139, 69, 69, 1)" }),
    onLeaveBack: () =>
      gsap.to(".bkg-an", { backgroundColor: "rgba(139, 69, 69, 0.9)" }),*/
    onEnterBack: () => gsap.to(".section-main", { backgroundColor: color }),
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
gsap.from(".box", {
  "-webkit-mask-image":
    "-webkit-linear-gradient( rgb(0, 0, 0) 0%,rgb(0, 0, 0) 80%,rgba(0, 0, 0, 0) 100%",
  duration: 2.0,
  ease: "none",
  paused: true,
});
/* gsap.to(".hero-bg-img", 0.5, {
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 70%",
    end: "10% bottom",
    scrub: 1,
  },
}); */
/* gsap.to(".hero-bg", 0.5, {
  ease: "easeIn",
  backgroundColor: "rgba(139, 69, 69, 1)",
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top 70%",
    end: "10% bottom",
    scrub: 1,
  },
}); */

// =================== section 1 ==========================
gsap.from(".ts-hero__section-1", 0, {
  opacity: 1,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-1",
    //markers: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});
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
  scrollTrigger: {
    trigger: ".sec1-hero-title-img",
    //markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});
/**************** section-1  btn  ********************************* */
var btnButton = document.getElementById("btn-11");
var t6 = gsap.timeline({
  paused: true,
});
var t6 = gsap.timeline();
t6.to("#scetion-1-an", 1, {
  display: "block",
  opacity: 1,
  x: 20,
  ease: "easeIn",
});

t6.reverse();
btnButton.addEventListener("click", function () {
  t6.reversed(!t6.reversed());
});

/**************** btn  ********************************* */

/* gsap.from("#scetion-1-an p", 3, {
  display: "block",
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
}); */

// =================== section 2 ==========================
gsap.from(".ts-hero__section-2", 1, {
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".ts-hero__section-2",
    //markers: true,
    start: "top 80%",
    end: "bottom 90%",
    scrub: 1,
  },
});
gsap.from(".section-2-img", 1, {
  scale: 3,
  opacity: 0,
  ease: "easeIn",
  scrollTrigger: {
    trigger: ".sec2-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".sec2-hero-title h1", 2, {
  y: 50,
  opacity: 0,
  ease: "easeIn",
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
  scrollTrigger: {
    trigger: ".sec2-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

/**************** section-2  btn  ********************************* */
var btnButton = document.getElementById("btn-22");
var t7 = gsap.timeline({
  paused: true,
});
var t7 = gsap.timeline();
t7.to("#scetion-2-an", 1, {
  display: "block",
  opacity: 1,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
});

t7.reverse();
btnButton.addEventListener("click", function () {
  t7.reversed(!t7.reversed());
});

// =================== section 3 ==========================
gsap.from(".ts-hero__section-3", 1, {
  opacity: 0,
  ease: "easeIn",
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
  scrollTrigger: {
    trigger: ".sec3-hero-title-img",
    //  markers: true,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1,
  },
});

/**************** section-3  btn  ********************************* */
var btnButton = document.getElementById("btn-33");
var t8 = gsap.timeline({
  paused: true,
});
var t8 = gsap.timeline();
t8.to("#scetion-3-an", 1, {
  display: "block",
  opacity: 1,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
});

t8.reverse();
btnButton.addEventListener("click", function () {
  t8.reversed(!t8.reversed());
});
// =================== section 4 ==========================
gsap.from(".ts-hero__section-4", 1, {
  opacity: 0,
  ease: "easeIn",
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
  scrollTrigger: {
    trigger: ".sec4-hero-title-img",
    //  markers: true,
    start: "top 52%",
    end: "bottom bottom",
    scrub: 1,
  },
});

/**************** section-4  btn  ********************************* */
var btnButton = document.getElementById("btn-44");
var t9 = gsap.timeline({
  paused: true,
});
var t9 = gsap.timeline();
t9.to("#scetion-4-an", 1, {
  display: "block",
  opacity: 1,
  x: 20,
  ease: "easeIn",
  stagger: 0.5,
});

t9.reverse();
btnButton.addEventListener("click", function () {
  t9.reversed(!t9.reversed());
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
