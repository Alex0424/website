// Animated network background for the home page
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

const ACCENT = '19, 121, 255'; // #1379ff
const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 180;

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

let width = 0;
let height = 0;
let nodes = [];
const mouse = { x: -9999, y: -9999 };

function resize() {
  const dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Scale node count with screen area, capped for performance
  const count = Math.min(120, Math.floor((width * height) / 12000));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 1,
  }));
}

function step() {
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > width) n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;

    // Gently push nodes away from the cursor
    const dx = n.x - mouse.x;
    const dy = n.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    if (dist < MOUSE_RADIUS && dist > 0) {
      const force = (1 - dist / MOUSE_RADIUS) * 0.6;
      n.x += (dx / dist) * force;
      n.y += (dy / dist) * force;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < LINK_DISTANCE) {
        ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - dist / LINK_DISTANCE) * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  ctx.shadowColor = `rgb(${ACCENT})`;
  ctx.shadowBlur = 8;
  ctx.fillStyle = `rgba(${ACCENT}, 0.9)`;
  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
}

function loop() {
  step();
  draw();
  window.requestAnimationFrame(loop);
}

window.addEventListener('resize', () => {
  resize();
  if (reduceMotion) draw();
});
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener('mouseout', () => {
  mouse.x = -9999;
  mouse.y = -9999;
});

resize();
if (reduceMotion) {
  draw();
} else {
  loop();
}
