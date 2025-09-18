document.addEventListener('DOMContentLoaded', function() {

    // Scroll Animation Logic
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Simple Contact Form Handler (for demonstration purposes)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the form from actually submitting
        alert('Thank you for your message! This is a demo form.');
        form.reset();
    });

});