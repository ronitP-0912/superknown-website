/**
 * Superknown Website - Portfolio Gallery & Lightbox JavaScript
 * Manages category filters (Branding, Social Media, Video, Illustration, Packaging, Websites)
 * and initializes GLightbox for modal previews.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Category Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(item, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Initialize GLightbox if available
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
});
