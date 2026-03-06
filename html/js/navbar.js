/**
 * NAVBAR FUNCTIONALITY
 * Handles responsive navbar behavior and scroll effects
 * Includes smooth scrolling, active link highlighting, and accessibility features
 */

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    /**
     * Add scroll effect - add shadow when scrolled
     */
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /**
     * Close navbar when nav link is clicked
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarToggler.offsetParent !== null) {
                navbarToggler.click();
            }
        });
    });

    /**
     * Active link highlighting based on scroll position
     * Detects which section is in view and highlights corresponding nav link
     */
    function updateActiveLink() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navbarHeight = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    /**
     * Smooth scrolling for nav links with offset for fixed navbar
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    updateActiveLink();
                }
            }
        });
    });

    /**
     * Accessibility: Keyboard navigation
     */
    navbarToggler.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    /**
     * Close mobile menu when clicking outside
     */
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });

    /**
     * Initialize active link on page load
     */
    updateActiveLink();
});
