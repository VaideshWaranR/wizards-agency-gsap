
var tl = gsap.timeline();
tl.from("nav h1,nav h4,nav  button", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2,
});
tl.from(".center1 h1", {
  x: -300,
  opacity: 0,
  duration: 0.6,
});
tl.from(".center1 h2", {
  x: -100,
  opacity: 0,
  duration: 0.5,
});
tl.from(".center1 button", {
  x: -100,
  opacity: 0,
  duration: 0.4,
});
tl.from(
  ".center2 img",
  {
    opacity: 0,
    duration: 0.5,
  },
  "-=1"
);
tl.from(".sectionbottom img", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2,
});


var t = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroll: "body",
    // markers: true,
    start: "top 40%",
    end: "top -100%",
    scrub: 2,
  },
});
t.from(".services h3 ,.services p", {
  y: 10,
  duration: 0.5,
  opacity: 0,
});
t.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "d"
);
t.from(
  ".elem.line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "d"
);
t.from(
  ".elem.line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "f"
);
t.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "f"
);
t.from(
  ".elem.line3.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "m"
);
t.from(
  ".elem.line3.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "m"
);
t.from(
  ".elem.line4.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "v"
);
t.from(
  ".elem.line4.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "v"
);
