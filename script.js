// === MOBILE HAMBURGER MENU ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// === TYPING EFFECT ===
const typedTexts = ['Aspiring Python Developer', 'CS Student', 'Web Developer', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.querySelector('.typed-text');

function typeEffect() {
    const currentText = typedTexts[textIndex];
    
    if (isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let delay = 100;
    
    if (isDeleting) {
        delay = 50;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        delay = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typedTexts.length;
        delay = 500;
    }
    
    setTimeout(typeEffect, delay);
}

// Start typing effect
typeEffect();

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// === SCROLL ANIMATION FOR SKILL BARS ===
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// === CONTACT FORM ===
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;
    
    // Simulate sending
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
        button.style.background = '#00c851';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.disabled = false;
            this.reset();
        }, 3000);
    }, 2000);
});

// === SMOOTH SCROLL FOR NAVIGATION ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === FADE IN ANIMATION ON SCROLL ===
const fadeElements = document.querySelectorAll('.section, .project-card, .skill-category, .timeline-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    fadeObserver.observe(el);
});

// === PROFILE CIRCLE RANDOM COLOR EFFECT ===
const profileCircle = document.querySelector('.profile-circle');
if (profileCircle) {
    setInterval(() => {
        const hue = Math.random() * 30 + 180; // 180-210 (blue range)
        profileCircle.style.boxShadow = `0 0 60px hsla(${hue}, 100%, 50%, 0.3)`;
        profileCircle.style.borderColor = `hsl(${hue}, 100%, 50%)`;
    }, 3000);
}

console.log('🚀 Portfolio loaded successfully!');