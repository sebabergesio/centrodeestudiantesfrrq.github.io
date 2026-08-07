// ==================================================
// script.js - Funcionalidad global
// ==================================================

document.addEventListener('DOMContentLoaded', function() {

    // ---------- Menú hamburguesa ----------
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }

    // Cerrar menú al hacer clic en enlace (mobile)
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 820) {
                nav.classList.remove('open');
            }
        });
    });
});