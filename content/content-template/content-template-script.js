const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

    function openMenu() {
        mobileMenu.style.right = '0px';
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.style.right = '-100%';
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function() {
        if (mobileMenu.style.right === '0px') {
            closeMenu();
        } else {
            openMenu();
        }
    });

        // Click outside to close
        document.addEventListener('click', function(e) {
            const isMenuOpen = mobileMenu.style.right === '0px';
            const clickedInsideMenu = mobileMenu.contains(e.target);
            const clickedHamburger = hamburger.contains(e.target);
            const clickedLogo = document.querySelector('.logo')?.contains(e.target);
            
            if (isMenuOpen && !clickedInsideMenu && !clickedHamburger && !clickedLogo) {
                closeMenu();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.style.right === '0px') {
                closeMenu();
            }
        });
        // Close mobile menu when clicking a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list a');

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
// Fade in functionality
const fadeElements = document.querySelectorAll('.fade-in-element');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.92) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
checkFade(); // Run on page load too

// Animate name underline
    setTimeout(() => {
        document.querySelector('.hero-text-large').classList.add('animate');
    }, 250);