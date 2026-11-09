// I quattro ritagli della sezione "su di me".
// Scrivi il testo di ciascuno dentro "testo": comparirà nel pop-up all'hover.
//
// "zona" e' l'area sensibile al passaggio del mouse, in frazioni del riquadro:
// corrisponde al disegno vero, escluso il bordo trasparente del PNG.
//
// I valori di posizione (x, y, larghezza, altezza, rotazione) vengono dal Figma
// e sono riferiti a una tela di 1440x1024. Non serve toccarli per cambiare i testi.
export const pezzi = [
  {
    id: 'scrive',
    zona: { x0: 0.038, y0: 0.044, x1: 0.927, y1: 0.961 },
    immagine: '/img/anselmo-scrive.webp',
    alt: 'Anselmo seduto che scrive, circondato da fogli',
    testo: 'Scrivere, da sempre, è la forma d’arte che libera i miei pensieri. Amo scrivere racconti brevi (sono stato presidente di un’associazione culturale nella mia città con focus su scrittura e interpretazione), ma utilizzo la scrittura anche per ragionare meglio.',
    x: 0, y: 261, w: 600, h: 600, rot: 0, z: 1,
  },
  {
    id: 'libro',
    zona: { x0: 0.0, y0: 0.036, x1: 0.992, y1: 1.0 },
    immagine: '/img/anselmo-libro.webp',
    alt: 'Anselmo che legge un libro',
    testo: 'L’amore per la lettura è la (quasi!) diretta conseguenza di quello per la scrittura. Mi rilassa, e ho un debole per le belle storie e le ambientazioni. Principalmente leggo romanzi (narrativa, storico, fantasy. Ci sono pochi generi che non sfiorerei nemmeno), ma ho sempre almeno un saggio nel mio comodino.',
    x: 597, y: 170, w: 700, h: 700, rot: 0, z: 2,
  },
  {
    id: 'scacchi',
    zona: { x0: 0.106, y0: 0.038, x1: 0.882, y1: 1.0 },
    immagine: '/img/anselmo-scacchi.webp',
    alt: 'Anselmo che regge una scacchiera',
    testo: 'Gli scacchi sono una mia passione relativamente recente: non sono ancora bravo, ma mi diverte passare il tempo a cercare nuove strategie. Trovo il mondo della scacchiera estremamente affascinante.',
    x: 227, y: 287, w: 620, h: 620, rot: 0, z: 3,
  },
  {
    id: 'scienziato',
    zona: { x0: 0.106, y0: 0.038, x1: 0.882, y1: 1.0 },
    immagine: '/img/anselmo-scienziato.webp',
    alt: 'Anselmo in camice da scienziato',
    testo: 'E sono anche scienziato!\nNo, non è vero. Ovviamente. Però la scienza mi piace molto! Seguo e leggo curiosità sulla scienza, e ho anche intrapreso una carriera universitaria in chimica, prima di capire che non fosse la mia strada.',
    x: 583, y: 490, w: 520, h: 520, rot: 0, z: 4,
  },
];
