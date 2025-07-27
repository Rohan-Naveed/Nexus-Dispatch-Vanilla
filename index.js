const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const accordions = document.querySelectorAll(".accordion-button");
const contactBtn = document.querySelector(".contact-button");

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

function navigateToSection(event, sectionId) {
  event.preventDefault();

  // Change this if your homepage URL is different
  const homePath = "/";

  if (window.location.pathname !== homePath) {
    sessionStorage.setItem("scrollTarget", sectionId);
    window.location.href = homePath + "#" + sectionId;
  }
}

// CONTACT US LOGIC
emailjs.init("udL4IO2sU-lbu_9Yb");

// Manually trigger form submission
contactBtn.addEventListener("click", function () {
  const contactForm = document.querySelector(".contact-form");

  if (!contactForm.reportValidity()) return; // Check if form is valid

  emailjs.sendForm("service_956huoq", "template_8vqf9nf", contactForm).then(
    () => {
      alert("✅ Message sent successfully!");
      contactForm.reset();
    },
    (err) => {
      alert("❌ Failed to send message: " + JSON.stringify(err));
    }
  );
});
