/* Macelleria Bergamaschi - Main JS */

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  if (nav) {
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.header')) {
        nav.classList.remove('open');
      }
    });
  }

  // Instagram smart link: app on mobile, location page on desktop
  document.querySelectorAll('.ig-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        e.preventDefault();
        // Try opening Instagram app
        window.location.href = 'instagram://user?username=macelleria_flli_bergamaschi';
        // Fallback to location page if app doesn't open
        setTimeout(function() {
          window.location.href = 'https://www.instagram.com/explore/locations/366139973469174/macelleria-bergamaschi-flli-san-pietro-allolmo-cornaredo/';
        }, 800);
      }
      // Desktop: default href (location page) works normally
    });
  });
});
