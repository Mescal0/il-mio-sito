/* =========================================================================
   site.config.js — UNICA FONTE DI VERITÀ DEL SITO
   -------------------------------------------------------------------------
   Modifica QUESTO file (o i dati qui dentro) per far crescere il sito.
   Aggiungere un servizio o una zona = aggiungere un oggetto agli array.
   Poi lancia:  node build.js
   Non serve toccare l'HTML a mano.
   ========================================================================= */

const site = {
  /* -----------------------------------------------------------------------
     1) DOMINIO DEL SITO  ←←← LA COSA PIÙ IMPORTANTE DA SISTEMARE
     Usato per canonical, sitemap.xml, Open Graph e dati strutturati.
     - Se hai già il dominio: mettilo qui (es. https://www.coloreeverde.it)
     - Se non ce l'hai ancora: metti l'indirizzo *.pages.dev che ti assegna
       Cloudflare (es. https://colore-e-verde.pages.dev) e cambialo dopo.
     SENZA lo "https://" e SENZA "/" finale.
  ----------------------------------------------------------------------- */
  url: "https://www.coloreeverde.it",

  /* -----------------------------------------------------------------------
     2) DATI DELL'ATTIVITÀ
     Quelli con [DA COMPILARE] vanno completati con i tuoi dati reali.
     Sono importanti per Google Business e per i dati strutturati.
  ----------------------------------------------------------------------- */
  business: {
    name: "Colore & Verde",
    // Nome/ragione del titolare per documenti e schema (facoltativo ma utile)
    legalName: "[DA COMPILARE — es. Marco Baldi]",
    tagline: "Imbianchino, tinteggiatore e giardiniere a Pistoia",
    foundedYear: 2005,

    // Contatti
    phoneDisplay: "+39 338 453 1102",
    phoneTel: "+393384531102",       // formato per i link tel:
    whatsapp: "393384531102",        // formato per wa.me (senza + e senza spazi)
    email: "[DA COMPILARE — es. info@coloreeverde.it]",

    // Indirizzo / sede operativa (serve allo schema LocalBusiness e a Google)
    address: {
      street: "[DA COMPILARE — es. Via Ferrari 84]",
      locality: "Monsummano Terme",
      region: "PT",                  // sigla provincia
      postalCode: "[DA COMPILARE — es. 51015]",
      country: "IT",
    },

    // Coordinate (presi dal vecchio sito: zona Pistoia). Aggiornale se vuoi.
    geo: { lat: 43.9308, lng: 10.9078 },

    // Partita IVA (per il footer). Lascia vuoto se non vuoi mostrarla.
    vat: "[DA COMPILARE — P.IVA]",

    // Fascia di prezzo indicativa per lo schema (€, €€, €€€)
    priceRange: "€€",

    // Orari (per schema + footer). Adatta ai tuoi reali.
    openingHours: [
      { days: "Lun–Ven", from: "08:00", to: "18:00" },
      { days: "Sab", from: "08:00", to: "13:00" },
    ],

    // Social (lascia "" quelli che non hai)
    social: {
      facebook: "",
      instagram: "",
      googleBusiness: "", // link al profilo Google quando lo crei
    },
  },

  /* -----------------------------------------------------------------------
     3) SERVIZI  — ogni oggetto genera una pagina /servizi/<slug>/
     Per aggiungerne uno: copia un blocco e cambia i campi.
  ----------------------------------------------------------------------- */
  services: [
    {
      slug: "imbiancatura",
      name: "Imbiancatura e Tinteggiatura",
      short: "Pareti e soffitti perfetti, dentro e fuori casa.",
      // <title> e meta description della pagina
      title: "Imbianchino Pistoia — Imbiancatura e Tinteggiatura | Colore & Verde",
      metaDescription:
        "Cerchi un imbianchino a Pistoia? Tinteggiatura interni ed esterni, pittura pareti, stuccatura e rasatura. Preventivo gratuito entro 48h, lavoro pulito garantito. Chiama +39 338 453 1102.",
      h1: "Imbianchino a Pistoia: tinteggiatura e imbiancatura",
      intro:
        "Tinteggiamo interni ed esterni con cura del dettaglio e protezione totale di pavimenti e mobili. Dalla singola stanza alla casa intera, ti diciamo prima quanto costa e quanto ci mettiamo.",
      bullets: [
        "Tinteggiatura interni: stanze, appartamenti, uffici, negozi",
        "Imbiancatura esterni e facciate",
        "Preparazione fondi: stuccatura, rasatura, carteggiatura",
        "Pitture lavabili, traspiranti e antimuffa",
        "Protezione mobili e pavimenti, pulizia a fine lavoro",
      ],
    },
    {
      slug: "verniciatura",
      name: "Verniciatura Legno e Ferro",
      short: "Infissi, persiane, cancelli e ringhiere come nuovi.",
      title: "Verniciatore Pistoia — Verniciatura Legno e Ferro | Colore & Verde",
      metaDescription:
        "Verniciatura professionale di legno e ferro a Pistoia: persiane, infissi, cancelli e ringhiere. Trattamento antiruggine e restauro. Preventivo gratuito entro 48h. Chiama subito.",
      h1: "Verniciatore a Pistoia: verniciatura legno e ferro",
      intro:
        "Trattiamo e verniciamo legno e ferro per proteggerli dal tempo e restituire l'aspetto originale. Carteggiatura, fondo, protezione antiruggine o impregnante e finitura, fatti come si deve.",
      bullets: [
        "Persiane, scuri, portoni e infissi in legno",
        "Cancelli, ringhiere e inferriate in ferro",
        "Trattamento antiruggine e zincante per il ferro",
        "Impregnanti e finiture protettive per il legno",
        "Restauro di portoni e serramenti d'epoca",
      ],
    },
    {
      slug: "cura-del-verde",
      name: "Cura del Verde e Giardinaggio",
      short: "Giardini ordinati tutto l'anno, senza pensieri.",
      title: "Giardiniere Pistoia — Cura del Verde e Manutenzione | Colore & Verde",
      metaDescription:
        "Cerchi un giardiniere a Pistoia? Sfalcio prati, potatura siepi e piante, manutenzione aree verdi per privati e aziende. Preventivo gratuito, interventi singoli o programmati. Chiama ora.",
      h1: "Giardiniere a Pistoia: cura del verde e giardinaggio",
      intro:
        "Manteniamo il tuo verde in ordine durante tutto l'anno: dal taglio dell'erba alla potatura, fino alla pulizia stagionale. Interventi una tantum o contratti di manutenzione periodica.",
      bullets: [
        "Sfalcio e manutenzione prati",
        "Potatura di siepi, arbusti e piante",
        "Pulizia e sistemazione aree verdi",
        "Raccolta e smaltimento del verde di risulta",
        "Manutenzione periodica per privati e aziende",
      ],
    },
  ],

  /* -----------------------------------------------------------------------
     4) ZONE SERVITE — ogni oggetto genera una pagina /zone/<slug>/
     ⚠️ ATTENZIONE (importante per Google): NON creare decine di pagine
     quasi identiche cambiando solo il nome del paese. Google le considera
     "doorway pages" e penalizza. Tieni poche zone REALI e scrivi per
     ciascuna almeno la frase "nota" personalizzata (un riferimento vero
     alla zona). Meglio 6 pagine vere che 40 fotocopie.
  ----------------------------------------------------------------------- */
  zones: [
    { slug: "pistoia", name: "Pistoia",
      note: "Operiamo in tutta la città e nei quartieri limitrofi, dal centro storico alle zone residenziali." },
    { slug: "montecatini-terme", name: "Montecatini Terme",
      note: "Interveniamo su appartamenti, ville e attività ricettive della zona termale." },
    { slug: "monsummano-terme", name: "Monsummano Terme",
      note: "È la nostra zona base: tempi di intervento rapidi e sopralluoghi senza impegno." },
    { slug: "pescia", name: "Pescia",
      note: "Serviamo Pescia e le frazioni della Valdinievole." },
    { slug: "montale", name: "Montale",
      note: "Disponibili per privati e condomìni in tutto il comune." },
    { slug: "quarrata", name: "Quarrata",
      note: "Copriamo Quarrata e l'area della piana pistoiese." },
  ],

  /* -----------------------------------------------------------------------
     5) RECENSIONI / TESTIMONIANZE
     ⚠️ Usa SOLO recensioni VERE. Recensioni inventate nei dati strutturati
     sono contro le regole di Google e fanno più danni che altro.
     Se lasci l'array vuoto, la sezione non viene mostrata e NON viene
     emesso alcun "voto medio" (AggregateRating) nello schema.
  ----------------------------------------------------------------------- */
  reviews: [
    // Esempio di formato (sostituisci con recensioni reali o cancella):
    // { author: "Giulia R.", text: "Lavoro pulito e puntuale, casa rimessa a nuovo.", zone: "Pistoia" },
  ],

  /* -----------------------------------------------------------------------
     6) PUNTI DI FORZA mostrati in home ("Perché sceglierci")
  ----------------------------------------------------------------------- */
  highlights: [
    { title: "Dal 2005", text: "Esperienza vera sul campo, non improvvisazione." },
    { title: "Preventivo entro 48h", text: "Sopralluogo gratuito e prezzo chiaro per iscritto." },
    { title: "Cantiere pulito", text: "Proteggiamo mobili e pavimenti e lasciamo tutto in ordine." },
    { title: "Un solo referente", text: "Imbiancatura, verniciatura e verde gestiti dalla stessa squadra." },
  ],

  /* -----------------------------------------------------------------------
     7) DOMANDE FREQUENTI — generate per la SEO (FAQPage schema su Google)
  ----------------------------------------------------------------------- */
  faqs: [
    {
      q: "Quanto costa imbiancare una stanza a Pistoia?",
      a: "Il costo dipende dalla metratura, dallo stato delle pareti e dal tipo di pittura scelta. Facciamo un sopralluogo gratuito e ti diamo un preventivo scritto senza impegno entro 48 ore. In media, per una stanza di 20 mq si va dai 200€ ai 400€ tutto incluso."
    },
    {
      q: "Fate anche piccoli lavori di tinteggiatura o solo lavori grandi?",
      a: "Facciamo lavori di ogni dimensione: dalla singola stanza all'intero appartamento, dalla tinteggiatura di un bagno alla facciata di un condominio. Nessun lavoro è troppo piccolo."
    },
    {
      q: "Quanto costa la potatura di una siepe o lo sfalcio del prato?",
      a: "Per la cura del verde offriamo sia interventi una tantum (a partire da 50€ per uno sfalcio) sia contratti di manutenzione periodica. Il prezzo esatto lo stabiliamo dopo un sopralluogo in base alla superficie e al tipo di vegetazione."
    },
    {
      q: "Fate anche servizio di giardinaggio per aziende e condomini?",
      a: "Sì, offriamo manutenzione programmata per condomini, aziende e strutture ricettive. Stabiliamo un calendario di interventi (sfalcio, potatura, pulizia) e ci occupiamo di tutto."
    },
    {
      q: "In quali zone della provincia di Pistoia lavorate?",
      a: "Operiamo a Pistoia, Montecatini Terme, Monsummano Terme, Pescia, Montale, Quarrata e in tutta la Valdinievole. Se sei in un comune limitrofo, contattaci: valutiamo senza impegno."
    },
    {
      q: "Offrite garanzia sui lavori di imbiancatura?",
      a: "Sì, garantiamo i nostri lavori di tinteggiatura. Usiamo pitture di qualità (lavabili, traspiranti, antimuffa) e se qualcosa non ti soddisfa, interveniamo senza costi aggiuntivi."
    },
    {
      q: "Come funziona il sopralluogo e il preventivo?",
      a: "Ci chiami o ci scrivi su WhatsApp, fissiamo un appuntamento per il sopralluogo (gratuito e senza impegno), e entro 48 ore ti inviamo un preventivo dettagliato con costi, materiali e tempi di esecuzione."
    },
    {
      q: "Fate anche lavori urgenti?",
      a: "Sì, per lavori che richiedono un intervento rapido facciamo il possibile per venire incontro alle tue esigenze. Contattaci per verificare la disponibilità."
    },
  ],

  /* -----------------------------------------------------------------------
     8) MESSAGGI WHATSAPP — diversi template per diversi CTA
  ----------------------------------------------------------------------- */
  whatsappMessages: {
    // Preventivo generico (usato in home, footer, contatti)
    preventivoGenerico: "Ciao! Ho visto il vostro sito Colore & Verde. Vorrei un preventivo gratuito per un lavoro di: ",
    // Preventivo specifico per servizio (usato nelle pagine servizio)
    preventivoServizio: "Ciao, mi servirebbe un preventivo per {SERVIZIO}. ",
    // Preventivo per zona (usato nelle pagine zona)
    preventivoZona: "Ciao, abito a {ZONA} e vorrei un preventivo gratuito per: ",
    // Messaggio dal form contatti (usato in main.js)
    formMessaggio: "Ciao! Vorrei un preventivo gratuito per un lavoro.\n\n👤 {NOME}\n📞 {RECAPITO}\n🛠 {SERVIZIO}\n📍 {ZONA}\n📝 {DETTAGLI}",
    // Preventivo urgente
    preventivoUrgente: "Ciao, avrei urgenza di un preventivo per un lavoro di {SERVIZIO} a {ZONA}. Potete richiamarmi?",
    // Info generica
    infoGenerica: "Ciao! Vorrei maggiori informazioni sui vostri servizi di {SERVIZIO}.",
  },
};

module.exports = site;
