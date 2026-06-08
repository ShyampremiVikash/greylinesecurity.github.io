console.log("main.js loaded");
/* ═══════════════════════════════════════════════
   VANTAGE SECURITY — MAIN JS
   ═══════════════════════════════════════════════ */

// ── NAV SCROLL STATE ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.service-card, .step, .threat-item, .pillar, .section-header, .contact__left, .about__badge, .approach__quote'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children of same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── CONTACT FORM ──
// const form = document.getElementById('contactForm');

// console.log("FORM FOUND:", form);

// if (form) {
//   form.addEventListener('submit', async (e) => {
//     console.log("SUBMIT FIRED");

//     e.preventDefault();

//     const btn = form.querySelector('button[type="submit"]');

//     console.log("BUTTON:", btn);

//     btn.disabled = true;
//     btn.textContent = 'Sending...';

//     try {
//       console.log("FETCHING:", form.action);

//       const response = await fetch(form.action, {
//         method: 'POST',
//         body: new FormData(form)
//       });

//       console.log("STATUS:", response.status);

//       if (response.ok) {
//         btn.textContent = 'Message sent ✓';
//         form.reset();
//       } else {
//         btn.textContent = 'Failed to send';
//       }
//     } catch (error) {
//       console.error(error);
//       btn.textContent = 'Error';
//     }
//   });
// }

// ── SMOOTH ANCHOR OFFSET (for fixed nav) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
