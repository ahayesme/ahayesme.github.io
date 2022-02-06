const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sections = [
  {
    nav: "#aboutNav",
    panel: "#aboutPanel"
  },
  {
    nav: "#eventsNav",
    panel: "#eventsPanel"
  },
  {
    nav: "#publicationsNav",
    panel: "#publicationsPanel"
  },{
    nav:"#socialNav",
    panel: "#socialPanel"
  }
  
];

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {
  // nav menu fades in
  gsap.to("nav", {
    opacity: 0.8,
    delay: 1,
    duration: 0.5
  });

  // Typing animation
  var typed = new Typed(".js-typing", {
    strings: ["Writer", "Web Developer", "Product Manager"],
    showCursor: false,
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: false,
    shuffle: false,
    loop: true
  });

  // nav menu functionality setup
  setupNav();
  
});

function setupNav(){
  
  sections.forEach((section, i) => {
    let button = $(section.nav);
    let svg = $(section.nav + " svg");
    let panel = $(section.panel);

    button.addEventListener('click', () => {
      gsap.to(window, {duration: 1, scrollTo: {y: panel}});
    });

    ScrollTrigger.create({
      trigger: panel,
      start: "top center",
      end: "bottom center",
      toggleClass: {
        targets: svg,
        className: "active"
      }
    });
  });
}


