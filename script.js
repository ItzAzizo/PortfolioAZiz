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
// VEILLE CYBERSÉCURITÉ - 3 PILIERS IA
// ============================================

// Les 3 piliers de la veille IA & Cybersécurité
const veilleData = {
  // PILIER 1: IA Offensive (The Dark Side)
  offensive: [
    {
      title: "Prompt Injection : Menace #1 OWASP 2025",
      desc: "Technique permettant de manipuler les LLM pour extraire des données sensibles ou contourner leurs protections.",
      icon: "fa-terminal",
      date: "Fév 2026",
      url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
    },
    {
      title: "Malwares Polymorphes générés par IA",
      desc: "Code malveillant qui modifie sa signature à chaque exécution pour échapper aux antivirus et EDR.",
      icon: "fa-virus",
      date: "Fév 2026",
      url: "https://www.ncsc.gov.uk/report/impact-of-ai-on-cyber-threat"
    },
    {
      title: "Deepfakes Audio : Fraudes au virement",
      desc: "L'IA permet de cloner la voix d'un PDG pour orchestrer des fraudes. Plus de 8M deepfakes partagés en 2025.",
      icon: "fa-user-secret",
      date: "Jan 2026",
      url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques"
    },
    {
      title: "Phishing hyper-personnalisé par GPT",
      desc: "Les LLM génèrent des campagnes de phishing ultra-ciblées en analysant les réseaux sociaux des victimes.",
      icon: "fa-fish",
      date: "Jan 2026",
      url: "https://www.cert.ssi.gouv.fr/"
    }
  ],

  // PILIER 2: IA Défensive (The Shield)
  defensive: [
    {
      title: "UEBA : Détection comportementale",
      desc: "User and Entity Behavior Analytics - L'IA repère les comportements anormaux des utilisateurs sur le réseau.",
      icon: "fa-user-shield",
      date: "Fév 2026",
      url: "https://www.ssi.gouv.fr/entreprise/guide/prestataires-de-services-de-securite/"
    },
    {
      title: "SOAR : Réponse automatisée aux incidents",
      desc: "Security Orchestration, Automation and Response - Automatisation de la détection et réponse aux menaces 24/7.",
      icon: "fa-robot",
      date: "Fév 2026",
      url: "https://www.microsoft.com/en-us/security/blog/"
    },
    {
      title: "Zero-Trust avec IA adaptative",
      desc: "L'architecture Zero-Trust s'enrichit de l'IA pour valider en continu l'identité de chaque accès.",
      icon: "fa-shield-halved",
      date: "Jan 2026",
      url: "https://www.cloudflare.com/fr-fr/learning/security/glossary/what-is-zero-trust/"
    },
    {
      title: "SOC augmenté par Machine Learning",
      desc: "Les Security Operations Centers intègrent le ML pour analyser des millions d'événements en temps réel.",
      icon: "fa-chart-line",
      date: "Jan 2026",
      url: "https://thehackernews.com/"
    }
  ],

  // PILIER 3: IA comme Cible (Adversarial ML)
  adversarial: [
    {
      title: "Empoisonnement des données d'entraînement",
      desc: "Les attaquants corrompent les datasets pour créer des backdoors dans les modèles IA de production.",
      icon: "fa-database",
      date: "Fév 2026",
      url: "https://owasp.org/www-project-machine-learning-security-top-10/"
    },
    {
      title: "Attaques adversariales sur les modèles",
      desc: "Manipulation subtile des entrées pour tromper les systèmes de classification IA.",
      icon: "fa-image",
      date: "Fév 2026",
      url: "https://genai.owasp.org/"
    },
    {
      title: "Model Extraction : Vol de modèles IA",
      desc: "Techniques pour reconstruire un modèle propriétaire en analysant ses réponses via des requêtes ciblées.",
      icon: "fa-copy",
      date: "Jan 2026",
      url: "https://www.zdnet.fr/actualites/cybersecurite/"
    },
    {
      title: "Jailbreaking des systèmes IA",
      desc: "Contournement des guardrails des LLM pour leur faire générer du contenu malveillant.",
      icon: "fa-unlock",
      date: "Jan 2026",
      url: "https://www.lemondeinformatique.fr/les-dossiers/lire-vulnerabilites-failles-et-cyberattaques-59.html"
    }
  ]
};

// Fonction pour afficher les 3 piliers de veille
function displayVeillePiliers() {
  const containers = {
    offensive: document.getElementById('veille-offensive'),
    defensive: document.getElementById('veille-defensive'),
    adversarial: document.getElementById('veille-adversarial')
  };

  const colors = {
    offensive: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: 'text-red-400' },
    defensive: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: 'text-green-400' },
    adversarial: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: 'text-purple-400' }
  };

  Object.keys(containers).forEach(pilier => {
    const container = containers[pilier];
    if (!container) return;

    const items = veilleData[pilier];
    const color = colors[pilier];

    container.innerHTML = items.map(item => `
      <a href="${item.url}" target="_blank" class="${color.bg} p-3 rounded-lg border ${color.border} hover:scale-[1.02] transition-transform cursor-pointer block">
        <div class="flex items-start gap-3">
          <i class="fas ${item.icon} ${color.icon} text-lg mt-1"></i>
          <div class="flex-grow">
            <h5 class="font-bold text-sm text-white mb-1">${item.title}</h5>
            <p class="text-xs text-gray-400 leading-relaxed">${item.desc}</p>
            <div class="flex items-center justify-between mt-2">
              <span class="text-xs text-gray-500"><i class="fas fa-calendar-alt mr-1"></i>${item.date}</span>
              <span class="text-xs ${color.icon}"><i class="fas fa-external-link-alt mr-1"></i>Source</span>
            </div>
          </div>
        </div>
      </a>
    `).join('');
  });
}

// Fonction pour rafraîchir avec animation
function refreshVeille() {
  const allContainers = document.querySelectorAll('[id^="veille-"]');
  allContainers.forEach(container => {
    container.innerHTML = `
      <div class="bg-white/5 p-3 rounded-lg border border-white/10 animate-pulse">
        <div class="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div class="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    `;
  });
  setTimeout(displayVeillePiliers, 500);
}

// Charger au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(displayVeillePiliers, 800);
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
