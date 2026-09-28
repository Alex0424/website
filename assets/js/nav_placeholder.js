// Inject nav.html
fetch('/templates/nav.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('nav-placeholder').innerHTML = data;
    // Initialize navigation after nav is loaded
    initializeNavigation();
  })
  .catch((error) => console.error('Error loading nav:', error));

function initializeNavigation() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (!toggle || !menu) {
    console.error('Navigation elements not found');
    return;
  }

  // Highlight the link for the current page
  const path = window.location.pathname.replace(/index\.html$/, '');
  for (const link of menu.querySelectorAll('a')) {
    if (link.getAttribute('href') === path) {
      link.setAttribute('aria-current', 'page');
    }
  }

  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => {
    setOpen(!menu.classList.contains('open'));
  });

  // Close when a link, anything outside the nav, or Escape is used
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}
