const carre = {
  cote: 0,
  perimetre: 0,
  surface: 0,
  definirLeCote: function (nouvelleValeur) {
    this.cote = nouvelleValeur;
  },
  calculerSurface: function () {
    // if (cote) {
    //   //on utilise this.surface pour mettre à jour les propriete
    //   this.surface = cote * cote;
    //   return this.surface;
    // } else {
    this.surface = this.cote * this.cote;
    return this.surface;
    // }
  },
  calculerPerimetre: function () {},
};
carre.definirLeCote(8);
const surfaceCarreSansValeur = carre.calculerSurface();

console.log({ surfaceCarreSansValeur });
