/**
 * 1.lister tous les membres de la famille
 * 2.Afficher le nom complet
 * 3.une petite presentation avec l'age
 * 4.Dire si il est marié ou celibataire
 * 5.Dire si il est adulte ou pas
 * 6.si il a des enfants et le nombre
 */

/**
 * Que un membre peut être caracterisé par le type de la famille (restreinte ou elargie)
 * Pour la famille restreinte,les membres sont
 * papa,maman,frère et soeur
 */

/**
 * pour la famille elargie, les membres sont
 */
const familles = [];
const membreDeFamille = {
  nom: "",
  prenom: "",
  postNom: "",
  age: 0,
  etatCivile: "",
  typeDeRelation: "",
  nombreDEnfants: 0,
  biographie: "",
  remplirNom: function (nom, postNom, prenom) {
    if (nom && postNom && postNom) {
      this.nom = nom;
      this.postNom = postNom;
      this.prenom = prenom;
    } else {
      alert("veuillez remplir le nom ,postnom,prenom");
    }
  },
  definirAge: function (age) {
    if (age) {
      this.age = age;
    } else {
      alert("");
    }
  },
  definirEtatCivile: function (etatCivile) {
    if (etatCivile) {
      this.etatCivile = etatCivile;
    } else {
      alert("veuillez remplir l'etat civile");
    }
  },
  definirTypeDeRelation: function (typeDeRelation) {
    if (typeDeRelation) {
      this.typeDeRelation = typeDeRelation;
    } else {
      alert("veuillez remplir typeDeRelation");
    }
  },
  definirNombreDEnfants: function (nombreDEnfants) {
    if (nombreDEnfants) {
      this.nombreDEnfants = nombreDEnfants;
    } else {
      alert("veuillez remplir l'etat civile");
    }
  },
  afficherNoms: function () {
    const nameParagraphe = `${this.nom} ${this.postNom} ${this.prenom}`;
    return nameParagraphe;
  },
};
membreDeFamille.remplirNom("PATRICK", "KUDIATU", "TOMANITU");
membreDeFamille.remplirNom("roe", "KUDIATU", "TOMANITU");
// patrick.remplirNom("PATRICK", "KUDIATU", "TOMANITU");
const patrick = membreDeFamille.afficherNoms();
const patrick1 = membreDeFamille.afficherNoms();
familles.push(patrick1, patrick);
console.log(familles);
