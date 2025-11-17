// Initialisation AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 100,
  once: true
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

// Effet Particules (Canvas)
const canvas = document.getElementById('cursor-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', e => {
    // Crée quelques particules à la position de la souris
    for(let i=0; i<3; i++){
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        life: 1, // Opacité de départ
        decay: 0.02 + Math.random() * 0.03,
        size: Math.random() * 3 + 1
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      
      ctx.fillStyle = `rgba(203, 164, 247, ${p.life})`; // Couleur accent
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Supprimer les particules mortes
    particles = particles.filter(p => p.life > 0);
    
    requestAnimationFrame(animate);
  }
  animate();
}
