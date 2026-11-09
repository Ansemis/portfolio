// ============================================================
//  I SERVIZI
//
//  Compaiono sulla pagina /lavoriamo (versione estesa) e in
//  home, sotto i progetti (versione breve).
//
//  "sommario" è la riga che si legge in home: una frase.
//  "testo" è il paragrafo della pagina lavoriamo.
//  "voci" sono i punti concreti sotto il paragrafo: tienili
//  corti, servono a far capire cosa è compreso.
// ============================================================

export const servizi = [
  {
    id: 'siti',
    titolo: 'Siti e e-commerce',
    sommario: 'Progetto e costruisco il sito da zero: nessun modello riadattato.',
    testo:
      'Parto da quello che devi ottenere — farti trovare, raccontare cosa fai, vendere — e ' +
      'costruisco il sito intorno a quell’obiettivo. Niente temi comprati e rivestiti: struttura, ' +
      'grafica e codice nascono per te, quindi il sito è veloce, si legge bene dal telefono e non ' +
      'somiglia a quello di nessun altro. Se vendi online curo anche schede prodotto, pagamenti e ' +
      'spedizioni, e ti lascio in grado di gestirlo senza dipendere da me.',
    voci: [
      'Design e sviluppo seguiti dalla stessa persona',
      'Veloce da caricare, ordinato da leggere',
      'E-commerce pronto a vendere, non solo a esistere',
    ],
  },
  {
    id: 'identita',
    titolo: 'Identità visiva',
    sommario: 'Logo, colori e caratteri che ti rendono riconoscibile a colpo d’occhio.',
    testo:
      'Un’identità visiva non è solo un logo: è l’insieme di segni che fa capire chi sei in mezzo ' +
      'secondo, prima ancora che qualcuno legga il tuo nome. Studio il marchio, scelgo colori e ' +
      'caratteri, decido come si usano e cosa evitare. Alla fine ti consegno tutto in un documento ' +
      'che chiunque lavori con te può seguire: il tipografo, chi ti gestisce i social, il prossimo ' +
      'grafico.',
    voci: [
      'Logo e varianti per ogni formato',
      'Palette, caratteri e regole d’uso',
      'Brandbook da consegnare a chi lavora con te',
    ],
  },
  {
    id: 'restyling',
    titolo: 'Restyling',
    sommario: 'Hai già un sito ma non ti rappresenta più? Lo rimetto in riga.',
    testo:
      'A volte non serve rifare tutto. Guardo il sito che hai e ti dico con chiarezza cosa non ' +
      'funziona — l’aspetto, la struttura, la velocità, i testi che non convincono — e cosa invece ' +
      'conviene tenere. Poi lo sistemo, salvando quello che già ti porta risultati: posizionamento ' +
      'su Google, contenuti, indirizzi delle pagine.',
    voci: [
      'Analisi di cosa funziona e cosa no',
      'Aspetto rinnovato senza perdere contenuti',
      'Se rifarlo costa meno, te lo dico',
    ],
  },
];
