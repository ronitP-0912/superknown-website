/**
 * Superknown Website - Services Tab JavaScript
 * Handles interactive left vertical tab navigation and content swaps for Creative & Tech categories.
 */

document.addEventListener('DOMContentLoaded', () => {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const servicePanels = document.querySelectorAll('.services-content-panel');

  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.getAttribute('data-target');

      // Remove active class from all tabs & panels
      serviceTabs.forEach(t => t.classList.remove('active'));
      servicePanels.forEach(p => p.classList.remove('active'));

      // Activate clicked tab
      tab.classList.add('active');

      // Activate corresponding panel
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');

        // Optional GSAP animation on panel reveal
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(targetPanel.querySelectorAll('.service-item-card'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
          );
        }
      }
    });
  });
});
