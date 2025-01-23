// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Example: Alert on CTA Button Click
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', () => {
        alert('Discover our services now!');
    });
});
