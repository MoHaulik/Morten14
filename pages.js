/* Dedicated landing pages (one per search intent), English + Danish.
   Each becomes its own URL with its own title, text, FAQ and structured data.
   After editing anything in this file, run:  node build.js  */
const SERVICE_PAGES = [
  {
    key: 'keynote', image: 'img/speaking.jpg', cta: 'booking', reel: true,
    en: {
      slug: 'xr-keynote-speaker', nav: 'Keynotes',
      title: 'XR Keynote Speaker | Morten Haulik, VR & Spatial Computing Speaker',
      desc: 'Book Morten Haulik, XR and VR keynote speaker from Copenhagen. Grounded, demo-rich talks on spatial computing, smart glasses, XR in healthcare and immersive marketing. English or Danish.',
      kicker: 'XR keynote speaker',
      h1: 'The XR keynote speaker who builds what he talks about.',
      lead: 'Morten Haulik gives keynotes on virtual reality, mixed reality, smart glasses and spatial computing for conferences, corporate events, universities and the public sector across Europe. Every talk draws on more than a decade of building XR that is used in hospitals, classrooms, campaigns and living rooms.',
      sections: [
        { h2: 'Why organisers book Morten',
          p: ['Most XR talks are either sales pitches or science fiction. Morten’s are neither. As the founder of NXT/WebXR, NXT/Care and MidwifeVR, he speaks from the engine room: what it actually takes to get immersive technology into people’s hands, and what happens when it gets there.',
              'He has presented to members of the European Parliament and Commission and to UN delegations, spoken to audiences of more than 2,000 people and facilitated over 100 industry workshops.'],
          list: ['A practitioner, not a futurist: every point is backed by products he has shipped', 'Clear for non-technical audiences, credible for experts', 'Real cases from healthcare, education, culture and brands', 'In English or Danish, on stage or online'] },
        { h2: 'Keynote topics', talks: [
          ['The Spatial Internet', 'Why the next big platform will be visited, not installed, and what that means for every brand, museum and publisher with a website.'],
          ['XR That Heals', 'From maternity wards to children’s blood tests: what happens when immersive tech leaves the demo room and enters real hospitals.'],
          ['Glasses On: Hype vs. Reality', 'Meta, Apple and Google are betting billions on your face. A builder’s honest guide to what is actually ready, and what isn’t.'],
          ['Campaigns People Step Into', 'How brands use VR, AR and WebXR to create campaigns people remember, and why the best ones open from a single link.']
        ] },
        { h2: 'Formats',
          p: ['Keynotes from 20 to 60 minutes, panel debates and moderated conversations, and hands-on workshops where participants try headsets themselves. Talks are tailored to your audience, whether that is healthcare, education, marketing, culture, tech or the public sector.'] },
        { h2: 'Stages and media',
          p: ['IDA Driving Health Tech, the Future Sound Forum by Danish Sound Cluster alongside Bang & Olufsen, the European Parliament and Eli Lilly’s NewGen event at Medical Museion. Media appearances include Berlingske, Radio4, DR2, Voice of America and The Copenhagen Post.'] }
      ],
      faq: [
        ['What does Morten Haulik speak about?', 'Virtual reality, augmented and mixed reality, smart glasses, WebXR and the spatial internet, XR in healthcare and education, and immersive marketing. Every talk is grounded in products he has built.'],
        ['Does Morten give keynotes in Danish?', 'Yes. Morten speaks in both Danish and English.'],
        ['Can a keynote include a hands-on VR session?', 'Yes. A keynote can be paired with a workshop where participants try headsets and experiences themselves. Morten has facilitated more than 100 such workshops.'],
        ['How do I book Morten as a keynote speaker?', 'Use the booking form on this page with your dates and audience size, or email Morten@nxtwebxr.com. He is based in Copenhagen and speaks across Denmark, Scandinavia and Europe.']
      ],
      ctaTitle: 'Bring XR to your stage.', ctaText: 'Share your dates and audience, and Morten will get back to you within one business day.', ctaBtn: 'Request a keynote'
    },
    da: {
      slug: 'foredragsholder-vr', nav: 'Foredrag',
      title: 'Foredragsholder om VR og XR | Morten Haulik',
      desc: 'Book Morten Haulik som foredragsholder om virtual reality, mixed reality, smartbriller og fremtidens teknologi. Jordnære foredrag med cases fra virkeligheden, på dansk eller engelsk.',
      kicker: 'Foredragsholder',
      h1: 'Foredragsholder om VR og XR, der selv bygger teknologien.',
      lead: 'Morten Haulik holder foredrag og keynotes om virtual reality, mixed reality, smartbriller og spatial computing for konferencer, virksomheder, uddannelser og det offentlige. Alle foredrag bygger på mere end ti års arbejde med XR, der bruges på hospitaler, i undervisningen, i kampagner og i danske hjem.',
      sections: [
        { h2: 'Derfor booker arrangører Morten',
          p: ['De fleste foredrag om XR er enten salgstaler eller science fiction. Mortens er ingen af delene. Som stifter af NXT/WebXR, NXT/Care og MidwifeVR taler han fra maskinrummet: hvad det reelt kræver at få immersiv teknologi ud til folk, og hvad der sker, når det lykkes.',
              'Han har præsenteret for medlemmer af Europa-Parlamentet og Kommissionen og for FN-delegationer, talt for publikummer på over 2.000 og afholdt mere end 100 workshops.'],
          list: ['Praktiker, ikke futurist: alle pointer bygger på produkter, han selv har lanceret', 'Let at forstå for alle, troværdigt for eksperter', 'Konkrete cases fra sundhed, uddannelse, kultur og brands', 'På dansk eller engelsk, på scenen eller online'] },
        { h2: 'Foredragsemner', talks: [
          ['Det rumlige internet', 'Hvorfor den næste store platform bliver besøgt og ikke installeret, og hvad det betyder for alle brands, museer og medier med en hjemmeside.'],
          ['XR, der heler', 'Fra fødegangen til børns blodprøver: Hvad sker der, når immersiv teknologi forlader demorummet og rykker ind på rigtige hospitaler?'],
          ['Brillerne på: hype eller virkelighed?', 'Meta, Apple og Google satser milliarder på dit ansigt. En udviklers ærlige guide til, hvad der faktisk er klar, og hvad der ikke er.'],
          ['Kampagner, man træder ind i', 'Hvordan brands bruger VR, AR og WebXR til kampagner, folk husker, og hvorfor de bedste åbner fra ét enkelt link.']
        ] },
        { h2: 'Formater',
          p: ['Keynotes på 20 til 60 minutter, paneldebatter og samtaler samt workshops, hvor deltagerne selv prøver headsets. Foredraget tilpasses jeres publikum, uanset om det er sundhed, uddannelse, marketing, kultur, tech eller det offentlige.'] },
        { h2: 'Scener og medier',
          p: ['IDA Driving Health Tech, Future Sound Forum hos Danish Sound Cluster sammen med Bang & Olufsen, Europa-Parlamentet og Eli Lillys NewGen-event på Medicinsk Museion. Morten har medvirket i blandt andet Berlingske, Radio4, DR2, Voice of America og The Copenhagen Post.'] }
      ],
      faq: [
        ['Hvad holder Morten Haulik foredrag om?', 'Virtual reality, augmented og mixed reality, smartbriller, WebXR og det rumlige internet, XR i sundhed og uddannelse samt immersiv markedsføring. Alle foredrag bygger på produkter, han selv har udviklet.'],
        ['Holder Morten foredrag på dansk?', 'Ja. Morten holder foredrag på både dansk og engelsk.'],
        ['Kan et foredrag kombineres med, at deltagerne prøver VR?', 'Ja. Foredraget kan kombineres med en workshop, hvor deltagerne selv prøver headsets og oplevelser. Morten har afholdt over 100 af den slags workshops.'],
        ['Hvordan booker jeg Morten som foredragsholder?', 'Brug bookingformularen her på siden med dato og antal deltagere, eller skriv til Morten@nxtwebxr.com. Han bor i København og holder foredrag i hele Danmark, Skandinavien og Europa.']
      ],
      ctaTitle: 'Få XR på scenen.', ctaText: 'Send dato og antal deltagere, så vender Morten tilbage inden for én hverdag.', ctaBtn: 'Book et foredrag'
    }
  },
  {
    key: 'consultant', image: 'img/hero-1100.jpg', cta: 'contact',
    en: {
      slug: 'xr-consultant', nav: 'Consulting',
      title: 'XR Consultant | VR, AR & WebXR Consulting – Morten Haulik',
      desc: 'Independent XR consultant in Copenhagen. XR strategy, VR and mixed-reality development, WebXR and hardware advice from the founder of NXT/WebXR and NXT/Care. From first workshop to shipped product.',
      kicker: 'XR consultant',
      h1: 'XR consulting from first workshop to shipped product.',
      lead: 'Morten Haulik helps companies, hospitals, museums, universities and brands find where virtual, augmented and mixed reality create real value, and then builds it. Advice from someone who ships, not from a slide deck.',
      sections: [
        { h2: 'What I help with', list: [
          'XR strategy: leadership workshops on where XR makes sense for you, and where it doesn’t',
          'Prototypes and production in WebXR, VR and mixed reality',
          'Healthcare, training and education simulations built with clinicians and teachers',
          'XR campaigns and brand activations for marketing teams and agencies',
          'Hardware choices: Meta Quest, Apple Vision Pro, Pico, Android XR headsets and smart glasses',
          'Distribution without app stores, via the open web'
        ] },
        { h2: 'How a project runs',
          steps: [
            ['Workshop', 'We map your goals, users and constraints, and find the few XR ideas that are actually worth building.'],
            ['Prototype', 'A working prototype you can put on a headset or open from a link, tested with real users early.'],
            ['Production', 'Design, development and testing through to launch, in WebXR or as a native headset app where that is the better choice.'],
            ['Rollout', 'Hardware, distribution, onboarding and measurement, so the experience gets used and not just launched.']
          ] },
        { h2: 'Industries',
          p: ['Healthcare: MidwifeVR, now part of the official midwifery curriculum at University College Copenhagen, and NXT/Care, which calms children during treatment in the Capital Region of Denmark, with clinical XR work alongside Herlev Hospital.',
              'Culture, food and brands: an immersive journey into the kitchens of top Danish Michelin restaurants, immersive demos in the European Parliament, and countless VR, AR and WebXR experiences for international brands and cultural institutions.',
              'The open web: NXT/WebXR, one of the largest catalogues of WebXR games and experiences, visited daily by headset users around the world.'] },
        { h2: 'Why WebXR is often the smartest choice',
          p: ['Most immersive projects lose their audience at the app store. WebXR runs straight in the headset browser, so an experience is one link away: no download, no account, no review queue. That makes it faster to ship, cheaper to update and far easier to share. Morten has built one of the largest WebXR platforms, so he knows when the web is the right call and when a native app is.'] }
      ],
      faq: [
        ['What does an XR consultant do?', 'An XR consultant helps an organisation decide where virtual, augmented and mixed reality can create value, chooses the right technology and hardware, and guides or delivers the build. Morten covers the whole chain, from strategy workshop to shipped product.'],
        ['What is the difference between VR, AR, MR and XR?', 'Virtual reality (VR) replaces your surroundings with a digital world. Augmented reality (AR) places digital content on top of the real world. Mixed reality (MR) lets digital objects interact with your real room. Extended reality (XR) is the umbrella term for all three.'],
        ['Which headset should we choose?', 'It depends on your users, budget, content and IT requirements. Meta Quest is the most widespread standalone headset, Apple Vision Pro leads on display quality, and smart glasses suit lightweight, everyday use. A short workshop is the quickest way to get a clear answer.'],
        ['Do you work outside Denmark?', 'Yes. Morten is based in Copenhagen and works with clients across Europe, in English or Danish.']
      ],
      ctaTitle: 'Have an XR idea, or a hunch?', ctaText: 'Tell Morten what you are trying to achieve. He typically replies within one business day.', ctaBtn: 'Start a conversation'
    },
    da: {
      slug: 'xr-konsulent', nav: 'Rådgivning',
      title: 'XR-konsulent | VR-, AR- og WebXR-rådgivning – Morten Haulik',
      desc: 'Uafhængig XR-konsulent i København. XR-strategi, udvikling i VR og mixed reality, WebXR og rådgivning om hardware fra stifteren af NXT/WebXR og NXT/Care. Fra første workshop til færdigt produkt.',
      kicker: 'XR-konsulent',
      h1: 'XR-rådgivning fra første workshop til færdigt produkt.',
      lead: 'Morten Haulik hjælper virksomheder, hospitaler, museer, uddannelser og brands med at finde ud af, hvor virtual, augmented og mixed reality skaber reel værdi, og bygger det derefter. Rådgivning fra én, der selv leverer, ikke fra et slide-deck.',
      sections: [
        { h2: 'Det kan jeg hjælpe med', list: [
          'XR-strategi: workshops for ledelsen om, hvor XR giver mening for jer, og hvor det ikke gør',
          'Prototyper og produktion i WebXR, VR og mixed reality',
          'Simulationer til sundhed, træning og uddannelse, udviklet sammen med klinikere og undervisere',
          'XR-kampagner og brand-aktiveringer for marketingafdelinger og bureauer',
          'Valg af hardware: Meta Quest, Apple Vision Pro, Pico, Android XR-headsets og smartbriller',
          'Distribution uden app stores via det åbne web'
        ] },
        { h2: 'Sådan forløber et projekt',
          steps: [
            ['Workshop', 'Vi kortlægger jeres mål, brugere og rammer og finder de få XR-idéer, der faktisk er værd at bygge.'],
            ['Prototype', 'En fungerende prototype, I kan prøve i et headset eller åbne fra et link, testet med rigtige brugere tidligt.'],
            ['Produktion', 'Design, udvikling og test frem til lancering, i WebXR eller som app til headsettet, når det er det bedste valg.'],
            ['Udrulning', 'Hardware, distribution, introduktion og måling, så oplevelsen bliver brugt og ikke bare lanceret.']
          ] },
        { h2: 'Brancher',
          p: ['Sundhed: MidwifeVR, der i dag er en del af jordemoderuddannelsen på Københavns Professionshøjskole, og NXT/Care, der skaber ro for børn under behandling i Region Hovedstaden, samt klinisk XR i samarbejde med Herlev Hospital.',
              'Kultur, mad og brands: en immersiv rejse ind i køkkenerne på danske Michelin-restauranter, immersive demoer i Europa-Parlamentet og utallige VR-, AR- og WebXR-oplevelser for internationale brands og kulturinstitutioner.',
              'Det åbne web: NXT/WebXR, et af verdens største kataloger af WebXR-spil og -oplevelser, som besøges dagligt af headset-brugere verden over.'] },
        { h2: 'Derfor er WebXR ofte det klogeste valg',
          p: ['De fleste immersive projekter mister deres publikum i app storen. WebXR kører direkte i headsettets browser, så en oplevelse er ét link væk: ingen download, ingen konto, ingen godkendelseskø. Det gør det hurtigere at lancere, billigere at opdatere og langt nemmere at dele. Morten har bygget en af de største WebXR-platforme og ved derfor, hvornår nettet er det rigtige valg, og hvornår en app er.'] }
      ],
      faq: [
        ['Hvad laver en XR-konsulent?', 'En XR-konsulent hjælper en organisation med at finde ud af, hvor virtual, augmented og mixed reality kan skabe værdi, vælger den rigtige teknologi og hardware og leder eller leverer udviklingen. Morten dækker hele vejen fra strategiworkshop til færdigt produkt.'],
        ['Hvad er forskellen på VR, AR, MR og XR?', 'Virtual reality (VR) erstatter dine omgivelser med en digital verden. Augmented reality (AR) lægger digitalt indhold oven på den virkelige verden. Mixed reality (MR) lader digitale objekter spille sammen med dit rigtige rum. Extended reality (XR) er paraplybetegnelsen for det hele.'],
        ['Hvilket headset skal vi vælge?', 'Det afhænger af jeres brugere, budget, indhold og it-krav. Meta Quest er det mest udbredte selvstændige headset, Apple Vision Pro har den bedste skærmkvalitet, og smartbriller passer til let brug i hverdagen. En kort workshop er den hurtigste vej til et klart svar.'],
        ['Arbejder du også uden for Danmark?', 'Ja. Morten bor i København og arbejder med kunder i hele Europa, på dansk eller engelsk.']
      ],
      ctaTitle: 'Har I en XR-idé eller bare en mavefornemmelse?', ctaText: 'Fortæl Morten, hvad I gerne vil opnå. Han svarer normalt inden for én hverdag.', ctaBtn: 'Start en dialog'
    }
  },
  {
    key: 'marketing', image: 'thumb6.webp', cta: 'contact',
    en: {
      slug: 'xr-marketing-campaigns', nav: 'XR campaigns',
      title: 'XR Marketing & VR Advertising Campaigns | Morten Haulik',
      desc: 'Advice and production for XR campaigns: WebXR experiences that open from a link or QR code, VR brand activations, mixed-reality installations and AR for events. From an XR pioneer with a decade of brand work.',
      kicker: 'XR for advertising & campaigns',
      h1: 'XR campaigns people step into, and remember.',
      lead: 'Immersive campaigns work when they are easy to open and worth talking about. Morten Haulik advises brands and agencies on VR, AR, mixed reality and WebXR campaigns, and builds them: from experiences that open from a QR code to headset activations at events and in stores.',
      sections: [
        { h2: 'What XR can do for a campaign', list: [
          'WebXR experiences that open from a link or QR code, with no app download',
          'VR and mixed-reality brand activations at events, fairs, festivals and in stores',
          'Immersive product and place storytelling, like stepping into a Michelin kitchen',
          'Branded games and experiences that headset users discover on NXT/WebXR',
          'Smart-glasses and AR concepts for the next wave of devices',
          'Concept development and XR expertise for creative and media agencies'
        ] },
        { h2: 'Why WebXR changes the economics of XR marketing',
          p: ['Traditional VR campaigns often die in the app store: every extra step loses a large share of the audience. WebXR runs in the headset’s browser, so a campaign is one link away. It is faster to launch, easy to update during a campaign, and simple to measure like any other web page.',
              'Morten founded NXT/WebXR, one of the largest catalogues of WebXR games and experiences, visited daily by headset users around the world. He knows first-hand what makes people click, play and come back.'] },
        { h2: 'Brand and campaign work',
          p: ['Lead developer on a fully immersive journey into the kitchens of top Danish Michelin restaurants. Immersive demonstrations for the European Greens in the European Parliament and a tech presentation for Eli Lilly’s NewGen event at Medical Museion. More than a decade of VR, AR and WebXR experiences for international brands, museums and cultural institutions.'] },
        { h2: 'How we work together',
          steps: [
            ['Concept', 'A workshop with your brand or agency team to find the idea that only XR can deliver, and the right format for it.'],
            ['Prototype', 'A clickable or wearable prototype to test the idea and win internal buy-in.'],
            ['Production', 'Design and development of the experience, built to run on the devices your audience actually has.'],
            ['Launch & measure', 'Distribution, on-site activation support and measurement of reach, engagement and time spent.']
          ] }
      ],
      faq: [
        ['Does XR advertising actually work?', 'It works when the experience is easy to open, short enough to finish and genuinely worth sharing. Immersive formats typically hold attention far longer than a banner or a video, but only if people can get into them without friction, which is why Morten often recommends WebXR.'],
        ['What is WebXR, and why use it for campaigns?', 'WebXR is the open web standard for VR and AR in the browser. A WebXR campaign opens from a link or QR code without installing an app, works across headsets such as Meta Quest and Pico, and can be updated instantly.'],
        ['Can people without a headset take part?', 'Yes. Campaigns can be designed so people on phones and laptops get a version of the experience, while headset users get the full immersive version.'],
        ['Do you work with agencies?', 'Yes. Morten works directly with brands and as an XR specialist alongside creative, media and event agencies.']
      ],
      ctaTitle: 'Planning a campaign that needs to stand out?', ctaText: 'Share the brief or just the ambition. Morten will tell you honestly whether XR is the right fit.', ctaBtn: 'Talk about a campaign'
    },
    da: {
      slug: 'xr-markedsfoering', nav: 'XR-kampagner',
      title: 'XR-markedsføring og VR-kampagner | Morten Haulik',
      desc: 'Rådgivning og produktion af XR-kampagner: WebXR-oplevelser, der åbner fra et link eller en QR-kode, VR-brandaktiveringer, mixed reality-installationer og AR til events. Fra en XR-pioner med ti års brand-erfaring.',
      kicker: 'XR til markedsføring og kampagner',
      h1: 'XR-kampagner, folk træder ind i og husker.',
      lead: 'Immersive kampagner virker, når de er nemme at åbne og værd at tale om. Morten Haulik rådgiver brands og bureauer om kampagner i VR, AR, mixed reality og WebXR og bygger dem: fra oplevelser, der åbner fra en QR-kode, til headset-aktiveringer ved events og i butikker.',
      sections: [
        { h2: 'Det kan XR gøre for en kampagne', list: [
          'WebXR-oplevelser, der åbner fra et link eller en QR-kode, uden at man skal hente en app',
          'VR- og mixed reality-aktiveringer ved events, messer, festivaler og i butikker',
          'Immersiv fortælling om produkter og steder, som at træde ind i et Michelin-køkken',
          'Brandede spil og oplevelser, som headset-brugere opdager på NXT/WebXR',
          'Koncepter til smartbriller og AR til den næste bølge af devices',
          'Konceptudvikling og XR-ekspertise til kreative bureauer og mediebureauer'
        ] },
        { h2: 'Derfor ændrer WebXR økonomien i XR-markedsføring',
          p: ['Traditionelle VR-kampagner dør ofte i app storen: Hvert ekstra trin koster en stor del af publikum. WebXR kører i headsettets browser, så kampagnen er ét link væk. Den er hurtigere at lancere, nem at opdatere undervejs og lige så nem at måle som enhver anden webside.',
              'Morten har stiftet NXT/WebXR, et af verdens største kataloger af WebXR-spil og -oplevelser, som besøges dagligt af headset-brugere verden over. Han ved af erfaring, hvad der får folk til at klikke, spille og komme tilbage.'] },
        { h2: 'Brand- og kampagnearbejde',
          p: ['Leadudvikler på en fuldt immersiv rejse ind i køkkenerne på danske Michelin-restauranter. Immersive demonstrationer for De Grønne i Europa-Parlamentet og en tech-præsentation til Eli Lillys NewGen-event på Medicinsk Museion. Mere end ti års VR-, AR- og WebXR-oplevelser for internationale brands, museer og kulturinstitutioner.'] },
        { h2: 'Sådan arbejder vi sammen',
          steps: [
            ['Koncept', 'En workshop med jeres brand- eller bureauteam, hvor vi finder idéen, som kun XR kan levere, og det rigtige format til den.'],
            ['Prototype', 'En prototype, man kan klikke på eller tage på, så idéen kan testes og sælges internt.'],
            ['Produktion', 'Design og udvikling af oplevelsen, bygget til de enheder, jeres målgruppe faktisk har.'],
            ['Lancering og måling', 'Distribution, støtte til aktivering på stedet og måling af rækkevidde, engagement og tid brugt.']
          ] }
      ],
      faq: [
        ['Virker XR-markedsføring?', 'Det virker, når oplevelsen er nem at åbne, kort nok til at blive gennemført og reelt værd at dele. Immersive formater holder typisk opmærksomheden langt længere end en banner eller en video, men kun hvis folk kan komme ind uden besvær. Derfor anbefaler Morten ofte WebXR.'],
        ['Hvad er WebXR, og hvorfor bruge det til kampagner?', 'WebXR er den åbne webstandard for VR og AR i browseren. En WebXR-kampagne åbner fra et link eller en QR-kode uden at installere en app, virker på tværs af headsets som Meta Quest og Pico og kan opdateres med det samme.'],
        ['Kan folk uden headset være med?', 'Ja. Kampagner kan bygges, så folk på mobil og computer får en version af oplevelsen, mens headset-brugere får den fulde immersive version.'],
        ['Arbejder du med bureauer?', 'Ja. Morten arbejder både direkte med brands og som XR-specialist sammen med kreative bureauer, mediebureauer og eventbureauer.']
      ],
      ctaTitle: 'Planlægger I en kampagne, der skal skille sig ud?', ctaText: 'Send briefet eller bare ambitionen. Morten siger ærligt, om XR er det rigtige valg.', ctaBtn: 'Tal om en kampagne'
    }
  },
  {
    key: 'press', image: 'img/portrait.jpg', cta: 'press',
    en: {
      slug: 'xr-expert-press', nav: 'Press',
      title: 'VR & Smart Glasses Expert for Press Comment | Morten Haulik',
      desc: 'Journalists: Morten Haulik comments on VR, AR, mixed reality and smart glasses, from Meta Quest and Meta’s glasses to Apple Vision Pro and Android XR. In English or Danish, for print, radio and TV.',
      kicker: 'XR expert for press',
      h1: 'Need an XR expert on deadline?',
      lead: 'Morten Haulik is a Copenhagen-based XR expert available for comment on virtual reality, augmented reality, mixed reality and smart glasses. As a founder who builds XR products himself, he can explain what a new device or announcement actually means, in plain language, in English or Danish.',
      sections: [
        { h2: 'Topics I comment on', list: [
          'Meta Quest headsets and Meta’s smart glasses',
          'Apple Vision Pro and visionOS',
          'Google, Samsung and Android XR',
          'Smart glasses, privacy and cameras on our faces',
          'The metaverse: what is hype and what is real',
          'XR in healthcare, including children in hospitals',
          'XR in education and training',
          'XR in advertising and marketing',
          'WebXR and the open web versus app stores',
          'The Danish and European XR industry'
        ] },
        { h2: 'Previous coverage',
          p: ['Morten has appeared on Berlingske’s podcast Pilestræde analysing Apple Vision Pro, on Radio4’s Kulturmagasinet with Christiane Vejlø, behind the scenes at DR2’s So ein Ding with Nikolaj Sonne, and in coverage from Voice of America, The Copenhagen Post, CBS Wire and 24Victoria. His work with MidwifeVR was covered in depth by Berlingske.'] },
        { h2: 'How to reach me fast',
          p: ['Email Morten@nxtwebxr.com with your outlet, angle and deadline. Morten is available for quotes, background briefings, phone and video interviews, and studio appearances in Copenhagen, in Danish or English. High-resolution press photos can be downloaded below.'] }
      ],
      photos: true,
      faq: [
        ['Can I quote Morten on new VR headsets or smart glasses?', 'Yes. Morten regularly comments on new devices from Meta, Apple, Google and Samsung, and can explain what they mean for consumers, businesses and developers.'],
        ['Is Morten available for live radio or TV?', 'Yes, in Danish or English, in studio in Copenhagen or remotely.'],
        ['Where can I find press photos?', 'High-resolution press photos are available to download on this page and may be used in coverage of Morten Haulik with credit.'],
        ['How quickly does Morten respond?', 'Morten aims to respond to press requests quickly and understands news deadlines. Include your deadline in the subject line.']
      ],
      ctaTitle: 'On deadline?', ctaText: 'Send your outlet, angle and deadline. Danish or English.', ctaBtn: 'Email Morten'
    },
    da: {
      slug: 'vr-ekspert-presse', nav: 'Presse',
      title: 'VR-ekspert og ekspert i smartbriller til presse | Morten Haulik',
      desc: 'Journalister: Morten Haulik stiller op som ekspertkilde om VR, AR, mixed reality og smartbriller, fra Meta Quest og Metas briller til Apple Vision Pro og Android XR. På dansk eller engelsk, til skrevne medier, radio og tv.',
      kicker: 'VR-ekspert til presse',
      h1: 'Brug for en XR-ekspert før deadline?',
      lead: 'Morten Haulik er VR- og XR-ekspert fra København og stiller gerne op som kilde om virtual reality, augmented reality, mixed reality og smartbriller. Som stifter, der selv bygger XR-produkter, kan han forklare, hvad et nyt produkt eller en ny melding reelt betyder, i et sprog alle forstår.',
      sections: [
        { h2: 'Emner, jeg kommenterer på', list: [
          'Meta Quest-headsets og Metas smartbriller',
          'Apple Vision Pro og visionOS',
          'Google, Samsung og Android XR',
          'Smartbriller, privatliv og kameraer i ansigtshøjde',
          'Metaverset: hvad er hype, og hvad er virkelighed',
          'XR i sundhedsvæsenet, også for børn på hospitaler',
          'XR i uddannelse og træning',
          'XR i reklame og markedsføring',
          'WebXR og det åbne web over for app stores',
          'Den danske og europæiske XR-branche'
        ] },
        { h2: 'Tidligere medvirken',
          p: ['Morten har medvirket i Berlingskes podcast Pilestræde med en analyse af Apple Vision Pro, i Radio4’s Kulturmagasinet sammen med Christiane Vejlø, bag kulisserne i DR2’s So ein Ding med Nikolaj Sonne og i omtale fra Voice of America, The Copenhagen Post, CBS Wire og 24Victoria. Hans arbejde med MidwifeVR er desuden beskrevet indgående i Berlingske.'] },
        { h2: 'Sådan fanger du mig hurtigt',
          p: ['Skriv til Morten@nxtwebxr.com med medie, vinkel og deadline. Morten stiller op til citater, baggrundssnakke, telefon- og videointerviews og studieoptrædener i København, på dansk eller engelsk. Pressefotos i høj opløsning kan hentes nedenfor.'] }
      ],
      photos: true,
      faq: [
        ['Kan jeg citere Morten om nye VR-headsets eller smartbriller?', 'Ja. Morten kommenterer jævnligt på nye produkter fra Meta, Apple, Google og Samsung og kan forklare, hvad de betyder for forbrugere, virksomheder og udviklere.'],
        ['Kan Morten medvirke live i radio eller tv?', 'Ja, på dansk eller engelsk, i studiet i København eller over forbindelse.'],
        ['Hvor finder jeg pressefotos?', 'Pressefotos i høj opløsning kan hentes her på siden og må bruges i omtale af Morten Haulik med kreditering.'],
        ['Hvor hurtigt svarer Morten?', 'Morten bestræber sig på at svare hurtigt på presseforespørgsler og kender til deadlines. Skriv gerne din deadline i emnefeltet.']
      ],
      ctaTitle: 'Deadline?', ctaText: 'Send medie, vinkel og deadline. Dansk eller engelsk.', ctaBtn: 'Skriv til Morten'
    }
  }
];
