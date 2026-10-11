/**
 * SS METALS INDUSTRIES - MAIN JAVASCRIPT
 * Dynamic UI, Product Catalog Filter, Modals & WhatsApp Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeroSlider();
  initProductCatalog();
  initStatsCounter();
  initProductModal();
  initLightbox();
  initContactForm();
});

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('show')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('show');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }
}

/* ==========================================================================
   HERO SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5500);
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  startAutoplay();
}

/* ==========================================================================
   PRODUCT CATALOG FILTER & SEARCH
   ========================================================================== */
function initProductCatalog() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('catalogSearch');
  const productCards = document.querySelectorAll('.product-card');
  const countBadge = document.getElementById('productCountBadge');

  if (!productCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilter() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || '';
      const cardCode = (card.getAttribute('data-code') || '').toLowerCase();
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      const cardSpecs = (card.getAttribute('data-specs') || '').toLowerCase();

      const matchesCat = (currentCategory === 'all' || cardCat === currentCategory);
      const matchesSearch = !searchQuery ||
        cardCode.includes(searchQuery) ||
        cardName.includes(searchQuery) ||
        cardSpecs.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `${visibleCount} Products`;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilter();
    });
  }
}

/* ==========================================================================
   PRODUCT QUICK VIEW MODAL
   ========================================================================== */
function initProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeModal');
  const modalImg = document.getElementById('modalProductImg');
  const modalCode = document.getElementById('modalProductCode');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalCat = document.getElementById('modalProductCat');
  const modalStock = document.getElementById('modalProductStock');
  const modalSpecsBody = document.getElementById('modalSpecsBody');
  const modalWhatsapp = document.getElementById('modalWhatsappBtn');

  window.openProductModal = function (code) {
    if (typeof PRODUCTS_DATA === 'undefined') return;

    const prod = PRODUCTS_DATA.find(p => p.code.toUpperCase() === code.toUpperCase() || p.slug === code);
    if (!prod) return;

    if (modalImg) modalImg.src = prod.image || 'img/logo/logo.png';
    if (modalCode) modalCode.textContent = prod.code;
    if (modalTitle) modalTitle.textContent = prod.name || prod.code;
    if (modalCat) modalCat.textContent = prod.category;
    if (modalStock) modalStock.textContent = prod.stock;

    if (modalSpecsBody) {
      modalSpecsBody.innerHTML = '';
      if (prod.specs && Object.keys(prod.specs).length > 0) {
        for (const [k, v] of Object.entries(prod.specs)) {
          const row = document.createElement('tr');
          row.innerHTML = `<th>${k}</th><td>${v}</td>`;
          modalSpecsBody.appendChild(row);
        }
      } else {
        modalSpecsBody.innerHTML = '<tr><td colspan="2" class="text-muted">Standard export finish and specifications. Contact for custom sizing.</td></tr>';
      }
    }

    if (modalWhatsapp) {
      const msg = encodeURIComponent(`Hello SS METALS Industries, I am inquiring about product: ${prod.code} (${prod.name || 'Unfinished Kalvat Product'}). Please provide price quote and availability.`);
      modalWhatsapp.href = `https://wa.me/919412236335?text=${msg}`;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
}

/* ==========================================================================
   IMAGE LIGHTBOX (FOR INFRASTRUCTURE & GALLERY)
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');

  window.openLightbox = function (src, caption) {
    if (lbImg) lbImg.src = src;
    if (lbCaption) lbCaption.textContent = caption || '';
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeLb() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLb);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLb();
  });
}

/* ==========================================================================
   ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-num[data-target]');
  if (!statNumbers.length) return;

  let started = false;

  function checkScroll() {
    const section = document.querySelector('.section-stats');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85 && !started) {
      started = true;
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        const suffix = stat.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 1800;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current).toLocaleString() + suffix;
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
}

/* ==========================================================================
   CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const email = form.querySelector('[name="email"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || '';

    // Direct to WhatsApp option or alert confirmation
    const waText = encodeURIComponent(`Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nRequirements: ${message}`);

    alert(`Thank you, ${name}! Your inquiry has been received. Our team will contact you shortly.\n\nYou can also click the WhatsApp button to chat with us immediately.`);

    form.reset();
  });
}
