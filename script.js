// Initialisation AOS (Animate On Scroll) - Animations réduites
AOS.init({
  duration: 400,
  offset: 50,
  once: true,
  disable: false
});

// Animation des barres de compétences
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.skill-fill');
        if (bar) {
          bar.style.width = bar.getAttribute('data-percent');
        }
      }
    });
  });

  document.querySelectorAll('.skill-row').forEach(row => {
    observer.observe(row);
  });
});

// Menu Mobile Toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// Effet Particules (Canvas) - DÉSACTIVÉ pour réduire les animations
// const canvas = document.getElementById('cursor-canvas');
// Effet particules supprimé pour une expérience plus sobre
