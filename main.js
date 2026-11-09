/* mortenhaulik.com — zero-dependency interactivity.
   Pages are pre-rendered per language by build.js; this file only adds behaviour. */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const lang = UI_TEXT[document.documentElement.lang] ? document.documentElement.lang : 'en';
  const t = UI_TEXT[lang];
  const pathFor = l => (l === 'en' ? '/' : `/${l}/`);
  const store = (k, v) => { try { v === undefined ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} };
  const read = k => { try { return localStorage.getItem(k); } catch { return null; } };

  /* ---------- language ----------
     Old ?lang=xx links (and a remembered choice on the English root) go to the
     real per-language URL. Crawlers have no stored choice, so they always see /. */
  const qLang = new URLSearchParams(location.search).get('lang');
  const wanted = qLang || (lang === 'en' ? read('lang') : null);
  if (wanted && wanted !== lang && UI_TEXT[wanted]) {
    location.replace(pathFor(wanted) + location.hash);
    return;
  }
  $$('.lang-nav a').forEach(a => a.addEventListener('click', () => store('lang', a.dataset.lang)));

  const cardModal = $('#card-modal');
  const bookingModal = $('#booking-modal');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const data = id => (PORTFOLIO_DATA[id] && (PORTFOLIO_DATA[id][lang] || PORTFOLIO_DATA[id].en)) || {};
  const src = p => '/' + encodeURI(p);

  /* ---------- grid ---------- */
  $$('.tile[data-id]').forEach(el => {
    const item = ITEMS.find(i => i.id === el.dataset.id);
    if (!item) return;
    const open = () => openCard(item);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    if (!reduceMotion) addTilt(el);
  });

  /* Grid videos only start downloading once they're about to scroll into view. */
  const videos = $$('video[data-src]');
  const startVideo = v => { v.src = v.dataset.src; v.removeAttribute('data-src'); v.play().catch(() => {}); };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => entries.forEach(e => {
      if (e.isIntersecting) { startVideo(e.target); obs.unobserve(e.target); }
    }), { rootMargin: '300px' });
    videos.forEach(v => io.observe(v));
  } else videos.forEach(startVideo);

  function addTilt(el) {
    el.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) scale3d(1.015,1.015,1.015)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  }

  /* ---------- scroll polish ---------- */
  const topbar = $('.topbar');
  const onScroll = () => topbar.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const ro = new IntersectionObserver((entries, obs) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => ro.observe(el));
  } else reveals.forEach(el => el.classList.add('in'));

  /* ---------- portfolio modal ---------- */
  function openCard(item) {
    const d = data(item.id);
    const box = $('#modal-content');
    cardModal.classList.toggle('polaroid', item.type === 'image');

    if (item.type === 'image') {
      box.innerHTML = `<div class="polaroid-frame">
        <img src="${src(item.image)}" alt="${d.title}">
        <p>${Array.isArray(d.content) ? d.content.join(' ') : (d.content || d.desc)}</p>
      </div>`;
    } else {
      const paras = (Array.isArray(d.content) ? d.content : [d.content]).map(p => `<p>${p}</p>`).join('');
      const quote = d.quote ? `<blockquote>"${d.quote}"</blockquote>` : '';
      const btnLabel = item.id.startsWith('game-') ? t.btnPlay
        : item.id === 'project-nxtcare' ? t.btnCare
        : item.id.includes('nxt') ? t.btnExperience
        : item.id.includes('send') ? t.btnTry : t.btnVisit;
      const action = item.externalLink ? `<div class="modal-actions"><a class="btn" href="${item.externalLink}" target="_blank" rel="noopener">${btnLabel} ↗</a></div>` : '';
      box.innerHTML = `<div class="modal-flex">
        <div class="modal-media">
          ${item.video ? `<video src="${src(item.video)}" autoplay loop muted playsinline></video>` : `<img src="${src(item.image)}" alt="${d.title}">`}
          <span class="tag">${item.icon} ${d.tag || ''}</span>
        </div>
        <div class="modal-text"><h2>${d.title}</h2><p class="sub">${d.subtitle || ''}</p>${paras}${quote}${action}</div>
      </div>`;
    }
    cardModal.showModal();
  }

  /* Dialogs: close button + click on backdrop */
  $$('.modal').forEach(m => {
    m.querySelector('[data-close]').addEventListener('click', () => m.close());
    m.addEventListener('click', e => { if (e.target === m) m.close(); });
  });

  /* ---------- email backend ----------
     Silent delivery via FormSubmit (formsubmit.co), same no-server approach as
     nxtwebxr.com. The `email` field becomes the reply-to address. */
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/Morten@nxtwebxr.com';
  function sendForm(formEl, statusEl, payload) {
    const btn = formEl.querySelector('button[type="submit"]');
    // Label lives in a nested span; restore it from the current language afterwards.
    const label = btn.querySelector('[data-t]') || btn;
    const labelKey = label.dataset && label.dataset.t;
    btn.disabled = true;
    label.textContent = t.sending;
    statusEl.classList.remove('err');
    statusEl.textContent = '';
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(r => { if (!r.ok) throw new Error('bad status'); return r.json(); }).then(() => {
      statusEl.textContent = t.sentOk;
      formEl.reset();
    }).catch(() => {
      statusEl.classList.add('err');
      statusEl.textContent = t.sentErr;
    }).finally(() => {
      btn.disabled = false;
      if (labelKey) label.textContent = t[labelKey];
    });
  }

  /* ---------- booking ---------- */
  $$('[data-open-booking]').forEach(b => b.addEventListener('click', () => bookingModal.showModal()));
  // #booking is the keynote deep link (also the ReserveAction target in the JSON-LD)
  const openFromHash = () => { if (location.hash === '#booking' && !bookingModal.open) bookingModal.showModal(); };
  addEventListener('hashchange', openFromHash);
  openFromHash();

  const audOut = $('#audience-out');
  $('#audience').addEventListener('input', e => {
    const v = +e.target.value;
    audOut.innerHTML = `${v === 5000 ? '5,000+' : v.toLocaleString(lang)} <small>${t.people}</small>`;
  });
  $('#booking-form').addEventListener('submit', e => {
    e.preventDefault();
    const aud = $('#audience').value;
    const dates = ['#d1', '#d2', '#d3'].map(s => $(s).value).filter(Boolean).join(', ') || 'TBD';
    sendForm(e.target, $('#booking-status'), {
      name: $('#b-name').value,
      email: $('#b-email').value,
      organization: $('#b-org').value,
      audience_size: aud,
      phone: $('#phone').value,
      dates,
      page_language: lang,
      _subject: `${t.inquiry} - ${$('#b-org').value || $('#b-name').value} (${aud} ${t.people})`,
      _template: 'table'
    });
  });

  /* ---------- contact ---------- */
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    sendForm(f, $('#contact-status'), {
      name: f.name.value,
      email: f.email.value,
      message: f.message.value,
      page_language: lang,
      _subject: `${t.letsTalk}: ${f.name.value}`,
      _template: 'table'
    });
  });

  /* ---------- speaker kit: copy bio ---------- */
  $$('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const el = document.getElementById(b.dataset.copy);
    const text = [...el.querySelectorAll('p')].map(p => p.textContent).join('\n\n') || el.textContent;
    const original = b.textContent;
    navigator.clipboard.writeText(text).then(() => {
      b.textContent = b.dataset.done;
      setTimeout(() => { b.textContent = original; }, 1800);
    }).catch(() => {});
  }));
})();
