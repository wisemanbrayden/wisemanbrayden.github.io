const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const logo = document.querySelector('.logo');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list a');

function isMenuOpen() {
    return Boolean(mobileMenu?.classList.contains('open'));
}

function openMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
    if (isMenuOpen()) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Click outside to close
document.addEventListener('click', (e) => {
    if (!isMenuOpen()) return;
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedHamburger = hamburger?.contains(e.target);
    const clickedLogo = logo?.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger && !clickedLogo) {
        closeMenu();
    }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) {
        closeMenu();
    }
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

// Fade in functionality using IntersectionObserver instead of scroll events
const fadeElements = document.querySelectorAll('.fade-in-element');

if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01
    });

    fadeElements.forEach((el) => fadeObserver.observe(el));
} else {
    fadeElements.forEach((el) => el.classList.add('visible'));
}

// Animate hero underline after initial paint
window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text-large');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('animate');
        }, 250);
    }
});