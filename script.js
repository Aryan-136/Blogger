// Navbar Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade-in on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.3
};

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    fadeInOnScroll.observe(element);
});
