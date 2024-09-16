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

// socials share

document.getElementById(
  "facebook-share"
).href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
document.getElementById(
  "twitter-share"
).href = `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20Muay%20Thai%20blog!`;
document.getElementById(
  "instagram-share"
).href = `https://www.instagram.com/?url=${encodeURIComponent(
  window.location.href
)}`;
