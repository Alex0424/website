// Interactive skill radar chart for the home page
// Edit the skills and scores (0-10) here
const SKILLS = [
  { name: 'Linux', score: 10 },
  { name: 'Cloud', score: 8 },
  { name: 'Network', score: 7 },
  { name: 'Security', score: 6 },
  { name: 'Programming', score: 8 },
  { name: 'Automation', score: 9 },
];

const MAX = 10;
const SIZE = 520;
const CENTER = SIZE / 2;
const RADIUS = 170;
const SVG_NS = 'http://www.w3.org/2000/svg';

const container = document.getElementById('skill-chart');

function el(tag, attrs) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    node.setAttribute(key, value);
  }
  return node;
}

// Axis 0 points straight up, the rest go clockwise
function point(index, value) {
  const angle = (Math.PI * 2 * index) / SKILLS.length - Math.PI / 2;
  const r = (value / MAX) * RADIUS;
  return {
    x: CENTER + Math.cos(angle) * r,
    y: CENTER + Math.sin(angle) * r,
    cos: Math.cos(angle),
    sin: Math.sin(angle),
  };
}

function polygon(value) {
  return SKILLS.map((_, i) => {
    const p = point(i, value);
    return `${p.x},${p.y}`;
  }).join(' ');
}

const svg = el('svg', {
  viewBox: `0 0 ${SIZE} ${SIZE}`,
  class: 'skill-chart-svg',
  role: 'img',
  'aria-label': `Skill levels out of ${MAX}: ${SKILLS.map(
    (s) => `${s.name} ${s.score}`,
  ).join(', ')}`,
});

// Grid rings and spokes
for (let level = 2; level <= MAX; level += 2) {
  svg.appendChild(
    el('polygon', { points: polygon(level), class: 'skill-grid' }),
  );
}
SKILLS.forEach((_, i) => {
  const p = point(i, MAX);
  svg.appendChild(
    el('line', {
      x1: CENTER,
      y1: CENTER,
      x2: p.x,
      y2: p.y,
      class: 'skill-grid',
    }),
  );
});

// Data shape
const shape = el('g', { class: 'skill-shape' });
shape.appendChild(
  el('polygon', {
    points: SKILLS.map((s, i) => {
      const p = point(i, s.score);
      return `${p.x},${p.y}`;
    }).join(' '),
    class: 'skill-area',
  }),
);
svg.appendChild(shape);

// Tooltip
const tooltip = document.createElement('div');
tooltip.className = 'skill-tooltip';
tooltip.hidden = true;

function showTooltip(skill, p) {
  tooltip.textContent = `${skill.name}: ${skill.score} / ${MAX}`;
  tooltip.style.left = `${(p.x / SIZE) * 100}%`;
  tooltip.style.top = `${(p.y / SIZE) * 100}%`;
  tooltip.hidden = false;
}

function hideTooltip() {
  tooltip.hidden = true;
}

// Points, labels and hover targets
SKILLS.forEach((skill, i) => {
  const p = point(i, skill.score);
  const dot = el('circle', { cx: p.x, cy: p.y, r: 5, class: 'skill-dot' });
  shape.appendChild(dot);

  const edge = point(i, MAX);
  let anchor = 'middle';
  if (edge.cos > 0.1) anchor = 'start';
  if (edge.cos < -0.1) anchor = 'end';
  const label = el('text', {
    x: edge.x + edge.cos * 14,
    y:
      edge.y + edge.sin * 14 + (edge.sin > 0.1 ? 14 : edge.sin < -0.1 ? -4 : 5),
    'text-anchor': anchor,
    class: 'skill-label',
  });
  label.textContent = skill.name;
  svg.appendChild(label);

  // Hit target is bigger than the dot so it is easy to hover
  const hit = el('circle', {
    cx: p.x,
    cy: p.y,
    r: 18,
    class: 'skill-hit',
    tabindex: 0,
    'aria-label': `${skill.name}: ${skill.score} out of ${MAX}`,
  });
  const activate = () => {
    dot.classList.add('active');
    showTooltip(skill, p);
  };
  const deactivate = () => {
    dot.classList.remove('active');
    hideTooltip();
  };
  hit.addEventListener('mouseenter', activate);
  hit.addEventListener('mouseleave', deactivate);
  hit.addEventListener('focus', activate);
  hit.addEventListener('blur', deactivate);
  svg.appendChild(hit);
});

// Screen-reader table with the same data
const table = document.createElement('table');
table.className = 'visually-hidden';
table.innerHTML = `<caption>Skill levels (0-${MAX})</caption>
  <tr><th>Skill</th><th>Score</th></tr>
  ${SKILLS.map((s) => `<tr><td>${s.name}</td><td>${s.score}</td></tr>`).join('')}`;

container.append(svg, tooltip, table);
