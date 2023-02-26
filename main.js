AOS.init({ duration: 600, anchorPlacement: "center-bottom" });

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".milestone-number")) && !viewed) {
    viewed = true;
    $(".number-holder").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
let speed = 200;

let scene1 = gsap.timeline();

ScrollTrigger.create({
  animation: scene1,
  trigger: "#hero",
  start: "top top",
  end: "80% center",
  scrub: 3,
  pin: true,
});

scene1.to("#skateperson", { x: -160, y: 50 });

gsap.to("#h2-1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 2,
  },
});

gsap.to("#skateperson", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 2,
  },
});

gsap.to("#h2-2", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-3", {
  yPercent: 60,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-4", {
  yPercent: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-5", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#h2-6", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

ScrollTrigger.create({
  animation: scene1,
  trigger: "#about-div",
  start: "top top",
  end: "80% center",
  scrub: 3,
  pin: true,
});

gsap.to("#a2-1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap.to("#a2-2", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollElement",
    scrub: 1,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".cloud-cover",
      start: "-=250px bottom",
      end: "top center",
      scrub: 1,
    },
  })
  .fromTo(".cloud1", { y: -200 }, { y: -550 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -250 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -400 }, 0);

// ScrollTrigger.create({
//   animation: scene1,
//   trigger: "#schedule-div",
//   start: "top top",
//   end: "80% center",
//   scrub: 3,
//   pin: true,
// });

// scene1.to("#iceberg-1", { x: -160, y: 50 });
// gsap.to("#iceberg-1", {
//   yPercent: 10,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".scrollElement",
//     scrub: 2,
//   },
// });

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Text animation
document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Imagine.", "Believe.", "Achieve!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) +
        '<span aria-hidden="true" id="typing-text"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation
  StartTextAnimation(0);
});
