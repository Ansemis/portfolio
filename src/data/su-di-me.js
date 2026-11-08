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
    testo: 'Testo segnaposto. Qui va il paragrafo sul disegno e sul lavoro manuale.',
    x: 0, y: 261, w: 600, h: 600, rot: 0, z: 1,
  },
  {
    id: 'libro',
    zona: { x0: 0.0, y0: 0.036, x1: 0.992, y1: 1.0 },
    immagine: '/img/anselmo-libro.webp',
    alt: 'Anselmo che legge un libro',
    testo: 'Testo segnaposto. Qui va il paragrafo sulla lettura e lo studio.',
    x: 597, y: 170, w: 700, h: 700, rot: 0, z: 2,
  },
  {
    id: 'scacchi',
    zona: { x0: 0.106, y0: 0.038, x1: 0.882, y1: 1.0 },
    immagine: '/img/anselmo-scacchi.webp',
    alt: 'Anselmo che regge una scacchiera',
    testo: 'Testo segnaposto. Qui va il paragrafo sugli scacchi e sulla strategia.',
    x: 227, y: 287, w: 620, h: 620, rot: 0, z: 3,
  },
  {
    id: 'scienziato',
    zona: { x0: 0.106, y0: 0.038, x1: 0.882, y1: 1.0 },
    immagine: '/img/anselmo-scienziato.webp',
    alt: 'Anselmo in camice da scienziato',
    testo: 'Testo segnaposto. Qui va il paragrafo sulla curiosità e la fisica.',
    x: 583, y: 490, w: 520, h: 520, rot: 0, z: 4,
  },
];
