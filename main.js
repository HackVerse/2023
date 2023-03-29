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

var date_str = new Date("2023-04-02T18:29:00.000Z"); //.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
var countDownDate = Date.parse(date_str);

// Update the count down every 1 second
var x = setInterval(function () {

  var now_str = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  var now = Date.parse(now_str);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-day").innerHTML=days;
  document.getElementById("countdown-hour").innerHTML=hours;
  document.getElementById("countdown-minute").innerHTML=minutes;
  document.getElementById("countdown-second").innerHTML=seconds;

  // If the count down is finished in corner cases
  // reset the count to next day, this makes the
  // timer on forever loop
  if (distance < 0) {
    countDownDate = getNeverEndingDate();
  }
}, 1000);

// GSAP

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

var loader = document.getElementById("preloader");
var navbar = document.getElementById("scroll-spy");

window.addEventListener("DOMContentLoaded", function () {
  loader.style.display = "none";
  navbar.classList.add('fixed-top');
});

document.addEventListener("scroll",lazyload);
// make event listeners passive to improve scrolling performance
document.addEventListener('touchstart', onTouchStart, {passive: true});

