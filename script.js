// ===== Replace these placeholders with real profile details =====
var CONTACTS = {
  ahmad:   { github: "https://github.com/imahmad0864-dotcom", linkedin: "http://linkedin.com/in/muhammad-ahmad-9b06a2331", email: "imahmad0864@gmail.com" },
  hussain: { github: "https://github.com/MuhammadHussain25", linkedin: "https://www.linkedin.com/in/muhammad-hussain-khalid-066128430", email: "hussainwork25@gmail.com" }
};
// ================================================================

// Fill contact links from the CONTACTS object
document.querySelectorAll("[data-link]").forEach(function (el) {
  var parts = el.getAttribute("data-link").split(".");
  var value = CONTACTS[parts[0]][parts[1]];
  if (parts[1] === "email") {
    el.href = "mailto:" + value;
    el.textContent = value;
  } else {
    el.href = value;
    el.textContent = value.replace(/^https?:\/\/(www\.)?/, "");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
  var open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Highlight current section in the navbar
var links = Array.prototype.slice.call(navLinks.querySelectorAll("a"));
var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
function setActive() {
  var pos = window.scrollY + 120, current = 0;
  sections.forEach(function (s, i) { if (s && s.offsetTop <= pos) current = i; });
  links.forEach(function (a, i) { a.classList.toggle("active", i === current); });
}
window.addEventListener("scroll", setActive);
setActive();
