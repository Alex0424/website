// Interactive "crypto ticker" skill chart for the home page
// Edit the skills and scores (0-10) here. They are sorted lowest to highest.
const SKILLS = [
  { name: 'Linux', score: 10 },
  { name: 'Network', score: 7 },
  { name: 'Security', score: 6 },
  { name: 'Programming', score: 7 },
  { name: 'CI/CD', score: 9 },
  { name: 'Cloud', score: 9 },
].sort((a, b) => a.score - b.score);

const MAX = 10;
const WIDTH = 640;
const HEIGHT = 360;
const PAD = { top: 20, right: 44, bottom: 44, left: 16 };
const PLOT_W = WIDTH - PAD.left - PAD.right;
const PLOT_H = HEIGHT - PAD.top - PAD.bottom;
const SVG_NS = 'http://www.w3.org/2000/svg';

const container = document.getElementById('skill-chart');

function el(tag, attrs) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    node.setAttribute(key, value);
  }
  return node;
}

const x = (i) => PAD.left + (i * PLOT_W) / (SKILLS.length - 1);
const y = (value) => PAD.top + (1 - value / MAX) * PLOT_H;
const points = SKILLS.map((s, i) => ({ x: x(i), y: y(s.score) }));

// Ticker header: best skill as the "price", gain from the lowest skill
const first = SKILLS[0].score;
const last = SKILLS[SKILLS.length - 1].score;
const gain = (((last - first) / first) * 100).toFixed(1);
const header = document.createElement('div');
header.className = 'skill-ticker';
header.innerHTML = `
  <span class="skill-ticker-symbol">
    <span class="skill-coin" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M5 20 12 5l7 15M8 15h8M9.5 2v20M14.5 2v20" />
      </svg>
    </span>
    AlexCoin <small>ALX</small>
  </span>
  <span class="skill-ticker-price">${last.toFixed(1)}</span>
  <span class="skill-ticker-change">▲ +${gain}%</span>`;

const svg = el('svg', {
  viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
  class: 'skill-chart-svg',
  role: 'img',
  'aria-label': `Skill levels out of ${MAX}, lowest to highest: ${SKILLS.map(
    (s) => `${s.name} ${s.score}`,
  ).join(', ')}`,
});

// Area gradient under the line
const defs = el('defs', {});
const gradient = el('linearGradient', {
  id: 'skill-fill',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 1,
});
gradient.append(
  el('stop', { offset: '0%', 'stop-color': '#16c784', 'stop-opacity': 0.35 }),
  el('stop', { offset: '100%', 'stop-color': '#16c784', 'stop-opacity': 0 }),
);
defs.appendChild(gradient);
svg.appendChild(defs);

// Horizontal grid lines with the scale on the right, like an exchange chart
for (let level = 0; level <= MAX; level += 2) {
  svg.appendChild(
    el('line', {
      x1: PAD.left,
      x2: WIDTH - PAD.right,
      y1: y(level),
      y2: y(level),
      class: 'skill-grid',
    }),
  );
  const tick = el('text', {
    x: WIDTH - PAD.right + 8,
    y: y(level) + 5,
    class: 'skill-axis',
  });
  tick.textContent = level;
  svg.appendChild(tick);
}

// Skill names along the bottom
SKILLS.forEach((skill, i) => {
  const label = el('text', {
    x: x(i),
    y: HEIGHT - PAD.bottom + 26,
    'text-anchor':
      i === 0 ? 'start' : i === SKILLS.length - 1 ? 'end' : 'middle',
    class: 'skill-label',
  });
  label.textContent = skill.name;
  svg.appendChild(label);
});

// Area and line
const linePath = points
  .map((p, i) => `${i ? 'L' : 'M'}${p.x},${p.y}`)
  .join(' ');
svg.appendChild(
  el('path', {
    d: `${linePath} L${x(SKILLS.length - 1)},${y(0)} L${x(0)},${y(0)} Z`,
    class: 'skill-area',
    fill: 'url(#skill-fill)',
  }),
);
svg.appendChild(
  el('path', { d: linePath, pathLength: 1, class: 'skill-line' }),
);

// Crosshair shown on hover
const crosshair = el('line', {
  y1: PAD.top,
  y2: y(0),
  class: 'skill-crosshair',
  visibility: 'hidden',
});
svg.appendChild(crosshair);

// Tooltip
const tooltip = document.createElement('div');
tooltip.className = 'skill-tooltip';
tooltip.hidden = true;

// Points and hover targets
SKILLS.forEach((skill, i) => {
  const p = points[i];
  const isLast = i === SKILLS.length - 1;
  const dot = el('circle', {
    cx: p.x,
    cy: p.y,
    r: isLast ? 6 : 4,
    class: isLast ? 'skill-dot skill-dot-live' : 'skill-dot',
  });
  svg.appendChild(dot);

  // Hit target is a full-height column so it is easy to hover
  const band = PLOT_W / (SKILLS.length - 1);
  const hit = el('rect', {
    x: p.x - band / 2,
    y: PAD.top,
    width: band,
    height: PLOT_H,
    class: 'skill-hit',
    tabindex: 0,
    'aria-label': `${skill.name}: ${skill.score} out of ${MAX}`,
  });
  const activate = () => {
    dot.classList.add('active');
    crosshair.setAttribute('x1', p.x);
    crosshair.setAttribute('x2', p.x);
    crosshair.setAttribute('visibility', 'visible');
    tooltip.textContent = `${skill.name}: ${skill.score} / ${MAX}`;
    tooltip.style.left = `${(p.x / WIDTH) * 100}%`;
    tooltip.style.top = `${(p.y / HEIGHT) * 100}%`;
    tooltip.hidden = false;
  };
  const deactivate = () => {
    dot.classList.remove('active');
    crosshair.setAttribute('visibility', 'hidden');
    tooltip.hidden = true;
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

// Chart area wrapper so the tooltip is positioned relative to the SVG only
const plot = document.createElement('div');
plot.className = 'skill-plot';
plot.append(svg, tooltip);

container.append(header, plot, table);
