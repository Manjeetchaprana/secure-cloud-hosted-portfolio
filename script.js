/* Manjeet Chaprana | SOC Analyst Portfolio */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
function updateActiveNavigation() {
  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 170) {
      currentSection = section.id;
    }
  });
  navigationLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("load", updateActiveNavigation);

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
