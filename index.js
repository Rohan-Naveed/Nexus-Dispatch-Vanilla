const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const accordions = document.querySelectorAll(".accordion-button");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  //   hamburger.classList.toggle("active");
});

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("expanded") === "true";

    btn.setAttribute("expanded", !isOpen);
    panel.classList.toggle("open");
    panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
  });
});
