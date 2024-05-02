function adjustVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", adjustVH);
adjustVH();
$(document).ready(function () {
  $("#bars").click(function () {
    $("ul").toggleClass("show");
  });
});
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader__hidden");
  loader.addEventListener("transitionEnd", () => {
    document.body.removeChild(loader);
  });
});
function slideLeft() {
  const container = document.querySelector(".slide-container");
  container.scrollLeft -= 300;
}

function slideRight() {
  const container = document.querySelector(".slide-container");
  container.scrollLeft += 300; 
}

function slideLeft() {
  var container = document.querySelector(".slide-container");
  container.scrollLeft -= 300;
}
document.addEventListener('DOMContentLoaded', function () {
  const slideContainer = document.querySelector('.slide-container');
  let touchstartX = 0;
  let touchendX = 0;

  function handleGesture() {
      if (touchendX < touchstartX) slideRight();
      if (touchendX > touchstartX) slideLeft();
  }

  slideContainer.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
  });

  slideContainer.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
  });

  function slideRight() {
      // This function needs to adjust the scroll position of .slide-container
      // For simplicity, we're just scrolling to the next 600px. Adjust based on your layout.
      slideContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }

  // Define slideLeft if needed...
  function slideLeft() {
     slideContainer.scrollBy({ left: -600, behavior: 'smooth' });
  }
});
