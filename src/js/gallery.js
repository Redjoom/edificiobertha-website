export function initGallery() {
  const items = Array.from(document.querySelectorAll('.galeria-item'));
  if (!items.length) return;

  // Build overlay once
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Visor de galería');
  overlay.innerHTML = `
    <span class="lightbox-counter" aria-live="polite" aria-atomic="true"></span>
    <button class="lightbox-close" aria-label="Cerrar visor">&#x2715;</button>
    <button class="lightbox-prev" aria-label="Imagen anterior">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <img class="lightbox-img" src="" alt="" role="img">
    <button class="lightbox-next" aria-label="Imagen siguiente">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>
    <div class="lightbox-caption" aria-live="polite"><h5></h5><p></p></div>
  `;
  document.body.appendChild(overlay);

  const img      = overlay.querySelector('.lightbox-img');
  const counter  = overlay.querySelector('.lightbox-counter');
  const caption  = overlay.querySelector('.lightbox-caption');
  const btnClose = overlay.querySelector('.lightbox-close');
  const btnPrev  = overlay.querySelector('.lightbox-prev');
  const btnNext  = overlay.querySelector('.lightbox-next');

  let current      = 0;
  let touchStartX  = 0;
  let triggerEl    = null; // element that opened the lightbox

  const focusable = [btnClose, btnPrev, btnNext];

  function show(index) {
    current = (index + items.length) % items.length;
    const itemImg = items[current].querySelector('img');
    const cap     = items[current].querySelector('.galeria-caption');

    img.style.opacity = '0';
    setTimeout(() => {
      // Prefer data-src (full quality) over current src (LQIP)
      img.src = itemImg.dataset.src || itemImg.src;
      img.alt = itemImg.alt;
      img.style.opacity = '1';
    }, 150);

    counter.textContent = `${current + 1} / ${items.length}`;
    caption.querySelector('h5').textContent = cap?.querySelector('h5')?.textContent ?? '';
    caption.querySelector('p').textContent  = cap?.querySelector('p')?.textContent  ?? '';
  }

  function open(index, trigger) {
    triggerEl = trigger;
    show(index);
    overlay.classList.add('active');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function close() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    triggerEl?.focus();
  }

  // Mark overlay hidden initially
  overlay.setAttribute('aria-hidden', 'true');

  items.forEach((item, i) => {
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Ver imagen ${i + 1} en pantalla completa`);

    item.addEventListener('click', () => open(i, item));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i, item); }
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(current - 1));
  btnNext.addEventListener('click', () => show(current + 1));

  // Keyboard navigation + focus trap
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')     { close(); return; }
    if (e.key === 'ArrowLeft')  { show(current - 1); return; }
    if (e.key === 'ArrowRight') { show(current + 1); return; }

    // Focus trap
    if (e.key === 'Tab') {
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // Click backdrop to close
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });

  // Swipe on mobile
  overlay.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? show(current + 1) : show(current - 1);
  });
}
