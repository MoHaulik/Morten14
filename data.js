/* All content lives here. Edit text in this file, then run  node build.js  to regenerate
   the static pages (index.html + da/ de/ it/ fr/). No other code knowledge needed. */

const UI_TEXT = {
  en: { btnPlay:"Play on NXT/WebXR", hoverPlay:"Play", btnCare:"NXT/Care ↗", consult:"Hire for Consulting", org:"Organization / Event", role:"Spatial Computing Pioneer, Founder & Keynote Speaker", expNxt:"Experience NXT/WebXR", engage:"Engage as Speaker", letsTalk:"Let's Talk", name:"Name", email:"Email Address", message:"Tell me about your project...", openEmail:"Send Message", draftMsg:"I typically reply within 1 business day.", officialBooking:"Official Booking", inquiry:"Keynote Inquiry", inquiryDesc:"Available for conferences, corporate summits, and private workshops.", audienceSize:"Audience Size", people:"people", pickDates:"Pick Dates", pickDatesDesc:"(You can select up to three dates)", phone:"Phone Number", reqEmail:"Send Request", reqEmailDesc:"I'll get back to you within 1 business day to confirm.", footer:"Designed in Copenhagen", hoverListen:"Listen", hoverProject:"Explore Project", hoverImage:"View Image", hoverRead:"Read More", btnVisit:"View Source", btnExperience:"Experience NXT/WebXR", btnTry:"Try SendToQuest", sending:"Sending…", sentOk:"Thanks! I'll get back to you soon.", sentErr:"Something went wrong — please email Morten@nxtwebxr.com directly." },
  da: { btnPlay:"Spil på NXT/WebXR", hoverPlay:"Spil", btnCare:"NXT/Care ↗", consult:"Få XR-rådgivning", org:"Organisation / Event", role:"VR-ekspert, founder & foredragsholder", expNxt:"Oplev NXT/WebXR", engage:"Book et foredrag", letsTalk:"Lad os tale sammen", name:"Navn", email:"E-mailadresse", message:"Fortæl mig om dit projekt...", openEmail:"Send Besked", draftMsg:"Jeg svarer normalt inden for 1 hverdag.", officialBooking:"Officiel Booking", inquiry:"Forespørgsel på Keynote", inquiryDesc:"Tilgængelig til konferencer, virksomhedsevents og private workshops.", audienceSize:"Publikumsstørrelse", people:"personer", pickDates:"Vælg Datoer", pickDatesDesc:"(Du kan vælge op til tre datoer)", phone:"Telefonnummer", reqEmail:"Send Anmodning", reqEmailDesc:"Jeg vender tilbage inden for 1 hverdag for at bekræfte.", footer:"Designet i København", hoverListen:"Lyt med", hoverProject:"Udforsk Projekt", hoverImage:"Se Billede", hoverRead:"Læs Mere", btnVisit:"Gå til kilde", btnExperience:"Oplev NXT/WebXR", btnTry:"Prøv SendToQuest", sending:"Sender…", sentOk:"Tak! Jeg vender hurtigt tilbage.", sentErr:"Noget gik galt — skriv venligst direkte til Morten@nxtwebxr.com." },
  de: { btnPlay:"Auf NXT/WebXR spielen", hoverPlay:"Spielen", btnCare:"NXT/Care ↗", consult:"Als Berater Buchen", org:"Organisation / Veranstaltung", role:"Spatial Computing Pionier, Gründer & Keynote Speaker", expNxt:"NXT/WebXR Erleben", engage:"Als Redner Buchen", letsTalk:"Lass uns reden", name:"Name", email:"E-Mail Adresse", message:"Erzählen Sie mir von Ihrem Projekt...", openEmail:"Nachricht Senden", draftMsg:"Ich antworte normalerweise innerhalb von 1 Werktag.", officialBooking:"Offizielle Buchung", inquiry:"Keynote-Anfrage", inquiryDesc:"Verfügbar für Konferenzen, Unternehmensgipfel und private Workshops.", audienceSize:"Publikumsgröße", people:"Personen", pickDates:"Daten Wählen", pickDatesDesc:"(Sie können bis zu drei Daten auswählen)", phone:"Telefonnummer", reqEmail:"Anfrage Senden", reqEmailDesc:"Ich melde mich innerhalb von 1 Werktag zur Bestätigung zurück.", footer:"Entworfen in Kopenhagen", hoverListen:"Anhören", hoverProject:"Projekt Erkunden", hoverImage:"Bild Ansehen", hoverRead:"Weiterlesen", btnVisit:"Quelle Ansehen", btnExperience:"NXT/WebXR Erleben", btnTry:"SendToQuest Testen", sending:"Wird gesendet…", sentOk:"Danke! Ich melde mich bald.", sentErr:"Etwas ist schiefgelaufen — bitte schreiben Sie direkt an Morten@nxtwebxr.com." },
  it: { btnPlay:"Gioca su NXT/WebXR", hoverPlay:"Gioca", btnCare:"NXT/Care ↗", consult:"Prenota una Consulenza", org:"Organizzazione / Evento", role:"Pioniere dello Spatial Computing, Fondatore e Keynote Speaker", expNxt:"Scopri NXT/WebXR", engage:"Prenota come Speaker", letsTalk:"Parliamo", name:"Nome", email:"Indirizzo Email", message:"Parlami del tuo progetto...", openEmail:"Invia Messaggio", draftMsg:"Di solito rispondo entro 1 giorno lavorativo.", officialBooking:"Prenotazione Ufficiale", inquiry:"Richiesta Keynote", inquiryDesc:"Disponibile per conferenze, summit aziendali e workshop privati.", audienceSize:"Dimensione del Pubblico", people:"persone", pickDates:"Scegli le Date", pickDatesDesc:"(Puoi selezionare fino a tre date)", phone:"Numero di Telefono", reqEmail:"Invia Richiesta", reqEmailDesc:"Ti risponderò entro 1 giorno lavorativo per confermare.", footer:"Progettato a Copenaghen", hoverListen:"Ascolta", hoverProject:"Esplora Progetto", hoverImage:"Vedi Immagine", hoverRead:"Leggi di Più", btnVisit:"Vedi Fonte", btnExperience:"Scopri NXT/WebXR", btnTry:"Prova SendToQuest", sending:"Invio…", sentOk:"Grazie! Ti risponderò presto.", sentErr:"Qualcosa è andato storto — scrivi direttamente a Morten@nxtwebxr.com." },
  fr: { btnPlay:"Jouer sur NXT/WebXR", hoverPlay:"Jouer", btnCare:"NXT/Care ↗", consult:"Demander un Conseil", org:"Organisation / Événement", role:"Pionnier de l'Informatique Spatiale, Fondateur & Conférencier", expNxt:"Découvrir NXT/WebXR", engage:"Réserver comme Conférencier", letsTalk:"Discutons-en", name:"Nom", email:"Adresse Email", message:"Parlez-moi de votre projet...", openEmail:"Envoyer le Message", draftMsg:"Je réponds généralement dans un délai de 1 jour ouvré.", officialBooking:"Réservation Officielle", inquiry:"Demande de Keynote", inquiryDesc:"Disponible pour des conférences, des sommets d'entreprise et des ateliers privés.", audienceSize:"Taille du Public", people:"personnes", pickDates:"Choisir les Dates", pickDatesDesc:"(Vous pouvez sélectionner jusqu'à trois dates)", phone:"Numéro de Téléphone", reqEmail:"Envoyer la Demande", reqEmailDesc:"Je vous répondrai dans un délai de 1 jour ouvré pour confirmer.", footer:"Conçu à Copenhague", hoverListen:"Écouter", hoverProject:"Explorer le Projet", hoverImage:"Voir l'Image", hoverRead:"Lire la Suite", btnVisit:"Voir la Source", btnExperience:"Découvrir NXT/WebXR", btnTry:"Essayer SendToQuest", sending:"Envoi…", sentOk:"Merci ! Je vous répondrai bientôt.", sentErr:"Une erreur est survenue — merci d'écrire directement à Morten@nxtwebxr.com." }
};

const SEO_META = {
  en: { title:"Morten Haulik | Spatial Computing Keynote Speaker & XR Consultant", desc:"XR pioneer and keynote speaker from Copenhagen, founder of NXT/WebXR and NXT/Care. Book keynotes on VR, AR and smart glasses, hire XR consulting or request press comment." },
  da: { title:"Morten Haulik | VR-ekspert, foredragsholder & XR-konsulent", desc:"VR-ekspert og foredragsholder fra København, stifter af NXT/WebXR og NXT/Care. Book foredrag om VR, AR og smartbriller, få XR-rådgivning eller en ekspertkommentar." },
  de: { title:"Morten Haulik | Keynote Speaker Spatial Computing & XR-Berater", desc:"Spatial-Computing-Pionier aus Kopenhagen und Gründer von NXT/WebXR. Buchen Sie Keynotes zu XR, VR und dem räumlichen Internet oder XR-Strategie- und WebXR-Beratung." },
  it: { title:"Morten Haulik | Keynote Speaker Spatial Computing & Consulente XR", desc:"Pioniere dello spatial computing a Copenaghen e fondatore di NXT/WebXR. Keynote su XR, VR e internet spaziale, e consulenza su strategia XR e WebXR." },
  fr: { title:"Morten Haulik | Conférencier Informatique Spatiale & Consultant XR", desc:"Pionnier de l'informatique spatiale basé à Copenhague et fondateur de NXT/WebXR. Keynotes sur la XR, la VR et l'internet spatial, et conseil en stratégie XR et WebXR." }
};

/* Page sections (hero, keynotes, consulting, press, speaker kit, FAQ), all languages.
   After editing anything in this file, run:  node build.js  */
const PAGE_TEXT = {
  en: {
    nav: { speaking: "Keynotes", consulting: "Consulting", press: "Press", work: "Work", book: "Book Morten" },
    heroEyebrow: "Keynote speaker · XR consultant · Copenhagen",
    heroTag: ["The future of XR, from someone who ","builds it."],
    heroSub: "I build VR and mixed reality used in hospitals, classrooms and living rooms around the world, and have done it for global brands for over a decade. On stage, I show audiences what's real, what's hype and what's coming next.",
    ctaKeynote: "Book a keynote",
    ctaConsult: "Hire for consulting",
    ctaPress: "Journalist? Get a comment",
    reelLabel: "On stage",
    reelTitle: "Keynote at IDA Driving Health Tech",
    reelCta: "Watch the full keynote",
    quote: "Spatial computing won't be installed. It will be visited.",
    stats: [
      ["10+","years building XR"],
      ["100+","workshops facilitated"],
      ["2,000+","people in a single audience"],
      ["EU & UN","presented to the European Parliament and UN delegations"]
    ],
    featured: "As featured in",
    trackLabel: "Track record",
    trackTitle: "A decade of building what others only talk about.",
    track: [
      ["NXT/WebXR","Founder. One of the largest catalogues of WebXR games and experiences, visited daily by headset users worldwide."],
      ["NXT/Care","Founder. Mixed reality that calms children during treatment in hospitals and clinics in the Capital Region of Denmark."],
      ["MidwifeVR","Founded and built the VR breastfeeding platform now in the official midwifery curriculum. KU Impact Award 2021."],
      ["Global brands","Countless VR, AR and WebXR experiences for international brands, museums and cultural institutions."],
      ["Michelin dining in VR","Lead developer on a fully immersive journey into the kitchens of top Danish Michelin restaurants."],
      ["European Parliament & UN","Presented immersive work to members of the European Parliament and Commission and to UN delegations."],
      ["University of Copenhagen","Entrepreneur in Residence since 2022, helping shape the KU Lighthouse startup initiative."],
      ["Where it started","On the early team at Khora in Copenhagen, one of Europe's first VR companies."]
    ],
    speakLabel: "Keynotes",
    speakTitle: "Talks that make XR make sense.",
    speakText: "No buzzwords, no science fiction. Every talk is built on products I have designed and shipped myself, so audiences leave with a clear, grounded picture of what XR can do today and what is coming next.",
    talks: [
      ["The Spatial Internet","Why the next big platform will be visited, not installed, and what that means for every brand, museum and publisher with a website."],
      ["XR That Heals","From maternity wards to children's blood tests: what happens when immersive tech leaves the demo room and enters real hospitals."],
      ["Glasses On: Hype vs. Reality","Meta, Apple and Google are betting billions on your face. A builder's honest guide to what is actually ready, and what isn't."]
    ],
    formatsLabel: "Formats",
    formats: ["Keynote, 20–60 min","Panels & fireside chats","Hands-on workshops with headsets","English or Danish"],
    consultLabel: "Consulting",
    consultTitle: "From first workshop to shipped product.",
    consultText: "I help leadership and product teams find where XR creates real value, then build it. Advice from someone who ships, not from a slide deck.",
    consultList: [
      ["XR strategy","Leadership workshops: where XR makes sense for you, and where it doesn't."],
      ["Prototypes & production","WebXR, VR and mixed reality from idea to launch, without app store bottlenecks."],
      ["Healthcare & training","Simulations and patient experiences built together with clinicians."],
      ["Hardware choices","Which headsets or glasses fit your use case, budget and operations."]
    ],
    partnersLabel: "Clients, partners & stages",
    partners: ["European Parliament","Eli Lilly","Herlev Hospital","Capital Region of Denmark","DR2","IDA","University of Copenhagen","University College Copenhagen"],
    pressLabel: "Press",
    pressTitle: "Need an XR expert on deadline?",
    pressText: "I'm available as a source on VR, AR and smart glasses, from Meta's latest glasses and headsets to Apple Vision Pro and Android XR. In English or Danish, for print, radio and TV.",
    pressList: ["Meta Quest & Meta's smart glasses","Apple Vision Pro & visionOS","Google, Samsung & Android XR","XR in healthcare & education","The metaverse: hype vs. reality"],
    pressCta: "Email Morten",
    pressSubject: "Press inquiry",
    pressPhotos: "Press photos",
    workLabel: "Work",
    workTitle: "Talks, press & projects",
    workSub: "Tap any card for the full story.",
    kitLabel: "For organisers",
    kitTitle: "Speaker kit",
    kitSub: "Bios and press photos, ready for your programme.",
    kitShortLabel: "Short bio",
    kitShort: "Morten Haulik is a Copenhagen-based XR pioneer, founder and keynote speaker. He is the founder of NXT/WebXR, NXT/Care and MidwifeVR, and for more than a decade he has built VR, AR and WebXR for global brands, hospitals and cultural institutions. He began his career on the early team at Khora, one of Europe's first VR companies, and has presented at EU and UN gatherings.",
    kitLongLabel: "Full bio",
    kitLong: [
      "Morten Haulik is an XR pioneer, founder and keynote speaker based in Copenhagen. More than a decade ago he left his Information Science studies at the University of Copenhagen to be part of the team that started Khora, one of Europe's first VR companies. Since then he has built countless VR, AR and WebXR experiences for global brands, museums and cultural institutions, including a fully immersive journey into the kitchens of top Danish Michelin restaurants, facilitated over 100 industry workshops and spoken to audiences of 2,000+.",
      "He has presented spatial computing solutions at official European Union gatherings for members of the European Parliament and Commission, and for United Nations delegations.",
      "As co-founder of MidwifeVR, winner of the KU Impact Award 2021, he built the VR breastfeeding-guidance platform now used in the midwifery programme at University College Copenhagen. He is the founder of NXT/Care, which brings calm, playful mixed reality to children in hospitals and clinics in the Capital Region of Denmark, and he collaborates with Herlev Hospital on clinical XR.",
      "Since 2022 he has been Entrepreneur in Residence at the University of Copenhagen, helping shape the KU Lighthouse initiative. In 2025 he launched NXT/WebXR, a catalogue of free WebXR games and experiences opened straight from the headset browser, including his own titles HoloRange, Meows Freaky Fishstick Factory and die Hände."
    ],
    copy: "Copy",
    copied: "Copied ✓",
    download: "Download",
    faqTitle: "Frequently asked",
    faq: [
      [
        "Can I book Morten Haulik as a keynote speaker?",
        "Yes. Morten gives keynotes, panels and workshops on XR, VR, mixed reality and smart glasses for conferences, corporate events and universities across Europe, in English or Danish. Use the booking form on this page or email Morten@nxtwebxr.com."
      ],
      [
        "What does Morten consult on?",
        "XR strategy, WebXR and VR/mixed-reality development, healthcare and training simulations, and choosing the right hardware. He works with companies, hospitals, museums and universities, from the first workshop to a shipped product."
      ],
      [
        "Is Morten available for press comment on VR and smart glasses?",
        "Yes. Journalists can reach him for expert comment on Meta Quest and Meta's smart glasses, Apple Vision Pro, Android XR and the wider XR industry, in English or Danish, at Morten@nxtwebxr.com."
      ],
      [
        "What has Morten built?",
        "He is the founder of NXT/WebXR (one of the largest catalogues of WebXR games, including his own HoloRange, Meows Freaky Fishstick Factory and die Hände), NXT/Care (mixed reality for children in hospitals) and MidwifeVR (KU Impact Award 2021, now in the midwifery curriculum at University College Copenhagen). Over more than a decade he has built countless VR, AR and WebXR experiences for global brands, museums and cultural institutions, including a Michelin-restaurant VR experience, and presented immersive work in the European Parliament. His career began on the early team at Khora, one of Europe's first VR companies."
      ]
    ],
    contactLabel: "Contact",
    contactTitle: "Let's talk.",
    contactSub: "Keynotes, consulting, collaborations or just a question. I typically reply within one business day.",
    skip: "Skip to content",
    languages: "Language"
  },
  da: {
    nav: { speaking: "Foredrag", consulting: "Rådgivning", press: "Presse", work: "Projekter", book: "Book Morten" },
    heroEyebrow: "Foredragsholder · XR-konsulent · København",
    heroTag: ["Fremtidens XR, fortalt af én, der ","bygger den."],
    heroSub: "Jeg udvikler VR og mixed reality, der bruges på hospitaler, i undervisningen og i hjem verden over, og har gjort det for globale brands i over ti år. På scenen viser jeg, hvad der er ægte, hvad der er hype, og hvad der venter forude.",
    ctaKeynote: "Book et foredrag",
    ctaConsult: "Få XR-rådgivning",
    ctaPress: "Journalist? Få en kommentar",
    reelLabel: "På scenen",
    reelTitle: "Keynote ved IDA Driving Health Tech",
    reelCta: "Se hele foredraget",
    quote: "Spatial computing bliver ikke installeret. Det bliver besøgt.",
    stats: [
      ["10+","års erfaring med XR"],
      ["100+","workshops afholdt"],
      ["2.000+","tilhørere ved ét foredrag"],
      ["EU & FN","har præsenteret for Europa-Parlamentet og FN-delegationer"]
    ],
    featured: "Kendt fra",
    trackLabel: "Erfaring",
    trackTitle: "Ti år med at bygge det, andre kun taler om.",
    track: [
      ["NXT/WebXR","Stifter. Et af verdens største kataloger af WebXR-spil og -oplevelser, som besøges dagligt af brugere verden over."],
      ["NXT/Care","Stifter. Mixed reality, der skaber ro for børn under behandling på hospitaler og klinikker i Region Hovedstaden."],
      ["MidwifeVR","Stiftede og byggede VR-platformen til ammevejledning, som nu er en del af jordemoderuddannelsen. KU Impact Award 2021."],
      ["Globale brands","Utallige VR-, AR- og WebXR-oplevelser til internationale brands, museer og kulturinstitutioner."],
      ["Michelin-restauranter i VR","Leadudvikler på en fuldt immersiv rejse ind i køkkenerne på danske Michelin-restauranter."],
      ["Europa-Parlamentet og FN","Har præsenteret immersive løsninger for medlemmer af Europa-Parlamentet og Kommissionen samt FN-delegationer."],
      ["Københavns Universitet","Entrepreneur in Residence siden 2022 og med til at forme iværksætterinitiativet KU Lighthouse."],
      ["Hvor det startede","I det tidlige team hos Khora i København, et af Europas første VR-firmaer."]
    ],
    speakLabel: "Foredrag",
    speakTitle: "Foredrag, der får XR til at give mening.",
    speakText: "Ingen buzzwords og ingen science fiction. Mine foredrag bygger på produkter, jeg selv har udviklet og sendt ud i verden, så publikum går derfra med et klart og jordnært billede af, hvad XR kan i dag, og hvad der kommer.",
    talks: [
      [
        "Det rumlige internet",
        "Hvorfor den næste store platform bliver besøgt og ikke installeret, og hvad det betyder for alle brands, museer og medier med en hjemmeside."
      ],
      ["XR, der heler","Fra fødegangen til børns blodprøver: Hvad sker der, når immersiv teknologi forlader demorummet og rykker ind på rigtige hospitaler?"],
      [
        "Brillerne på: hype eller virkelighed?",
        "Meta, Apple og Google satser milliarder på dit ansigt. En udviklers ærlige guide til, hvad der faktisk er klar, og hvad der ikke er."
      ]
    ],
    formatsLabel: "Formater",
    formats: ["Keynote, 20–60 min.","Paneldebat og samtale","Workshop med headsets","Dansk eller engelsk"],
    consultLabel: "Rådgivning",
    consultTitle: "Fra første workshop til færdigt produkt.",
    consultText: "Jeg hjælper ledelser og produktteams med at finde ud af, hvor XR skaber reel værdi, og bygger det derefter. Rådgivning fra én, der selv leverer, ikke fra et slide-deck.",
    consultList: [
      ["XR-strategi","Workshops for ledelsen: Hvor giver XR mening for jer, og hvor gør det ikke?"],
      ["Prototyper og produktion","WebXR, VR og mixed reality fra idé til lancering, uden at gå gennem app stores."],
      ["Sundhed og træning","Simulationer og patientoplevelser udviklet sammen med klinikere."],
      ["Valg af hardware","Hvilke headsets eller briller passer til jeres behov, budget og drift?"]
    ],
    partnersLabel: "Kunder, partnere og scener",
    partners: ["Europa-Parlamentet","Eli Lilly","Herlev Hospital","Region Hovedstaden","DR2","IDA","Københavns Universitet","Københavns Professionshøjskole"],
    pressLabel: "Presse",
    pressTitle: "Brug for en XR-ekspert før deadline?",
    pressText: "Jeg stiller gerne op som kilde om VR, AR og smartbriller, fra Metas nyeste briller og headsets til Apple Vision Pro og Android XR. På dansk eller engelsk, til skrevne medier, radio og tv.",
    pressList: ["Meta Quest og Metas smartbriller","Apple Vision Pro og visionOS","Google, Samsung og Android XR","XR i sundhed og uddannelse","Metaverset: hype eller virkelighed"],
    pressCta: "Skriv til Morten",
    pressSubject: "Presseforespørgsel",
    pressPhotos: "Pressefotos",
    workLabel: "Projekter",
    workTitle: "Foredrag, presse og projekter",
    workSub: "Tryk på et kort for hele historien.",
    kitLabel: "Til arrangører",
    kitTitle: "Speaker kit",
    kitSub: "Bio og pressefotos, klar til programmet.",
    kitShortLabel: "Kort bio",
    kitShort: "Morten Haulik er XR-pioner, iværksætter og foredragsholder fra København. Han har stiftet NXT/WebXR, NXT/Care og MidwifeVR og har i mere end ti år bygget VR, AR og WebXR til globale brands, hospitaler og kulturinstitutioner. Han begyndte sin karriere i det tidlige team hos Khora, et af Europas første VR-firmaer, og har præsenteret for EU og FN.",
    kitLongLabel: "Fuld bio",
    kitLong: [
      "Morten Haulik er XR-pioner, iværksætter og foredragsholder med base i København. For mere end ti år siden forlod han studiet i Informationsvidenskab på Københavns Universitet for at være med til at starte Khora, et af Europas første VR-firmaer. Siden har han bygget utallige VR-, AR- og WebXR-oplevelser til globale brands, museer og kulturinstitutioner, blandt andet en fuldt immersiv rejse ind i køkkenerne på danske Michelin-restauranter, afholdt over 100 workshops og talt for publikummer på over 2.000.",
      "Han har præsenteret spatial computing-løsninger ved officielle EU-arrangementer for medlemmer af Europa-Parlamentet og Kommissionen samt for FN-delegationer.",
      "Som medstifter af MidwifeVR, der vandt KU Impact Award 2021, byggede han VR-platformen til ammevejledning, som i dag bruges på jordemoderuddannelsen på Københavns Professionshøjskole. Han er stifter af NXT/Care, der giver børn på hospitaler og klinikker i Region Hovedstaden en tryg og legende oplevelse med mixed reality, og han samarbejder med Herlev Hospital om klinisk XR.",
      "Siden 2022 har han været Entrepreneur in Residence på Københavns Universitet og med til at forme KU Lighthouse. I 2025 lancerede han NXT/WebXR, et katalog af gratis WebXR-spil og -oplevelser, der åbnes direkte i headsettets browser, blandt andet hans egne spil HoloRange, Meows Freaky Fishstick Factory og die Hände."
    ],
    copy: "Kopiér",
    copied: "Kopieret ✓",
    download: "Download",
    faqTitle: "Ofte stillede spørgsmål",
    faq: [
      [
        "Kan man booke Morten Haulik som foredragsholder?",
        "Ja. Morten holder foredrag, keynotes, paneldebatter og workshops om XR, VR, mixed reality og smartbriller for konferencer, virksomheder og uddannelser, på dansk eller engelsk. Brug bookingformularen her på siden, eller skriv til Morten@nxtwebxr.com."
      ],
      [
        "Hvad rådgiver Morten om?",
        "XR-strategi, udvikling i WebXR, VR og mixed reality, simulationer til sundhed og træning samt valg af hardware. Han arbejder med virksomheder, hospitaler, museer og uddannelser, fra første workshop til færdigt produkt."
      ],
      [
        "Kan journalister få en kommentar fra Morten om VR og smartbriller?",
        "Ja. Morten stiller op som ekspertkilde om Meta Quest og Metas smartbriller, Apple Vision Pro, Android XR og XR-branchen generelt, på dansk eller engelsk. Skriv til Morten@nxtwebxr.com."
      ],
      [
        "Hvad har Morten bygget?",
        "Han har stiftet NXT/WebXR (et af verdens største kataloger af WebXR-spil, herunder hans egne HoloRange, Meows Freaky Fishstick Factory og die Hände), NXT/Care (mixed reality til børn på hospitaler) og MidwifeVR (KU Impact Award 2021, nu en del af jordemoderuddannelsen på Københavns Professionshøjskole). Gennem mere end ti år har han bygget utallige VR-, AR- og WebXR-oplevelser til globale brands, museer og kulturinstitutioner, blandt andet en VR-oplevelse med danske Michelin-restauranter, og præsenteret i Europa-Parlamentet. Karrieren begyndte i det tidlige team hos Khora, et af Europas første VR-firmaer."
      ]
    ],
    contactLabel: "Kontakt",
    contactTitle: "Lad os tage en snak.",
    contactSub: "Foredrag, rådgivning, samarbejde eller bare et spørgsmål. Jeg svarer normalt inden for én hverdag.",
    skip: "Spring til indhold",
    languages: "Sprog"
  },
  de: {
    nav: { speaking: "Keynotes", consulting: "Beratung", press: "Presse", work: "Projekte", book: "Morten buchen" },
    heroEyebrow: "Keynote Speaker · XR-Berater · Kopenhagen",
    heroTag: ["Die Zukunft von XR, erzählt von jemandem, der sie ","baut."],
    heroSub: "Ich entwickle VR und Mixed Reality, die in Kliniken, Klassenzimmern und Wohnzimmern weltweit genutzt werden, und tue das seit über zehn Jahren auch für globale Marken. Auf der Bühne zeige ich, was echt ist, was Hype ist und was als Nächstes kommt.",
    ctaKeynote: "Keynote buchen",
    ctaConsult: "XR-Beratung anfragen",
    ctaPress: "Journalist? Kommentar anfragen",
    reelLabel: "Auf der Bühne",
    reelTitle: "Keynote bei IDA Driving Health Tech",
    reelCta: "Ganze Keynote ansehen",
    quote: "Spatial Computing wird nicht installiert. Es wird besucht.",
    stats: [
      ["10+","Jahre XR-Entwicklung"],
      ["100+","moderierte Workshops"],
      ["2.000+","Zuhörer bei einem Vortrag"],
      ["EU & UN","Präsentationen im Europäischen Parlament und vor UN-Delegationen"]
    ],
    featured: "Bekannt aus",
    trackLabel: "Erfahrung",
    trackTitle: "Zehn Jahre bauen, worüber andere nur reden.",
    track: [
      ["NXT/WebXR","Gründer. Einer der größten Kataloge für WebXR-Spiele und -Erlebnisse, täglich weltweit genutzt."],
      ["NXT/Care","Gründer. Mixed Reality, die Kinder während der Behandlung in Kliniken der Region Hovedstaden beruhigt."],
      ["MidwifeVR","Gründung und Entwicklung der VR-Plattform zur Stillberatung, heute Teil der Hebammenausbildung. KU Impact Award 2021."],
      ["Globale Marken","Unzählige VR-, AR- und WebXR-Erlebnisse für internationale Marken, Museen und Kulturinstitutionen."],
      ["Michelin-Küche in VR","Lead Developer einer vollständig immersiven Reise in die Küchen dänischer Michelin-Restaurants."],
      ["Europäisches Parlament & UN","Präsentationen für Mitglieder des Europäischen Parlaments und der Kommission sowie UN-Delegationen."],
      ["Universität Kopenhagen","Entrepreneur in Residence seit 2022, Mitgestaltung der Startup-Initiative KU Lighthouse."],
      ["Die Anfänge","Im frühen Team von Khora in Kopenhagen, einem der ersten VR-Unternehmen Europas."]
    ],
    speakLabel: "Keynotes",
    speakTitle: "Vorträge, die XR verständlich machen.",
    speakText: "Keine Buzzwords, keine Science-Fiction. Jeder Vortrag basiert auf Produkten, die ich selbst entwickelt und veröffentlicht habe. So geht das Publikum mit einem klaren, realistischen Bild davon nach Hause, was XR heute kann und was kommt.",
    talks: [
      [
        "Das räumliche Internet",
        "Warum die nächste große Plattform besucht und nicht installiert wird, und was das für jede Marke, jedes Museum und jeden Verlag mit Website bedeutet."
      ],
      [
        "XR, die heilt",
        "Von der Geburtsstation bis zur Blutabnahme bei Kindern: was passiert, wenn immersive Technologie den Demoraum verlässt und in echte Kliniken einzieht."
      ],
      [
        "Brille auf: Hype oder Realität?",
        "Meta, Apple und Google setzen Milliarden auf Ihr Gesicht. Ein ehrlicher Leitfaden aus Entwicklersicht: was wirklich bereit ist und was nicht."
      ]
    ],
    formatsLabel: "Formate",
    formats: ["Keynote, 20–60 Min.","Panels & Kamingespräche","Workshops mit Headsets","Englisch oder Dänisch"],
    consultLabel: "Beratung",
    consultTitle: "Vom ersten Workshop zum fertigen Produkt.",
    consultText: "Ich helfe Führungs- und Produktteams herauszufinden, wo XR echten Mehrwert schafft, und baue es dann. Beratung von jemandem, der liefert, nicht von Folien.",
    consultList: [
      ["XR-Strategie","Workshops für das Management: wo XR für Sie sinnvoll ist und wo nicht."],
      ["Prototypen & Produktion","WebXR, VR und Mixed Reality von der Idee bis zum Launch, ohne App-Store-Hürden."],
      ["Gesundheit & Training","Simulationen und Patientenerlebnisse, gemeinsam mit Klinikpersonal entwickelt."],
      ["Hardware-Auswahl","Welche Headsets oder Brillen zu Ihrem Einsatz, Budget und Betrieb passen."]
    ],
    partnersLabel: "Kunden, Partner & Bühnen",
    partners: ["Europäisches Parlament","Eli Lilly","Herlev Hospital","Region Hovedstaden","DR2","IDA","Universität Kopenhagen","University College Copenhagen"],
    pressLabel: "Presse",
    pressTitle: "XR-Experte gesucht, kurz vor Redaktionsschluss?",
    pressText: "Ich stehe als Quelle zu VR, AR und Smart Glasses zur Verfügung, von Metas neuesten Brillen und Headsets bis zu Apple Vision Pro und Android XR. Auf Englisch oder Dänisch, für Print, Radio und TV.",
    pressList: ["Meta Quest & Metas Smart Glasses","Apple Vision Pro & visionOS","Google, Samsung & Android XR","XR in Gesundheit & Bildung","Metaverse: Hype oder Realität"],
    pressCta: "Morten schreiben",
    pressSubject: "Presseanfrage",
    pressPhotos: "Pressefotos",
    workLabel: "Projekte",
    workTitle: "Vorträge, Presse & Projekte",
    workSub: "Karte antippen für die ganze Geschichte.",
    kitLabel: "Für Veranstalter",
    kitTitle: "Speaker Kit",
    kitSub: "Bios und Pressefotos, bereit für Ihr Programm.",
    kitShortLabel: "Kurzbio",
    kitShort: "Morten Haulik ist XR-Pionier, Gründer und Keynote Speaker aus Kopenhagen. Er gründete NXT/WebXR, NXT/Care und MidwifeVR und entwickelt seit über zehn Jahren VR, AR und WebXR für globale Marken, Kliniken und Kulturinstitutionen. Seine Laufbahn begann im frühen Team von Khora, einem der ersten VR-Unternehmen Europas; er präsentierte bei EU- und UN-Veranstaltungen.",
    kitLongLabel: "Ausführliche Bio",
    kitLong: [
      "Morten Haulik ist XR-Pionier, Gründer und Keynote Speaker mit Sitz in Kopenhagen. Vor über zehn Jahren verließ er sein Studium der Informationswissenschaft an der Universität Kopenhagen, um Khora mit aufzubauen, eines der ersten VR-Unternehmen Europas. Seitdem hat er unzählige VR-, AR- und WebXR-Erlebnisse für globale Marken, Museen und Kulturinstitutionen entwickelt, darunter eine immersive Reise in die Küchen dänischer Michelin-Restaurants, über 100 Workshops moderiert und vor über 2.000 Menschen gesprochen.",
      "Er präsentierte Spatial-Computing-Lösungen bei offiziellen EU-Veranstaltungen für Mitglieder des Europäischen Parlaments und der Kommission sowie für UN-Delegationen.",
      "Als Mitgründer von MidwifeVR, Gewinner des KU Impact Award 2021, entwickelte er die VR-Plattform zur Stillberatung, die heute in der Hebammenausbildung am University College Copenhagen genutzt wird. Er ist Gründer von NXT/Care, das Kindern in Kliniken der Region Hovedstaden mit Mixed Reality Ruhe und Ablenkung schenkt, und arbeitet mit dem Herlev Hospital an klinischer XR.",
      "Seit 2022 ist er Entrepreneur in Residence an der Universität Kopenhagen (KU Lighthouse). 2025 startete er NXT/WebXR, einen Katalog kostenloser WebXR-Spiele und -Erlebnisse, darunter seine eigenen Titel HoloRange, Meows Freaky Fishstick Factory und die Hände."
    ],
    copy: "Kopieren",
    copied: "Kopiert ✓",
    download: "Herunterladen",
    faqTitle: "Häufige Fragen",
    faq: [
      [
        "Kann ich Morten Haulik als Keynote Speaker buchen?",
        "Ja. Morten hält Keynotes, Panels und Workshops zu XR, VR, Mixed Reality und Smart Glasses für Konferenzen, Unternehmen und Universitäten in ganz Europa, auf Englisch oder Dänisch. Nutzen Sie das Buchungsformular oder schreiben Sie an Morten@nxtwebxr.com."
      ],
      [
        "Wozu berät Morten?",
        "XR-Strategie, Entwicklung in WebXR, VR und Mixed Reality, Simulationen für Gesundheit und Training sowie Hardware-Auswahl, vom ersten Workshop bis zum fertigen Produkt."
      ],
      [
        "Steht Morten für Pressekommentare zu VR und Smart Glasses zur Verfügung?",
        "Ja. Journalisten erreichen ihn für Expertenkommentare zu Meta Quest, Metas Smart Glasses, Apple Vision Pro und Android XR unter Morten@nxtwebxr.com."
      ],
      [
        "Was hat Morten gebaut?",
        "Er gründete NXT/WebXR (einer der größten WebXR-Spielekataloge, mit seinen Spielen HoloRange, Meows Freaky Fishstick Factory und die Hände), NXT/Care (Mixed Reality für Kinder in Kliniken) und MidwifeVR (KU Impact Award 2021). Seit über zehn Jahren entwickelt er VR-, AR- und WebXR-Erlebnisse für globale Marken, Museen und Kulturinstitutionen, darunter eine VR-Reise mit dänischen Michelin-Restaurants, und präsentierte im Europäischen Parlament. Seine Laufbahn begann im frühen Team von Khora, einem der ersten VR-Unternehmen Europas."
      ]
    ],
    contactLabel: "Kontakt",
    contactTitle: "Lassen Sie uns sprechen.",
    contactSub: "Keynotes, Beratung, Kooperationen oder einfach eine Frage. Ich antworte meist innerhalb eines Werktags.",
    skip: "Zum Inhalt springen",
    languages: "Sprache"
  },
  it: {
    nav: { speaking: "Keynote", consulting: "Consulenza", press: "Stampa", work: "Progetti", book: "Prenota Morten" },
    heroEyebrow: "Keynote speaker · Consulente XR · Copenaghen",
    heroTag: ["Il futuro dell'XR, raccontato da chi lo ","costruisce."],
    heroSub: "Sviluppo VR e realtà mista usate in ospedali, aule e case di tutto il mondo, e da oltre dieci anni lo faccio anche per brand globali. Sul palco mostro cosa è reale, cosa è hype e cosa sta arrivando.",
    ctaKeynote: "Prenota un keynote",
    ctaConsult: "Richiedi una consulenza",
    ctaPress: "Giornalista? Chiedi un commento",
    reelLabel: "Sul palco",
    reelTitle: "Keynote a IDA Driving Health Tech",
    reelCta: "Guarda il keynote completo",
    quote: "Lo spatial computing non si installa. Si visita.",
    stats: [
      ["10+","anni di XR"],
      ["100+","workshop facilitati"],
      ["2.000+","persone in un solo pubblico"],
      ["UE & ONU","presentazioni al Parlamento europeo e a delegazioni ONU"]
    ],
    featured: "Citato da",
    trackLabel: "Esperienza",
    trackTitle: "Dieci anni a costruire ciò di cui altri si limitano a parlare.",
    track: [
      ["NXT/WebXR","Fondatore. Uno dei più grandi cataloghi di giochi ed esperienze WebXR, visitato ogni giorno in tutto il mondo."],
      ["NXT/Care","Fondatore. Realtà mista che tranquillizza i bambini durante le cure negli ospedali della Regione Capitale danese."],
      ["MidwifeVR","Ha fondato e sviluppato la piattaforma VR per l'allattamento, oggi nel curriculum di ostetricia. KU Impact Award 2021."],
      ["Brand globali","Innumerevoli esperienze VR, AR e WebXR per brand internazionali, musei e istituzioni culturali."],
      ["Cucina stellata in VR","Lead developer di un viaggio immersivo nelle cucine dei ristoranti stellati Michelin danesi."],
      ["Parlamento europeo e ONU","Presentazioni per membri del Parlamento europeo e della Commissione e per delegazioni ONU."],
      ["Università di Copenaghen","Entrepreneur in Residence dal 2022, contribuisce all'iniziativa per startup KU Lighthouse."],
      ["Gli inizi","Nel primo team di Khora a Copenaghen, una delle prime aziende VR in Europa."]
    ],
    speakLabel: "Keynote",
    speakTitle: "Interventi che rendono l'XR comprensibile.",
    speakText: "Niente buzzword, niente fantascienza. Ogni intervento si basa su prodotti che ho progettato e lanciato io stesso, così il pubblico esce con un'idea chiara e concreta di cosa può fare l'XR oggi e di cosa arriverà.",
    talks: [
      ["L'internet spaziale","Perché la prossima grande piattaforma si visiterà invece di installarla, e cosa significa per ogni brand, museo ed editore con un sito web."],
      ["XR che cura","Dai reparti maternità ai prelievi sui bambini: cosa succede quando la tecnologia immersiva esce dalla sala demo ed entra in veri ospedali."],
      ["Occhiali addosso: hype o realtà?","Meta, Apple e Google scommettono miliardi sul tuo viso. Una guida onesta, da sviluppatore, su cosa è davvero pronto e cosa no."]
    ],
    formatsLabel: "Formati",
    formats: ["Keynote, 20–60 min","Panel e conversazioni","Workshop con visori","Inglese o danese"],
    consultLabel: "Consulenza",
    consultTitle: "Dal primo workshop al prodotto finito.",
    consultText: "Aiuto i team di leadership e di prodotto a capire dove l'XR crea valore reale, e poi lo costruisco. Consulenza da chi realizza, non da una presentazione.",
    consultList: [
      ["Strategia XR","Workshop per il management: dove l'XR ha senso per voi, e dove no."],
      ["Prototipi e produzione","WebXR, VR e realtà mista dall'idea al lancio, senza i vincoli degli app store."],
      ["Sanità e formazione","Simulazioni ed esperienze per i pazienti sviluppate insieme ai clinici."],
      ["Scelta dell'hardware","Quali visori o occhiali sono adatti al vostro uso, budget e operatività."]
    ],
    partnersLabel: "Clienti, partner e palchi",
    partners: ["Parlamento europeo","Eli Lilly","Herlev Hospital","Regione Capitale danese","DR2","IDA","Università di Copenaghen","University College Copenhagen"],
    pressLabel: "Stampa",
    pressTitle: "Serve un esperto XR prima della chiusura?",
    pressText: "Sono disponibile come fonte su VR, AR e smart glasses, dai nuovi occhiali e visori di Meta ad Apple Vision Pro e Android XR. In inglese o danese, per carta stampata, radio e TV.",
    pressList: ["Meta Quest e gli smart glasses di Meta","Apple Vision Pro e visionOS","Google, Samsung e Android XR","XR in sanità e istruzione","Metaverso: hype o realtà"],
    pressCta: "Scrivi a Morten",
    pressSubject: "Richiesta stampa",
    pressPhotos: "Foto stampa",
    workLabel: "Progetti",
    workTitle: "Interventi, stampa e progetti",
    workSub: "Tocca una scheda per la storia completa.",
    kitLabel: "Per gli organizzatori",
    kitTitle: "Speaker kit",
    kitSub: "Bio e foto stampa, pronte per il programma.",
    kitShortLabel: "Bio breve",
    kitShort: "Morten Haulik è un pioniere dell'XR, imprenditore e keynote speaker con sede a Copenaghen. Ha fondato NXT/WebXR, NXT/Care e MidwifeVR e da oltre dieci anni sviluppa VR, AR e WebXR per brand globali, ospedali e istituzioni culturali. Ha iniziato la carriera nel primo team di Khora, una delle prime aziende VR in Europa, e ha presentato a eventi dell'UE e dell'ONU.",
    kitLongLabel: "Bio completa",
    kitLong: [
      "Morten Haulik è un pioniere dell'XR, imprenditore e keynote speaker con sede a Copenaghen. Oltre dieci anni fa ha lasciato gli studi di Scienze dell'Informazione all'Università di Copenaghen per far parte del team che ha avviato Khora, una delle prime aziende VR in Europa. Da allora ha creato innumerevoli esperienze VR, AR e WebXR per brand globali, musei e istituzioni culturali, tra cui un viaggio immersivo nelle cucine dei ristoranti stellati danesi, facilitato oltre 100 workshop e parlato a platee di oltre 2.000 persone.",
      "Ha presentato soluzioni di spatial computing a incontri ufficiali dell'Unione Europea per membri del Parlamento e della Commissione, e a delegazioni delle Nazioni Unite.",
      "Come co-fondatore di MidwifeVR, vincitore del KU Impact Award 2021, ha creato la piattaforma VR per l'allattamento oggi usata nel corso di ostetricia dello University College Copenhagen. È il fondatore di NXT/Care, che porta la realtà mista ai bambini negli ospedali e nelle cliniche della Regione Capitale danese, e collabora con l'Herlev Hospital sull'XR clinica.",
      "Dal 2022 è Entrepreneur in Residence all'Università di Copenaghen (KU Lighthouse). Nel 2025 ha lanciato NXT/WebXR, un catalogo di giochi ed esperienze WebXR gratuiti, tra cui i suoi HoloRange, Meows Freaky Fishstick Factory e die Hände."
    ],
    copy: "Copia",
    copied: "Copiato ✓",
    download: "Scarica",
    faqTitle: "Domande frequenti",
    faq: [
      [
        "Posso prenotare Morten Haulik come keynote speaker?",
        "Sì. Morten tiene keynote, panel e workshop su XR, VR, realtà mista e smart glasses per conferenze, aziende e università in tutta Europa, in inglese o danese. Usa il modulo di prenotazione o scrivi a Morten@nxtwebxr.com."
      ],
      [
        "Su cosa offre consulenza Morten?",
        "Strategia XR, sviluppo WebXR, VR e realtà mista, simulazioni per sanità e formazione e scelta dell'hardware, dal primo workshop al prodotto finito."
      ],
      [
        "Morten è disponibile per commenti alla stampa su VR e smart glasses?",
        "Sì. I giornalisti possono contattarlo per commenti su Meta Quest, gli smart glasses di Meta, Apple Vision Pro e Android XR a Morten@nxtwebxr.com."
      ],
      [
        "Cosa ha creato Morten?",
        "Ha fondato NXT/WebXR (uno dei più grandi cataloghi di giochi WebXR, con i suoi HoloRange, Meows Freaky Fishstick Factory e die Hände), NXT/Care (realtà mista per bambini in ospedale) e MidwifeVR (KU Impact Award 2021). In oltre dieci anni ha creato innumerevoli esperienze VR, AR e WebXR per brand globali, musei e istituzioni culturali, tra cui un'esperienza VR con ristoranti stellati danesi, e ha presentato al Parlamento europeo. La sua carriera è iniziata nel primo team di Khora, una delle prime aziende VR in Europa."
      ]
    ],
    contactLabel: "Contatti",
    contactTitle: "Parliamone.",
    contactSub: "Keynote, consulenza, collaborazioni o semplicemente una domanda. Di solito rispondo entro un giorno lavorativo.",
    skip: "Vai al contenuto",
    languages: "Lingua"
  },
  fr: {
    nav: { speaking: "Keynotes", consulting: "Conseil", press: "Presse", work: "Projets", book: "Réserver Morten" },
    heroEyebrow: "Conférencier · Consultant XR · Copenhague",
    heroTag: ["L'avenir de la XR, raconté par celui qui la ","construit."],
    heroSub: "Je développe de la VR et de la réalité mixte utilisées dans des hôpitaux, des salles de classe et des foyers du monde entier, et je le fais depuis plus de dix ans pour des marques mondiales. Sur scène, je montre ce qui est réel, ce qui relève du buzz et ce qui arrive.",
    ctaKeynote: "Réserver une keynote",
    ctaConsult: "Demander un conseil",
    ctaPress: "Journaliste ? Obtenir un commentaire",
    reelLabel: "Sur scène",
    reelTitle: "Keynote à IDA Driving Health Tech",
    reelCta: "Voir la keynote complète",
    quote: "L'informatique spatiale ne s'installe pas. Elle se visite.",
    stats: [
      ["10+","ans de XR"],
      ["100+","ateliers animés"],
      ["2 000+","personnes dans un seul public"],
      ["UE & ONU","présentations au Parlement européen et à des délégations de l'ONU"]
    ],
    featured: "Vu dans",
    trackLabel: "Parcours",
    trackTitle: "Dix ans à construire ce dont d'autres ne font que parler.",
    track: [
      ["NXT/WebXR","Fondateur. L'un des plus grands catalogues de jeux et d'expériences WebXR, visité chaque jour dans le monde entier."],
      ["NXT/Care","Fondateur. La réalité mixte qui apaise les enfants pendant les soins dans les hôpitaux de la Région capitale du Danemark."],
      ["MidwifeVR","A fondé et développé la plateforme VR d'accompagnement à l'allaitement, aujourd'hui au programme des sages-femmes. KU Impact Award 2021."],
      ["Marques mondiales","D'innombrables expériences VR, AR et WebXR pour des marques internationales, des musées et des institutions culturelles."],
      ["Gastronomie étoilée en VR","Lead developer d'une immersion dans les cuisines de grands restaurants étoilés danois."],
      ["Parlement européen et ONU","Présentations à des membres du Parlement européen et de la Commission, et à des délégations de l'ONU."],
      ["Université de Copenhague","Entrepreneur en résidence depuis 2022, il contribue à l'initiative startup KU Lighthouse."],
      ["Les débuts","Dans l'équipe des débuts de Khora à Copenhague, l'une des premières entreprises VR d'Europe."]
    ],
    speakLabel: "Keynotes",
    speakTitle: "Des conférences qui rendent la XR limpide.",
    speakText: "Pas de jargon, pas de science-fiction. Chaque intervention s'appuie sur des produits que j'ai conçus et lancés moi-même : le public repart avec une vision claire et concrète de ce que la XR permet aujourd'hui et de ce qui arrive.",
    talks: [
      [
        "L'internet spatial",
        "Pourquoi la prochaine grande plateforme se visitera au lieu de s'installer, et ce que cela change pour chaque marque, musée et éditeur doté d'un site web."
      ],
      [
        "La XR qui soigne",
        "Des maternités aux prises de sang chez l'enfant : ce qui se passe quand la technologie immersive quitte la salle de démo pour entrer dans de vrais hôpitaux."
      ],
      [
        "Lunettes sur le nez : buzz ou réalité ?",
        "Meta, Apple et Google misent des milliards sur votre visage. Le guide honnête d'un développeur sur ce qui est vraiment prêt, et ce qui ne l'est pas."
      ]
    ],
    formatsLabel: "Formats",
    formats: ["Keynote, 20–60 min","Tables rondes et conversations","Ateliers avec casques","Anglais ou danois"],
    consultLabel: "Conseil",
    consultTitle: "Du premier atelier au produit livré.",
    consultText: "J'aide les équipes de direction et produit à identifier où la XR crée une vraie valeur, puis je la construis. Le conseil de quelqu'un qui livre, pas d'un diaporama.",
    consultList: [
      ["Stratégie XR","Ateliers pour la direction : où la XR a du sens pour vous, et où elle n'en a pas."],
      ["Prototypes et production","WebXR, VR et réalité mixte de l'idée au lancement, sans passer par les app stores."],
      ["Santé et formation","Simulations et expériences patients conçues avec les soignants."],
      ["Choix du matériel","Quels casques ou lunettes conviennent à votre usage, votre budget et votre exploitation."]
    ],
    partnersLabel: "Clients, partenaires et scènes",
    partners: ["Parlement européen","Eli Lilly","Herlev Hospital","Région capitale du Danemark","DR2","IDA","Université de Copenhague","University College Copenhagen"],
    pressLabel: "Presse",
    pressTitle: "Besoin d'un expert XR avant le bouclage ?",
    pressText: "Je suis disponible comme source sur la VR, l'AR et les lunettes connectées, des dernières lunettes et casques de Meta à l'Apple Vision Pro et Android XR. En anglais ou en danois, pour la presse écrite, la radio et la télévision.",
    pressList: ["Meta Quest et les lunettes de Meta","Apple Vision Pro et visionOS","Google, Samsung et Android XR","La XR en santé et en éducation","Le métavers : buzz ou réalité"],
    pressCta: "Écrire à Morten",
    pressSubject: "Demande presse",
    pressPhotos: "Photos presse",
    workLabel: "Projets",
    workTitle: "Conférences, presse et projets",
    workSub: "Touchez une carte pour l'histoire complète.",
    kitLabel: "Pour les organisateurs",
    kitTitle: "Kit conférencier",
    kitSub: "Bios et photos presse, prêtes pour votre programme.",
    kitShortLabel: "Bio courte",
    kitShort: "Morten Haulik est un pionnier de la XR, entrepreneur et conférencier basé à Copenhague. Fondateur de NXT/WebXR, NXT/Care et MidwifeVR, il conçoit depuis plus de dix ans de la VR, de l'AR et du WebXR pour des marques mondiales, des hôpitaux et des institutions culturelles. Il a débuté dans l'équipe des débuts de Khora, l'une des premières entreprises VR d'Europe, et a présenté lors d'événements de l'UE et de l'ONU.",
    kitLongLabel: "Bio complète",
    kitLong: [
      "Morten Haulik est un pionnier de la XR, entrepreneur et conférencier basé à Copenhague. Il y a plus de dix ans, il a quitté ses études en sciences de l'information à l'Université de Copenhague pour faire partie de l'équipe qui a lancé Khora, l'une des premières entreprises VR d'Europe. Depuis, il a créé d'innombrables expériences VR, AR et WebXR pour des marques mondiales, des musées et des institutions culturelles, dont une immersion dans les cuisines de restaurants étoilés danois, animé plus de 100 ateliers et parlé devant des publics de plus de 2 000 personnes.",
      "Il a présenté des solutions d'informatique spatiale lors de rencontres officielles de l'Union européenne pour des membres du Parlement et de la Commission, ainsi qu'à des délégations des Nations unies.",
      "Cofondateur de MidwifeVR, lauréat du KU Impact Award 2021, il a créé la plateforme VR d'accompagnement à l'allaitement utilisée dans la formation des sages-femmes à l'University College Copenhagen. Il est le fondateur de NXT/Care, qui apporte la réalité mixte aux enfants dans les hôpitaux et cliniques de la Région capitale du Danemark, et collabore avec l'hôpital de Herlev sur la XR clinique.",
      "Depuis 2022, il est Entrepreneur en résidence à l'Université de Copenhague (KU Lighthouse). En 2025, il a lancé NXT/WebXR, un catalogue de jeux et d'expériences WebXR gratuits, dont ses propres titres HoloRange, Meows Freaky Fishstick Factory et die Hände."
    ],
    copy: "Copier",
    copied: "Copié ✓",
    download: "Télécharger",
    faqTitle: "Questions fréquentes",
    faq: [
      [
        "Puis-je réserver Morten Haulik comme conférencier ?",
        "Oui. Morten donne des keynotes, tables rondes et ateliers sur la XR, la VR, la réalité mixte et les lunettes connectées pour des conférences, entreprises et universités dans toute l'Europe, en anglais ou en danois. Utilisez le formulaire de réservation ou écrivez à Morten@nxtwebxr.com."
      ],
      [
        "Sur quoi Morten conseille-t-il ?",
        "Stratégie XR, développement WebXR, VR et réalité mixte, simulations pour la santé et la formation, et choix du matériel, du premier atelier au produit livré."
      ],
      [
        "Morten est-il disponible pour commenter la VR et les lunettes connectées dans la presse ?",
        "Oui. Les journalistes peuvent le joindre pour un commentaire d'expert sur Meta Quest, les lunettes de Meta, l'Apple Vision Pro et Android XR à Morten@nxtwebxr.com."
      ],
      [
        "Qu'a construit Morten ?",
        "Il a fondé NXT/WebXR (l'un des plus grands catalogues de jeux WebXR, dont ses propres HoloRange, Meows Freaky Fishstick Factory et die Hände), NXT/Care (réalité mixte pour les enfants à l'hôpital) et MidwifeVR (KU Impact Award 2021). En plus de dix ans, il a créé d'innombrables expériences VR, AR et WebXR pour des marques mondiales, des musées et des institutions culturelles, dont une expérience VR avec des restaurants étoilés danois, et a présenté au Parlement européen. Sa carrière a débuté dans l'équipe des débuts de Khora, l'une des premières entreprises VR d'Europe."
      ]
    ],
    contactLabel: "Contact",
    contactTitle: "Parlons-en.",
    contactSub: "Keynotes, conseil, collaborations ou simple question. Je réponds généralement sous un jour ouvré.",
    skip: "Aller au contenu",
    languages: "Langue"
  }
};

/* "Featured in" strip. Links go to the coverage itself. */
const FEATURED = [
  ["Berlingske","https://www.berlingske.dk/indland/stort-problem-blandt-nybagte-foraeldre-kan-afhjaelpes-startup-kommer-med-loesning"],
  ["IDA","https://videos.ida.dk/media/Virtual+Reality+og+Amning%3A+En+innovativ+tilgang+med+MidwifeVR++Morten+Haulik%2C+Co-founder+og+VR+ekspert+og+Sofie+Bonde+Alsen%2C+jordemoder+og+Digital+Designer/1_bb9dwkxp"],
  ["Radio4","https://radio4.dk/podcasts/kraes/rolf-s-rensen-elsker-ny-dokumentar-om-tour-de-fran"],
  ["Voice of America","https://learningenglish.voanews.com/amp/a-visit-to-the-virtual-world/3618990.html"],
  ["The Copenhagen Post","https://cphpost.dk/2017-07-02/news/goggle-me-up-scotty-this-is-the-final-frontier/"],
  ["Danish Sound Cluster","https://danishsoundcluster.dk/the-future-sound-forum/"],
  ["24Victoria","https://24victoria.dk/artificial-and-intelligence-deep-tech/udvikler-xr-oplevelser-morten-haulik"],
  ["CBS Wire","https://cbswire.dk/healthy-glove-gaming-misoballs-and-a-virtual-midwife/"],
  ["DR2", null]
];

/* Portfolio card + modal content, all languages. */
const PORTFOLIO_DATA = {
  'project-nxtcare': {
    en:{tag:'Project',title:'NXT/Care',subtitle:'Founder. Calm, playful XR for children in hospitals and clinics',desc:"My company NXT/Care brings mixed-reality distraction to children during blood tests, IV placement and dental visits in the Capital Region of Denmark.",content:["Needles, drills and waiting rooms are scary when you are six. NXT/Care turns that time into play.","The experiences run in AR passthrough and use only the child's hands, so the child can always see the nurse, the parent and the room while their attention moves to the game. Setup takes under 60 seconds.","The catalogue includes 'Bag Tænderne', where children clean away virtual bacteria while the dentist works, the calm 'Sommerfugl' nature world, and 'Pusteven', a visual breathing exercise that gives the child a sense of control. Everything is built and tested together with Danish children, paediatric departments, specialists and dentists."]},
    da:{tag:'Projekt',title:'NXT/Care',subtitle:'Stifter. Tryg og legende XR til børn på hospitaler og klinikker',desc:"Min virksomhed NXT/Care giver børn mixed reality-distraktion under blodprøver, IV-anlæggelse og tandlægebesøg i Region Hovedstaden.",content:["Nåle, boremaskiner og venteværelser er skræmmende, når man er seks år. NXT/Care forvandler den tid til leg.","Oplevelserne kører i AR-passthrough og bruger kun barnets hænder, så barnet altid kan se sygeplejersken, forælderen og rummet, mens opmærksomheden flyttes over i spillet. Opsætningen tager under 60 sekunder.","Kataloget rummer bl.a. 'Bag Tænderne', hvor barnet fjerner virtuelle bakterier, mens tandlægen arbejder, det rolige naturunivers 'Sommerfugl' og 'Pusteven', en visuel vejrtrækningsøvelse, der giver barnet kontrol og ro. Alt er udviklet og testet sammen med danske børn, børneafdelinger, speciallæger og tandlæger."]},
    de:{tag:'Projekt',title:'NXT/Care',subtitle:'Ruhige, spielerische XR für Kinder in Kliniken und Praxen',desc:"Mixed-Reality-Ablenkung für Kinder bei Blutabnahmen, Infusionen und Zahnarztbesuchen, im Einsatz in der Region Hovedstaden (Dänemark).",content:["Nadeln, Bohrer und Wartezimmer sind beängstigend, wenn man sechs ist. NXT/Care verwandelt diese Zeit in Spiel.","Die Erlebnisse laufen im AR-Passthrough und nutzen nur die Hände des Kindes. So sieht das Kind jederzeit Pflegekraft, Eltern und Raum, während die Aufmerksamkeit ins Spiel wandert. Die Einrichtung dauert unter 60 Sekunden.","Zum Katalog gehören u. a. 'Bag Tænderne', bei dem Kinder virtuelle Bakterien entfernen, während der Zahnarzt arbeitet, die ruhige Naturwelt 'Sommerfugl' und 'Pusteven', eine visuelle Atemübung. Alles wurde gemeinsam mit dänischen Kindern, Kinderstationen und Zahnärzten entwickelt und getestet."]},
    it:{tag:'Progetto',title:'NXT/Care',subtitle:'XR rassicurante e giocosa per bambini in ospedali e cliniche',desc:"Distrazione in realtà mista per bambini durante prelievi, accessi venosi e visite dentistiche, in uso nella Regione Capitale danese.",content:["Aghi, trapani e sale d'attesa fanno paura quando hai sei anni. NXT/Care trasforma quel tempo in gioco.","Le esperienze funzionano in passthrough AR e usano solo le mani del bambino, che vede sempre l'infermiere, il genitore e la stanza mentre l'attenzione si sposta sul gioco. La configurazione richiede meno di 60 secondi.","Il catalogo include 'Bag Tænderne', in cui il bambino elimina batteri virtuali mentre il dentista lavora, il rilassante mondo naturale 'Sommerfugl' e 'Pusteven', un esercizio visivo di respirazione. Tutto è sviluppato e testato con bambini, reparti pediatrici e dentisti danesi."]},
    fr:{tag:'Projet',title:'NXT/Care',subtitle:"Une XR rassurante et ludique pour les enfants à l'hôpital et en clinique",desc:"Distraction en réalité mixte pour les enfants pendant les prises de sang, les perfusions et les soins dentaires, utilisée dans la Région capitale du Danemark.",content:["Les aiguilles, les fraises et les salles d'attente font peur quand on a six ans. NXT/Care transforme ce temps en jeu.","Les expériences fonctionnent en passthrough AR et n'utilisent que les mains de l'enfant, qui voit toujours l'infirmière, le parent et la pièce pendant que son attention passe au jeu. L'installation prend moins de 60 secondes.","Le catalogue comprend 'Bag Tænderne', où l'enfant élimine des bactéries virtuelles pendant que le dentiste travaille, l'univers apaisant 'Sommerfugl' et 'Pusteven', un exercice de respiration visuel. Tout est conçu et testé avec des enfants, des services de pédiatrie et des dentistes danois."]}
  },
  'game-holorange': {
    en:{tag:'Game',title:'HoloRange',subtitle:'Free WebXR mixed-reality shooter on NXT/WebXR',desc:"Turns the room you are standing in into a hologram shooting range. Dual-wield blasters, clear four stages, then face the Colossus.",content:["HoloRange is a free mixed-reality shooter that runs straight in the headset browser: no app store, no download, no account.","Holographic targets come at you in waves across four stages (Peek, Breach, Wide Arc and Surrounded), with runners and juggernauts joining in before the Colossus boss arrives. Grab a second blaster to dual wield; headshots, accuracy and multi-kills all count.","I designed and built it to show what WebXR can do in mixed reality today, in your own living room."]},
    da:{tag:'Spil',title:'HoloRange',subtitle:'Gratis WebXR mixed reality-skydespil på NXT/WebXR',desc:"Forvandler rummet, du står i, til en hologram-skydebane. To blastere, fire baner, og til sidst Colossus.",content:["HoloRange er et gratis mixed reality-skydespil, der kører direkte i headsettets browser: ingen app store, ingen download, ingen konto.","Holografiske mål angriber i bølger over fire baner (Peek, Breach, Wide Arc og Surrounded), med løbere og juggernauts, før bossen Colossus dukker op. Grib en blaster mere for at skyde med begge hænder; headshots, præcision og multi-kills tæller.","Jeg har designet og bygget det for at vise, hvad WebXR kan i mixed reality i dag, i din egen stue."]},
    de:{tag:'Spiel',title:'HoloRange',subtitle:'Kostenloser WebXR-Mixed-Reality-Shooter auf NXT/WebXR',desc:"Verwandelt den Raum, in dem du stehst, in einen Hologramm-Schießstand. Zwei Blaster, vier Stages, dann der Colossus.",content:["HoloRange ist ein kostenloser Mixed-Reality-Shooter, der direkt im Headset-Browser läuft: kein App Store, kein Download, kein Konto.","Holografische Ziele greifen in Wellen über vier Stages an, bevor der Boss Colossus erscheint. Mit einem zweiten Blaster wird beidhändig geschossen; Headshots, Präzision und Multi-Kills zählen.","Ich habe es entworfen und gebaut, um zu zeigen, was WebXR heute in Mixed Reality kann, im eigenen Wohnzimmer."]},
    it:{tag:'Gioco',title:'HoloRange',subtitle:'Sparatutto WebXR gratuito in realtà mista su NXT/WebXR',desc:"Trasforma la stanza in cui ti trovi in un poligono di tiro olografico. Due blaster, quattro livelli, poi il Colossus.",content:["HoloRange è uno sparatutto gratuito in realtà mista che funziona direttamente nel browser del visore: niente app store, niente download, niente account.","Bersagli olografici arrivano a ondate su quattro livelli prima del boss Colossus. Afferra un secondo blaster per sparare con due mani; colpi alla testa, precisione e uccisioni multiple contano.","L'ho progettato e sviluppato per mostrare cosa può fare oggi WebXR in realtà mista, nel tuo salotto."]},
    fr:{tag:'Jeu',title:'HoloRange',subtitle:'Jeu de tir WebXR gratuit en réalité mixte sur NXT/WebXR',desc:"Transforme la pièce où vous êtes en stand de tir holographique. Deux blasters, quatre niveaux, puis le Colossus.",content:["HoloRange est un jeu de tir gratuit en réalité mixte qui tourne directement dans le navigateur du casque : pas d'app store, pas de téléchargement, pas de compte.","Des cibles holographiques arrivent par vagues sur quatre niveaux avant le boss Colossus. Saisissez un second blaster pour tirer à deux mains ; tirs à la tête, précision et éliminations multiples comptent.","Je l'ai conçu et développé pour montrer ce que WebXR permet aujourd'hui en réalité mixte, dans votre salon."]}
  },
  'game-fishstick': {
    en:{tag:'Game',title:'Meows Freaky Fishstick Factory',subtitle:'Free WebXR mixed-reality rage game on NXT/WebXR',desc:"You are a cat on a fish stick conveyor belt, and your boss is a bigger, angrier cat. Swat only the weird ones.",content:["Most fish sticks are perfectly normal. Some are not: one wears a bow tie, one has a monocle, one has a face on both ends, one is doing a handstand.","Swat only the weird ones before they get shipped and let the normal ones pass. Then the boss turns the belt up. See how far you get before you're fired.","A free mixed-reality game that plays in your own room, straight from the headset browser."]},
    da:{tag:'Spil',title:'Meows Freaky Fishstick Factory',subtitle:'Gratis WebXR mixed reality-spil på NXT/WebXR',desc:"Du er en kat ved et samlebånd med fiskestænger, og din chef er en større, vredere kat. Slå kun de mærkelige.",content:["De fleste fiskestænger er helt normale. Nogle er ikke: én har butterfly, én har monokel, én har ansigt i begge ender, én står på hænder.","Slå kun de mærkelige, før de bliver sendt afsted, og lad de normale passere. Så skruer chefen op for båndet. Hvor langt når du, før du bliver fyret?","Et gratis mixed reality-spil, der spilles i din egen stue, direkte fra headsettets browser."]},
    de:{tag:'Spiel',title:'Meows Freaky Fishstick Factory',subtitle:'Kostenloses WebXR-Mixed-Reality-Spiel auf NXT/WebXR',desc:"Du bist eine Katze am Fischstäbchen-Fließband, und dein Chef ist eine größere, wütendere Katze. Schlag nur die seltsamen.",content:["Die meisten Fischstäbchen sind ganz normal. Manche nicht: eines trägt Fliege, eines Monokel, eines macht einen Handstand.","Schlag nur die seltsamen, bevor sie verschickt werden. Dann dreht der Chef das Band hoch. Wie weit kommst du, bevor du gefeuert wirst?","Ein kostenloses Mixed-Reality-Spiel für das eigene Zimmer, direkt im Headset-Browser."]},
    it:{tag:'Gioco',title:'Meows Freaky Fishstick Factory',subtitle:'Gioco WebXR gratuito in realtà mista su NXT/WebXR',desc:"Sei un gatto su un nastro di bastoncini di pesce, e il tuo capo è un gatto più grosso e più arrabbiato. Colpisci solo quelli strani.",content:["La maggior parte dei bastoncini è normale. Alcuni no: uno ha il papillon, uno il monocolo, uno fa la verticale.","Colpisci solo quelli strani prima che vengano spediti. Poi il capo accelera il nastro. Quanto resisti prima di essere licenziato?","Un gioco gratuito in realtà mista che si gioca nella tua stanza, direttamente dal browser del visore."]},
    fr:{tag:'Jeu',title:'Meows Freaky Fishstick Factory',subtitle:'Jeu WebXR gratuit en réalité mixte sur NXT/WebXR',desc:"Vous êtes un chat sur un tapis de bâtonnets de poisson, et votre patron est un chat plus gros et plus en colère. Frappez seulement les bizarres.",content:["La plupart des bâtonnets sont normaux. Certains non : l'un porte un nœud papillon, l'autre un monocle, un autre fait le poirier.","Frappez seulement les bizarres avant leur expédition. Puis le patron accélère le tapis. Jusqu'où irez-vous avant d'être viré ?","Un jeu gratuit en réalité mixte qui se joue dans votre pièce, directement depuis le navigateur du casque."]}
  },
  'game-diehaende': {
    en:{tag:'Game',title:'die Hände',subtitle:'Free WebXR hand-tracking horror on NXT/WebXR',desc:"A dead hand wakes under glass, Specimen Nº 13, and moves as you move. Set it free, and see how long it keeps obeying.",content:["die Hände is played with your bare hands, using your headset's hand tracking. Put the controllers down and lay your hand on the plate to wake the specimen.","The hand copies yours, walks on its fingers, and then wants to play you, first to three: keep still while it stares, move when it looks away.","A small, eerie mixed-reality piece built to show how expressive hand tracking in the browser has become."]},
    da:{tag:'Spil',title:'die Hände',subtitle:'Gratis WebXR-gyser med håndsporing på NXT/WebXR',desc:"En død hånd vågner under glas, Specimen Nº 13, og bevæger sig, som du bevæger dig. Sæt den fri, og se hvor længe den adlyder.",content:["die Hände spilles med dine bare hænder via headsettets håndsporing. Læg controllerne fra dig og læg hånden på pladen for at vække præparatet.","Hånden efterligner din, går på fingrene og vil så spille mod dig, først til tre: hold dig i ro, når den stirrer, og bevæg dig, når den kigger væk.","Et lille, uhyggeligt mixed reality-værk, der viser, hvor udtryksfuld håndsporing i browseren er blevet."]},
    de:{tag:'Spiel',title:'die Hände',subtitle:'Kostenloser WebXR-Horror mit Hand-Tracking auf NXT/WebXR',desc:"Eine tote Hand erwacht unter Glas, Specimen Nº 13, und bewegt sich, wie du dich bewegst. Befreie sie und sieh, wie lange sie gehorcht.",content:["die Hände wird mit bloßen Händen über das Hand-Tracking des Headsets gespielt. Leg die Controller weg und die Hand auf die Platte, um das Präparat zu wecken.","Die Hand ahmt deine nach, läuft auf den Fingern und will dann gegen dich spielen, bis drei: still halten, wenn sie starrt, bewegen, wenn sie wegschaut.","Ein kleines, unheimliches Mixed-Reality-Stück, das zeigt, wie ausdrucksstark Hand-Tracking im Browser geworden ist."]},
    it:{tag:'Gioco',title:'die Hände',subtitle:'Horror WebXR gratuito con hand tracking su NXT/WebXR',desc:"Una mano morta si sveglia sotto una campana di vetro, Specimen Nº 13, e si muove come ti muovi tu. Liberala e scopri per quanto obbedisce.",content:["die Hände si gioca a mani nude con l'hand tracking del visore. Posa i controller e appoggia la mano sulla piastra per risvegliare il reperto.","La mano copia la tua, cammina sulle dita e poi vuole sfidarti, al meglio dei tre: resta immobile quando ti fissa, muoviti quando distoglie lo sguardo.","Un piccolo pezzo inquietante in realtà mista che mostra quanto è diventato espressivo l'hand tracking nel browser."]},
    fr:{tag:'Jeu',title:'die Hände',subtitle:'Horreur WebXR gratuite avec suivi des mains sur NXT/WebXR',desc:"Une main morte se réveille sous une cloche de verre, Specimen Nº 13, et bouge comme vous. Libérez-la et voyez combien de temps elle obéit.",content:["die Hände se joue à mains nues grâce au suivi des mains du casque. Posez les manettes et la main sur la plaque pour réveiller le spécimen.","La main imite la vôtre, marche sur ses doigts, puis veut jouer contre vous, en trois manches : restez immobile quand elle vous fixe, bougez quand elle détourne le regard.","Une petite pièce inquiétante en réalité mixte qui montre à quel point le suivi des mains dans le navigateur est devenu expressif."]}
  },
  'keynote-ida': {
    en:{tag:'Keynote',title:'IDA: Driving Health Tech',subtitle:'Spatial Computing as future healthcare',desc:"As co-founder and XR architect, I took the stage at IDA's Driving Health Tech conference to demonstrate how MidwifeXR solves critical challenges on maternity wards.",quote:"The cutting-edge conference Driving Health Tech is IDA's annual health tech conference, where we focus on new revolutionary methods and health tech solutions...",content:["How can immersive technology help new parents and benefit the establishment of breastfeeding?","Watch or re-watch my talk from Driving Health Tech in Aarhus, where I, along with midwife Sofie Bonde Alsen, presented the XR platform I designed and developed to solve a massive problem in the healthcare sector during the lockdown of Denmark.","In my keynote, I dive into the engine room behind MidwifeXR and show concrete cases of how we alleviate the healthcare system's challenges with spatial computing – now and in the future."]},
    da:{tag:'Keynote',title:'IDA: Driving Health Tech',subtitle:'Spatial Computing som fremtidens sundhedsvæsen',desc:"Som medstifter og XR-arkitekt indtog jeg scenen på IDA's Driving Health Tech-konference for at demonstrere, hvordan MidwifeXR løser kritiske udfordringer på fødegangene.",quote:"Cutting-edge konferencen Driving Health Tech er IDAs årlige sundhedsteknologiske konference, hvor vi sætter spot på nye revolutionerende metoder og sundhedsteknologiske løsninger...",content:["Hvordan kan fordybende teknologi hjælpe nybagte forældre og gavne amme-etableringen?","Se eller gense min talk fra Driving Health Tech i Aarhus, hvor jeg, sammen med jordemoder Sofie Bonde Alsen, præsenterede den XR-platform, jeg har designet og udviklet for at løse et massivt problem i sundhedssektoren under nedlukningen af Danmark.","I min keynote dykker jeg ned i maskinrummet bag MidwifeXR og viser konkrete cases på, hvordan vi med spatial computing afhjælper sundhedssystemets udfordringer – nu og i fremtiden."]},
    de:{tag:'Keynote',title:'IDA: Driving Health Tech',subtitle:'Spatial Computing als zukünftiges Gesundheitswesen',desc:"Als Mitbegründer und XR-Architekt stand ich auf der Bühne der IDA, um zu demonstrieren, wie MidwifeXR kritische Herausforderungen auf Entbindungsstationen löst.",quote:"Die zukunftsweisende Konferenz Driving Health Tech ist die jährliche Gesundheitstechnologiekonferenz der IDA...",content:["Wie kann immersive Technologie frischgebackenen Eltern helfen?","Sehen Sie sich meinen Vortrag in Aarhus an, wo ich die von mir entworfene XR-Plattform vorgestellt habe, um ein massives Problem im Gesundheitssektor zu lösen.","In meiner Keynote tauche ich in den Maschinenraum hinter MidwifeXR ein und zeige konkrete Fälle, wie wir die Herausforderungen des Gesundheitssystems mit Spatial Computing lindern."]},
    it:{tag:'Keynote',title:'IDA: Driving Health Tech',subtitle:'Lo Spatial Computing come sanità del futuro',desc:"Come co-fondatore e architetto XR, sono salito sul palco per dimostrare come MidwifeXR risolve le sfide critiche nei reparti di maternità.",quote:"La conferenza all'avanguardia Driving Health Tech è la conferenza annuale sulla tecnologia sanitaria di IDA...",content:["Come può la tecnologia immersiva aiutare i neo genitori?","Guarda o riguarda il mio intervento in cui ho presentato la piattaforma XR che ho progettato e sviluppato per risolvere un enorme problema nel settore sanitario.","Nel mio keynote, mi immergo nella sala macchine dietro MidwifeXR e mostro casi concreti di come alleviamo le sfide del sistema sanitario con lo spatial computing."]},
    fr:{tag:'Keynote',title:'IDA: Driving Health Tech',subtitle:"L'informatique spatiale comme santé du futur",desc:"En tant que co-fondateur et architecte XR, je suis monté sur scène pour démontrer comment MidwifeXR résout les défis critiques des maternités.",quote:"La conférence de pointe Driving Health Tech est la conférence annuelle sur les technologies de la santé de l'IDA...",content:["Comment la technologie immersive peut-elle aider les nouveaux parents ?","Regardez ma conférence où j'ai présenté la plateforme XR que j'ai conçue et développée pour résoudre un problème massif dans le secteur de la santé.","Dans mon keynote, je plonge dans la salle des machines derrière MidwifeXR et montre des cas concrets de la façon dont nous atténuons les défis du système de santé avec l'informatique spatiale."]}
  },
  'highlight-kp': {
    en:{tag:'Highlight',title:'XR platform integrated in official curriculum',subtitle:'University College Copenhagen (KP)',desc:"A proud moment: Midwifery students at University College Copenhagen now actively use the platform I built in their official education.",content:["MidwifeXR on the Syllabus","As part of their official education, midwifery students at University College Copenhagen (KP) have now integrated our platform, MidwifeXR, directly into their teaching.","During their course on uncomplicated breastfeeding, students used the application to receive breastfeeding guidance via immersive scenarios. It is a strong example of how immersive technology can make a real and noticeable difference in practice."]},
    da:{tag:'Highlight',title:'XR-platform integreret i officielt pensum',subtitle:'Københavns Professionshøjskole (KP)',desc:"Et stolt øjeblik: Jordemoderstuderende på Københavns Professionshøjskole bruger nu den platform, jeg har bygget, aktivt i deres officielle uddannelse.",content:["MidwifeXR på Uddannelsesskemaet","Som en del af deres officielle uddannelse har jordemoderstuderende på Københavns Professionshøjskole (KP) nu integreret vores platform, MidwifeXR, direkte i undervisningen.","Under deres forløb om ukompliceret amning benyttede de studerende applikationen til at få ammevejledning via immersive scenarier. Det er et stærkt eksempel på, hvordan fordybende teknologi kan gøre en reel og mærkbar forskel i praksis."]},
    de:{tag:'Highlight',title:'XR-Plattform in offiziellen Lehrplan integriert',subtitle:'University College Copenhagen (KP)',desc:"Ein stolzer Moment: Hebammenstudenten nutzen nun aktiv die von mir entwickelte Plattform in ihrer offiziellen Ausbildung.",content:["MidwifeXR auf dem Lehrplan","Als Teil ihrer offiziellen Ausbildung haben Hebammenstudenten nun unsere Plattform MidwifeXR direkt in ihren Unterricht integriert.","Während ihres Kurses über unkompliziertes Stillen nutzten die Studenten die Anwendung, um über immersive Szenarien Stillberatung zu erhalten. Ein starkes Beispiel dafür, wie immersive Technologie in der Praxis einen echten Unterschied machen kann."]},
    it:{tag:'Highlight',title:'Piattaforma XR integrata nel curriculum ufficiale',subtitle:'University College Copenhagen (KP)',desc:"Un momento di orgoglio: gli studenti di ostetricia ora utilizzano attivamente la piattaforma che ho costruito nella loro istruzione ufficiale.",content:["MidwifeXR sul programma","Come parte della loro formazione ufficiale, gli studenti di ostetricia hanno ora integrato la nostra piattaforma, MidwifeXR, direttamente nel loro insegnamento.","Durante il loro corso sull'allattamento al seno, gli studenti hanno utilizzato l'applicazione per ricevere indicazioni tramite scenari immersivi. È un forte esempio di come la tecnologia immersiva possa fare una vera differenza nella pratica."]},
    fr:{tag:'Highlight',title:'Plateforme XR intégrée au programme officiel',subtitle:'University College Copenhagen (KP)',desc:"Un moment de fierté : les étudiants en maïeutique utilisent désormais activement la plateforme que j'ai construite dans leur formation officielle.",content:["MidwifeXR au programme","Dans le cadre de leur formation officielle, les étudiants en maïeutique ont désormais intégré notre plateforme, MidwifeXR, directement dans leur enseignement.","Lors de leur cours sur l'allaitement, les étudiants ont utilisé l'application pour recevoir des conseils via des scénarios immersifs. C'est un exemple fort de la façon dont la technologie immersive peut faire une réelle différence dans la pratique."]}
  },
  'press-berlingske': {
    en:{tag:'Press',title:'Berlingske: VR startup solves problems for parents',subtitle:'Spatial Computing relieves maternity wards.',desc:"In a major interview with Berlingske, my co-founder discusses the vision behind MidwifeVR and how we use technology to tackle staff shortages.",content:["Technology meets a pressured healthcare system","Sore breasts, milk that doesn't flow, and critical staff shortages on Danish maternity wards. These are just some of the challenges new mothers face.","In this interview, Berlingske focuses on how we at MidwifeVR have entered the fight to solve these problems through immersive, easily accessible VR training, which I designed and built from scratch."]},
    da:{tag:'Presse',title:'Berlingske: VR-startup løser problemer for forældre',subtitle:'Spatial Computing aflaster fødegangene.',desc:"I et stort interview med Berlingske fortæller min co-founder om visionen bag MidwifeVR, og hvordan vi bruger teknologi til at tackle personalemanglen.",content:["Teknologi møder et presset sundhedsvæsen","Ømme bryster, mælk der ikke løber til, og kritisk personalemangel på de danske fødeafdelinger. Det er blot nogle af de udfordringer, nybagte mødre står med.","I dette interview sætter Berlingske fokus på, hvordan vi med MidwifeVR er gået ind i kampen for at løse disse problemer gennem fordybende, lettilgængelig VR-træning, som jeg har designet og bygget fra bunden."]},
    de:{tag:'Presse',title:'Berlingske: VR-Startup löst Probleme für Eltern',subtitle:'Spatial Computing entlastet Entbindungsstationen.',desc:"In einem großen Interview mit Berlingske spricht mein Mitbegründer über die Vision hinter MidwifeVR und wie wir Technologie nutzen.",content:["Technologie trifft auf ein unter Druck stehendes Gesundheitssystem","Wunde Brüste, Milch, die nicht fließt, und kritischer Personalmangel. Das sind nur einige der Herausforderungen, denen sich frischgebackene Mütter gegenübersehen.","In diesem Interview konzentriert sich Berlingske darauf, wie wir bei MidwifeVR den Kampf aufgenommen haben, um diese Probleme durch immersives VR-Training zu lösen, das ich von Grund auf neu entwickelt habe."]},
    it:{tag:'Stampa',title:'Berlingske: La startup VR risolve i problemi per i genitori',subtitle:'Lo Spatial Computing allevia i reparti di maternità.',desc:"In una grande intervista a Berlingske, il mio co-fondatore discute la visione dietro MidwifeVR.",content:["La tecnologia incontra un sistema sanitario sotto pressione","Seni doloranti, latte che non scorre e carenza critica di personale. Queste sono solo alcune delle sfide.","In questa intervista, Berlingske si concentra su come noi di MidwifeVR siamo entrati in campo per risolvere questi problemi attraverso una formazione VR immersiva, che ho progettato e costruito da zero."]},
    fr:{tag:'Presse',title:'Berlingske: Une startup VR résout les problèmes des parents',subtitle:"L'informatique spatiale soulage les maternités.",desc:"Dans une grande interview avec Berlingske, mon co-fondateur discute de la vision derrière MidwifeVR.",content:["La technologie rencontre un système de santé sous pression","Des seins douloureux, du lait qui ne coule pas et une pénurie critique de personnel. Ce ne sont là que quelques-uns des défis.","Dans cette interview, Berlingske se concentre sur la façon dont nous, chez MidwifeVR, sommes entrés dans la lutte pour résoudre ces problèmes grâce à une formation VR immersive, que j'ai conçue et construite à partir de zéro."]}
  },
  'media-24victoria': {
    en:{tag:'Press',title:'Morten Haulik develops XR experiences in new ways',subtitle:'NXTWebXR x Herlev Hospital',desc:"In this segment, we focus on how I collaborate with Herlev Hospital to integrate spatial computing into daily clinical life.",content:["Morten Haulik is the founder of NXTWebXR and collaborates with Herlev Hospital to integrate XR technology into everyday life.","He has worked in the VR and AR industry for ten years (XR combines both). Both the US and Europe lag far behind Asia, where they utilize the technology and free up massive resources in, for example, hospitals."]},
    da:{tag:'Presse',title:'Morten Haulik udvikler XR-oplevelser på nye måder',subtitle:'NXTWebXR x Herlev Hospital',desc:"I dette indslag sætter vi fokus på, hvordan jeg samarbejder med Herlev Hospital om at integrere spatial computing i den kliniske dagligdag.",content:["Morten Haulik er founder af NXTWebXR og samarbejder med Herlev Hospital om at integrere XR-teknologien i dagligdagen.","Han har arbejdet i VR- og AR-industrien i ti år (XR samler begge). Både USA og Europa halter langt efter Asien, hvor man udnytter teknologien og frigør store kræfter på for eksempel hospitaler."]},
    de:{tag:'Presse',title:'Morten Haulik entwickelt XR-Erlebnisse auf neue Weise',subtitle:'NXTWebXR x Herlev Krankenhaus',desc:"In diesem Beitrag konzentrieren wir uns darauf, wie ich mit dem Herlev-Krankenhaus zusammenarbeite.",content:["Morten Haulik ist der Gründer von NXTWebXR und arbeitet mit dem Herlev-Krankenhaus zusammen, um XR-Technologie in den Alltag zu integrieren.","Er arbeitet seit zehn Jahren in der VR- und AR-Branche (XR vereint beides). Sowohl die USA als auch Europa hinken Asien weit hinterher, wo die Technologie genutzt wird, um beispielsweise in Krankenhäusern enorme Ressourcen freizusetzen."]},
    it:{tag:'Stampa',title:'Morten Haulik sviluppa esperienze XR in modi nuovi',subtitle:'NXTWebXR x Herlev Hospital',desc:"In questo segmento, ci concentriamo su come collaboro con l'Herlev Hospital per integrare lo spatial computing.",content:["Morten Haulik è il fondatore di NXTWebXR e collabora con l'Herlev Hospital per integrare la tecnologia XR nella vita di tutti i giorni.","Lavora nel settore VR e AR da dieci anni (l'XR unisce entrambi). Sia gli Stati Uniti che l'Europa sono molto indietro rispetto all'Asia, dove la tecnologia viene utilizzata per liberare enormi risorse in ospedali, per esempio."]},
    fr:{tag:'Presse',title:'Morten Haulik développe des expériences XR de nouvelles manières',subtitle:'NXTWebXR x Hôpital de Herlev',desc:"Dans ce segment, nous nous concentrons sur la façon dont je collabore avec l'hôpital Herlev pour intégrer l'informatique spatiale.",content:["Morten Haulik est le fondateur de NXTWebXR et collabore avec l'hôpital de Herlev pour intégrer la technologie XR dans la vie quotidienne.","Il travaille dans l'industrie de la VR et de l'AR depuis dix ans (la XR réunit les deux). Les États-Unis et l'Europe sont loin derrière l'Asie, où la technologie est utilisée pour libérer des ressources massives dans les hôpitaux, par exemple."]}
  },
  'project-nxt': {
    en:{tag:'Project',title:'NXT/WebXR Platform',subtitle:'The front page of the spatial internet.',desc:"Can discovering immersive content be as seamless as browsing the web? That is the challenge I solved with NXT/WebXR.",content:["Can discovering immersive content be as seamless as browsing the web? That is the challenge I solved with NXT/WebXR. Today, it stands as one of the world's leading spatial computing platforms.","Every single day, users from all over the globe visit NXT/WebXR to browse through immersive experiences and games directly from their headsets. No app stores, no friction—just instant access to making memories and finding new favorite content on the spatial internet."]},
    da:{tag:'Projekt',title:'NXT/WebXR Platform',subtitle:'Forsiden til det rummelige internet.',desc:"Kan opdagelsen af immersivt indhold være lige så gnidningsløst som at browse nettet? Det løste jeg med NXT/WebXR.",content:["Kan opdagelsen af immersivt indhold være lige så gnidningsløst som at browse nettet? Det er den udfordring, jeg løste med NXT/WebXR. I dag står den som en af verdens førende spatial computing-platforme.","Hver eneste dag besøger brugere fra hele kloden NXT/WebXR for at browse gennem immersive oplevelser og spil direkte fra deres headsets. Ingen app stores, ingen friktion – bare øjeblikkelig adgang til at skabe minder og finde nyt yndlingsindhold på det rummelige internet."]},
    de:{tag:'Projekt',title:'NXT/WebXR Plattform',subtitle:'Die Startseite des räumlichen Internets.',desc:"Kann die Entdeckung immersiver Inhalte so nahtlos sein wie das Surfen im Internet? Das habe ich mit NXT/WebXR gelöst.",content:["Kann die Entdeckung immersiver Inhalte so nahtlos sein wie das Surfen im Internet? Das ist die Herausforderung, die ich mit NXT/WebXR gelöst habe. Heute ist es eine der weltweit führenden Spatial Computing Plattformen.","Jeden Tag besuchen Benutzer aus der ganzen Welt NXT/WebXR, um immersive Erlebnisse direkt von ihren Headsets aus zu durchsuchen. Keine App-Stores, keine Reibung."]},
    it:{tag:'Progetto',title:'Piattaforma NXT/WebXR',subtitle:"La prima pagina dell'internet spaziale.",desc:"La scoperta di contenuti immersivi può essere fluida come navigare sul web? Questa è la sfida che ho risolto con NXT/WebXR.",content:["La scoperta di contenuti immersivi può essere fluida come navigare sul web? Questa è la sfida che ho risolto con NXT/WebXR. Oggi è una delle principali piattaforme di spatial computing al mondo.","Ogni singolo giorno, utenti da tutto il mondo visitano NXT/WebXR per sfogliare esperienze immersive e giochi direttamente dai loro visori. Nessun app store, nessuna frizione."]},
    fr:{tag:'Projet',title:'Plateforme NXT/WebXR',subtitle:"La page d'accueil de l'internet spatial.",desc:"La découverte de contenu immersif peut-elle être aussi fluide que la navigation sur le web ? C'est le défi que j'ai relevé avec NXT/WebXR.",content:["La découverte de contenu immersif peut-elle être aussi fluide que la navigation sur le web ? C'est le défi que j'ai relevé avec NXT/WebXR. Aujourd'hui, elle s'impose comme l'une des principales plateformes d'informatique spatiale au monde.","Chaque jour, des utilisateurs du monde entier visitent NXT/WebXR pour parcourir des expériences immersives et des jeux directement depuis leurs casques. Pas d'app stores, pas de friction."]}
  },
  'podcast-apple': {
    en:{tag:'Podcast',title:'The Apple Glasses in Pilestræde',subtitle:'Berlingske Podcast: Apple Vision Pro Analysis',desc:"I was invited into the studio at Berlingske to give my expert opinion on Apple's massive entry into spatial computing.",quote:"»You've never seen anything like it,« promised Apple boss Tim Cook. But as a tech pioneer, I have a more nuanced view of the hardware.",content:["When Apple presented Vision Pro – the headset that breaks down the boundary between physical and digital reality – they promised a revolution.","In the podcast, I explain why the headset is not (yet) a consumer revolution on par with the first iPhone. However, it is the ultimate developer platform for creating the immersive content of the future. I guested the program to cut through the hype."]},
    da:{tag:'Podcast',title:'Æblebrillen i Pilestræde',subtitle:'Berlingske Podcast: Apple Vision Pro Analyse',desc:"Jeg var inviteret i studiet hos Kaare Svejstrup på Berlingske for at give mit ekspertbesyv på Apples massive indtog i spatial computing.",quote:"»Du har aldrig set noget lignende,« lovede Apple-boss Tim Cook. Men som tech-pioner og XR-udvikler har jeg et mere nuanceret blik på hardwaren.",content:["Da Apple præsenterede Vision Pro – headsettet der nedbryder grænsen mellem den fysiske og digitale virkelighed – lovede de en revolution.","I podcasten forklarer jeg, hvorfor headsettet (endnu) ikke er en forbruger-revolution på linje med den første iPhone. Til gengæld er det den ultimative udvikler-platform til at skabe fremtidens immersive indhold. Jeg gæstede programmet for at skære igennem hypen og give lytterne det ægte billede af fremtidens rummelige computere."]},
    de:{tag:'Podcast',title:'Die Apple-Brille in Pilestræde',subtitle:'Berlingske Podcast: Apple Vision Pro Analyse',desc:"Ich war ins Studio bei Berlingske eingeladen, um meine Expertenmeinung zu Apples massivem Einstieg in das Spatial Computing abzugeben.",quote:"»So etwas haben Sie noch nie gesehen«, versprach Apple-Chef Tim Cook. Aber als Tech-Pionier habe ich eine differenziertere Sicht auf die Hardware.",content:["Als Apple Vision Pro vorstellte, versprachen sie eine Revolution.","Im Podcast erkläre ich, warum das Headset (noch) keine Verbraucherrevolution auf Augenhöhe mit dem ersten iPhone ist. Es ist jedoch die ultimative Entwicklerplattform."]},
    it:{tag:'Podcast',title:'Gli occhiali Apple a Pilestræde',subtitle:'Berlingske Podcast: Analisi Apple Vision Pro',desc:"Sono stato invitato in studio al Berlingske per dare la mia opinione di esperto sul massiccio ingresso di Apple nello spatial computing.",quote:"»Non hai mai visto niente del genere«, ha promesso il capo di Apple Tim Cook. Ma come pioniere della tecnologia, ho una visione più sfumata.",content:["Quando Apple ha presentato Vision Pro, ha promesso una rivoluzione.","Nel podcast, spiego perché il visore non è (ancora) una rivoluzione per i consumatori alla pari del primo iPhone. Tuttavia, è l'ultima piattaforma di sviluppo."]},
    fr:{tag:'Podcast',title:'Les lunettes Apple à Pilestræde',subtitle:'Podcast Berlingske : Analyse Apple Vision Pro',desc:"J'ai été invité en studio au Berlingske pour donner mon avis d'expert sur l'entrée massive d'Apple dans l'informatique spatiale.",quote:"»Vous n'avez jamais rien vu de tel«, a promis le patron d'Apple, Tim Cook. Mais en tant que pionnier de la technologie, j'ai une vision plus nuancée.",content:["Lorsqu'Apple a présenté Vision Pro, ils ont promis une révolution.","Dans le podcast, j'explique pourquoi le casque n'est pas (encore) une révolution grand public au même titre que le premier iPhone. Cependant, c'est la plateforme de développement ultime."]}
  },
  'panel-sound': {
    en:{tag:'Panel',title:'The Sound of XR',subtitle:'Future Sound Forum • Danish Sound Cluster',desc:"Invited as a panelist to share my knowledge about spatial computing together with representatives from Bang & Olufsen.",content:["The Future Sound Forum","I was invited as a panelist to share my experiences with spatial computing on stage alongside leading profiles from, among others, Bang & Olufsen. We discussed in depth how spatial audio plays an absolutely crucial role for presence in the creation of immersive worlds and future experiences."]},
    da:{tag:'Panel',title:'The Sound of XR',subtitle:'Future Sound Forum • Danish Sound Cluster',desc:"Inviteret som paneldeltager for at dele min viden om spatial computing sammen med repræsentanter fra bl.a. Bang & Olufsen.",content:["The Future Sound Forum","Jeg var inviteret som paneldeltager for at dele mine erfaringer med spatial computing på scenen sammen med førende profiler fra bl.a. Bang & Olufsen. Vi diskuterede indgående, hvordan rummelig lyd spiller en fuldstændig afgørende rolle for tilstedeværelsen (presence) i skabelsen af immersive verdener og fremtidens oplevelser."]},
    de:{tag:'Panel',title:'Der Sound von XR',subtitle:'Future Sound Forum • Danish Sound Cluster',desc:"Eingeladen als Diskussionsteilnehmer, um mein Wissen über Spatial Computing zusammen mit Vertretern von Bang & Olufsen zu teilen.",content:["The Future Sound Forum","Ich war als Diskussionsteilnehmer eingeladen, um meine Erfahrungen mit Spatial Computing auf der Bühne zusammen mit führenden Profilen von unter anderem Bang & Olufsen zu teilen. Wir haben ausführlich darüber diskutiert, wie räumlicher Klang eine entscheidende Rolle für die Präsenz in immersiven Welten spielt."]},
    it:{tag:'Panel',title:"Il suono dell'XR",subtitle:'Future Sound Forum • Danish Sound Cluster',desc:"Invitato come relatore per condividere le mie conoscenze sullo spatial computing insieme ai rappresentanti di Bang & Olufsen.",content:["The Future Sound Forum","Sono stato invitato come relatore per condividere le mie esperienze con lo spatial computing sul palco insieme a profili di spicco di Bang & Olufsen. Abbiamo discusso approfonditamente di come l'audio spaziale giochi un ruolo cruciale per la presenza in mondi immersivi."]},
    fr:{tag:'Panel',title:'Le son de la XR',subtitle:'Future Sound Forum • Danish Sound Cluster',desc:"Invité en tant que panéliste pour partager mes connaissances sur l'informatique spatiale avec des représentants de Bang & Olufsen.",content:["The Future Sound Forum","J'ai été invité en tant que panéliste pour partager mes expériences avec l'informatique spatiale sur scène aux côtés de profils de premier plan de Bang & Olufsen. Nous avons discuté en profondeur de la manière dont l'audio spatial joue un rôle crucial pour la présence dans les mondes immersifs."]}
  },
  'press-kulturmagasinet': {
    en:{tag:'Podcast',title:'XR in Kulturmagasinet',subtitle:'What will Apple Vision Pro mean?',desc:"Together with Christiane Vejlø, I visited Radio4 to analyze the impact spatial computing will have on the cultural industry.",content:["I visited Radio4's Kulturmagasinet together with tech expert Christiane Vejlø to analyze what influence Apple Vision Pro will have on the cultural industry.","Spoiler alert: I emphasize that although spatial computing is undoubtedly the future, we are in a phase where the hardware is primarily an invaluable tool for developers. Someone has to build the foundation and fill up the spatial internet before the big mainstream breakthrough hits the ordinary consumer. That is exactly what we are doing now."]},
    da:{tag:'Podcast',title:'XR i Kulturmagasinet',subtitle:'Hvad kommer Apple Vision Pro til at betyde?',desc:"Sammen med Christiane Vejlø besøgte jeg Radio4 for at analysere, hvilken indflydelse spatial computing får på kulturindustrien.",content:["Jeg besøgte Radio4's Kulturmagasinet sammen med tech-ekspert Christiane Vejlø for at analysere, hvilken indflydelse Apple Vision Pro får for kulturindustrien.","Spoiler alert: Jeg fremhæver, at selvom spatial computing utvivlsomt er fremtiden, er vi i en fase, hvor hardwaren primært er et uvurderligt værktøj for udviklere. Det handler om at give os adgang til mediet, så vi kan skabe og forme indholdet. Nogen skal jo bygge fundamentet og fylde det rummelige internet op, før det store mainstream-gennembrud rammer den almindelige forbruger. Det er netop dét, vi gør nu."]},
    de:{tag:'Podcast',title:'XR im Kulturmagasinet',subtitle:'Was wird Apple Vision Pro bedeuten?',desc:"Zusammen mit Christiane Vejlø besuchte ich Radio4, um die Auswirkungen von Spatial Computing auf die Kulturindustrie zu analysieren.",content:["Ich besuchte Radio4s Kulturmagasinet zusammen mit der Tech-Expertin Christiane Vejlø, um zu analysieren, welchen Einfluss Apple Vision Pro auf die Kulturindustrie haben wird.","Spoiler-Alarm: Ich betone, dass Spatial Computing zweifellos die Zukunft ist, wir uns aber in einer Phase befinden, in der die Hardware in erster Linie ein Werkzeug für Entwickler ist. Jemand muss das Fundament bauen, bevor der große Durchbruch kommt. Genau das tun wir jetzt."]},
    it:{tag:'Podcast',title:'XR nel Kulturmagasinet',subtitle:'Cosa significherà Apple Vision Pro?',desc:"Insieme a Christiane Vejlø, ho visitato Radio4 per analizzare l'impatto che lo spatial computing avrà sull'industria culturale.",content:["Ho visitato il Kulturmagasinet di Radio4 insieme all'esperta di tecnologia Christiane Vejlø per analizzare quale influenza avrà Apple Vision Pro sull'industria culturale.","Spoiler alert: sottolineo che sebbene lo spatial computing sia senza dubbio il futuro, siamo in una fase in cui l'hardware è principalmente uno strumento inestimabile per gli sviluppatori. Qualcuno deve costruire le fondamenta prima che avvenga la grande svolta mainstream. Questo è esattamente ciò che stiamo facendo ora."]},
    fr:{tag:'Podcast',title:'XR dans le Kulturmagasinet',subtitle:'Que signifiera Apple Vision Pro ?',desc:"Avec Christiane Vejlø, j'ai visité Radio4 pour analyser l'impact de l'informatique spatiale sur l'industrie culturelle.",content:["J'ai visité le Kulturmagasinet de Radio4 avec l'experte en technologie Christiane Vejlø pour analyser l'influence qu'aura Apple Vision Pro sur l'industrie culturelle.","Alerte spoiler : je souligne que bien que l'informatique spatiale soit sans aucun doute l'avenir, nous sommes dans une phase où le matériel est principalement un outil inestimable pour les développeurs. Quelqu'un doit construire les fondations avant que la grande percée grand public n'arrive. C'est exactement ce que nous faisons maintenant."]}
  },
  'blog-webxr': {
    en:{tag:'Article',title:'Why WebXR is the Next Platform',subtitle:'The URL is the Portal',desc:"The App Store model is broken for immersive tech. The open web offers the only scalable, permissionless distribution channel.",quote:"Spatial computing won't be installed. It will be visited.",content:["The App Store model is broken for spatial computing. The open web offers the only scalable, permissionless distribution channel for immersive content. We need to stop thinking about 'apps' and start thinking about 'destinations'.","The magic of WebXR is that you don't 'download' an experience. You just click a link and you're there. The URL is the portal. This creates seamless traversal between experiences built by different developers.","WebXR is fully cross-platform, available out of the box on all modern headsets. Furthermore, you can host everything yourself, pushing the power out to the developers and organizations and away from the rigid control of big tech platforms.","With the advent of WebGPU, we are finally seeing graphics performance in the browser that rivals native applications. The barrier to entry is crumbling.","This paradigm shift requires a fundamental rethinking of how we design interfaces. Flat screens are windows; XR is a door."]},
    da:{tag:'Artikel',title:'Why WebXR is the Next Platform',subtitle:'The URL is the Portal',desc:"App Store-modellen er i stykker for immersiv teknologi. Det åbne web tilbyder den eneste skalerbare, tilladelsesfrie distributionskanal.",quote:"Spatial computing won't be installed. It will be visited.",content:["App Store-modellen er i stykker for spatial computing. Det åbne web tilbyder den eneste skalerbare, tilladelsesfrie distributionskanal for immersivt indhold. Vi er nødt til at stoppe med at tænke på 'apps' og begynde at tænke på 'destinationer'.","Magien ved WebXR er, at du ikke 'downloader' en oplevelse. Du klikker bare på et link, og du er der. URL'en er portalen. Dette skaber sømløs overgang mellem oplevelser bygget af forskellige udviklere.","WebXR er fuldt cross-platform, tilgængeligt out-of-the-box på alle moderne headsets. Desuden kan du hoste alt selv, hvilket skubber magten ud til udviklerne og væk fra big tech.","Med WebGPU ser vi endelig grafikydelse i browseren, der rivaliserer native applikationer. Adgangsbarrieren smuldrer.","Dette paradigmeskift kræver en grundlæggende nytænkning af, hvordan vi designer grænseflader. Flade skærme er vinduer; XR er en dør."]},
    de:{tag:'Artikel',title:'Warum WebXR die nächste Plattform ist',subtitle:'Die URL ist das Portal',desc:"Das App Store Modell ist für immersive Technologien kaputt. Das offene Web bietet den einzigen skalierbaren Vertriebskanal.",quote:"Spatial Computing wird nicht installiert. Es wird besucht.",content:["Das App Store Modell ist kaputt. Das offene Web bietet den einzigen skalierbaren Vertriebskanal für immersive Inhalte.","Die Magie von WebXR ist, dass Sie kein Erlebnis 'herunterladen'. Sie klicken einfach auf einen Link und sind da. Die URL ist das Portal.","WebXR ist plattformübergreifend. Mit dem Aufkommen von WebGPU sehen wir endlich eine Grafikleistung im Browser, die mit nativen Anwendungen konkurriert.","Dieser Paradigmenwechsel erfordert ein grundlegendes Umdenken. Flachbildschirme sind Fenster; XR ist eine Tür."]},
    it:{tag:'Articolo',title:'Perché WebXR è la prossima piattaforma',subtitle:"L'URL è il portale",desc:"Il modello App Store è rotto per la tecnologia immersiva. Il web aperto offre l'unico canale di distribuzione scalabile.",quote:"Lo spatial computing non sarà installato. Sarà visitato.",content:["Il modello App Store è rotto. Il web aperto offre l'unico canale di distribuzione scalabile per i contenuti immersivi.","La magia del WebXR è che non 'scarichi' un'esperienza. Clicchi su un link e ci sei. L'URL è il portale.","WebXR è multipiattaforma. Con l'avvento di WebGPU, vediamo finalmente prestazioni grafiche nel browser in grado di rivaleggiare con le applicazioni native.","Questo cambio di paradigma richiede un ripensamento fondamentale. Gli schermi piatti sono finestre; L'XR è una porta."]},
    fr:{tag:'Article',title:'Pourquoi WebXR est la prochaine plateforme',subtitle:"L'URL est le portail",desc:"Le modèle App Store est cassé pour la technologie immersive. Le web ouvert offre le seul canal de distribution évolutif.",quote:"L'informatique spatiale ne sera pas installée. Elle sera visitée.",content:["Le modèle App Store est cassé. Le web ouvert offre le seul canal de distribution évolutif pour le contenu immersif.","La magie du WebXR est que vous ne 'téléchargez' pas une expérience. Vous cliquez sur un lien et vous y êtes. L'URL est le portail.","WebXR est multiplateforme. Avec l'avènement du WebGPU, nous voyons enfin des performances graphiques dans le navigateur qui rivalisent avec les applications natives.","Ce changement de paradigme nécessite une refonte fondamentale. Les écrans plats sont des fenêtres ; la XR est une porte."]}
  },
  'press-midwife': {
    en:{tag:'Press',title:'The Birth of MidwifeVR',subtitle:'CBS Wire Interview',desc:"\"I met a recently graduated midwife who was on the brink of tears... That's how I decided to build MidwifeVR.\" Interview with CBS Wire.",content:["How my spatial computing expertise sparked a new startup","From my interview with CBS Wire on how I founded MidwifeVR:"],quote:"I had been working with immersive technology for years when I met a recently graduated midwife at a party. She was on the brink of tears because the critical lack of staff meant she felt she couldn't give new parents the right guidance... Knowing the power of simulation training, I saw a clear opportunity. I decided to take crucial maternity training, build it into an immersive application, and make it available for parents 24/7."},
    da:{tag:'Presse',title:'The Birth of MidwifeVR',subtitle:'CBS Wire Interview',desc:"\"Jeg mødte en nyuddannet jordemoder, der var på grænsen til tårer... Sådan besluttede jeg at bygge MidwifeVR.\" Interview med CBS Wire.",content:["Hvordan min spatial computing-ekspertise udløste en ny startup","Fra mit interview med CBS Wire om, hvordan jeg stiftede MidwifeVR:"],quote:"Jeg havde arbejdet med immersiv teknologi i årevis, da jeg mødte en nyuddannet jordemoder til en fest. Hun var på grænsen til tårer, fordi den kritiske personalemangel betød, at hun følte, hun ikke kunne give nybagte forældre den rette vejledning... Da jeg kendte styrken ved simulationstræning, så jeg en klar mulighed. Jeg besluttede at tage afgørende barselstræning, bygge det ind i en immersiv applikation og gøre det tilgængeligt for forældre 24/7."},
    de:{tag:'Presse',title:'Die Geburt von MidwifeVR',subtitle:'CBS Wire Interview',desc:"\"Ich traf eine frisch gebackene Hebamme, die den Tränen nahe war... So beschloss ich, MidwifeVR zu bauen.\" Interview mit CBS Wire.",content:["Wie meine Spatial-Computing-Expertise ein neues Startup auslöste","Aus meinem Interview mit CBS Wire:"],quote:"Ich arbeitete seit Jahren mit immersiver Technologie, als ich eine Hebamme traf, die den Tränen nahe war, weil der Personalmangel bedeutete, dass sie jungen Eltern nicht die richtige Anleitung geben konnte. Ich sah eine klare Chance und baute eine immersive Anwendung für Eltern."},
    it:{tag:'Stampa',title:'La nascita di MidwifeVR',subtitle:'Intervista CBS Wire',desc:"\"Ho incontrato un'ostetrica appena laureata che era sull'orlo delle lacrime... È così che ho deciso di costruire MidwifeVR.\" Intervista con CBS Wire.",content:["Come la mia esperienza nello spatial computing ha dato vita a una nuova startup","Dalla mia intervista con CBS Wire:"],quote:"Lavoravo con la tecnologia immersiva da anni quando ho incontrato un'ostetrica che era sull'orlo delle lacrime perché la carenza di personale le impediva di dare la giusta guida ai neo genitori. Ho visto una chiara opportunità e ho costruito un'applicazione immersiva per i genitori."},
    fr:{tag:'Presse',title:'La naissance de MidwifeVR',subtitle:'Interview CBS Wire',desc:"\"J'ai rencontré une sage-femme récemment diplômée qui était au bord des larmes... C'est ainsi que j'ai décidé de créer MidwifeVR.\" Interview avec CBS Wire.",content:["Comment mon expertise en informatique spatiale a déclenché une nouvelle startup","Extrait de mon interview avec CBS Wire :"],quote:"Je travaillais avec la technologie immersive depuis des années lorsque j'ai rencontré une sage-femme au bord des larmes parce que le manque de personnel l'empêchait de donner les bons conseils aux nouveaux parents. J'ai vu une opportunité claire et j'ai construit une application immersive pour les parents."}
  },
  'project-sendtoquest': {
    en:{tag:'Project',title:'SendToQuest.Com',subtitle:'A beloved utility tool for spatial users',desc:"I built SendToQuest to save users hours of frustration. Instantly open WebXR on multiple headsets simultaneously.",content:["SendToQuest solves a massive friction point in the hardware ecosystem, saving users time and frustration every single day.","Whether it is a solo user who simply wants to open a specific destination on their headset, or a fleet operator needing to launch an immersive experience across 30 headsets at once, my tool handles it seamlessly.","Today, SendToQuest is used and loved daily by spatial computing users all over the globe."]},
    da:{tag:'Projekt',title:'SendToQuest.Com',subtitle:'Et elsket værktøj for XR brugere',desc:"Jeg byggede SendToQuest for at spare brugere for timer med frustration. Åbn WebXR øjeblikkeligt på flere headsets på samme tid.",content:["SendToQuest løser et massivt friktionspunkt i hardware-økosystemet og sparer brugere tid og frustration hver eneste dag.","Uanset om det er en solo-bruger, der blot ønsker at åbne en specifik destination på deres headset, eller en flådeoperatør, der har brug for at launche en immersiv oplevelse på tværs af 30 headsets på én gang, håndterer mit værktøj det problemfrit.","I dag bruges og elskes SendToQuest dagligt af spatial computing-brugere over hele kloden."]},
    de:{tag:'Projekt',title:'SendToQuest.Com',subtitle:'Ein beliebtes Werkzeug für XR-Nutzer',desc:"Ich habe SendToQuest entwickelt, um Frustrationen zu sparen. Öffnet WebXR sofort auf mehreren Headsets gleichzeitig.",content:["SendToQuest löst einen massiven Reibungspunkt im Hardware-Ökosystem und spart Benutzern jeden Tag Zeit und Frustration.","Egal, ob es sich um einen Solo-Benutzer handelt oder um einen Flottenbetreiber, der ein immersives Erlebnis über 30 Headsets gleichzeitig starten muss, mein Tool erledigt dies nahtlos.","Heute wird SendToQuest täglich von Spatial Computing-Benutzern auf der ganzen Welt genutzt und geliebt."]},
    it:{tag:'Progetto',title:'SendToQuest.Com',subtitle:'Uno strumento amato dagli utenti XR',desc:"Ho creato SendToQuest per far risparmiare ore di frustrazione. Apri WebXR istantaneamente su più visori contemporaneamente.",content:["SendToQuest risolve un enorme punto di attrito nell'ecosistema hardware, facendo risparmiare tempo e frustrazione agli utenti ogni giorno.","Che si tratti di un utente singolo o di un operatore di flotta che deve lanciare un'esperienza immersiva su 30 visori contemporaneamente, il mio strumento lo gestisce senza problemi.","Oggi SendToQuest è utilizzato e amato quotidianamente dagli utenti di spatial computing in tutto il mondo."]},
    fr:{tag:'Projet',title:'SendToQuest.Com',subtitle:'Un outil apprécié par les utilisateurs XR',desc:"J'ai créé SendToQuest pour éviter des heures de frustration. Ouvrez WebXR instantanément sur plusieurs casques simultanément.",content:["SendToQuest résout un point de friction massif dans l'écosystème matériel, faisant gagner du temps aux utilisateurs chaque jour.","Qu'il s'agisse d'un utilisateur solo ou d'un opérateur de flotte devant lancer une expérience immersive sur 30 casques à la fois, mon outil gère cela de manière transparente.","Aujourd'hui, SendToQuest est utilisé et apprécié quotidiennement par les utilisateurs d'informatique spatiale dans le monde entier."]}
  },
  'goggle-scotty': {
    en:{tag:'Flashback',title:'Goggle me up Scotty!',subtitle:'The Copenhagen Post (2017)',desc:"In 2017, The Copenhagen Post caught up with me to discuss my vision for immersive technology as 'the final frontier'.",content:["An early but important retrospective.","The Copenhagen Post highlighted the massive potential of the Copenhagen tech scene, and I helped predict the technological revolution that lay ahead. It's a fascinating look at the early visions for spatial computing that I have since spent years realizing and building in practice."]},
    da:{tag:'Flashback',title:'Goggle me up Scotty!',subtitle:'The Copenhagen Post (2017)',desc:"I 2017 fangede The Copenhagen Post mig til en snak om min vision for fordybende teknologi som 'the final frontier'.",content:["Et tidligt, men vigtigt tilbageblik.","The Copenhagen Post satte fokus på det massive potentiale i den københavnske tech-scene, og jeg var med til at spå om den teknologiske revolution, der ventede forude. Det er et fascinerende kig på de tidlige visioner for spatial computing, som jeg sidenhen har brugt årevis på at realisere og bygge i praksis."]},
    de:{tag:'Rückblick',title:'Goggle me up Scotty!',subtitle:'The Copenhagen Post (2017)',desc:"2017 sprach The Copenhagen Post mit mir über meine Vision von immersiver Technologie als 'the final frontier'.",content:["Ein früher, aber wichtiger Rückblick.","Die Copenhagen Post hob das massive Potenzial der Kopenhagener Tech-Szene hervor, und ich half dabei, die technologische Revolution vorherzusagen. Es ist ein faszinierender Blick auf die frühen Visionen für Spatial Computing."]},
    it:{tag:'Flashback',title:'Goggle me up Scotty!',subtitle:'The Copenhagen Post (2017)',desc:"Nel 2017, The Copenhagen Post mi ha intervistato per discutere la mia visione della tecnologia immersiva come 'l'ultima frontiera'.",content:["Una retrospettiva iniziale ma importante.","Il Copenhagen Post ha evidenziato l'enorme potenziale della scena tecnologica di Copenaghen e ho contribuito a prevedere la rivoluzione tecnologica che ci attendeva."]},
    fr:{tag:'Flashback',title:'Goggle me up Scotty!',subtitle:'The Copenhagen Post (2017)',desc:"En 2017, The Copenhagen Post m'a interviewé pour discuter de ma vision de la technologie immersive comme 'la dernière frontière'.",content:["Une rétrospective précoce mais importante.","Le Copenhagen Post a souligné le potentiel massif de la scène technologique de Copenhague, et j'ai aidé à prédire la révolution technologique à venir."]}
  },
  'voa-2016': {
    en:{tag:'Flashback',title:'Voice of America visits my virtual worlds (2016)',subtitle:'Voice of America',desc:"Already in 2016, the international media Voice of America stopped by to cover my work building immersive spaces.",content:["A look all the way back to the industry's absolute infancy in 2016.","The international news media Voice of America covered the emerging technology landscape and stopped by to test the virtual experiences I was developing at the time. It is a fun time capsule showing how long I have worked to shape spatial computing in practice."]},
    da:{tag:'Flashback',title:'Voice of America besøger mine virtuelle verdener (2016)',subtitle:'Voice of America',desc:"Allerede i 2016 lagde det internationale medie Voice of America vejen forbi for at dække mit arbejde med at bygge immersive rum.",content:["Et kig helt tilbage til branchens absolutte spæde start i 2016.","Det internationale nyhedsmedie Voice of America dækkede det gryende teknologilandskab og lagde vejen forbi for at teste de virtuelle oplevelser, jeg udviklede dengang. Det er en sjov tidslomme, der viser, hvor længe jeg har arbejdet med at forme spatial computing i praksis."]},
    de:{tag:'Rückblick',title:'Voice of America besucht meine virtuellen Welten (2016)',subtitle:'Voice of America',desc:"Bereits 2016 kam das internationale Medium Voice of America vorbei, um über meine Arbeit beim Aufbau immersiver Räume zu berichten.",content:["Ein Blick zurück in die absolute Kindheit der Branche im Jahr 2016.","Voice of America testete die virtuellen Erlebnisse, die ich damals entwickelte. Es ist eine lustige Zeitkapsel, die zeigt, wie lange ich daran gearbeitet habe, Spatial Computing in der Praxis zu gestalten."]},
    it:{tag:'Flashback',title:'Voice of America visita i miei mondi virtuali (2016)',subtitle:'Voice of America',desc:"Già nel 2016, il media internazionale Voice of America è passato a coprire il mio lavoro nella costruzione di spazi immersivi.",content:["Uno sguardo indietro all'assoluta infanzia del settore nel 2016.","Voice of America ha testato le esperienze virtuali che stavo sviluppando all'epoca. È una divertente capsula del tempo che mostra da quanto tempo lavoro per plasmare lo spatial computing."]},
    fr:{tag:'Flashback',title:'Voice of America visite mes mondes virtuels (2016)',subtitle:'Voice of America',desc:"Déjà en 2016, le média international Voice of America est venu couvrir mon travail de construction d'espaces immersifs.",content:["Un regard en arrière sur l'enfance absolue de l'industrie en 2016.","Voice of America a testé les expériences virtuelles que je développais à l'époque. C'est une capsule temporelle amusante montrant depuis combien de temps je travaille pour façonner l'informatique spatiale."]}
  },
  'michelin-vr': {
    en:{tag:'Highlight',title:'Michelin Dining in XR',subtitle:'The ultimate immersive dream for foodies',desc:"As Lead Developer and VR Consultant, I created a fully immersive experience for top restaurants.",content:["Explore Michelin restaurants via Spatial Computing.","Together with some of the absolute best Danish restaurants, I led the development of 'the ultimate dream for foodies': a fully immersive exploration of high-end gastronomy.","I built the platform and created the content that gave users the ability to step directly into the kitchen and feel the intense, fascinating work behind the Michelin stars through their headset."]},
    da:{tag:'Highlight',title:'Michelin Dining i XR',subtitle:'Den ultimative drøm for foodies',desc:"Som Lead Developer skabte jeg en fuldt immersiv oplevelse for nogle af Danmarks bedste restauranter for at tage brugerne direkte ind i stjernekøkkenerne.",content:["Udforsk Michelin-restauranter via Spatial Computing.","Sammen med nogle af de absolut bedste danske restauranter stod jeg i spidsen for udviklingen af 'the ultimate dream for foodies': en fuldt immersiv udforskning af high-end gastronomi.","Jeg byggede platformen og skabte indholdet, der gav brugere mulighed for at træde direkte ind i køkkenet og mærke det intense, fascinerende arbejde bag Michelin-stjernerne gennem deres headset."]},
    de:{tag:'Highlight',title:'Michelin Dining in XR',subtitle:'Der ultimative Traum für Feinschmecker',desc:"Als leitender Entwickler habe ich ein vollständig immersives Erlebnis für einige der besten Restaurants geschaffen.",content:["Entdecken Sie Michelin-Restaurants über Spatial Computing.","Zusammen mit einigen der besten dänischen Restaurants leitete ich die Entwicklung einer vollständig immersiven Erkundung der High-End-Gastronomie.","Ich habe die Plattform gebaut und die Inhalte erstellt, die den Benutzern die Möglichkeit gaben, direkt in die Küche zu treten und die faszinierende Arbeit hinter den Sternen zu spüren."]},
    it:{tag:'Highlight',title:'Michelin Dining in XR',subtitle:'Il sogno immersivo per i buongustai',desc:"Come Lead Developer, ho creato un'esperienza completamente immersiva per alcuni dei migliori ristoranti.",content:["Esplora i ristoranti Michelin tramite Spatial Computing.","Insieme ad alcuni dei migliori ristoranti, ho guidato lo sviluppo di un'esplorazione completamente immersiva della gastronomia di fascia alta.","Ho costruito la piattaforma e creato i contenuti che hanno dato agli utenti la possibilità di entrare direttamente in cucina e sentire il lavoro affascinante dietro le stelle."]},
    fr:{tag:'Highlight',title:'Michelin Dining en XR',subtitle:'Le rêve immersif pour les gourmets',desc:"En tant que Lead Developer, j'ai créé une expérience totalement immersive pour certains des meilleurs restaurants.",content:["Explorez les restaurants Michelin via Spatial Computing.","En collaboration avec certains des meilleurs restaurants, j'ai dirigé le développement d'une exploration immersive de la gastronomie haut de gamme.","J'ai construit la plateforme et créé le contenu qui a donné aux utilisateurs la possibilité d'entrer directement dans la cuisine et de ressentir le travail fascinant derrière les étoiles."]}
  },
  'throwback-gearvr': {
    en:{tag:'Throwback',title:'Samsung Gear VR',subtitle:'Back in 2018',desc:"A look into the archive: Back in 2018, deeply concentrated on setting up a Samsung Gear VR.",content:"Deeply concentrated on setting up a Samsung Gear VR back in 2018."},
    da:{tag:'Throwback',title:'Samsung Gear VR',subtitle:'Tilbage i 2018',desc:"Et kig i arkivet: Tilbage i 2018, dybt koncentreret om opsætningen af en Samsung Gear VR.",content:"Dybt koncentreret om opsætningen af en Samsung Gear VR tilbage i 2018."},
    de:{tag:'Rückblick',title:'Samsung Gear VR',subtitle:'Damals 2018',desc:"Ein Blick ins Archiv: Damals 2018, hochkonzentriert beim Einrichten einer Samsung Gear VR.",content:"Hochkonzentriert beim Einrichten einer Samsung Gear VR im Jahr 2018."},
    it:{tag:'Ricordo',title:'Samsung Gear VR',subtitle:'Nel 2018',desc:"Uno sguardo all'archivio: nel 2018, profondamente concentrato sulla configurazione di un Samsung Gear VR.",content:"Profondamente concentrato sulla configurazione di un Samsung Gear VR nel 2018."},
    fr:{tag:'Souvenir',title:'Samsung Gear VR',subtitle:'En 2018',desc:"Un regard dans les archives : En 2018, profondément concentré sur la configuration d'un Samsung Gear VR.",content:"Profondément concentré sur la configuration d'un Samsung Gear VR en 2018."}
  },
  'throwback-so-ein-ding': {
    en:{tag:'Behind the Scenes',title:'DR2 So ein Ding',subtitle:'With Nikolaj Sonne',desc:"Behind the scenes at DR2, demonstrating future technology for tech host Nikolaj Sonne.",content:"Behind the scenes at DR2 So ein Ding, testing XR with Nikolaj Sonne."},
    da:{tag:'Behind the Scenes',title:'DR2 So ein Ding',subtitle:'Med Nikolaj Sonne',desc:"Behind the scenes på DR2, hvor jeg demonstrerede fremtidens teknologi for tech-vært Nikolaj Sonne.",content:"Behind the scenes på DR2 So ein Ding, hvor XR blev testet med Nikolaj Sonne."},
    de:{tag:'Hinter den Kulissen',title:'DR2 So ein Ding',subtitle:'Mit Nikolaj Sonne',desc:"Hinter den Kulissen bei DR2, wo ich dem Tech-Moderator Nikolaj Sonne Zukunftstechnologie demonstrierte.",content:"Hinter den Kulissen bei DR2 So ein Ding, wo XR mit Nikolaj Sonne getestet wurde."},
    it:{tag:'Dietro le quinte',title:'DR2 So ein Ding',subtitle:'Con Nikolaj Sonne',desc:"Dietro le quinte di DR2, dimostrando la tecnologia futura al presentatore tecnologico Nikolaj Sonne.",content:"Dietro le quinte di DR2 So ein Ding, testando XR con Nikolaj Sonne."},
    fr:{tag:'Coulisses',title:'DR2 So ein Ding',subtitle:'Avec Nikolaj Sonne',desc:"Dans les coulisses de DR2, démontrant la technologie du futur pour le présentateur Nikolaj Sonne.",content:"Dans les coulisses de DR2 So ein Ding, testant la XR avec Nikolaj Sonne."}
  },
  'throwback-tofu-1': {
    en:{tag:'Throwback',title:'Art Magazine Tofu',subtitle:'XR in Contemporary Art',desc:"From a photo series in the art magazine Tofu about technology's entry into contemporary art.",content:"From a photo series in the art magazine Tofu about technology's entry into contemporary art."},
    da:{tag:'Throwback',title:'Kunstmagasinet Tofu',subtitle:'XR i samtidskunsten',desc:"Fra en fotoserie i kunstmagasinet Tofu om teknologiens indtog i samtidskunsten.",content:"Fra en fotoserie i kunstmagasinet Tofu om teknologiens indtog i samtidskunsten."},
    de:{tag:'Rückblick',title:'Kunstmagazin Tofu',subtitle:'XR in der zeitgenössischen Kunst',desc:"Aus einer Fotoserie im Kunstmagazin Tofu über den Einzug der Technologie in die Kunst.",content:"Aus einer Fotoserie im Kunstmagazin Tofu über den Einzug der Technologie in die zeitgenössische Kunst."},
    it:{tag:'Ricordo',title:"Rivista d'Arte Tofu",subtitle:"XR nell'Arte Contemporanea",desc:"Da una serie fotografica sulla rivista d'arte Tofu sull'ingresso della tecnologia nell'arte contemporanea.",content:"Da una serie fotografica sulla rivista d'arte Tofu sull'ingresso della tecnologia nell'arte contemporanea."},
    fr:{tag:'Souvenir',title:"Magazine d'Art Tofu",subtitle:"XR dans l'Art Contemporain",desc:"Tiré d'une série de photos dans le magazine d'art Tofu sur l'entrée de la technologie dans l'art contemporain.",content:"Tiré d'une série de photos dans le magazine d'art Tofu sur l'entrée de la technologie dans l'art contemporain."}
  },
  'throwback-eu': {
    en:{tag:'Throwback',title:'European Parliament',subtitle:'European Greens',desc:"Demonstration of newly developed immersive experiences for the European Greens directly in the European Parliament.",content:"Demonstration of immersive experiences for European Greens in the European Parliament."},
    da:{tag:'Throwback',title:'Europa-Parlamentet',subtitle:'European Greens',desc:"Demonstration af nyudviklede immersive oplevelser for parlamentsgruppen European Greens direkte i Europa-Parlamentet.",content:"Demonstration af immersive oplevelser for European Greens i Europa-Parlamentet."},
    de:{tag:'Rückblick',title:'Europäisches Parlament',subtitle:'European Greens',desc:"Demonstration neu entwickelter immersiver Erlebnisse für die Europäischen Grünen direkt im Europäischen Parlament.",content:"Demonstration immersiver Erlebnisse für die Europäischen Grünen im Europäischen Parlament."},
    it:{tag:'Ricordo',title:'Parlamento Europeo',subtitle:'European Greens',desc:"Dimostrazione di nuove esperienze immersive per i Verdi Europei direttamente al Parlamento Europeo.",content:"Dimostrazione di esperienze immersive per i Verdi Europei al Parlamento Europeo."},
    fr:{tag:'Souvenir',title:'Parlement Européen',subtitle:'European Greens',desc:"Démonstration de nouvelles expériences immersives pour les Verts européens directement au Parlement européen.",content:"Démonstration d'expériences immersives pour les Verts européens au Parlement européen."}
  },
  'throwback-museion': {
    en:{tag:'Throwback',title:'Medical Museion',subtitle:'Eli Lilly NewGen event',desc:"Exclusive tech presentation at the historical Medical Museion in Copenhagen for Eli Lilly's NewGen event.",content:"Tech presentation at the Medical Museion for Eli Lilly's NewGen event."},
    da:{tag:'Throwback',title:'Medicinsk Museion',subtitle:'Eli Lilly NewGen-event',desc:"Eksklusiv tech-præsentation på det historiske Medicinsk Museion i København til Eli Lillys NewGen-event.",content:"Tech-præsentation på Medicinsk Museion til Eli Lillys NewGen-event."},
    de:{tag:'Rückblick',title:'Medizinisches Museion',subtitle:'Eli Lilly NewGen Event',desc:"Exklusive Tech-Präsentation im historischen Medizinischen Museion in Kopenhagen für das NewGen-Event von Eli Lilly.",content:"Tech-Präsentation im Medizinischen Museion für das NewGen-Event von Eli Lilly."},
    it:{tag:'Ricordo',title:'Medical Museion',subtitle:'Evento Eli Lilly NewGen',desc:"Presentazione tecnologica esclusiva presso lo storico Medical Museion di Copenaghen per l'evento NewGen di Eli Lilly.",content:"Presentazione tecnologica al Medical Museion per l'evento NewGen di Eli Lilly."},
    fr:{tag:'Souvenir',title:'Museion Médical',subtitle:'Événement Eli Lilly NewGen',desc:"Présentation technologique exclusive au Museion médical historique de Copenhague pour l'événement NewGen d'Eli Lilly.",content:"Présentation technologique au Museion médical pour l'événement NewGen d'Eli Lilly."}
  },
  'throwback-tofu-2': {
    en:{tag:'Throwback',title:'Tofu Magazine',subtitle:'Immersive Tech & Art',desc:"Another picture from Tofu's aesthetic photo series on the intersection of technology and art.",content:"Another picture from Tofu's photo series on technology and art."},
    da:{tag:'Throwback',title:'Tofu Magazine',subtitle:'Immersive Tech & Samtidskunst',desc:"Endnu et billede fra Tofus æstetiske fotoserie om krydsfeltet mellem teknologi og kunst.",content:"Endnu et billede fra Tofus fotoserie om teknologi og kunst."},
    de:{tag:'Rückblick',title:'Tofu Magazine',subtitle:'Immersive Tech & Kunst',desc:"Ein weiteres Bild aus Tofus ästhetischer Fotoserie über die Schnittstelle von Technologie und Kunst.",content:"Ein weiteres Bild aus Tofus Fotoserie über Technologie und Kunst."},
    it:{tag:'Ricordo',title:'Tofu Magazine',subtitle:'Tech Immersivo & Arte',desc:"Un'altra foto dalla serie fotografica di Tofu sull'intersezione tra tecnologia e arte.",content:"Un'altra foto dalla serie fotografica di Tofu su tecnologia e arte."},
    fr:{tag:'Souvenir',title:'Tofu Magazine',subtitle:'Technologie Immersive & Art',desc:"Une autre photo de la série esthétique de Tofu sur l'intersection de la technologie et de l'art.",content:"Une autre photo de la série de Tofu sur la technologie et l'art."}
  },
  'podcast-thepreneur': {
    en:{tag:'Podcast',title:'Thepreneur Podcast #11',subtitle:'From tech idea to scalable product',desc:"As a guest on Thepreneur Podcast, I share my journey as a tech founder and XR developer.",content:"As a guest on Thepreneur Podcast, I share my journey as a tech founder and XR developer, and how I brought MidwifeXR to the market."},
    da:{tag:'Podcast',title:'Thepreneur Podcast #11',subtitle:'Fra tech-idé til skalerbart produkt',desc:"Som gæst på Thepreneur Podcast deler jeg min rejse som tech-founder og XR-udvikler.",content:"Som gæst på Thepreneur Podcast deler jeg min rejse som tech-founder og XR-udvikler, og hvordan jeg tog MidwifeXR til markedet."},
    de:{tag:'Podcast',title:'Thepreneur Podcast #11',subtitle:'Von der Tech-Idee zum Produkt',desc:"Als Gast im Thepreneur Podcast teile ich meine Reise als Tech-Gründer und XR-Entwickler.",content:"Als Gast im Thepreneur Podcast teile ich meine Reise als Tech-Gründer und XR-Entwickler, und wie ich MidwifeXR auf den Markt gebracht habe."},
    it:{tag:'Podcast',title:'Thepreneur Podcast #11',subtitle:"Dall'idea tech al prodotto",desc:"Come ospite del Thepreneur Podcast, condivido il mio viaggio come fondatore di tecnologia e sviluppatore XR.",content:"Come ospite del Thepreneur Podcast, condivido il mio viaggio come fondatore di tecnologia e sviluppatore XR."},
    fr:{tag:'Podcast',title:'Thepreneur Podcast #11',subtitle:"De l'idée tech au produit",desc:"En tant qu'invité du Thepreneur Podcast, je partage mon parcours en tant que fondateur de technologie et développeur XR.",content:"En tant qu'invité du Thepreneur Podcast, je partage mon parcours en tant que fondateur de technologie et développeur XR."}
  }
};

/* Grid layout + media. icon = small emoji used in the tag pill. */
const ITEMS = [
  { id:'keynote-ida', type:'video', icon:'🎤', video:'Mortenhjemmeside.mp4', externalLink:'https://videos.ida.dk/media/Virtual+Reality+og+Amning%3A+En+innovativ+tilgang+med+MidwifeVR++Morten+Haulik%2C+Co-founder+og+VR+ekspert+og+Sofie+Bonde+Alsen%2C+jordemoder+og+Digital+Designer/1_bb9dwkxp', span:1 },
  { id:'project-nxt', type:'project', icon:'💻', image:'thumb13.webp', externalLink:'https://www.nxtwebxr.com', span:2 },
  { id:'game-holorange', type:'project', icon:'🎮', image:'game-holorange.jpg', externalLink:'https://www.nxtwebxr.com/watch/holorange/', span:1 },
  { id:'game-fishstick', type:'project', icon:'🎮', image:'game-fishstick.jpg', externalLink:'https://www.nxtwebxr.com/watch/fishstickfactory/', span:1 },
  { id:'game-diehaende', type:'project', icon:'🎮', image:'game-diehaende.jpg', externalLink:'https://www.nxtwebxr.com/watch/diehaende/', span:1 },
  { id:'project-nxtcare', type:'project', icon:'🩺', image:'nxtcare.jpg', externalLink:'https://nxtcare.eu/', span:2 },
  { id:'highlight-kp', type:'link', icon:'⭐', image:'thumbnail11.webp', externalLink:'https://www.linkedin.com/posts/caroline-laurvig-deichmann-0813ba1b7_innovation-teknologi-teknologiforstaevelse-activity-7188271529833492480-Hh9q', span:1 },
  { id:'press-berlingske', type:'link', icon:'📰', image:'thumb14.jpg', externalLink:'https://www.berlingske.dk/indland/stort-problem-blandt-nybagte-foraeldre-kan-afhjaelpes-startup-kommer-med-loesning', span:1 },
  { id:'media-24victoria', type:'link', icon:'🌐', image:'thumbnail6.jpg', externalLink:'https://24victoria.dk/artificial-and-intelligence-deep-tech/udvikler-xr-oplevelser-morten-haulik', span:1 },
  { id:'podcast-apple', type:'link', icon:'🎧', image:'thumb1.webp', externalLink:'https://goodpods.com/podcasts/pilestræde-241749/æblebrillen-31650444', span:1 },
  { id:'panel-sound', type:'link', icon:'👥', image:'thumb7.jpg', externalLink:'https://danishsoundcluster.dk/the-future-sound-forum/', span:1 },
  { id:'press-kulturmagasinet', type:'link', icon:'🎧', image:'thunn.webp', externalLink:'https://radio4.dk/podcasts/kraes/rolf-s-rensen-elsker-ny-dokumentar-om-tour-de-fran', span:1 },
  { id:'blog-webxr', type:'blog', icon:'🖥️', image:'url.jpg', span:1 },
  { id:'throwback-gearvr', type:'image', icon:'📷', image:'Picture2.jpg', span:1 },
  { id:'press-midwife', type:'link', icon:'📰', image:'thumb17.jpg', externalLink:'https://cbswire.dk/healthy-glove-gaming-misoballs-and-a-virtual-midwife/', span:1 },
  { id:'throwback-so-ein-ding', type:'image', icon:'📷', image:'Picture1.jpeg', span:1 },
  { id:'project-sendtoquest', type:'project', icon:'💻', image:'ImageSendtoQuest.webp', externalLink:'https://sendtoquest.com', span:2 },
  { id:'podcast-thepreneur', type:'link', icon:'🎧', image:'thumb15.jpg', externalLink:'https://www.youtube.com/watch?v=9PpGts9B240', span:1 },
  { id:'throwback-tofu-1', type:'image', icon:'📷', image:'IMG_4328.jpg', span:1 },
  { id:'goggle-scotty', type:'link', icon:'🕰️', image:'thumblol.webp', externalLink:'https://cphpost.dk/2017-07-02/news/goggle-me-up-scotty-this-is-the-final-frontier/', span:1 },
  { id:'throwback-eu', type:'image', icon:'📷', image:'IMG_4329.webp', span:1 },
  { id:'voa-2016', type:'link', icon:'🕰️', image:'thumb5.webp', externalLink:'https://learningenglish.voanews.com/amp/a-visit-to-the-virtual-world/3618990.html', span:1 },
  { id:'throwback-museion', type:'image', icon:'📷', image:'EA74BB10-831F-47D1-B668-3F70535CB0B6.JPG', span:1 },
  { id:'michelin-vr', type:'link', icon:'⭐', image:'thumb6.webp', externalLink:'https://www.linkedin.com/posts/evrest-as_virtualreality-virtualtoday-realitytomorrow-activity-6638369060289683456-Vd-N', span:1 },
  { id:'throwback-tofu-2', type:'image', icon:'📷', image:'picture2.jpeg', span:1 }
];
