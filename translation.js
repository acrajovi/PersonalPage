const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            contact: "Contacto"
        },
        profile: {
            hello: "Hola, soy",
            role: "Ing. en Sistemas Informáticos",
            country: "De Paraguay",
            cv_es: "Descargar CV (ES)",
            cv_en: "Descargar CV (EN)",
            contact_btn: "Contáctame"
        },
        about: {
            get_to_know: "Conóceme más",
            title: "Sobre mí",
            experience: "Experiencia",
            years: "13+ años<br>Desarrollo Fullstack",
            education: "Educación",
            education_details: "Ingeniero en Sistemas<br>Lic. en Análisis de Sistemas<br>Diplomados en Java y Android",
            text: "Ingeniero en Sistemas Informáticos con más de 13 años de experiencia. Especialista en desarrollo Android, programación Java, Ethical Hacking y soluciones Full Stack."
        },
        experience: {
            explore: "Explora mi",
            title: "Experiencia",
            frontend: "Frontend",
            backend: "Backend",
            others: "Otras Habilidades",
            fullstack: "Desarrollador Full Stack con más de 13 años de experiencia en desarrollo de sistemas Desktop/Web (Frontend y Backend), APIs, aplicaciones móviles Android, páginas web, gestión de bases de datos, servidores, control de versiones y consultoría en Ethical Hacking.",
            experienced: "Experto",
            intermediate: "Intermedio"
        },
        contact: {
            get_in_touch: "Contáctame",
            title: "Contacto"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            contact: "Contact"
        },
        profile: {
            hello: "Hello, I'm",
            role: "Sr. Software Engineer",
            country: "From Paraguay",
            cv_es: "Download CV (ES)",
            cv_en: "Download CV (EN)",
            contact_btn: "Contact Me"
        },
        about: {
            get_to_know: "Get to Know More",
            title: "About Me",
            experience: "Experience",
            years: "13+ years<br>Fullstack Development",
            education: "Education",
            education_details: "Software Engineer<br>Bachelor's in Systems Analysis<br>Diplomas in Java & Android",
            text: "Software Engineer with 13+ years of experience. Specialist in Android development, Java programming, Ethical Hacking, and Full Stack solutions."
        },
        experience: {
            explore: "Explore My",
            title: "Experience",
            frontend: "Frontend",
            backend: "Backend",
            others: "Other Skills",
            fullstack: "Full Stack Developer with more than 13 years of experience in Desktop/Web development (Frontend & Backend), APIs, Android mobile apps, web pages, database management, servers, version control, and Ethical Hacking consulting.",
            experienced: "Experienced",
            intermediate: "Intermediate"
        },
        contact: {
            get_in_touch: "Get in Touch",
            title: "Contact Me"
        }
    }
};

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    updateTexts();
}

function updateTexts() {
    const desktopToggle = document.getElementById("language-toggle");
    const mobileToggle = document.getElementById("language-toggle-mobile");
    if (desktopToggle) desktopToggle.checked = currentLang === "es";
    if (mobileToggle) mobileToggle.checked = currentLang === "es";
    
    const t = translations[currentLang];
    const isES = currentLang === "es";
    
    // Desktop nav
    const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');
    if (navLinks[0]) navLinks[0].textContent = t.nav.home;
    if (navLinks[1]) navLinks[1].textContent = t.nav.about;
    if (navLinks[2]) navLinks[2].textContent = t.nav.experience;
    if (navLinks[3]) navLinks[3].textContent = t.nav.contact;
    
    // Mobile nav
    const mobileLinks = document.querySelectorAll('#hamburger-nav .menu-links a');
    if (mobileLinks[0]) mobileLinks[0].textContent = t.nav.home;
    if (mobileLinks[1]) mobileLinks[1].textContent = t.nav.about;
    if (mobileLinks[2]) mobileLinks[2].textContent = t.nav.experience;
    if (mobileLinks[3]) mobileLinks[3].textContent = t.nav.contact;
    
    // Footer nav
    const footerLinks = document.querySelectorAll('footer .nav-links a');
    if (footerLinks[0]) footerLinks[0].textContent = t.nav.home;
    if (footerLinks[1]) footerLinks[1].textContent = t.nav.about;
    if (footerLinks[2]) footerLinks[2].textContent = t.nav.experience;
    if (footerLinks[3]) footerLinks[3].textContent = t.nav.contact;
    
    // Profile section
    const profileP1 = document.querySelector('#profile .section__text__p1');
    if (profileP1) profileP1.textContent = t.profile.hello;
    
    const profileP2 = document.querySelector('#profile .section__text__p2');
    if (profileP2) profileP2.setAttribute('data-original', t.profile.role);
    
    const profileP3 = document.querySelector('#profile .section__text__p3');
    if (profileP3) {
        profileP3.setAttribute('data-original', t.profile.country);
    }
    
    // CV buttons
    const cvButtons = document.querySelectorAll('#profile .btn-color-2');
    if (cvButtons[0]) cvButtons[0].innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> ${t.profile.cv_es}`;
    if (cvButtons[1]) cvButtons[1].innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> ${t.profile.cv_en}`;
    
    const contactBtn = document.querySelector('#profile .btn-color-1');
    if (contactBtn) contactBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ${t.profile.contact_btn}`;
    
    // About section
    const aboutP1 = document.querySelector('#about .section__text__p1');
    if (aboutP1) aboutP1.textContent = t.about.get_to_know;
    
    const detailCards = document.querySelectorAll('#about .detail-card');
    if (detailCards[0]) {
        detailCards[0].querySelector('h3').textContent = t.about.experience;
        detailCards[0].querySelector('p').innerHTML = t.about.years;
    }
    if (detailCards[1]) {
        detailCards[1].querySelector('h3').textContent = t.about.education;
        detailCards[1].querySelector('p').innerHTML = t.about.education_details;
    }
    
    const aboutText = document.querySelector('#about .text-container p');
    if (aboutText) aboutText.textContent = t.about.text;
    
    // Experience section
    const expP1 = document.querySelector('#experience .section__text__p1');
    if (expP1) expP1.textContent = t.experience.explore;
    
    const expTitles = document.querySelectorAll('#experience .experience-sub-title');
    if (expTitles[0]) expTitles[0].textContent = t.experience.frontend;
    if (expTitles[1]) expTitles[1].textContent = t.experience.backend;
    if (expTitles[2]) expTitles[2].textContent = t.experience.others;
    
    // Skills
    const skillItems = document.querySelectorAll('#experience .skill-item');
    const skillLevels = ['Experienced', 'Experienced', 'Experienced', 'Experienced', 'Intermediate', 'Experienced', 'Experienced', 'Experienced', 'Experienced', 'Experienced', 'Intermediate', 'Intermediate', 'Experienced', 'Experienced', 'Experienced', 'Experienced', 'Experienced', 'Experienced'];
    skillItems.forEach((item, i) => {
        const p = item.querySelector('p');
        if (p) {
            p.textContent = skillLevels[i] === 'Experienced' ? t.experience.experienced : t.experience.intermediate;
        }
    });
    
    const expText = document.querySelector('#experience .experience-text p');
    if (expText) expText.textContent = t.experience.fullstack;
    
    // Contact section
    const contactP1 = document.querySelector('#contact .section__text__p1');
    if (contactP1) contactP1.textContent = t.contact.get_in_touch;
    
    const contactTitle = document.querySelector('#contact .title');
    if (contactTitle) contactTitle.textContent = t.contact.title;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTexts();
});