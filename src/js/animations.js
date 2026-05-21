import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(lenis) {
  // Sync ScrollTrigger with Lenis scroll position
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
  }

  // Respect prefers-reduced-motion: only fades, no motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return;
  }

  // ── Hero entrance ──
  const heroTl = gsap.timeline({ delay: 0.1 });
  heroTl
    .from('.hero-label',     { opacity: 0, y: 24, duration: 0.7, ease: 'power2.out' })
    .from('.hero-title',     { opacity: 0, y: 50, duration: 0.9, ease: 'power3.out' }, '-=0.3')
    .from('.hero-subtitle',  { opacity: 0, y: 24, duration: 0.7, ease: 'power2.out' }, '-=0.4')
    .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-scroll',    { opacity: 0, duration: 0.6 }, '-=0.2');

  // ── Blanket reveal via ScrollTrigger ──
  gsap.utils.toArray('.reveal').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 87%',
      once: true,
      onEnter: () => el.classList.add('active'),
    });
  });

  // ── Historia: image clip-path reveal ──
  gsap.from('.historia-image', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.3,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.historia-grid', start: 'top 75%' },
  });

  // ── Espacios: stagger cards ──
  gsap.from('.espacio-card', {
    opacity: 0, y: 60, stagger: 0.14, duration: 0.9, ease: 'power2.out',
    scrollTrigger: { trigger: '.espacios-grid', start: 'top 80%' },
  });

  // ── Galería: entrance stagger ──
  gsap.from('.galeria-item', {
    opacity: 0, scale: 0.96, stagger: 0.07, duration: 0.7, ease: 'power2.out',
    scrollTrigger: { trigger: '.galeria-grid', start: 'top 80%' },
  });

  // ── Comunidad: floating stagger ──
  gsap.from('.comunidad-card', {
    opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power2.out',
    scrollTrigger: { trigger: '.comunidad-grid', start: 'top 80%' },
  });

  // ── Contacto: form fields fade in ──
  gsap.from('.form-group', {
    opacity: 0, x: 18, stagger: 0.1, duration: 0.55, ease: 'power2.out',
    scrollTrigger: { trigger: '.contacto-form', start: 'top 80%' },
  });

  // ── Timeline items ──
  gsap.from('.timeline-item', {
    opacity: 0, x: -20, stagger: 0.15, duration: 0.6, ease: 'power2.out',
    scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
  });
}
