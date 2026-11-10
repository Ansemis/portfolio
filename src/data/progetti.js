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
//
//  NOTA: il campo "telefoni" al momento non viene mostrato — le
//  immagini con la cornice dello smartphone sono state tolte dalla
//  pagina. I file restano qui, pronti se le rimettiamo.

export const progetti = [
  {
    slug: `luce-candele-artigianali`,
    titolo: `Luce - candele artigianali`,
    descrizione:
      `E-commerce di candele artigianali basato in Sardegna: dalla vendita su Instagram alla propria piattaforma.`,
    immagine: `/img/anselmo-candela.webp`,
    alt: `Anselmo che regge una candela accesa`,

    // --- pagina dedicata ---
    eroe: { immagine: `/img/anselmo-candela.webp`, alt: `Anselmo che regge una candela accesa` },

    obiettivo:
      `Quello di Luce Candele Artigianali è un e-commerce nato dall’esigenza della cliente di portare il suo business, ben avviato e con una solida clientela, ma limitata dalla cerchia privata e dal passaparola, fino all’illimitatezza dal web.`,

    strategia:
      `Un prodotto artigianale merita un e-commerce che rispecchi sua identità. Per questo, ho avuto da subito l’intenzione di creare qualcosa che rispettasse i canoni della vendita online, accompagnandoli a sensazioni di ambiente domestico, affidabilità e tepore.`,

    criticita:
      `L’utilizzo di Webflow come strumento di lavoro ha mostrato da subito i propri limiti, messi in risalto dalle richieste della cliente. Una delle necessità primarie era quella di rendere il più possibile personalizzabile la candela. Colore dei fiori, tipo di bouquet, ciondoli, dimensioni e fragranze: ognuna di queste personalizzazioni complicava la situazione per via della insufficiente potenzialità nativa di Webflow, che non permette una grossa gamma di varianti per lo stesso prodotto. Inoltre, sistemi come la fase di checkout e la fatturazione automatica hanno reso più arduo il lavoro. Avendo concordato con la cliente un piano che comprendesse determinate spese, è diventato indispensabile completare il lavoro con questo strumento, almeno per una prima pubblicazione.`,

    soluzioni:
      `La prerogativa della personalizzazione libera e i limiti hanno portato alla naturale conclusione che il sistema nativo di Webflow andasse sostituito con del codice extra: con l’aiuto di strumenti di Intelligenza Artificiale (per quanto riguarda la scrittura del codice) ho costruito un sistema in cui il cliente può scegliere tra alcune opzioni preimpostate oppure scrivere liberamente quale colori preferisce. Questa soluzione all’apparenza semplice (lo sarebbe stato, a dir la verità, utilizzando un altro strumento di lavoro) è stata complicata per il modo in cui Webflow gestisce gli ordini e le note: in pratica, la personalizzazione in questo modo, passando attraverso il codice, bypassa l’ordine nativo e il modo in cui viene riconosciuto. Per questo, ora passa attraverso delle note esterne, comode e rapide da leggere per il cliente nonostante il workaround. Per quanto riguarda la fatturazione automatica, anch’essa non applicabile nativamente, ho costruito attraverso Make uno scenario che automatizza il processo, connettendo Webflow con Fatture In Cloud riducendo drasticamente la mole di lavoro alla cliente.`,

    conclusioni:
      `La cliente ed io siamo soddisfatti del lavoro compiuto. Se prima l’attività aveva un limite spaziale e imponeva alla cliente di vendere attraverso canali social e privati, ora può godere di un servizio professionale, automatizzato e personalizzato. Per quanto riguarda il design, la Ux e la Ui, sono abbastanza soddisfatto, ma riconosco alcuni difetti che, col senno di poi, avrei dovuto negoziare meglio con la cliente. Non precludo la possibilità di migrare verso altre piattaforme adatte all’e-commerce e/o di migliorare la qualità visiva del sito.`,

    // Gallerie: aggiungi i file man mano che li esporti da Figma.
    schermate: [`/img/luce-home.webp`, `/img/luce-prodotto.webp`],
    telefoni:  [`/img/luce-mobile-shop.webp`, `/img/luce-mobile-faq.webp`],
    dettagli:  [`/img/luce-catalogo.webp`, `/img/luce-make.webp`],

    strumenti: [
      { nome: `Make`,      logo: `/img/logo-make.webp` },
      { nome: `Webflow`,   logo: `/img/logo-webflow.webp` },
      { nome: `Figma`,     logo: `/img/logo-figma.webp` },
      { nome: `Photoshop`, logo: `/img/logo-photoshop.webp` },
    ],
  },

  {
    slug: `sardiniaxplore`,
    titolo: `sardiniaxplore`,
    descrizione:
      `Logo design di un’attività emergente di escursionismo in Sardegna: palette colori, font e visual identity.`,
    immagine: `/img/anselmo-sardiniaxplore.webp`,
    alt: `Anselmo con la maglietta di SardiniaXplore`,

    eroe: { immagine: `/img/anselmo-sardiniaxplore.webp`, alt: `Anselmo con la maglietta di SardiniaXplore` },

    obiettivo:
      `SardiniaXplore nasce con un chiaro obiettivo: farsi spazio nel mondo dell’escursionismo in Sardegna. La presenza di numerosi professionisti del settore rende questo progetto decisamente ambizioso. Come prima passo, un logo adeguato era indispensabile.`,

    strategia:
      `Distinguersi non è quasi mai facile, in particolare in questo settore e in questa isola. Per questo, ho da subito voluto creare un logo diverso da tutti gli altri, che comprendesse elementi dell’escursionismo concordati con la cliente accompagnati da colori che richiamassero la terra e il mare.`,

    criticita:
      `Il nome dell’attività era già stato deciso dalla cliente, e presentava uno svantaggio considerevole vista l’alta tendenza degli imprenditori sardi di utilizzare Sardegna, Sardinia e declinazioni varie per le loro attività. A livello visivo dovevo quindi distinguermi da: 1. aziende che portavano quel nome; 2. attività di escursionismo. Questi due vincoli hanno reso il lavoro creativo e di ricerca più complicato, ma sicuramente molto più interessante e coinvolgente.`,

    soluzioni:
      `Linee guida su strumenti indicati dalla cliente (bussola e rosa dei venti), assieme alla mia intenzione di creare una “S” stilizzata che fosse anche un puntatore su una mappa hanno portato ad una combinazione di elementi affini, in armonia tra loro ed allo stesso tempo ben distinguibili. Il colori del tramonto e sfumature di mediterraneo fanno da collante per rendere questo logo unico.`,

    conclusioni:
      `La cliente ed io siamo soddisfatti. È stato un lavoro più impegnativo del previsto, e sono convinto che lo sforzo fatto abbia ripagato in qualità.`,

    schermate: [`/img/sx-studi-forme.webp`, `/img/sx-studi-lettering.webp`],
    telefoni:  [],
    dettagli:  [],

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
    titolo: `caats`,
    descrizione:
      `Sito per il Consorzio Artisti Artigiani Turritani Sardi, associazione incredibilmente versatile che porta avanti la cultura nel territorio attraverso più forme d’arte.`,
    immagine: `/img/anselmo-caats.webp`,
    alt: `Anselmo con bombetta e occhiali`,

    eroe: { immagine: `/img/anselmo-caats.webp`, alt: `Anselmo con bombetta e occhiali` },

    obiettivo:
      `Caats (Acronimo di Consorzio Artisti Artigiani Turritani Sardi) è un’associazione culturale molto attiva nel territorio. L’obiettivo era quello di tenere aggiornati gli utenti sulla grossa mole di eventi portati avanti dalle varie rassegne dell’associazione.`,

    strategia:
      `Creare un calendario interattivo per l’associazione è stata fin da subito la soluzione che ho trovato migliore. Con il supporto del CMS di Webflow aggiornare gli eventi per il cliente è semplicissimo, il che è fondamentale per renderlo autonomo e liberarlo di un eventuale costo mensile per l’aggiornamento del sito.`,

    criticita:
      `La mole di eventi era considerevole e la necessità di rendere indipendente il cliente è stata da subito una mia prerogativa. Inoltre, avendo più rassegne ed eventi collaterali, era importante che tutto fosse ordinato e intuibile lato utente.`,

    soluzioni:
      `Webflow con il suo CMS ha rappresentato la soluzione automatica: semplice ed intuitivo, con un prezzo relativamente ridotto ha permesso al cliente di vedere soddisfatte le sue richieste. Il calendario interattivo è intuitivo e semplice per l’utente: ogni giorno in cui è presente un evento è evidenziato da un pallino rosso, cliccando su di esso compare la locandina dell’evento con tutti i dettagli di cui c’è bisogno.`,

    conclusioni:
      `Autonomia, costi ridotti e semplicità di aggiornamento. I requisiti sono stati soddisfatti. Il design è intuitivo e minimale, sicuramente non all’avanguardia.`,

    schermate: [`/img/caats-home.webp`, `/img/caats-rassegne.webp`],
    telefoni:  [],
    dettagli:  [`/img/caats-calendario.webp`],

    strumenti: [
      { nome: `Webflow`, logo: `/img/logo-webflow.webp` },
      { nome: `Figma`,   logo: `/img/logo-figma.webp` },
    ],
  },
];
