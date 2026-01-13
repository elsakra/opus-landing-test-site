import { animate, inView, stagger } from '@motionone/dom';

export function initAnimations() {
  // Hero animations
  const heroElements = document.querySelectorAll('.hero-animate');
  if (heroElements.length > 0) {
    animate(
      heroElements,
      { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
      { duration: 0.8, delay: stagger(0.1), easing: 'ease-out' }
    );
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
      lastScroll = currentScroll;
    });
  }

  // Section animations on scroll
  const sections = document.querySelectorAll('.section-animate');
  sections.forEach((section) => {
    inView(section, () => {
      animate(
        section,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
        { duration: 0.6, easing: 'ease-out' }
      );
    }, { margin: '-100px' });
  });

  // Card animations
  const cards = document.querySelectorAll('.card-animate');
  if (cards.length > 0) {
    inView(cards, () => {
      animate(
        cards,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.5, delay: stagger(0.1), easing: 'ease-out' }
      );
    }, { margin: '-50px' });
  }

  // CTA button pulse
  const ctaButtons = document.querySelectorAll('.cta-pulse');
  ctaButtons.forEach((button) => {
    animate(
      button,
      { scale: [1, 1.05, 1] },
      { duration: 2, repeat: Infinity, easing: 'ease-in-out' }
    );
  });
}