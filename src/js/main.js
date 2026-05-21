import Lenis from 'lenis';
import { initAnimations } from './animations.js';
import { initGallery } from './gallery.js';
import { initCalendar } from './calendar.js';
import { initImages } from './images.js';

// ── Smooth scroll (Lenis) ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 100);
}, { passive: true });

// ── Mobile menu ──
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ── Anchor smooth scroll via Lenis ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -80 });
  });
});

// ── iOS video autoplay guard ──
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.play().catch(() => {});
}

// ── Form submission ──
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('[type="submit"]');
  btn.textContent = '¡Enviado!';
  btn.disabled = true;
  setTimeout(() => { btn.textContent = 'Enviar Mensaje'; btn.disabled = false; }, 3000);
});

// ── Init modules ──
initImages();
initAnimations(lenis);
initGallery();
initCalendar();
