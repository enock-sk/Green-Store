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
