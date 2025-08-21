// Traducciones simples
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
            title: "José Acosta",
            role: "Ing. en Sistemas Informáticos",
            country: "De Paraguay",
            cv_es: "Descargar CV español",
            cv_en: "Descargar CV inglés",
            contact_info: "Contacto"
        },
        about: {
            get_to_know: "Conoceme más",
            title: "Sobre mí",
            experience: "Experiencia",
            years: "13+ años <br>Desarrollo Fullstack",
            education: "Educación",
            education_details: "Ingeniero en Sistemas Informáticos<br>Licenciado en Análisis de Sistemas<br>Diplomados en programación Java y Android",
            text: "Ingeniero en Sistemas Informáticos, Licenciado en análisis de sistemas informáticos. Cursos de Ethical Hacking, Especialista en desarrollo Android, Diplomado en Programación Java"
        },
        experience: {
            explore: "Explora mi",
            title: "Experiencia",
            frontend: "Desarrollo Frontend",
            backend: "Desarrollo Backend",
            others: "Otras habilidades",
            fullstack: "Desarrollador Full Stack con más de 13 años de experiencia en desarrollo de sistemas informáticos Desktop/web (FrontEnd y BackEnd), APIS, aplicaciones móviles Android, páginas web, gestión de bases de datos, servidores, control de versiones, gestión de actividades de programadores y consultoría en Ethical Hacking.",
            experienced: "Avanzado",
            intermediate: "Intermedio"
        },
        contact: {
            get_in_touch: "Contactame",
            title: "Contacto",
            linkedin: "LinkedIn"
        },
        footer: {
            copyright: "Copyright © ",
            rights: "José Acosta. Todos los derechos reservados."
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
            title: "José Acosta",
            role: "Sr. Software Engineer",
            country: "From Paraguay",
            cv_es: "Download CV spanish",
            cv_en: "Download CV english",
            contact_info: "Contact Info"
        },
        about: {
            get_to_know: "Get to know More",
            title: "About Me",
            experience: "Experience",
            years: "13+ years <br>Fullstack Development",
            education: "Education",
            education_details: "Software Engineer<br>Bachelor's Degree in Systems Analysis<br>Diplomas in Java and Android Programming",
            text: "Software Engineer, Graduate in computer systems analysis. Ethical Hacking Courses, Android Development Specialist, Diploma in Java Programming"
        },
        experience: {
            explore: "Explore My",
            title: "Experience",
            frontend: "Frontend Development",
            backend: "Backend Development",
            others: "Others Skills",
            fullstack: "Full Stack Developer with more than 13 years of experience in developing Desktop/web computer systems (FrontEnd and BackEnd) APIS, Android mobile applications, Web pages, Database management, servers, version control, management of activities of programmers and Ethical Hacking consultancy.",
            experienced: "Experienced",
            intermediate: "Intermediate"
        },
        contact: {
            get_in_touch: "Get in Touch",
            title: "Contact Me",
            linkedin: "LinkedIn"
        },
        footer: {
            copyright: "Copyright © ",
            rights: "José Acosta. All Rights Reserved."
        }
    }
};

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    updateTexts();
    // Sincronizar ambos toggles
    const desktopToggle = document.getElementById("language-toggle");
    const mobileToggle = document.getElementById("language-toggle-mobile");
    if (desktopToggle) desktopToggle.checked = currentLang === "es";
    if (mobileToggle) mobileToggle.checked = currentLang === "es";
}

function updateTexts() {
    // Sincronizar el estado del switch animado
    const desktopToggle = document.getElementById("language-toggle");
    const mobileToggle = document.getElementById("language-toggle-mobile");
    if (desktopToggle) desktopToggle.checked = currentLang === "es";
    if (mobileToggle) mobileToggle.checked = currentLang === "es";
    // Desktop nav
    document.getElementById("nav-home").textContent = translations[currentLang].nav.home;
    document.getElementById("nav-about").textContent = translations[currentLang].nav.about;
    document.getElementById("nav-experience").textContent = translations[currentLang].nav.experience;
    document.getElementById("nav-contact").textContent = translations[currentLang].nav.contact;
    // Mobile nav
    const mobileLinks = document.querySelectorAll('.menu-links a');
    if (mobileLinks.length >= 4) {
        mobileLinks[0].textContent = translations[currentLang].nav.home;
        mobileLinks[1].textContent = translations[currentLang].nav.about;
        mobileLinks[2].textContent = translations[currentLang].nav.experience;
        mobileLinks[3].textContent = translations[currentLang].nav.contact;
    }
    // Footer nav
    const footerLinks = document.querySelectorAll('footer .nav-links a');
    if (footerLinks.length >= 4) {
        footerLinks[0].textContent = translations[currentLang].nav.home;
        footerLinks[1].textContent = translations[currentLang].nav.about;
        footerLinks[2].textContent = translations[currentLang].nav.experience;
        footerLinks[3].textContent = translations[currentLang].nav.contact;
    }
    // Profile section
    document.querySelector('.section__text__p1').textContent = translations[currentLang].profile.hello;
    document.querySelector('#profile .title').textContent = translations[currentLang].profile.title;
    document.querySelector('.section__text__p2').textContent = translations[currentLang].profile.role;
    document.querySelector('.section__text__p3').innerHTML = translations[currentLang].profile.country + ' <span class="flag">🇵🇾</span><span class="typewriter-cursor">|</span>';
    // CV buttons
    const btns = document.querySelectorAll('.btn-container .btn-color-2');
    if (btns.length >= 2) {
        btns[0].textContent = translations[currentLang].profile.cv_es;
        btns[1].textContent = translations[currentLang].profile.cv_en;
    }
    // Contact Info button
    const contactBtn = document.querySelector('.btn-container .btn-color-1');
    if (contactBtn) contactBtn.textContent = translations[currentLang].profile.contact_info;
    // About section
    document.querySelector('#about .section__text__p1').textContent = translations[currentLang].about.get_to_know;
    document.querySelector('#about .title').textContent = translations[currentLang].about.title;
    document.querySelector('#about .details-container h3').textContent = translations[currentLang].about.experience;
    document.querySelector('#about .details-container p').innerHTML = translations[currentLang].about.years;
    const aboutDetails = document.querySelectorAll('#about .details-container');
    if (aboutDetails.length > 1) {
        aboutDetails[1].querySelector('h3').textContent = translations[currentLang].about.education;
        aboutDetails[1].querySelector('p').innerHTML = translations[currentLang].about.education_details;
    }
    document.querySelector('#about .text-container p').textContent = translations[currentLang].about.text;
    // Experience section
    document.querySelector('#experience .section__text__p1').textContent = translations[currentLang].experience.explore;
    document.querySelector('#experience .title').textContent = translations[currentLang].experience.title;
    const expTitles = document.querySelectorAll('#experience .experience-sub-title');
    if (expTitles.length > 0) expTitles[0].textContent = translations[currentLang].experience.frontend;
    if (expTitles.length > 1) expTitles[1].textContent = translations[currentLang].experience.backend;
    if (expTitles.length > 2) expTitles[2].textContent = translations[currentLang].experience.others;
    // Experience cards
    const expCards = document.querySelectorAll('#experience .article-container article p');
    expCards.forEach((p, i) => {
        if (p.textContent === 'Experienced' || p.textContent === 'Avanzado') {
            p.textContent = translations[currentLang].experience.experienced;
        } else if (p.textContent === 'Intermediate' || p.textContent === 'Intermedio') {
            p.textContent = translations[currentLang].experience.intermediate;
        }
    });
    document.querySelector('#experience .text-container p').textContent = translations[currentLang].experience.fullstack;
    // Contact section
    document.querySelector('#contact .section__text__p1').textContent = translations[currentLang].contact.get_in_touch;
    document.querySelector('#contact .title').textContent = translations[currentLang].contact.title;
    document.querySelector('#contact .contact-info-container a[href*="linkedin"]').textContent = translations[currentLang].contact.linkedin;
    // Footer
    document.querySelector('footer p').innerHTML = translations[currentLang].footer.copyright + '<span id="currentYear"></span> ' + translations[currentLang].footer.rights;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTexts();
});
