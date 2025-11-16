// ============================================
// LOADING SCREEN
// ============================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ff6b6b' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b6b',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// ============================================
// TYPING ANIMATION
// ============================================
const typed = new Typed('#typed', {
    strings: [
        'Digital Marketing Specialist',
        'Facebook Ads Expert',
        'Content Creator',
        'Social Media Strategist'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// ============================================
// SCROLL PROGRESS BAR
// ============================================
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealElements = document.querySelectorAll('.skill-card, .project-card, .tool-pill, .service-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursorOutline.className = 'cursor-outline';
document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorOutline.style.left = outlineX - 15 + 'px';
    cursorOutline.style.top = outlineY - 15 + 'px';
    
    requestAnimationFrame(animateOutline);
}

animateOutline();

// Cursor hover effects
document.querySelectorAll('a, button, .tool-pill, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(2)';
        cursorOutline.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'scale(1)';
    });
});

// Ripple effect - DISABLED for cleaner look

// ============================================
// 3D TILT EFFECT FOR CARDS (Optimized)
// ============================================
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    let isHovering = false;
    
    card.addEventListener('mouseenter', () => {
        isHovering = true;
    });
    
    card.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
    });
    
    card.addEventListener('mouseleave', () => {
        isHovering = false;
        card.style.transform = '';
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 15, 30, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 15, 30, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission - FormSubmit handles this automatically
// No need for custom JavaScript

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});


// ============================================
// ULTRA PREMIUM EFFECTS - LEVEL 2
// ============================================

// Generate Starfield (Optimized - reduced count)
function createStarfield() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const numberOfStars = 50; // Reduced from 100
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        star.style.willChange = 'opacity, transform';
        starsContainer.appendChild(star);
    }
}

createStarfield();

// 3D Parallax Effect (Optimized with throttle)
let mouseXParallax = 0, mouseYParallax = 0;
let parallaxFrame = null;

document.addEventListener('mousemove', (e) => {
    if (parallaxFrame) return;
    
    parallaxFrame = requestAnimationFrame(() => {
        mouseXParallax = (e.clientX / window.innerWidth - 0.5) * 15;
        mouseYParallax = (e.clientY / window.innerHeight - 0.5) * 15;
        
        const blobs = document.querySelectorAll('.blob');
        const heroImage = document.querySelector('.hero-image');
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.3;
            blob.style.transform = `translate(${mouseXParallax * speed}px, ${mouseYParallax * speed}px)`;
        });
        
        if (heroImage) {
            heroImage.style.transform = `translate(${mouseXParallax * 0.2}px, ${mouseYParallax * 0.2}px)`;
        }
        
        parallaxFrame = null;
    });
});

// Magnetic Effect for Buttons (Optimized - không áp dụng cho cards để tránh conflict)
document.querySelectorAll('.btn, .tool-pill').forEach(element => {
    let magnetActive = false;
    
    element.addEventListener('mouseenter', () => {
        magnetActive = true;
    });
    
    element.addEventListener('mousemove', (e) => {
        if (!magnetActive) return;
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.1;
        const moveY = y * 0.1;
        
        requestAnimationFrame(() => {
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    element.addEventListener('mouseleave', () => {
        magnetActive = false;
        element.style.transform = '';
    });
});

// Split Text Animation - DISABLED to prevent layout issues
// Uncomment if needed, but may cause text rendering problems

// Color Theme Change on Scroll (DISABLED - can cause performance issues)
// Uncomment if you want dynamic color changes, but may impact performance
/*
let colorChangeFrame = null;
window.addEventListener('scroll', () => {
    if (colorChangeFrame) return;
    colorChangeFrame = requestAnimationFrame(() => {
        // Color change logic here
        colorChangeFrame = null;
    });
});
*/

// Color interpolation functions removed - not needed if color change is disabled

// Smooth Page Transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Add transition effect
            document.body.style.opacity = '0.7';
            
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            }, 200);
        }
    });
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isNegative = target < 0;
    const absTarget = Math.abs(target);
    
    const timer = setInterval(() => {
        current += increment;
        if ((isNegative && current <= target) || (!isNegative && current >= target)) {
            current = target;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(Math.abs(current));
        const prefix = isNegative ? '-' : '+';
        const suffix = element.dataset.suffix || '';
        element.textContent = prefix + displayValue + suffix;
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const text = entry.target.textContent;
            const match = text.match(/([+-]?\d+)([%+MK]*)/);
            
            if (match) {
                const value = parseInt(match[1]);
                entry.target.dataset.suffix = match[2];
                animateCounter(entry.target, value);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item h3').forEach(stat => {
    statsObserver.observe(stat);
});

// Glitch Effect on Logo
setInterval(() => {
    const logo = document.querySelector('.logo');
    if (logo && Math.random() > 0.95) {
        logo.style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
            logo.style.animation = '';
        }, 300);
    }
}, 3000);

// Particle explosion - DISABLED for cleaner look

console.log('🔥 Ultra Premium Effects Loaded! 🔥');


// ============================================
// ULTRA SMOOTH ANIMATIONS WITH GSAP & LENIS
// ============================================

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.5
            });
        }
    });
});

// GSAP Animations for Sections
gsap.utils.toArray('section').forEach((section, index) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Skill Cards Animation
gsap.utils.toArray('.skill-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 60,
        rotation: 5,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Project Cards Animation
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Tool Pills Animation
gsap.utils.toArray('.tool-pill').forEach((pill, index) => {
    gsap.from(pill, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: index * 0.05,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: pill,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Stats Counter Animation
gsap.utils.toArray('.stat-item').forEach((stat, index) => {
    gsap.from(stat, {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        delay: index * 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Service Items Animation
gsap.utils.toArray('.service-item').forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Section Title Animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Smooth Hero Content Animation
gsap.from('.hero-content h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from('.hero-content .hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.7,
    ease: "power3.out"
});

gsap.from('.hero-content .hero-description', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.9,
    ease: "power3.out"
});

gsap.from('.hero-buttons .btn', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.1,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

gsap.from('.social-links a', {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    delay: 1.3,
    stagger: 0.1,
    ease: "elastic.out(1, 0.5)"
});

// Smooth Hero Image Animation
gsap.from('.hero-image', {
    opacity: 0,
    scale: 0.8,
    rotation: 10,
    duration: 1.2,
    delay: 0.8,
    ease: "power3.out"
});

// Parallax Effect for Hero Image
gsap.to('.hero-image', {
    y: -50,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// Navbar Scroll Effect
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
        className: 'scrolled',
        targets: '.navbar'
    }
});

// Smooth Scroll Progress
gsap.to('.scroll-progress', {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
        start: 'top top',
        end: 'max',
        scrub: 0.3
    }
});

// Magnetic Effect with GSAP - Only for tool-pill, not buttons
document.querySelectorAll('.tool-pill').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    element.addEventListener('mouseleave', (e) => {
        gsap.to(element, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

console.log('🚀 Ultra Smooth Animations Loaded with GSAP & Lenis! 🚀');
