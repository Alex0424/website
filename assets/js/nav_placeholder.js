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
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (!hamburger || !menu) {
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

  const closeMenu = () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  };

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close when a link or anything outside the nav is clicked
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) closeMenu();
  });
}
