const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
