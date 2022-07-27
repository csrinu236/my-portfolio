const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const navBtn = document.querySelector(".nav-btn");
const date = document.getElementById("date");
const linksContainer = document.querySelector(".links-container");
console.log(linksContainer);
const links = document.querySelector(".nav-links");

const year = new Date().getFullYear();
date.textContent = year;
// numbers.reverse();

navBtn.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = linksHeight + "px";
  } else {
    linksContainer.style.height = 0;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => (linksContainer.style.height = 0));
});

window.addEventListener("scroll", function () {
  const height = this.window.pageYOffset;
  if (height > 72) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
