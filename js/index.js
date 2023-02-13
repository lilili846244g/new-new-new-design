/****************  main ************************************ */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = gsap.utils.toArray(".ts-hero__sections");
const navLinks = gsap.utils.toArray("nav ul li a ");
navLinks.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    /*  navLinks.forEach((item) => {
      item.addEventListener("click", function (e) {
        for (var i = 0; i < navLinks.length; i++) {
          navLinks[i].classList.remove("ts-active");
        }
        this.classList.add("ts-active");
      });
    }); */

    gsap.to(window, { scrollTo: i * innerHeight });

    document.getElementById(`ts-section-${i}`).classList.add("ts-active");
    gsap.to(`#ts-section-${i + 1}`, { scale: 1.2 });
  });
});
/* const boxs = gsap.utils.toArray(".ts-hero__sections");

boxs.forEach((boxs, i) => {
  ScrollTrigger.create({
    start: 0,
    end: (i + 1) * innerHeight - innerHeight / 2,
    markers: true,
    onLeave: () => {
      navLinks.forEach((e) => {
        e.classList.remove("ts-active");
      });
      navLinks[i].classList.add("ts-active");
      if (navLinks[i + 1]) {
        gsap.to(navLinks[i + 1], { scale: 1.5 });
        gsap.to(navLinks[i], { scale: 1 });
      }
    },
    onEnterBack: () => {
      navLinks.forEach((e) => {
        e.classList.remove("ts-active");
      });
      navLinks[i].classList.add("ts-active");
      gsap.to(navLinks[i], { scale: 1.5 });
      if (navLinks[i + 1]) {
        gsap.to(navLinks[i + 1], { scale: 1 });
      }
    },
  });
}); */

let tsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-main",
    pin: true,
    start: "top top",
    end: () => "+=" + offsetHeight * sections.length,
    scrub: 4,
    markers: true,
  },
});

// =================== section 0 ==========================

/* tsAnimation.from(
  ".ts-text-con",
  {
    y: -100,
    opacity: 0,
    duration: 0.3,
  },
  "-1"
); */

tsAnimation.to(
  ".ts-hero",
  {
    duration: 2,
    backgroundColor: "rgba(139, 69, 69,1)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-0", { opacity: 0 });

tsAnimation.to(".ts-hero__section-0", { display: "none", duration: 0 });

// =================== section 1 ==========================

/* tsAnimation.fromTo(
  ".container-1",
  {
    opacity: 0,
    //    y: 100,
  },
  {
    opacity: 1,
    //   y: -700,
    duration: 3,
  }
);
 */
tsAnimation.to(
  ".ts-hero",
  {
    duration: 1.5,
    backgroundColor: "rgba(209, 154, 0, 1.0)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-1", { opacity: 0 });
tsAnimation.to(".ts-hero__section-1", { display: "none", duration: 0 });

// =================== section 2 ==========================
/* tsAnimation.fromTo(
  ".container-2",
  {
    opacity: 0,
    //  y: 100,
  },
  {
    opacity: 1,
    //y: -700,
    duration: 3,
  }
); */

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgba(139, 69, 69, 1.0)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-2", { opacity: 0 });
tsAnimation.to(".ts-hero__section-2", { display: "none", duration: 0 });

// =================== section 3 ==========================

/* tsAnimation.fromTo(
  ".container-3",
  {
    opacity: 0,
    //   y: 100,
  },
  {
    opacity: 1,
    //  y: -700,
    duration: 3,
  }
); */

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgba( 44, 86, 104, 1.0)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-3", { opacity: 0 });
tsAnimation.to(".ts-hero__section-3", { display: "none", duration: 0 });

// =================== section 4 ==========================
/* tsAnimation.fromTo(
  ".container-4",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    //   y: -700,
    duration: 3,
  }
); */

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgb(68,142,193)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-4", { opacity: 0 });
tsAnimation.to(".ts-hero__section-4", { display: "none", duration: 0 });

// =================== section 5 ==========================

/* tsAnimation.from(".ts-hero__section-5-hero", {
  // y: -1000,
  opacity: 0,
  duration: 1.5,
}); */

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgba(38, 38, 38, 1)",
  },
  "-=1"
);
tsAnimation.to(".ts-hero__section-5", { opacity: 0 });
tsAnimation.to(".ts-hero__section-5", { display: "none", duration: 0 });

// =================== section 6 ==========================

tsAnimation.from(".ts-hero__section-6-hero", {
  // y: -1000,
  opacity: 0,
  duration: 1.5,
});

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgba(38, 38, 38, 1)",
  },
  "-=1"
);
tsAnimation.to(".ts-hero__section-6", { opacity: 0 });
tsAnimation.to(".ts-hero__section-6", { display: "none", duration: 0 });

// =================== section 7 ==========================

tsAnimation.from(".ts-hero__section-7-hero", {
  // y: -1300,
  opacity: 0,
  duration: 1.5,
});

tsAnimation.to(
  ".ts-hero",
  {
    duration: 1,
    backgroundColor: "rgba(38, 38, 38, 1)",
  },
  "-=1"
);
