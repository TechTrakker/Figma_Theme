document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navIcons = document.querySelector('.nav-icons');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navIcons.classList.toggle('active');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            navbar.style.top = '-60px'; // Hide navbar
        } else {
            navbar.style.top = '0'; // Show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
