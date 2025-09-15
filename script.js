// AOS init
AOS.init({
  duration: 1200,
  once: true
});

// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const percent = el.getAttribute('data-percent');
    setTimeout(()=> el.style.width = percent, 300);
  });
});

// Cursor particles effect
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

window.addEventListener('mousemove', e => {
  for(let i=0; i<2; i++){
    particles.push({
      x: e.clientX,
      y: e.clientY,
      vx: (Math.random()-0.5)*2,
      vy: (Math.random()-0.5)*2,
      size: Math.random()*4 + 2,
      life: 60
    });
  }
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = `rgba(203, 164, 247, ${p.life/60})`;
    ctx.fill();
    if(p.life <= 0) particles.splice(index,1);
  });
  requestAnimationFrame(animate);
}
animate();

// Window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Accordion toggle
function toggleProject(id){
  const el = document.getElementById(id);
  if(el.style.display === "block"){
    el.style.display = "none";
  }else{
    el.style.display = "block";
  }
}
