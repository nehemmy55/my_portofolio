   // --- New Animation Script ---
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bars
            if (entry.target.id === 'skills') {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            }
        }
    });
}, {
    threshold: 0.1 
});

// Observe all sections with the fade-in-up class
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Observe hero section separately for instant animation
const heroObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
        if (entry.isIntersecting) {
           entry.target.classList.add('visible');
           heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

heroObserver.observe(document.querySelector('#hero .fade-in-up'));


// --- Mobile Menu Toggle Script ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
