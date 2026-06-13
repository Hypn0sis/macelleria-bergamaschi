/* Macelleria Bergamaschi - Main JS */

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  const links = nav.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.header')) {
      nav.classList.remove('open');
    }
  });
});
