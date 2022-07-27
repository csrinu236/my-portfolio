const navbar = document.querySelector(".navbar");
const sideBar = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const date = document.getElementById("date");

const year = new Date().getFullYear();
date.textContent = year;
// numbers.reverse();

window.addEventListener("scroll", function () {
  const height = this.window.pageYOffset;
  if (height > 72) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
navBtn.addEventListener("click", function () {
  sideBar.classList.add("show-sidebar");
});
