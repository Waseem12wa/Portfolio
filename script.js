document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FFD700';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });

    console.log("Welcome to Waseem's Portfolio!");
});
