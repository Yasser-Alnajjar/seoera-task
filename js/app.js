// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const menu = document.querySelector(".menu");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    navbar.classList.remove("scrolled");
  }
});
