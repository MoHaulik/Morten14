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
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  dl: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
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
        jobTitle: ['Keynote Speaker', 'XR Consultant', 'Founder of NXT/WebXR and NXT/Care'],
        url: `${SITE}/`, image: [`${SITE}/press/morten-haulik-3.jpg`, `${SITE}/press/morten-haulik-1.jpg`, `${SITE}/press/morten-haulik-2.jpg`], email: `mailto:${EMAIL}`,
        sameAs: ['https://www.linkedin.com/in/haulik', 'https://x.com/Haulik'],
        address: { '@type': 'PostalAddress', addressLocality: 'Copenhagen', addressCountry: 'DK' },
        knowsLanguage: ['da', 'en'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Copenhagen', url: 'https://www.ku.dk/' },
        affiliation: { '@type': 'Organization', name: 'KU Lighthouse, University of Copenhagen', url: 'https://lighthouse.ku.dk/' },
        award: 'KU Impact Award 2021 (MidwifeVR)',
        founder: [{ '@id': 'https://www.nxtwebxr.com/#organization' }, { '@id': 'https://nxtcare.eu/#organization' }],
        description: en.kitShort,
        knowsAbout: ['Spatial Computing', 'Extended Reality (XR)', 'Virtual Reality', 'Augmented Reality', 'Mixed Reality',
          'Smart Glasses', 'WebXR', 'Spatial Internet', 'XR Strategy', 'Healthcare XR', 'VR Training',
          'Apple Vision Pro', 'Meta Quest', 'Meta smart glasses', 'Android XR', 'Hand tracking', 'Game development'],
        contactPoint: [
          { '@type': 'ContactPoint', contactType: 'speaking inquiries', email: EMAIL, url: `${url}#booking`, availableLanguage: ['English', 'Danish'] },
          { '@type': 'ContactPoint', contactType: 'consulting', email: EMAIL, url: `${url}#contact`, availableLanguage: ['English', 'Danish'] },
          { '@type': 'ContactPoint', contactType: 'press', email: EMAIL, availableLanguage: ['English', 'Danish'] }
        ],
        subjectOf: FEATURED.filter(([, href]) => href).map(([name, href]) => ({ '@type': 'CreativeWork', name: `Morten Haulik in ${name}`, url: href })),
        worksFor: [{ '@id': 'https://www.nxtwebxr.com/#organization' }, { '@id': 'https://nxtcare.eu/#organization' }]
      },
      { '@type': 'Organization', '@id': 'https://www.nxtwebxr.com/#organization', name: 'NXT/WebXR', url: 'https://www.nxtwebxr.com/',
        foundingDate: '2025', founder: { '@id': person },
        description: 'A catalogue of free WebXR games and experiences, opened straight from the headset browser.' },
      { '@type': 'Organization', '@id': 'https://nxtcare.eu/#organization', name: 'NXT/Care', url: 'https://nxtcare.eu/',
        founder: { '@id': person }, areaServed: 'DK',
        description: 'Mixed-reality distraction for children during blood tests, IV placement and dental visits in hospitals and clinics.' },
      { '@type': 'Service', '@id': `${SITE}/#keynotes`, name: 'Keynote speaking on XR, VR, mixed reality and smart glasses',
        serviceType: 'Keynote speaker', provider: { '@id': person }, areaServed: 'Europe',
        audience: { '@type': 'BusinessAudience', audienceType: 'Conference organisers, corporate events, universities, public sector' },
        availableLanguage: ['English', 'Danish'], description: en.speakText,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Keynote topics',
          itemListElement: en.talks.map(([n, d]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, description: d } })) },
        potentialAction: { '@type': 'ReserveAction', target: `${SITE}/#booking` } },
      { '@type': 'Service', '@id': `${SITE}/#consulting`, name: 'XR strategy and WebXR consulting',
        serviceType: 'XR consulting', provider: { '@id': person }, areaServed: 'Europe', description: en.consultText,
        hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Consulting services',
          itemListElement: en.consultList.map(([n, d]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, description: d } })) },
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
  const langLinks = cls => LANGS.map(x => `<a href="/${x === 'en' ? '' : x + '/'}" hreflang="${x}" lang="${x}" data-lang="${x}"${x === l ? ' aria-current="page"' : ''} title="${FLAGS[x][1]}">${x.toUpperCase()}</a>`).join('');
  const PHOTOS = ['press/morten-haulik-1.jpg', 'press/morten-haulik-2.jpg', 'press/morten-haulik-3.jpg'];

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
<meta name="theme-color" content="#0b0a08">
<meta name="color-scheme" content="dark">
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
<meta property="og:image:alt" content="Morten Haulik, keynote speaker and XR consultant">
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
<meta name="twitter:image:alt" content="Morten Haulik, keynote speaker and XR consultant">

<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230b0a08'/><text x='50' y='68' font-family='Arial' font-weight='700' font-size='52' text-anchor='middle' fill='%23e8c26a'>MH</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="preload" as="image" href="/img/hero.jpg" imagesrcset="/img/hero-1100.jpg 1100w, /img/hero.jpg 2000w" imagesizes="100vw">
<link rel="stylesheet" href="/style.css?v=${ver('style.css')}">
<script>document.documentElement.classList.add('js');setTimeout(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')),2500)</script>
<script type="application/ld+json">
${JSON.stringify(jsonLd(l), null, 1)}
</script>
</head>
<body>
<a class="skip" href="#main">${esc(p.skip)}</a>

<header class="topbar" id="top">
  <a class="wordmark" href="/${l === 'en' ? '' : l + '/'}">Morten Haulik</a>
  <nav class="topnav" aria-label="Main">
    <a href="#speaking">${esc(p.nav.speaking)}</a>
    <a href="#consulting">${esc(p.nav.consulting)}</a>
    <a href="#press">${esc(p.nav.press)}</a>
    <a href="#work">${esc(p.nav.work)}</a>
  </nav>
  <nav class="langs" aria-label="${esc(p.languages)}">${langLinks()}</nav>
  <button class="btn btn-gold btn-sm" type="button" data-open-booking>${esc(p.nav.book)}</button>
</header>

<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <picture class="hero-media">
      <img src="/img/hero.jpg" srcset="/img/hero-1100.jpg 1100w, /img/hero.jpg 2000w" sizes="100vw"
        alt="Morten Haulik wearing a VR headset, lit by projected light" width="2000" height="1333" fetchpriority="high">
    </picture>
    <div class="hero-inner">
      <p class="eyebrow">${esc(p.heroEyebrow)}</p>
      <h1 id="hero-title">Morten Haulik</h1>
      <p class="tagline">${esc(p.heroTag[0])}<em>${esc(p.heroTag[1])}</em></p>
      <p class="hero-sub">${esc(p.heroSub)}</p>
      <div class="hero-ctas">
        <button class="btn btn-gold" type="button" data-open-booking>${esc(p.ctaKeynote)}</button>
        <a class="btn btn-line" href="#contact">${esc(p.ctaConsult)}</a>
        <a class="text-link" href="#press">${esc(p.ctaPress)} ${ICON.arrow}</a>
      </div>
    </div>
    <dl class="stats">
${p.stats.map(([n, s]) => `      <div><dt>${esc(n)}</dt><dd>${esc(s)}</dd></div>`).join('\n')}
    </dl>
  </section>

  <section class="reel" aria-labelledby="reel-title">
    <div class="reel-frame">
      <video data-src="/Mortenhjemmeside.mp4" poster="/img/ida-poster.jpg" muted loop playsinline preload="none" aria-hidden="true"></video>
      <div class="reel-cap">
        <p class="kicker"><span class="live"></span>${esc(p.reelLabel)}</p>
        <h2 id="reel-title">${esc(p.reelTitle)}</h2>
        <a class="btn btn-gold" href="${esc(ITEMS.find(i => i.id === 'keynote-ida').externalLink)}" target="_blank" rel="noopener">${ICON.play} ${esc(p.reelCta)}</a>
      </div>
    </div>
  </section>

  <section class="featured" aria-label="${esc(p.featured)}">
    <p class="label">${esc(p.featured)}</p>
    <ul>${FEATURED.map(([n, h]) => h ? `<li><a href="${esc(h)}" target="_blank" rel="noopener">${esc(n)}</a></li>` : `<li><span>${esc(n)}</span></li>`).join('')}</ul>
  </section>

  <section class="statement" aria-label="Morten Haulik">
    <blockquote class="reveal"><p>${esc(p.quote)}</p><cite>Morten Haulik</cite></blockquote>
  </section>

  <section class="speaking block" id="speaking" aria-labelledby="speaking-title">
    <figure class="speaking-photo reveal">
      <img src="/img/speaking.jpg" alt="Morten Haulik in a VR headset under a beam of warm light" width="1300" height="1950" loading="lazy" decoding="async">
    </figure>
    <div class="speaking-body">
      <p class="label reveal">${esc(p.speakLabel)}</p>
      <h2 id="speaking-title" class="h2 reveal">${esc(p.speakTitle)}</h2>
      <p class="lede reveal">${esc(p.speakText)}</p>
      <ol class="talks">
${p.talks.map(([n, d], i) => `        <li class="reveal"><span class="talk-no">${i + 1}</span><div><h3>${esc(n)}</h3><p>${esc(d)}</p></div></li>`).join('\n')}
      </ol>
      <p class="formats reveal"><span>${esc(p.formatsLabel)}</span> ${p.formats.map(esc).join(' <i>/</i> ')}</p>
      <button class="btn btn-gold reveal" type="button" data-open-booking>${esc(p.ctaKeynote)}</button>
    </div>
  </section>

  <section class="track block" id="track" aria-labelledby="track-title">
    <p class="label reveal">${esc(p.trackLabel)}</p>
    <h2 id="track-title" class="h2 reveal">${esc(p.trackTitle)}</h2>
    <ol class="track-list">
${p.track.map(([n, d]) => `      <li class="reveal"><h3>${esc(n)}</h3><p>${esc(d)}</p></li>`).join('\n')}
    </ol>
  </section>

  <section class="consulting block" id="consulting" aria-labelledby="consulting-title">
    <div class="split">
      <div>
        <p class="label reveal">${esc(p.consultLabel)}</p>
        <h2 id="consulting-title" class="h2 reveal">${esc(p.consultTitle)}</h2>
      </div>
      <div>
        <p class="lede reveal">${esc(p.consultText)}</p>
        <a class="btn btn-line reveal" href="#contact">${esc(p.ctaConsult)}</a>
      </div>
    </div>
    <ol class="offers">
${p.consultList.map(([n, d]) => `      <li class="reveal"><h3>${esc(n)}</h3><p>${esc(d)}</p></li>`).join('\n')}
    </ol>
    <div class="partners reveal">
      <p class="label">${esc(p.partnersLabel)}</p>
      <p class="partner-line">${p.partners.map(esc).join(' <i>/</i> ')}</p>
    </div>
  </section>

  <section class="press block" id="press" aria-labelledby="press-title">
    <figure class="press-photo reveal">
      <img src="/img/portrait.jpg" alt="Portrait of Morten Haulik with a VR headset pushed up on his forehead" width="854" height="1222" loading="lazy" decoding="async">
    </figure>
    <div class="press-body">
      <p class="label reveal">${esc(p.pressLabel)}</p>
      <h2 id="press-title" class="h2 reveal">${esc(p.pressTitle)}</h2>
      <p class="lede reveal">${esc(p.pressText)}</p>
      <ul class="topic-list reveal">${p.pressList.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="press-actions reveal">
        <a class="btn btn-gold" href="${esc(mailPress)}">${esc(p.pressCta)}</a>
        <a class="mail" href="${esc(mailPress)}">${EMAIL}</a>
      </div>
      <p class="label reveal">${esc(p.pressPhotos)}</p>
      <ul class="photo-dl reveal">
${PHOTOS.map((f, i) => `        <li><a href="/${f}" download><img src="/${f}" alt="Morten Haulik press photo ${i + 1}" loading="lazy" decoding="async"><span>${ICON.dl} ${esc(p.download)}</span></a></li>`).join('\n')}
      </ul>
    </div>
  </section>

  <section class="work block" id="work" aria-labelledby="work-title">
    <div class="section-head">
      <div>
        <p class="label reveal">${esc(p.workLabel)}</p>
        <h2 id="work-title" class="h2 reveal">${esc(p.workTitle)}</h2>
      </div>
      <p class="muted">${esc(p.workSub)}</p>
    </div>
    <div class="grid" id="grid">
${tiles(l)}
    </div>
  </section>

  <section class="kit block" id="speaker-kit" aria-labelledby="kit-title">
    <div class="section-head">
      <div>
        <p class="label reveal">${esc(p.kitLabel)}</p>
        <h2 id="kit-title" class="h2 reveal">${esc(p.kitTitle)}</h2>
      </div>
      <p class="muted">${esc(p.kitSub)}</p>
    </div>
    <div class="kit-grid">
      <div class="panel reveal">
        <div class="panel-head"><h3>${esc(p.kitShortLabel)}</h3><button class="copy" type="button" data-copy="kit-short" data-done="${esc(p.copied)}">${esc(p.copy)}</button></div>
        <p id="kit-short">${esc(p.kitShort)}</p>
        <ul class="photo-dl small">
${PHOTOS.map((f, i) => `          <li><a href="/${f}" download><img src="/${f}" alt="Morten Haulik press photo ${i + 1}" loading="lazy" decoding="async"><span>${ICON.dl}</span></a></li>`).join('\n')}
        </ul>
      </div>
      <div class="panel reveal">
        <div class="panel-head"><h3>${esc(p.kitLongLabel)}</h3><button class="copy" type="button" data-copy="kit-long" data-done="${esc(p.copied)}">${esc(p.copy)}</button></div>
        <div id="kit-long">${p.kitLong.map(x => `<p>${esc(x)}</p>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="faq block" id="faq" aria-labelledby="faq-title">
    <h2 id="faq-title" class="h2 reveal">${esc(p.faqTitle)}</h2>
    <div class="faq-list">
${p.faq.map(([q, a]) => `      <details class="reveal"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
    </div>
  </section>

  <section class="contact block" id="contact" aria-labelledby="contact-title">
    <div class="contact-intro">
      <p class="label reveal">${esc(p.contactLabel)}</p>
      <h2 id="contact-title" class="display reveal">${esc(p.contactTitle)}</h2>
      <p class="lede reveal">${esc(p.contactSub)}</p>
      <ul class="direct reveal">
        <li><a href="mailto:${EMAIL}">${ICON.mail} ${EMAIL}</a></li>
        <li><a href="https://www.linkedin.com/in/haulik" target="_blank" rel="noopener">${ICON.linkedin} linkedin.com/in/haulik</a></li>
        <li><a href="https://x.com/Haulik" target="_blank" rel="noopener">${ICON.x} @Haulik</a></li>
      </ul>
    </div>
    <form id="contact-form" class="contact-form reveal">
      <label for="c-name">${esc(t.name)}</label>
      <input required type="text" id="c-name" name="name" autocomplete="name">
      <label for="c-email">${esc(t.email)}</label>
      <input required type="email" id="c-email" name="email" autocomplete="email">
      <label for="c-msg">${esc(t.message.replace(/\.\.\.$|…$/, ''))}</label>
      <textarea required rows="5" id="c-msg" name="message"></textarea>
      <button type="submit" class="btn btn-gold"><span data-t="openEmail">${esc(t.openEmail)}</span></button>
      <p class="hint" id="contact-status" role="status">${esc(t.draftMsg)}</p>
    </form>
  </section>
</main>

<footer class="site-footer">
  <div class="footer-row">
    <a class="wordmark" href="#top">Morten Haulik</a>
    <nav class="langs" aria-label="${esc(p.languages)}">${langLinks()}</nav>
  </div>
  <p class="muted">© ${new Date().getFullYear()} Morten Haulik · ${esc(t.footer)}</p>
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
      <button type="submit" class="btn btn-gold"><span data-t="reqEmail">${esc(t.reqEmail)}</span></button>
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
