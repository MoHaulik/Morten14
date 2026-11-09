/* Static page generator for mortenhaulik.com — zero dependencies.
   Run `node build.js` after editing data.js. It writes index.html (English)
   and da/ de/ it/ fr/index.html, each fully pre-rendered in its own language,
   so search engines and AI assistants (most of which don't run JavaScript)
   read every word, and each language has its own crawlable URL. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8') +
  ';this.d={UI_TEXT,SEO_META,PAGE_TEXT,FEATURED,PORTFOLIO_DATA,ITEMS};', ctx);
const { UI_TEXT, SEO_META, PAGE_TEXT, FEATURED, PORTFOLIO_DATA, ITEMS } = ctx.d;

const SITE = 'https://www.mortenhaulik.com';
const LANGS = ['en', 'da', 'de', 'it', 'fr'];
const FLAGS = { en: ['🇬🇧', 'English'], da: ['🇩🇰', 'Dansk'], de: ['🇩🇪', 'Deutsch'], it: ['🇮🇹', 'Italiano'], fr: ['🇫🇷', 'Français'] };
const LOCALE = { en: 'en_US', da: 'da_DK', de: 'de_DE', it: 'it_IT', fr: 'fr_FR' };
const EMAIL = 'Morten@nxtwebxr.com';
const MODIFIED = new Date().toISOString().slice(0, 10);
// Short content hash appended to CSS/JS URLs so browsers pick up changes after a deploy
const ver = f => require('crypto').createHash('md5').update(fs.readFileSync(path.join(__dirname, f))).digest('hex').slice(0, 8);

const urlFor = l => `${SITE}/${l === 'en' ? '' : l + '/'}`;
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const asset = p => '/' + encodeURI(p);

const ICON = {
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  x: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7Zm-1.3 19.4h2L6.5 3.3h-2.2l13.3 17.3Z"/></svg>',
  linkedin: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5Z"/></svg>',
  mic: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></svg>',
  compass: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/></svg>',
  news: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></svg>'
};

function hoverLabel(t, item, d) {
  if (item.type === 'image') return t.hoverImage;
  if (item.id.startsWith('game-')) return t.hoverPlay;
  if (['Podcast', 'Keynote'].includes(d.tag)) return t.hoverListen;
  if (item.type === 'project') return t.hoverProject;
  return t.hoverRead;
}

function tiles(l) {
  const t = UI_TEXT[l];
  return ITEMS.map(item => {
    const d = PORTFOLIO_DATA[item.id][l] || PORTFOLIO_DATA[item.id].en;
    const media = item.video
      ? `<video data-src="${asset(item.video)}" loop muted playsinline preload="none" aria-hidden="true"></video>`
      : `<img src="${asset(item.image)}" alt="${esc(d.title)}" loading="lazy" decoding="async">`;
    return `      <article class="card tile${item.span === 2 ? ' span-2' : ''}" data-id="${item.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="${esc(d.title)}">
        <div class="media">${media}</div>
        <span class="tag">${item.icon} ${esc(d.tag || 'Work')}</span>
        <div class="body">
          <h3>${esc(d.title)}</h3>
          <p>${esc(d.desc)}</p>
          <span class="cta">${esc(hoverLabel(t, item, d))}</span>
        </div>
      </article>`;
  }).join('\n');
}

function jsonLd(l) {
  const p = PAGE_TEXT[l], en = PAGE_TEXT.en, url = urlFor(l);
  const person = `${SITE}/#person`;
  const game = (id, name, path, genre) => ({
    '@type': 'VideoGame', name, url: `https://www.nxtwebxr.com/${path}/`,
    description: PORTFOLIO_DATA[id].en.desc, image: `${SITE}/${ITEMS.find(i => i.id === id).image}`,
    genre, gamePlatform: ['WebXR', 'Meta Quest Browser', 'Pico Browser'], isAccessibleForFree: true,
    author: { '@id': person }, publisher: { '@id': 'https://www.nxtwebxr.com/#organization' }
  });
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Morten Haulik',
        publisher: { '@id': person }, inLanguage: LANGS },
      { '@type': 'ProfilePage', '@id': `${url}#profilepage`, url, name: SEO_META[l].title, description: SEO_META[l].desc,
        isPartOf: { '@id': `${SITE}/#website` }, mainEntity: { '@id': person },
        primaryImageOfPage: `${SITE}/og-image.jpg`, dateModified: MODIFIED, inLanguage: l },
      { '@type': 'Person', '@id': person, name: 'Morten Haulik', givenName: 'Morten', familyName: 'Haulik',
        jobTitle: ['Spatial Computing Keynote Speaker', 'XR Consultant', 'Founder of NXT/WebXR'],
        url: `${SITE}/`, image: `${SITE}/pjp.jpg`, email: `mailto:${EMAIL}`,
        sameAs: ['https://www.linkedin.com/in/haulik', 'https://x.com/Haulik'],
        address: { '@type': 'PostalAddress', addressLocality: 'Copenhagen', addressCountry: 'DK' },
        knowsLanguage: ['da', 'en'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Copenhagen', url: 'https://www.ku.dk/' },
        affiliation: { '@type': 'Organization', name: 'KU Lighthouse, University of Copenhagen', url: 'https://lighthouse.ku.dk/' },
        award: 'KU Impact Award 2021 (MidwifeVR)',
        founder: [{ '@id': 'https://www.nxtwebxr.com/#organization' }],
        description: en.kitShort,
        knowsAbout: ['Spatial Computing', 'Extended Reality (XR)', 'Virtual Reality', 'Augmented Reality', 'Mixed Reality',
          'Smart Glasses', 'WebXR', 'Spatial Internet', 'XR Strategy', 'Healthcare XR', 'VR Training',
          'Apple Vision Pro', 'Meta Quest', 'Meta smart glasses', 'Android XR', 'Hand tracking', 'Game development'],
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'speaking inquiries', email: EMAIL, url: `${url}#booking`, availableLanguage: ['English', 'Danish'] },
          { '@type': 'ContactPoint', contactType: 'consulting', email: EMAIL, url: `${url}#contact`, availableLanguage: ['English', 'Danish'] },
          { '@type': 'ContactPoint', contactType: 'press', email: EMAIL, availableLanguage: ['English', 'Danish'] }
        ],
        subjectOf: FEATURED.map(([name, href]) => ({ '@type': 'CreativeWork', name: `Morten Haulik in ${name}`, url: href }))
      },
      { '@type': 'Organization', '@id': 'https://www.nxtwebxr.com/#organization', name: 'NXT/WebXR', url: 'https://www.nxtwebxr.com/',
        foundingDate: '2025', founder: { '@id': person },
        description: 'A catalogue of free WebXR games and experiences, opened straight from the headset browser.' },
      { '@type': 'Service', '@id': `${SITE}/#keynotes`, name: 'Keynote speaking on spatial computing, XR and smart glasses',
        serviceType: 'Keynote speaker', provider: { '@id': person }, areaServed: 'Europe',
        audience: { '@type': 'BusinessAudience', audienceType: 'Conference organisers, corporate events, universities, public sector' },
        availableLanguage: ['English', 'Danish'], description: en.speakText,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Keynote topics',
          itemListElement: en.speakTopics.map(x => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x } })) },
        potentialAction: { '@type': 'ReserveAction', target: `${SITE}/#booking` } },
      { '@type': 'Service', '@id': `${SITE}/#consulting`, name: 'XR strategy and WebXR consulting',
        serviceType: 'XR consulting', provider: { '@id': person }, areaServed: 'Europe', description: en.consultText,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Consulting services',
          itemListElement: en.consultList.map(x => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x } })) },
        potentialAction: { '@type': 'CommunicateAction', target: `${SITE}/#contact` } },
      game('game-holorange', 'HoloRange', 'holorange', ['Shooter', 'Mixed reality']),
      game('game-fishstick', 'Meows Freaky Fishstick Factory', 'fishstickfactory', ['Arcade', 'Mixed reality']),
      game('game-diehaende', 'die Hände', 'diehaende', ['Horror', 'Mixed reality']),
      { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: l,
        mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
    ]
  };
}

function page(l) {
  const t = UI_TEXT[l], p = PAGE_TEXT[l], seo = SEO_META[l], url = urlFor(l);
  const alternates = LANGS.map(x => `<link rel="alternate" hreflang="${x}" href="${urlFor(x)}">`).join('\n') +
    `\n<link rel="alternate" hreflang="x-default" href="${urlFor('en')}">`;
  const mailPress = `mailto:${EMAIL}?subject=${encodeURIComponent(p.pressSubject)}`;
  const li = a => a.map(x => `<li>${esc(x)}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="${l}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Generated by build.js from data.js. Edit data.js, then run: node build.js -->
<title>${esc(seo.title)}</title>
<meta name="description" content="${esc(seo.desc)}">
<meta name="author" content="Morten Haulik">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#0033FF">
<link rel="canonical" href="${url}">
${alternates}

<meta property="og:type" content="profile">
<meta property="og:site_name" content="Morten Haulik">
<meta property="og:title" content="${esc(seo.title)}">
<meta property="og:description" content="${esc(seo.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Morten Haulik, spatial computing keynote speaker and XR consultant">
<meta property="profile:first_name" content="Morten">
<meta property="profile:last_name" content="Haulik">
<meta property="og:locale" content="${LOCALE[l]}">
${LANGS.filter(x => x !== l).map(x => `<meta property="og:locale:alternate" content="${LOCALE[x]}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Haulik">
<meta name="twitter:creator" content="@Haulik">
<meta name="twitter:title" content="${esc(seo.title)}">
<meta name="twitter:description" content="${esc(seo.desc)}">
<meta name="twitter:image" content="${SITE}/og-image.jpg">
<meta name="twitter:image:alt" content="Morten Haulik, spatial computing keynote speaker and XR consultant">

<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥽</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="preload" as="image" href="/pjp.jpg">
<link rel="stylesheet" href="/style.css?v=${ver('style.css')}">
<script type="application/ld+json">
${JSON.stringify(jsonLd(l), null, 1)}
</script>
</head>
<body>
<a class="skip" href="#main">${esc(p.skip)}</a>
<div class="bg" aria-hidden="true"></div>

<nav class="lang-nav" aria-label="Language">
${LANGS.map(x => `  <a href="/${x === 'en' ? '' : x + '/'}" hreflang="${x}" lang="${x}" data-lang="${x}"${x === l ? ' class="active" aria-current="page"' : ''} aria-label="${FLAGS[x][1]}">${FLAGS[x][0]}</a>`).join('\n')}
</nav>

<header class="site-header">
  <div class="identity">
    <div class="portrait"><img src="/pjp.jpg" alt="Morten Haulik" width="144" height="144" fetchpriority="high"></div>
    <div>
      <h1>Morten Haulik <span class="xr">| XR</span></h1>
      <p class="role">${esc(t.role)}</p>
      <p class="badge"><span class="dot"><span class="ping"></span><span class="core"></span></span> <span>Copenhagen 🇩🇰/🇪🇺</span></p>
    </div>
  </div>
  <div class="header-actions">
    <button class="btn btn-primary" type="button" data-open-booking>${esc(t.engage)}</button>
    <a class="btn btn-glass" href="#contact">${esc(t.consult)}</a>
    <div class="header-row">
      <a class="btn btn-ghost" href="https://www.nxtwebxr.com" target="_blank" rel="noopener">${esc(t.expNxt)}</a>
      <a class="btn btn-ghost btn-icon" href="https://www.linkedin.com/in/haulik" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a>
    </div>
  </div>
</header>

<main id="main">
  <section class="hero section" aria-labelledby="hero-lead">
    <h2 id="hero-lead" class="lead">${esc(p.heroLead)}</h2>
    <p class="hero-sub">${esc(p.heroSub)}</p>
    <dl class="stats">
${p.stats.map(([n, s]) => `      <div><dt>${esc(n)}</dt><dd>${esc(s)}</dd></div>`).join('\n')}
    </dl>
  </section>

  <section class="featured section" aria-label="${esc(p.featured)}">
    <p class="eyebrow-light">${esc(p.featured)}</p>
    <ul>${FEATURED.map(([n, h]) => `<li><a href="${esc(h)}" target="_blank" rel="noopener">${esc(n)}</a></li>`).join('')}</ul>
  </section>

  <section class="services section" id="services" aria-labelledby="services-title">
    <h2 id="services-title" class="section-title">${esc(p.servicesTitle)}</h2>
    <div class="service-grid">
      <article class="service">
        <span class="service-icon">${ICON.mic}</span>
        <h3>${esc(p.speakTitle)}</h3>
        <p>${esc(p.speakText)}</p>
        <ul>${li(p.speakTopics)}</ul>
        <button class="btn btn-white" type="button" data-open-booking>${esc(p.speakCta)}</button>
      </article>
      <article class="service">
        <span class="service-icon">${ICON.compass}</span>
        <h3>${esc(p.consultTitle)}</h3>
        <p>${esc(p.consultText)}</p>
        <ul>${li(p.consultList)}</ul>
        <a class="btn btn-white" href="#contact">${esc(p.consultCta)}</a>
      </article>
      <article class="service" id="press">
        <span class="service-icon">${ICON.news}</span>
        <h3>${esc(p.pressTitle)}</h3>
        <p>${esc(p.pressText)}</p>
        <ul>${li(p.pressList)}</ul>
        <a class="btn btn-white" href="${esc(mailPress)}">${esc(p.pressCta)}</a>
      </article>
    </div>
  </section>

  <section class="work section" id="work" aria-labelledby="work-title">
    <div class="section-head">
      <h2 id="work-title" class="section-title">${esc(p.workTitle)}</h2>
      <p>${esc(p.workSub)}</p>
    </div>
    <div class="grid" id="grid">
${tiles(l)}
    </div>
  </section>

  <section class="kit section" id="speaker-kit" aria-labelledby="kit-title">
    <div class="section-head">
      <h2 id="kit-title" class="section-title">${esc(p.kitTitle)}</h2>
      <p>${esc(p.kitSub)}</p>
    </div>
    <div class="kit-grid">
      <div class="kit-card">
        <div class="kit-head"><h3>${esc(p.kitShortLabel)}</h3><button class="copy" type="button" data-copy="kit-short" data-done="${esc(p.copied)}">${esc(p.copy)}</button></div>
        <p id="kit-short">${esc(p.kitShort)}</p>
        <dl class="facts">
${p.kitFacts.map(([k, v]) => `          <div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('\n')}
        </dl>
        <a class="btn btn-glass" href="/pjp.jpg" download="morten-haulik.jpg">${esc(p.headshot)}</a>
      </div>
      <div class="kit-card">
        <div class="kit-head"><h3>${esc(p.kitLongLabel)}</h3><button class="copy" type="button" data-copy="kit-long" data-done="${esc(p.copied)}">${esc(p.copy)}</button></div>
        <div id="kit-long">${p.kitLong.map(x => `<p>${esc(x)}</p>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="faq section" id="faq" aria-labelledby="faq-title">
    <h2 id="faq-title" class="section-title">${esc(p.faqTitle)}</h2>
${p.faq.map(([q, a]) => `    <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
  </section>

  <section class="contact-section section" id="contact" aria-labelledby="contact-title">
    <div class="contact-intro">
      <h2 id="contact-title" class="section-title">${esc(p.contactTitle)}</h2>
      <p>${esc(p.contactSub)}</p>
      <p class="eyebrow-light">${esc(p.directLabel)}</p>
      <ul class="direct">
        <li><a href="mailto:${EMAIL}">${ICON.mail} ${EMAIL}</a></li>
        <li><a href="https://www.linkedin.com/in/haulik" target="_blank" rel="noopener">${ICON.linkedin} linkedin.com/in/haulik</a></li>
        <li><a href="https://x.com/Haulik" target="_blank" rel="noopener">${ICON.x} @Haulik</a></li>
      </ul>
    </div>
    <form id="contact-form" class="contact-form">
      <label class="sr-only" for="c-name">${esc(t.name)}</label>
      <input required type="text" id="c-name" name="name" placeholder="${esc(t.name)}" autocomplete="name">
      <label class="sr-only" for="c-email">${esc(t.email)}</label>
      <input required type="email" id="c-email" name="email" placeholder="${esc(t.email)}" autocomplete="email">
      <label class="sr-only" for="c-msg">${esc(t.message)}</label>
      <textarea required rows="4" id="c-msg" name="message" placeholder="${esc(t.message)}"></textarea>
      <button type="submit" class="btn btn-white"><span data-t="openEmail">${esc(t.openEmail)}</span></button>
      <p class="hint" id="contact-status" role="status">${esc(t.draftMsg)}</p>
    </form>
  </section>
</main>

<footer class="site-footer">
  <p>${esc(t.footer)}</p>
  <p>© ${new Date().getFullYear()} Morten Haulik</p>
</footer>

<dialog id="card-modal" class="modal">
  <button class="modal-close" type="button" data-close aria-label="Close">✕</button>
  <div id="modal-content"></div>
</dialog>

<dialog id="booking-modal" class="modal booking" aria-labelledby="booking-title">
  <button class="modal-close" type="button" data-close aria-label="Close">✕</button>
  <div class="booking-inner">
    <p class="eyebrow">${esc(t.officialBooking)}</p>
    <h2 id="booking-title">${esc(t.inquiry)}</h2>
    <p class="sub">${esc(t.inquiryDesc)}</p>
    <form id="booking-form">
      <div class="field-group">
        <div class="range-head">
          <label for="audience">${esc(t.audienceSize)}</label>
          <output id="audience-out">500 <small>${esc(t.people)}</small></output>
        </div>
        <input type="range" id="audience" min="5" max="5000" step="5" value="500">
        <label class="dates-label" for="d1">${esc(t.pickDates)}</label>
        <p class="hint">${esc(t.pickDatesDesc)}</p>
        <div class="dates"><input type="date" id="d1"><input type="date" id="d2" aria-label="${esc(t.pickDates)} 2"><input type="date" id="d3" aria-label="${esc(t.pickDates)} 3"></div>
      </div>
      <label for="b-name">${esc(t.name)}</label>
      <input required type="text" id="b-name" autocomplete="name">
      <label for="b-email">${esc(t.email)}</label>
      <input required type="email" id="b-email" autocomplete="email">
      <label for="b-org">${esc(t.org)}</label>
      <input type="text" id="b-org" autocomplete="organization">
      <label for="phone">${esc(t.phone)}</label>
      <input type="tel" id="phone" placeholder="+45 12 34 56 78" autocomplete="tel">
      <button type="submit" class="btn btn-primary"><span data-t="reqEmail">${esc(t.reqEmail)}</span></button>
      <p class="hint" id="booking-status" role="status">${esc(t.reqEmailDesc)}</p>
    </form>
  </div>
</dialog>

<script src="/data.js?v=${ver('data.js')}" defer></script>
<script src="/main.js?v=${ver('main.js')}" defer></script>
</body>
</html>
`;
}

for (const l of LANGS) {
  const dir = l === 'en' ? __dirname : path.join(__dirname, l);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(l));
}

const alt = LANGS.map(x => `    <xhtml:link rel="alternate" hreflang="${x}" href="${urlFor(x)}"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en')}"/>`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${LANGS.map(l => `  <url>
    <loc>${urlFor(l)}</loc>
    <lastmod>${MODIFIED}</lastmod>
${alt}
    <image:image><image:loc>${SITE}/og-image.jpg</image:loc></image:image>
  </url>`).join('\n')}
</urlset>
`);
console.log(`Built ${LANGS.length} pages + sitemap.xml (${MODIFIED})`);
