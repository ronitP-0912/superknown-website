/**
 * Superknown Website - Hero Carousel JavaScript
 * Initializes Swiper.js for the 3-slide fullscreen Hero section with 6s autoplay and fade effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper !== 'undefined' && document.querySelector('.hero-slider')) {
    const heroSwiper = new Swiper('.hero-slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
      },
      on: {
        init: function () {
          animateHeroSlide(this.slides[this.activeIndex]);
        },
        slideChange: function () {
          animateHeroSlide(this.slides[this.activeIndex]);
        }
      }
    });

    function animateHeroSlide(slide) {
      if (typeof gsap !== 'undefined') {
        const title = slide.querySelector('.hero-title');
        const subtitle = slide.querySelector('.hero-subtitle');
        const cta = slide.querySelector('.hero-cta');

        gsap.fromTo([title, subtitle, cta], 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );
      }
    }
  }
});
