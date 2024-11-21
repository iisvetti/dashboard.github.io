document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  const fadeUpElements = document.querySelectorAll(".fade-in-up");
  const fadeScaleElements = document.querySelectorAll(".fade-in-scale");
  const fadeLeftElements = document.querySelectorAll(".fade-in-left");
  const fadeRightElements = document.querySelectorAll(".fade-in-right");

  function checkVisibility() {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-visible");
      }
    });

    fadeUpElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-up-visible");
      }
    });

    fadeScaleElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-scale-visible");
      }
    });

    fadeLeftElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-left-visible");
      }
    });

    fadeRightElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-right-visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);

  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeGrowElements = document.querySelectorAll(".fade-in-grow");

  function checkVisibility() {
    fadeGrowElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("fade-in-grow-visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);

  checkVisibility();
});
