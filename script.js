// ===== EUNICE'S ESSENTIALS - MAIN SCRIPT =====

document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Navigation =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ===== Throttle utility =====
    function throttle(fn, wait) {
        let last = 0;
        return function () {
            const now = Date.now();
            if (now - last >= wait) {
                last = now;
                fn();
            }
        };
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    function onScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNav();
    }

    window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });

    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Active Navigation Link =====
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    // ===== Product Filter =====
    const filterTabs = document.querySelector('.filter-tabs');
    const productCards = document.querySelectorAll('.product-card');

    if (filterTabs) {
        filterTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach((card, index) => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 80);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }

    // ===== Scroll Reveal Animation =====
    const revealElements = document.querySelectorAll(
        '.about-item, .product-card, .nail-service-card, .insta-item, .contact-info, .contact-form-wrapper'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== Contact Form Handler =====
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const enquiry = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;

        const waUrl = `https://wa.me/27644855192?text=${encodeURIComponent(`Hello Eunice, I'm interested in your products.\n\nMy name is ${name}.\nEnquiry: ${enquiry}\nMessage: ${message}\n\nPhone: ${phone}`)}`;

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Redirecting to WhatsApp...';
        submitBtn.style.background = '#25D366';

        setTimeout(() => {
            window.open(waUrl, '_blank');
            submitBtn.textContent = 'Message Sent!';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 500);
    });

    // ===== Dynamic Copyright Year =====
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ===== Staggered reveal for grids =====
    const staggerContainers = document.querySelectorAll('.product-grid, .nail-services-grid, .insta-grid');

    staggerContainers.forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.08}s`;
        });
    });

    // ===== Event delegation for Quick View buttons =====
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.quick-view-btn');
            if (!btn) return;
            const card = btn.closest('.product-card');
            const name = card.querySelector('.product-info h3').textContent;
            const waUrl = `https://wa.me/27644855192?text=${encodeURIComponent(`Hello Eunice, I'm interested in your products.\n\nI'd like to enquire about: ${name}`)}`;
            window.open(waUrl, '_blank');
        });
    }

});
