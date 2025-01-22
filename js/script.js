// Smooth scrolling for anchor links on the same page
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            // Smooth scroll only for same-page anchor links
            e.preventDefault();
            const targetId = target.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Highlight active link in the navigation bar based on the current page
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('load', () => {
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Optional: Sticky navbar functionality (if needed for dynamic classes)
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};
