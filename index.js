const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const accordions = document.querySelectorAll(".accordion-button");
const contactBtn = document.querySelector(".contact-button");
const formMessage = document.querySelector(".form-message");

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
  // const formMessage = document.getElementById("form-message");

  if (!contactForm.reportValidity()) return;

  // Disable button
  contactBtn.disabled = true;
  contactBtn.textContent = "Sending...";

  // Clear any previous message
  formMessage.textContent = "";
  formMessage.className = "form-message"; // Remove success/error class
  formMessage.style.opacity = "0"; // Reset visibility

  emailjs
    .sendForm("service_956huoq", "template_8vqf9nf", contactForm)
    .then(
      () => {
        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.classList.add("success");
        contactForm.reset();
      },
      (err) => {
        formMessage.textContent =
          "❌ Failed to send message. Please try again.";
        formMessage.classList.add("error");
      }
    )
    .finally(() => {
      // Re-enable the button
      contactBtn.disabled = false;
      contactBtn.textContent = "Submit";

      // Trigger fade-in
      setTimeout(() => {
        formMessage.style.opacity = "1";
      }, 50); // Delay to allow DOM update

      // Optional: Auto-fade after 5 seconds
      setTimeout(() => {
        formMessage.style.opacity = "0";
      }, 10000);
    });
});
