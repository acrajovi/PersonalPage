// Traducción movida a translation.js
/* Copyright José Acosta. All Rights Reserved. */

// Navigation toggle for mobile
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close menu when clicking outside
function closeMenuOnOutsideClick(event) {
    const menu = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    
    if (menu && menu.classList.contains("open")) {
        // Check if click is outside the menu and hamburger icon
        if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            menu.classList.remove("open");
            hamburgerIcon.classList.remove("open");
        }
    }
}

// Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Dark mode functionality
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', darkMode);
}

function initializeTheme() {
    const savedDarkMode = localStorage.getItem('darkMode');
    darkMode = savedDarkMode === 'true';
    if (darkMode) {
        document.body.classList.add("dark-mode");
    }
}

// Initialize theme on page load
initializeTheme();

// Back to top button functionality
function showBackToTopButton() {
    const button = document.getElementById("back-to-top");
    if (button) {
        if (window.pageYOffset > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}

function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Enhanced navigation on scroll
function enhanceNavigation() {
    const nav = document.querySelector('nav');
    if (nav && window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else if (nav) {
        nav.classList.remove('scrolled');
    }
}

// Event listeners
window.addEventListener('scroll', showBackToTopButton);
window.addEventListener('scroll', enhanceNavigation);
document.addEventListener('click', closeMenuOnOutsideClick);

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }
    
    // Initialize navigation state
    enhanceNavigation();
});

// Go to top on page load if hash exists
window.addEventListener('load', function() {
    if (window.location.hash) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);
    }
});
  