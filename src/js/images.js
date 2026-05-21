export function initImages() {
  const images = document.querySelectorAll('img.lqip');
  if (!images.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      const src    = img.dataset.src;
      const srcset = img.dataset.srcset;

      if (srcset) img.srcset = srcset;
      if (src)    img.src    = src;

      img.onload = () => img.classList.add('loaded');

      // If already cached, onload may not fire
      if (img.complete) img.classList.add('loaded');

      observer.unobserve(img);
    });
  }, { rootMargin: '200px 0px' });

  images.forEach(img => observer.observe(img));
}
