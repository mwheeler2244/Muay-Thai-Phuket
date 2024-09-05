const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links ul");
const mobileClose = document.querySelector(".mobile__close");
const links = document.querySelectorAll(".nav__links a");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
  mobileClose.classList.add("active");
});

mobileClose.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileClose.classList.toggle("active");
  hamburger.classList.remove("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.remove("active");
    mobileClose.classList.remove("active");
  });
});
