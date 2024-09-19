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

// social share

// Set href for all Facebook share links
document.querySelectorAll(".facebook-share").forEach((el) => {
  el.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
});

// Set href for all Twitter share links
document.querySelectorAll(".twitter-share").forEach((el) => {
  el.href = `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20Muay%20Thai%20blog!`;
});

// Set href for all Instagram share links
document.querySelectorAll(".instagram-share").forEach((el) => {
  el.href = `https://www.instagram.com/?url=${encodeURIComponent(
    window.location.href
  )}`;
});

// Set href for all LinkedIn share links
document.querySelectorAll(".linkedin-share").forEach((el) => {
  el.href = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
});
