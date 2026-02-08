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

// Effet Particules (Canvas) - Animation souris
const canvas = document.getElementById('cursor-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  let mouse = { x: 0, y: 0 };

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    for (let i = 0; i < 3; i++) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        life: 1
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life -= 0.02;
      if (p.life <= 0) {
        particles.splice(index, 1);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.life})`;
        ctx.fill();
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// API CYBERSÉCURITÉ - Menaces IA & Attaques
// ============================================

// Données de veille cybersécurité (simulation API)
const securityData = [
  {
    title: "Deepfakes IA : Nouvelle génération d'attaques",
    desc: "Les deepfakes audio permettent désormais d'imiter la voix d'un PDG pour des fraudes au virement.",
    type: "danger",
    icon: "fa-user-secret",
    date: "Fév 2026",
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/deepfakes-comment-les-reconnaitre"
  },
  {
    title: "Malwares polymorphes générés par GPT",
    desc: "Des malwares utilisent l'IA pour modifier leur code en temps réel et échapper aux antivirus.",
    type: "danger",
    icon: "fa-virus",
    date: "Fév 2026",
    url: "https://www.kaspersky.fr/resource-center/definitions/what-is-a-polymorphic-virus"
  },
  {
    title: "Phishing automatisé par ChatGPT",
    desc: "Des campagnes de phishing ultra-personnalisées créées automatiquement par des LLM.",
    type: "warning",
    icon: "fa-fish",
    date: "Jan 2026",
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing"
  },
  {
    title: "SOC augmenté par Machine Learning",
    desc: "Les centres de sécurité intègrent l'IA pour détecter les anomalies comportementales (UEBA).",
    type: "defense",
    icon: "fa-shield-alt",
    date: "Fév 2026",
    url: "https://www.ssi.gouv.fr/entreprise/bonnes-pratiques/"
  },
  {
    title: "Attaques adversariales sur modèles IA",
    desc: "Des hackers manipulent les entrées des modèles IA pour contourner les systèmes de détection.",
    type: "danger",
    icon: "fa-robot",
    date: "Jan 2026",
    url: "https://owasp.org/www-project-machine-learning-security-top-10/"
  },
  {
    title: "Ransomware ciblant les infrastructures critiques",
    desc: "Augmentation de 300% des attaques sur les hôpitaux et réseaux énergétiques.",
    type: "warning",
    icon: "fa-lock",
    date: "Déc 2025",
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares"
  },
  {
    title: "Zero-Trust : Nouvelle norme de sécurité",
    desc: "L'architecture Zero-Trust devient obligatoire pour les entreprises du CAC40.",
    type: "defense",
    icon: "fa-check-shield",
    date: "Jan 2026",
    url: "https://www.ssi.gouv.fr/actualite/le-modele-zero-trust/"
  },
  {
    title: "Vulnérabilités dans les API LLM",
    desc: "Découverte de failles permettant l'injection de prompts malveillants dans les assistants IA.",
    type: "danger",
    icon: "fa-code",
    date: "Fév 2026",
    url: "https://genai.owasp.org/"
  }
];

// Fonction pour afficher le flux de sécurité
function displaySecurityFeed() {
  const container = document.getElementById('security-feed');
  if (!container) return;

  // Mélanger et prendre 4 éléments aléatoires
  const shuffled = [...securityData].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);

  const colors = {
    danger: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: 'text-red-400' },
    warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: 'text-yellow-400' },
    defense: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: 'text-green-400' }
  };

  container.innerHTML = selected.map(item => {
    const color = colors[item.type];
    return `
      <a href="${item.url}" target="_blank" class="${color.bg} p-4 rounded-lg border ${color.border} hover:scale-[1.02] transition-transform cursor-pointer block">
        <div class="flex items-start gap-3">
          <i class="fas ${item.icon} ${color.icon} text-xl mt-1"></i>
          <div class="flex-grow">
            <h4 class="font-bold text-sm text-white mb-1">${item.title}</h4>
            <p class="text-xs text-gray-400 leading-relaxed">${item.desc}</p>
            <div class="flex items-center justify-between mt-2">
              <span class="text-xs text-gray-500"><i class="fas fa-calendar-alt mr-1"></i>${item.date}</span>
              <span class="text-xs text-accent"><i class="fas fa-external-link-alt mr-1"></i>Lire l'article</span>
            </div>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

// Fonction pour rafraîchir le flux
function refreshSecurityFeed() {
  const container = document.getElementById('security-feed');
  if (!container) return;

  // Animation de chargement
  container.innerHTML = `
    <div class="bg-white/5 p-4 rounded-lg border border-white/10 animate-pulse">
      <div class="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div class="h-3 bg-gray-700 rounded w-1/2"></div>
    </div>
    <div class="bg-white/5 p-4 rounded-lg border border-white/10 animate-pulse">
      <div class="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div class="h-3 bg-gray-700 rounded w-1/2"></div>
    </div>
  `;

  // Afficher après un court délai
  setTimeout(displaySecurityFeed, 500);
}

// Charger le flux au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(displaySecurityFeed, 1000);
});

// ============================================
// FILTRAGE DES TECHNOLOGIES
// ============================================

function filterTech(category) {
  const icons = document.querySelectorAll('.tech-track .tech-icon');
  const buttons = document.querySelectorAll('.tech-filter');
  const track = document.querySelector('.tech-track');

  // Mettre à jour les boutons actifs
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === category) {
      btn.classList.add('active');
    }
  });

  // Filtrer les icônes avec animation (opacité au lieu de cacher)
  icons.forEach(icon => {
    const iconCategory = icon.dataset.category;

    if (category === 'all' || iconCategory.includes(category)) {
      icon.style.opacity = '1';
      icon.style.transform = 'scale(1)';
    } else {
      icon.style.opacity = '0.15';
      icon.style.transform = 'scale(0.9)';
    }
  });
}
