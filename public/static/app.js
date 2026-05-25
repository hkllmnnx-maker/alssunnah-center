// ===== مركز السنة - Premium JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
  // ===== AOS Animations =====
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0
    });
  }

  // ===== Sticky Navigation + Back to Top =====
  const nav = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');
    if (window.scrollY > 400) {
      backToTop?.classList.remove('hidden');
      backToTop?.classList.add('flex');
    } else {
      backToTop?.classList.add('hidden');
      backToTop?.classList.remove('flex');
    }
  });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ===== Mobile Menu =====
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // ===== Dark Mode Toggle =====
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  });

  // ===== Active Navigation Link =====
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
      link.classList.add('active');
    }
  });

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOut * target);
      el.textContent = value.toLocaleString('ar-EG');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString('ar-EG');
    }
    requestAnimationFrame(update);
  }

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ===== Filter (courses, gallery, library, news) =====
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const groupName = group.getAttribute('data-filter-group');
    const btns = document.querySelectorAll(`[data-filter-target="${groupName}"]`);
    const items = document.querySelectorAll(`[data-filter-item="${groupName}"]`);
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        items.forEach(item => {
          const cat = item.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            item.style.display = '';
            requestAnimationFrame(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 250);
          }
        });
      });
    });
  });

  // Old-style filter (backward compatibility)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-emerald-deep-700', 'text-white', 'border-emerald-deep-700');
        b.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
      });
      btn.classList.add('active', 'bg-emerald-deep-700', 'text-white', 'border-emerald-deep-700');
      btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
      filterItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ===== Media Tabs (Videos / Audio) =====
  document.querySelectorAll('[data-tabs]').forEach(tabsContainer => {
    const tabsName = tabsContainer.getAttribute('data-tabs');
    const tabs = tabsContainer.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll(`[data-tab-panel="${tabsName}"]`);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(panel => {
          if (panel.getAttribute('data-panel') === target) {
            panel.classList.remove('hidden');
            panel.classList.add('block');
          } else {
            panel.classList.add('hidden');
            panel.classList.remove('block');
          }
        });
      });
    });
  });

  // ===== Modal System =====
  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-open');
      // Pre-fill modal with data attributes if any
      const dataAttrs = btn.dataset;
      const modal = document.getElementById(id);
      if (modal) {
        Object.keys(dataAttrs).forEach(key => {
          const fields = modal.querySelectorAll(`[data-field="${key}"]`);
          fields.forEach(f => {
            if (f.tagName === 'IMG') f.src = dataAttrs[key];
            else if (f.tagName === 'A') f.href = dataAttrs[key];
            else f.textContent = dataAttrs[key];
          });
        });
      }
      window.openModal(id);
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-close');
      window.closeModal(id);
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeModal(modal.id);
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.show').forEach(m => window.closeModal(m.id));
    }
  });

  // ===== Lightbox for Gallery =====
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  function closeLightbox() {
    lightbox?.classList.add('hidden');
    lightbox?.classList.remove('flex');
    document.body.style.overflow = '';
  }

  // ===== Forms =====
  bindForm('registerForm', '/api/register', 'تم استلام طلب التسجيل بنجاح، سيتواصل معك المركز قريبًا إن شاء الله');
  bindForm('contactForm',  '/api/contact',  'تم استلام رسالتك بنجاح، شكرًا لتواصلك معنا');

  function bindForm(formId, endpoint, successMsg) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.success) {
          showNotification(successMsg, 'success');
          form.reset();
        } else {
          showNotification(result.message || 'حدث خطأ، يرجى المحاولة مجددًا', 'error');
        }
      } catch (err) {
        showNotification('تعذّر الاتصال بالخادم، يرجى المحاولة لاحقًا', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // ===== Notification =====
  window.showNotification = function(message, type = 'success') {
    const colors = {
      success: 'bg-green-600',
      error: 'bg-red-600',
      info: 'bg-blue-600',
      warning: 'bg-yellow-600'
    };
    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      warning: 'fa-exclamation-triangle'
    };
    const notif = document.createElement('div');
    notif.className = `fixed top-24 left-1/2 -translate-x-1/2 ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl z-[200] flex items-center gap-3 max-w-md`;
    notif.style.animation = 'slideDown 0.4s ease-out';
    notif.innerHTML = `<i class="fas ${icons[type]} text-xl"></i><span>${message}</span>`;
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.style.animation = 'slideUp 0.4s ease-out forwards';
      setTimeout(() => notif.remove(), 400);
    }, 4500);
  };

  // ===== Initialize Swiper sliders =====
  if (typeof Swiper !== 'undefined') {
    document.querySelectorAll('.swiper-books').forEach(el => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
        navigation: { nextEl: el.querySelector('.swiper-button-next'), prevEl: el.querySelector('.swiper-button-prev') },
        breakpoints: {
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }
      });
    });

    document.querySelectorAll('.swiper-news').forEach(el => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
        breakpoints: {
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }
      });
    });
  }
});

// CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown { from { transform: translate(-50%, -100px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
  @keyframes slideUp   { from { transform: translate(-50%, 0); opacity: 1; } to { transform: translate(-50%, -100px); opacity: 0; } }
`;
document.head.appendChild(style);
