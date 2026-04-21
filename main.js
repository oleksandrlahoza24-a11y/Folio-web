/* ──────────────────────────────────────────
   Folio Suite — Hub Stylesheet
   Dark editorial aesthetic
────────────────────────────────────────── */

:root {
  --bg:         #0c0c0e;
  --bg-2:       #111114;
  --bg-card:    #141418;
  --border:     rgba(255,255,255,0.08);
  --border-hover: rgba(255,255,255,0.18);
  --accent:     #c9a84c;
  --accent-dim: rgba(201,168,76,0.15);
  --text:       #e8e6e0;
  --text-muted: #7a7875;
  --text-dim:   #4a4845;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-mono:  'JetBrains Mono', 'Fira Mono', monospace;
  --font-body:  'Outfit', sans-serif;

  --radius: 4px;
  --ease:   cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Noise overlay ── */
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
}

/* ── Typography helpers ── */
.mono {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  font-weight: 300;
}

/* ── Header ── */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  background: rgba(12, 12, 14, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text);
}

.logo-mark {
  color: var(--accent);
  font-size: 1rem;
  line-height: 1;
  animation: spin-slow 12s linear infinite;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.logo-text {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--text);
}

/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 2rem 80px;
  overflow: hidden;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  color: var(--accent);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fade-up 0.8s var(--ease) 0.1s forwards;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--text);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fade-up 0.8s var(--ease) 0.25s forwards;
}

.hero-title em {
  font-style: italic;
  color: var(--accent);
}

.hero-sub {
  max-width: 500px;
  color: var(--text-muted);
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fade-up 0.8s var(--ease) 0.4s forwards;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--accent);
  text-decoration: none;
  border: 1px solid rgba(201,168,76,0.3);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  transition: background 0.2s, border-color 0.2s;
  opacity: 0;
  animation: fade-up 0.8s var(--ease) 0.55s forwards;
}

.hero-cta:hover {
  background: var(--accent-dim);
  border-color: rgba(201,168,76,0.6);
}

.hero-cta .arrow {
  transition: transform 0.3s var(--ease);
}

.hero-cta:hover .arrow {
  transform: translateY(3px);
}

.hero-line {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent);
}

/* ── Section labels ── */
.section-label {
  color: var(--text-dim);
  margin-bottom: 3rem;
}

/* ── Products ── */
.products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: var(--bg-card);
  text-decoration: none;
  color: var(--text);
  border-right: 1px solid var(--border);
  transition: background 0.3s var(--ease);
  position: relative;
  overflow: hidden;
}

.product-card:last-child {
  border-right: none;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-card:hover {
  background: rgba(20, 20, 24, 0.9);
}

.product-card.featured {
  background: var(--bg-2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.card-tag {
  color: var(--accent);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.card-arrow {
  font-size: 1.1rem;
  color: var(--text-dim);
  transition: color 0.2s, transform 0.3s var(--ease);
}

.product-card:hover .card-arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.card-icon {
  margin-bottom: 1.5rem;
  color: var(--text-muted);
  transition: color 0.2s;
}

.product-card:hover .card-icon {
  color: var(--accent);
}

.card-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.card-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.card-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex: 1;
}

.card-features li {
  color: var(--text-dim);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.card-features li::before {
  content: '—';
  color: var(--accent);
  font-size: 0.6rem;
}

.card-footer {
  border-top: 1px solid var(--border);
  padding-top: 1.2rem;
  margin-top: auto;
}

.launch-label {
  color: var(--text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.product-card:hover .launch-label {
  color: var(--accent);
}

/* ── About ── */
.about {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 6rem 2rem;
}

.about > * {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.about > .section-label {
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.about-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.about-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.about-title em {
  font-style: italic;
  color: var(--accent);
}

.about-body {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 1rem;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.stat {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat:last-child {
  grid-column: 1 / -1;
}

.stat-num {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1;
  color: var(--accent);
}

.stat-label {
  color: var(--text-dim);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Footer ── */
.site-footer {
  padding: 3rem 2rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  color: var(--text-dim);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--accent);
}

.footer-copy {
  color: var(--text-dim);
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  text-align: center;
}

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s var(--ease);
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.modal {
  background: var(--bg-2);
  border: 1px solid var(--border-hover);
  border-radius: 8px;
  padding: 3rem;
  max-width: 560px;
  width: 100%;
  position: relative;
  transform: translateY(20px) scale(0.98);
  transition: transform 0.4s var(--ease);
}

.modal-overlay.open .modal {
  transform: translateY(0) scale(1);
}

.modal-close {
  position: absolute;
  top: 1.25rem; right: 1.25rem;
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 0.8rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s, color 0.2s;
}

.modal-close:hover {
  background: var(--border);
  color: var(--text);
}

.modal-eyebrow {
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.modal-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2.5rem;
}

.modal-title em {
  font-style: italic;
  color: var(--accent);
}

.credits-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.credit-entry {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.credit-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent-dim);
  border: 1px solid rgba(201,168,76,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--accent);
  flex-shrink: 0;
}

.credit-name {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 0.15rem;
}

.credit-aka {
  color: var(--accent);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}

.credit-role {
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 400;
  margin-bottom: 0.6rem;
}

.credit-desc {
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.65;
  font-weight: 300;
}

.modal-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 1.5rem;
}

.modal-note {
  color: var(--text-dim);
  font-size: 0.65rem;
  letter-spacing: 0.04em;
}

/* ── Animations ── */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Scroll reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .product-card:last-child {
    border-bottom: none;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .stat:last-child {
    grid-column: auto;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-nav {
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {
  .header-inner {
    padding: 0 1rem;
  }

  .hero,
  .products,
  .about,
  .site-footer {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .modal {
    padding: 2rem 1.5rem;
  }
}
