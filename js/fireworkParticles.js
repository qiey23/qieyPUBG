particlesJS('firework-js', {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: ['#ffcc00', '#ff0033', '#00ccff', '#ffffff']
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
