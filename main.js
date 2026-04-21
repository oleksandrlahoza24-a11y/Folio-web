// ── Credits Modal ──
function openCredits() {
  document.getElementById('creditsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCredits() {
  document.getElementById('creditsModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeCreditsOutside(e) {
  if (e.target === document.getElementById('creditsModal')) {
    closeCredits();
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCredits();
});

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.section-label, .products-grid, .about-grid, .about-title, .about-body, .stat');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
