/**
 * Superknown Website - Testimonials JavaScript
 * Initializes Swiper.js slider for 5-star testimonial cards.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonials-slider')) {
    const testimonialSwiper = new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonials-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
});
