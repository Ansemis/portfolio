// I dati di contatto del footer. Modifica qui, non nel componente.
//
//  I testi stanno fra backtick ` (AltGr + ‘ su tastiera italiana),
//  non fra apici: così puoi scrivere liberamente l'apostrofo.
//  Ogni testo sta su una riga sola: non spezzarlo con il +.
export const contatti = {
  email: `a_messina@outlook.it`,
  instagram: { etichetta: `_ansemis`, url: `https://instagram.com/_ansemis` },
  linkedin:  { etichetta: `Linkedin`, url: `https://www.linkedin.com/in/andreamessina-webdesign` },
  partitaIva: `P.Iva 02994970909`,
  sede: `Sassari, Sardegna`,
  copyright: `Andrea Messina, tutti i diritti riservati`,

  // Quando l'informativa sarà pronta su iubenda, incolla qui il suo
  // indirizzo: la voce nel footer diventa un link da sola. Finchè url
  // resta vuoto, compare come testo spento e non cliccabile.
  privacy: { etichetta: `Privacy`, url: `` },

  // Le pagine elencate nella colonna "Naviga" del footer.
  pagine: [
    { etichetta: `Progetti`, url: `/#progetti` },
    { etichetta: `Chi sono`, url: `/#chi-sono` },
    { etichetta: `Lavoriamo`, url: `/lavoriamo` },
  ],
};
