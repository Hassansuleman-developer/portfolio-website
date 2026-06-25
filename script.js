// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Simple animation on scroll (fade-in effect)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.6s ease-out";
        } else {
            section.style.opacity = "0.5";
            section.style.transform = "translateY(20px)";
        }
    });
});


// Initial style setup for animation
sections.forEach(section => {
    section.style.opacity = "0.5";
    section.style.transform = "translateY(20px)";
    // Typing effect
const text = "Aspiring Python Developer";
let index = 0;

function typeEffect() {
    const target = document.querySelector(".hero-content h3");

    if (index < text.length) {
        target.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
});