// ============================================================
//  I PROGETTI DEL PORTFOLIO
//
//  Ogni blocco qui dentro genera sia la card in homepage
//  sia la pagina dedicata (/progetti/<slug>).
//  L`ordine dell`elenco decide anche i link
//  "progetto precedente" e "prossimo progetto".
//
//  Le immagini vanno messe in  public/img/
//  e richiamate col percorso  /img/nomefile.webp
//  Le gallerie lasciate vuote [] non vengono mostrate.
// ============================================================
//
//  I testi stanno fra backtick ` (AltGr + ‘ su tastiera italiana),
//  non fra apici: così puoi scrivere liberamente l'apostrofo.
//  Ogni testo sta su una riga sola: non spezzarlo con il +.

export const progetti = [
  {
    slug: `luce-candele-artigianali`,

    // Titolo che compare nei risultati di ricerca e nelle anteprime.
    // Diverso da `titolo`, che resta quello scritto sulla pagina.
    // --> questo l'ho scritto io: cambialo con le tue parole.
    titoloSeo: `Luce, e-commerce di candele artigianali — Andrea Messina`,
    // Immagine che compare condividendo il link del progetto.
    anteprima: `/img/og/og-luce.jpg`,
    anteprimaAlt: `La home dell’e-commerce Luce, candele artigianali`,
    titolo: `Luce - candele artigianali`,
    descrizione:
      `E-commerce di candele artigianali basato in Sardegna: dalla vendita su Instagram alla propria piattaforma online.`,
    immagine: `/img/anselmo-candela.webp`,
    alt: `Anselmo che regge una candela accesa`,

    // --- pagina dedicata ---
    eroe: { immagine: `/img/anselmo-candela.webp`, alt: `Anselmo che regge una candela accesa` },

    obiettivo:
      `Quello di Luce Candele Artigianali è un e-commerce nato dall’esigenza della cliente di portare il suo business, ben avviato e con una solida clientela, ma limitato dalla cerchia privata e dal passaparola, fino alla sconfinatezza del web.`,

    strategia:
      `Un prodotto artigianale merita un e-commerce che rispecchi la sua identità. Per questo, ho avuto da subito l’intenzione di creare qualcosa che rispettasse i canoni della vendita online, accompagnandoli a sensazioni di ambiente domestico, affidabilità e tepore.`,

    criticita:
      `Una delle necessità primarie era quella di rendere il più possibile personalizzabile la candela mantenendo fluido il processo lato esperienza utente. Lo scoglio si è da subito palesato con i limiti di Webflow come strumento di lavoro per questo caso specifico. Colore dei fiori, tipo di bouquet, ciondoli, dimensioni e fragranze: ognuna di queste personalizzazioni complicava la situazione per via dell'insufficiente potenzialità nativa di Webflow, che non permette una grossa gamma di varianti per lo stesso prodotto. Inoltre, sistemi come la fase di checkout e la fatturazione automatica hanno reso più arduo il lavoro. Avendo concordato con la cliente un piano che comprendesse determinate spese, è diventato indispensabile completare il lavoro con questa piattaforma, almeno per una prima pubblicazione.`,

    soluzioni:
      `L'esigenza della personalizzazione libera e i limiti hanno portato alla naturale conclusione che il sistema nativo di Webflow andasse sostituito con del codice extra: attraverso lo studio dell'UX e la progettazione in Figma, con il supporto di strumenti di Intelligenza Artificiale (Claude in particolare) ho costruito un sistema in cui l'utente può scegliere tra alcune opzioni preimpostate oppure scrivere liberamente quali colori preferisce. Questa soluzione all’apparenza semplice è stata complicata per il modo in cui la piattaforma gestisce gli ordini e le note: in pratica, la personalizzazione in questo modo, passando attraverso il codice, bypassa l’ordine nativo e il modo in cui viene riconosciuto. Per questo, ora viene letta attraverso delle note esterne, comode e rapide da leggere per il cliente nonostante il workaround. Per quanto riguarda la fatturazione automatica, anch’essa non applicabile nativamente, ho costruito attraverso Make uno scenario che automatizza il processo, connettendo Webflow con Fatture In Cloud riducendo drasticamente la mole di lavoro alla cliente.`,

    conclusioni:
      `Si era partiti dal vendere solo via Instagram e passaparola, oggi Luce è un negozio online che vende h24 e permette di generare fatture automaticamente facendo risparmiare molto tempo alla cliente. Inoltre, se prima la lista degli ordini era destinata al disordine di messaggi in DM da riportare su foglio di lavoro, ora è direttamente consultabile all'interno di Webflow.
Per quanto mi riguarda, lavorare alla costruzione di un e-commerce ha rafforzato le mie competenze in ambito UX/UI, per via delle condizioni differenti rispetto ad un normale sito web. Dover trovare dei workaround ha avuto la sua parte positiva in questo.
Ho imparato a studiare meglio gli strumenti di lavoro prima di optare per loro come soluzione, per me e per i clienti.`,

    // Gallerie: aggiungi i file man mano che li esporti da Figma.
    schermate: [
      { src: `/img/luce-home.webp`, alt: `Home dell'e-commerce Luce: la sezione Top Seller con tre candele in vetrina, ognuna con prezzo e pulsante Scopri.` },
      { src: `/img/luce-prodotto.webp`, alt: `Pagina prodotto di un bouquet: foto a sinistra, descrizione a destra e menu a tendina aperto per scegliere il colore del bouquet.` },
    ],
    dettagli: [
      { src: `/img/luce-catalogo.webp`, alt: `Catalogo delle fragranze: schede circolari con foto e descrizione di Peonia, Ambra, Magnolia e altri profumi.` },
      { src: `/img/luce-make.webp`, alt: `Lo scenario Make che collega Webflow a Fatture in Cloud: la catena di passaggi che genera la fattura a ogni ordine.` },
    ],

    strumenti: [
      { nome: `Make`,      logo: `/img/logo-make.webp` },
      { nome: `Webflow`,   logo: `/img/logo-webflow.webp` },
      { nome: `Figma`,     logo: `/img/logo-figma.webp` },
      { nome: `Photoshop`, logo: `/img/logo-photoshop.webp` },
    ],
  },

  {
    slug: `sardiniaxplore`,

    // Titolo che compare nei risultati di ricerca e nelle anteprime.
    // Diverso da `titolo`, che resta quello scritto sulla pagina.
    // --> questo l'ho scritto io: cambialo con le tue parole.
    titoloSeo: `SardiniaXplore, logo e identità visiva — Andrea Messina`,
    // Immagine che compare condividendo il link del progetto.
    anteprima: `/img/og/og-sardiniaxplore.jpg`,
    anteprimaAlt: `Studi di forma per il logo di SardiniaXplore`,
    titolo: `sardiniaxplore`,
    descrizione:
      `Logo design di un’attività emergente di escursionismo in Sardegna: palette colori, font e visual identity.`,
    immagine: `/img/anselmo-sardiniaxplore.webp`,
    alt: `Anselmo con la maglietta di SardiniaXplore`,

    eroe: { immagine: `/img/anselmo-sardiniaxplore.webp`, alt: `Anselmo con la maglietta di SardiniaXplore` },

    obiettivo:
      `La cliente di SardiniaXplore aveva un chiaro obiettivo: farsi spazio nel mondo dell’escursionismo in Sardegna come guida turistica. Come primo passo, un logo adeguato era indispensabile.`,

    strategia:
      `Distinguersi non è quasi mai facile, in particolare in questo settore e in questa isola. Per questo, ho da subito voluto creare un logo unico, che comprendesse elementi dell’escursionismo concordati con la cliente accompagnati da colori che richiamassero la terra e il mare.`,

    criticita:
      `La presenza di numerosi professionisti del settore rende questo progetto decisamente ambizioso. Il nome dell’attività deciso dalla cliente è un'arma a doppio taglio: vantaggioso per via dell'immediata riconoscibilità del territorio di azione e svantaggioso vista l’alta tendenza degli imprenditori sardi ad utilizzare Sardegna, Sardinia e declinazioni varie per le loro attività. A livello visivo dovevo quindi distinguermi da: 1. aziende che portavano quel nome; 2. attività di escursionismo. Questi due vincoli hanno reso il lavoro creativo e di ricerca più complicato, ma sicuramente molto più interessante e coinvolgente.`,

    soluzioni:
      `Le linee guida: inserire nel logo bussola e rosa dei venti (indicazione della cliente), creare una “S” stilizzata che fosse anche un puntatore su una mappa. Il mio compito era metterli in armonia. Il confronto costante con la cliente è stato fondamentale per arrivare ad una quadra dopo un'intensa fase di schizzi (qui sopra ci sono alcune bozze della fase iniziale del logo). Lo studio sulla palette è stato da subito rivolto a colori che richiamassero la natura sarda.`,

    conclusioni:
      `Il risultato è una combinazione di elementi affini, in armonia tra loro ed allo stesso tempo ben distinguibili. I colori del tramonto e sfumature di mediterraneo fanno da collante per rendere questo logo unico, un viaggio che porta con sé fino agli odori della natura sarda. Ora la cliente ha un logo che la rappresenta, le conferisce il giusto prestigio e che è la solida base di un'identità visiva pronta a crescere.`,

    schermate: [
      { src: `/img/sx-studi-forme.webp`, alt: `Foglio di schizzi a penna: decine di studi di forma per il simbolo, tra spirali, onde e profili di una S.` },
      { src: `/img/sx-studi-lettering.webp`, alt: `Foglio di schizzi a matita: prove di lettering per SardiniaXplore e studi della S inserita in un puntatore su mappa.` },
    ],
    dettagli: [],

    // la vetrina del logo, come nel Figma: simbolo su sfondo a sinistra,
    // simbolo e logotipo a destra
    vetrinaLogo: {
      sfondo:    `/img/sx-pittogramma-sfondo.webp`,
      simbolo:   `/img/sx-pittogramma.webp`,
      logotipo:  `/img/sx-logotipo.webp`,
    },

    strumenti: [
      { nome: `Illustrator`, logo: `/img/logo-illustrator.webp` },
      { nome: `Procreate`,   logo: `/img/logo-procreate.webp` },
    ],
  },

  {
    slug: `caats`,

    // Titolo che compare nei risultati di ricerca e nelle anteprime.
    // Diverso da `titolo`, che resta quello scritto sulla pagina.
    // --> questo l'ho scritto io: cambialo con le tue parole.
    titoloSeo: `CAATS, sito per un consorzio di artigiani — Andrea Messina`,
    // Immagine che compare condividendo il link del progetto.
    anteprima: `/img/og/og-caats.jpg`,
    anteprimaAlt: `La home del sito del consorzio CAATS`,
    titolo: `caats`,
    descrizione:
      `Sito per il Consorzio Artisti Artigiani Turritani Sardi, associazione incredibilmente versatile che porta avanti la cultura nel territorio attraverso più forme d’arte.`,
    immagine: `/img/anselmo-caats.webp`,
    alt: `Anselmo con bombetta e occhiali`,

    eroe: { immagine: `/img/anselmo-caats.webp`, alt: `Anselmo con bombetta e occhiali` },

    obiettivo:
      `Caats (Acronimo di Consorzio Artisti Artigiani Turritani Sardi) è un’associazione culturale molto attiva nel territorio. Come tenere aggiornati gli utenti sulla grossa mole di eventi portati avanti dalle varie rassegne dell’associazione?`,

    strategia:
      `Serviva qualcosa che consentisse all'utente di accedere rapidamente alle informazioni di ogni rassegna (ognuna con le proprie peculiarità), con interfacce intuitive e pratiche. Costruire un calendario interattivo mi è subito sembrata la scelta ideale.`,

    criticita:
      `La mole di eventi era considerevole e la necessità di rendere indipendente il cliente è stata da subito una mia priorità. Inoltre, avendo più rassegne ed eventi collaterali, era importante che tutto fosse ordinato e intuibile lato utente. Per quanto riguarda la costruzione del calendario, ne avevo già creato uno simile per un altro sito. Questo ha reso la realizzazione più semplice.`,

    soluzioni:
      `Il gioco sta nel far dialogare JavaScript con il CMS nativo di Webflow. Un array viene popolato automaticamente nel momento in cui un evento viene aggiunto tramite il CMS. Attraverso questo sistema il calendario interattivo viene compilato immediatamente. Il calendario è anche intuitivo per l’utente: ogni giorno in cui è presente un evento è evidenziato da un pallino rosso, e cliccando su di esso compare in bella vista la locandina con le rispettive informazioni.`,

    conclusioni:
      `Un sistema che metterebbe in difficoltà chi non è pratico del codice diventa semplice ed intuitivo. Garantisce inoltre un prezzo relativamente ridotto e totale autonomia. Lato utente, il sito permette di non dover scorrere tra confusionari post nei social alla ricerca degli eventi.`,

    schermate: [
      { src: `/img/caats-home.webp`, alt: `Home del sito CAATS: una fotografia di concerto in controluce, con il nome dell'associazione sovrapposto in grande.` },
      { src: `/img/caats-rassegne.webp`, alt: `Pagina delle rassegne: le schede di Il Rumore delle Pagine e AsinArt, ognuna con logo, fotografia e pulsante Scopri di più.` },
    ],
    dettagli: [
      { src: `/img/caats-calendario.webp`, alt: `Calendario interattivo di agosto: i giorni con un evento portano un pallino rosso e il giorno scelto apre la locandina sulla destra.` },
    ],

    strumenti: [
      { nome: `Webflow`, logo: `/img/logo-webflow.webp` },
      { nome: `Figma`,   logo: `/img/logo-figma.webp` },
    ],
  },
];
