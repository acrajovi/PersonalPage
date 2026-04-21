// Navigation
function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}

// Theme Toggle
function toggleDarkMode() {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light');
}

// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Animate skill bars on scroll
    animateSkillBars();
});

// Animate skill bars
let skillBarsAnimated = false;
function animateSkillBars() {
    if (skillBarsAnimated) return;
    
    const skillBars = document.querySelectorAll('.skill-bar .fill');
    const section = document.querySelector('.skills-section');
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < window.innerHeight - 100) {
        skillBars.forEach((bar, i) => {
            setTimeout(() => {
                bar.style.width = bar.style.getPropertyValue('--w');
            }, i * 100);
        });
        skillBarsAnimated = true;
    }
}

// Intersection Observer for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            document.querySelector('.mobile-menu').classList.remove('active');
        }
    });
});

// Initialize skill bars (hidden initially)
document.querySelectorAll('.skill-bar .fill').forEach(bar => {
    bar.style.width = '0';
});

// Initial animation trigger
setTimeout(animateSkillBars, 500);

// Nav link active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Language Toggle
let currentLang = 'en';
function toggleLanguage() {
    const desktopToggle = document.getElementById('lang-toggle');
    const mobileToggle = document.getElementById('lang-toggle-mobile');
    
    // Sincronizar ambos toggles
    const isChecked = desktopToggle ? desktopToggle.checked : (mobileToggle ? mobileToggle.checked : false);
    if (desktopToggle) desktopToggle.checked = isChecked;
    if (mobileToggle) mobileToggle.checked = isChecked;
    
    currentLang = isChecked ? 'es' : 'en';
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-es]');
    elements.forEach(el => {
        el.textContent = currentLang === 'es' ? el.dataset.es : el.dataset.en;
    });
    
    // Update CV download link
    const cvBtn = document.querySelector('.cv-btn');
    if (cvBtn) {
        const cvUrl = currentLang === 'es' ? cvBtn.dataset.cvEs : cvBtn.dataset.cvEn;
        cvBtn.href = cvUrl;
    }
}
