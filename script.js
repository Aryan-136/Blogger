document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// Navbar Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
    
document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});
  // Show or hide the scroll-to-top button
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
    // Smooth scrolling for the scroll-to-top button
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
    // Form Validation (basic example)
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Example basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Assuming you have server-side validation and reCAPTCHA setup
        // Form submission code goes here
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});
