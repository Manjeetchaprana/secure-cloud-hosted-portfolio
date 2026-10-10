
/* =====================================
   MANJEET'S PORTFOLIO JAVASCRIPT
   ===================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}


/* 2. CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navigationLinks = document.querySelectorAll(
    ".nav-links a"
);

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});


/* 3. HIGHLIGHT ACTIVE NAVIGATION SECTION */

const sections = document.querySelectorAll(
    "main section[id]"
);

function updateActiveNavigation() {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 180) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);
    });
}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* 4. AUTOMATICALLY UPDATE COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 5. PROJECT CARD HOVER ANIMATION */

const projectCards = document.querySelectorAll(
    ".project-card"
);

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});


/* 6. SKILL CARD HOVER ANIMATION */

const skillCards = document.querySelectorAll(".skill");

skillCards.forEach(function (skill) {
    skill.addEventListener("mouseenter", function () {
        skill.style.transform = "translateY(-4px)";
    });

    skill.addEventListener("mouseleave", function () {
        skill.style.transform = "translateY(0)";
    });
});


/* 7. CONFIRM JAVASCRIPT IS RUNNING */

console.log(
    "Manjeet's portfolio loaded successfully!"
);
