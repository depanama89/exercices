/**
 * 1 calculer le perimetre du triangle
 * cote a, b,c
 * perimetre
 * function pour calculer le perimetre
 * Surface
 * fonction pour calculer la surface
 */
const triangle = {
  a: 0,
  b: 0,
  c: 0,
  h: 0,
  surface: 0,
  perimetre: 0,
  definirCote: function (coteA, coteB, coteC) {
    this.a = coteA;
    this.b = coteB;
    this.c = coteC;
  },
  calculSurface: function () {
    const ad = Math.abs(this.a * this.a - this.b * this.b);
    this.h = Math.sqrt(ad);

    this.surface = (1 / 2) * this.b * this.h;
    return Math.round(this.surface);
  },
  calculPerimetre: function () {
    this.perimetre = this.a + this.b + this.c;
    return this.perimetre;
  },
};
triangle.definirCote(2, 3, 4);
const resultat1 = triangle.calculSurface();
const resultat = triangle.calculPerimetre();
console.log(resultat1);
