/* mortenhaulik.com — zero-dependency interactivity */
(() => {
  const $ = s => document.querySelector(s);
  const grid = $('#grid');
  const contact = $('#contact');
  const cardModal = $('#card-modal');
  const bookingModal = $('#booking-modal');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const SVG = {
    mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    twitter: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7Zm-1.3 19.4h2L6.5 3.3h-2.2l13.3 17.3Z"/></svg>',
    linkedin: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5Z"/></svg>'
  };
  document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = SVG[el.dataset.icon] || '');

  let lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'en';
  if (!UI_TEXT[lang]) lang = 'en';

  const t = () => UI_TEXT[lang];
  const data = id => (PORTFOLIO_DATA[id] && (PORTFOLIO_DATA[id][lang] || PORTFOLIO_DATA[id].en)) || {};

  /* ---------- grid ---------- */
  function hoverLabel(item, d) {
    if (item.type === 'image') return t().hoverImage;
    if (['Podcast','Keynote'].includes(d.tag)) return t().hoverListen;
    if (['Project','Projekt','Progetto','Projet'].includes(d.tag)) return t().hoverProject;
    return t().hoverRead;
  }

  function buildGrid() {
    grid.querySelectorAll('.tile').forEach(n => n.remove());
    ITEMS.forEach(item => {
      const d = data(item.id);
      const el = document.createElement('article');
      el.className = `card tile card-surface${item.span === 2 ? ' span-2' : ''}`;
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', d.title);
      el.innerHTML = `
        <div class="media">${item.video
          ? `<video data-src="${item.video}" loop muted playsinline preload="none"></video>`
          : `<img src="${item.image}" alt="${d.title}" loading="lazy" decoding="async">`}</div>
        <span class="tag">${item.icon} ${d.tag || 'Work'}</span>
        <div class="body">
          <h3>${d.title}</h3>
          <p>${d.desc || ''}</p>
          <span class="cta">${hoverLabel(item, d)}</span>
        </div>`;
      const open = () => openCard(item);
      el.addEventListener('click', open);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      if (!reduceMotion) addTilt(el);
      grid.insertBefore(el, contact);
    });
    lazyLoadVideos();
  }

  /* Grid videos only start downloading once they're about to scroll into view,
     instead of every autoplay video fetching its full file on page load. */
  function lazyLoadVideos() {
    const videos = grid.querySelectorAll('video[data-src]');
    if (!('IntersectionObserver' in window)) {
      videos.forEach(v => { v.src = v.dataset.src; v.removeAttribute('data-src'); v.play().catch(() => {}); });
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const v = entry.target;
        v.src = v.dataset.src;
        v.removeAttribute('data-src');
        v.play().catch(() => {});
        obs.unobserve(v);
      });
    }, { rootMargin: '300px' });
    videos.forEach(v => io.observe(v));
  }

  function addTilt(el) {
    el.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) scale3d(1.02,1.02,1.02)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  }

  /* ---------- portfolio modal ---------- */
  function openCard(item) {
    const d = data(item.id);
    const box = $('#modal-content');
    cardModal.classList.toggle('polaroid', item.type === 'image');

    if (item.type === 'image') {
      box.innerHTML = `<div class="polaroid-frame">
        <img src="${item.image}" alt="${d.title}">
        <p>${Array.isArray(d.content) ? d.content.join(' ') : (d.content || d.desc)}</p>
      </div>`;
    } else {
      const paras = (Array.isArray(d.content) ? d.content : [d.content]).map(p => `<p>${p}</p>`).join('');
      const quote = d.quote ? `<blockquote>"${d.quote}"</blockquote>` : '';
      const btnLabel = item.id.includes('nxt') ? t().btnExperience : item.id.includes('send') ? t().btnTry : t().btnVisit;
      const action = item.externalLink ? `<div class="modal-actions"><a class="btn" href="${item.externalLink}" target="_blank" rel="noopener">${btnLabel} ↗</a></div>` : '';
      box.innerHTML = `<div class="modal-flex">
        <div class="modal-media">
          ${item.video ? `<video src="${item.video}" autoplay loop muted playsinline></video>` : `<img src="${item.image}" alt="${d.title}">`}
          <span class="tag">${item.icon} ${d.tag || ''}</span>
        </div>
        <div class="modal-text"><h2>${d.title}</h2><p class="sub">${d.subtitle || ''}</p>${paras}${quote}${action}</div>
      </div>`;
    }
    cardModal.showModal();
  }

  /* Dialogs: close button + click on backdrop */
  document.querySelectorAll('.modal').forEach(m => {
    m.querySelector('[data-close]').addEventListener('click', () => m.close());
    m.addEventListener('click', e => { if (e.target === m) m.close(); });
  });

  /* ---------- booking ---------- */
  $('#open-booking').addEventListener('click', () => bookingModal.showModal());
  const audOut = $('#audience-out');
  $('#audience').addEventListener('input', e => {
    const v = +e.target.value;
    audOut.innerHTML = `${v === 5000 ? '5,000+' : v.toLocaleString()} <small>${t().people}</small>`;
  });
  $('#booking-form').addEventListener('submit', e => {
    e.preventDefault();
    const aud = $('#audience').value;
    const dates = ['#d1','#d2','#d3'].map(s => $(s).value).filter(Boolean).join(', ') || 'TBD';
    const subject = encodeURIComponent(`${t().inquiry} - ${aud} ${t().people}`);
    const body = encodeURIComponent(`Booking Morten Haulik - ${aud} ${t().people}\n${t().phone}: ${$('#phone').value}\nDates: ${dates}`);
    location.href = `mailto:Morten@nxtwebxr.com?subject=${subject}&body=${body}`;
  });

  /* ---------- contact ---------- */
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(`${t().letsTalk}: ${f.name.value}`);
    const body = encodeURIComponent(`${t().name}: ${f.name.value}\n${t().email}: ${f.email.value}\n\nMessage:\n${f.message.value}`);
    location.href = `mailto:Morten@nxtwebxr.com?subject=${subject}&body=${body}`;
  });

  /* ---------- language ---------- */
  function applyLang(next) {
    lang = next;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.title = SEO_META[lang].title;
    document.querySelector('meta[name="description"]').content = SEO_META[lang].desc;
    document.querySelectorAll('.lang-nav button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.querySelectorAll('[data-t]').forEach(el => { const v = t()[el.dataset.t]; if (v) el.textContent = v; });
    document.querySelectorAll('[data-tp]').forEach(el => { const v = t()[el.dataset.tp]; if (v) el.placeholder = v; });
    $('#bio-body').innerHTML = BIO[lang].map(p => `<p>${p}</p>`).join('');
    buildGrid();
    const url = new URL(location); lang === 'en' ? url.searchParams.delete('lang') : url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }
  document.querySelectorAll('.lang-nav button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

  $('#year').textContent = new Date().getFullYear();
  applyLang(lang);
})();
