export function initCalendar() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventItems = document.querySelectorAll('.event-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      eventItems.forEach(item => {
        const matches = filter === 'all' || item.dataset.category === filter;

        if (matches) {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          item.style.display = 'grid';
          requestAnimationFrame(() => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 30);
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });
}
