/**
 * Superknown Website - GSAP Animations & ScrollTrigger JavaScript
 * Handles scroll reveals, number counters, and timeline animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Scroll Reveal for Generic Elements
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-scale-up');
    
    revealElements.forEach(element => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: element.classList.contains('reveal-fade-up') ? 40 : 0,
          scale: element.classList.contains('reveal-scale-up') ? 0.9 : 1
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Animated Counters in Why Choose Us
    const counterElements = document.querySelectorAll('.counter-number[data-target]');
    
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
          let countObj = { val: 0 };
          gsap.to(countObj, {
            val: target,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
              counter.textContent = Math.floor(countObj.val) + suffix;
            }
          });
        }
      });
    });

    // Process Timeline Step Animations (Reverses on scroll up & re-animates on scroll down)
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
      gsap.fromTo(step,
        { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });
  }
});
