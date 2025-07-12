const accordions = document.querySelectorAll(".accordion-button");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.getAttribute("expanded") === "true";

    btn.setAttribute("expanded", !isOpen);
    panel.classList.toggle("open");
    panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
  });
});
