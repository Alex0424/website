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

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    // Toggle body scroll prevention
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking on links
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      // Restore body scroll
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking outside (optional)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && menu.classList.contains('active')) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
