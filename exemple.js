const apprenant = [
  {
    prenom: "patrick",
    nom: "kudiatu",
    classe: "C2",
    formation: "developpeur web",
    afficherApprenant: function () {
      return ` ${this.prenom} ${this.nom}`;
      // console.log(
      //   `Mon prenom :${this.prenom} Nom:${this.nom} classe:${this.classe}  formation:${this.formation}`
      // );
    },
    afficherCreneau: function () {
      const nomApprenant = this.afficherApprenant();
      switch (this.classe) {
        case "C2":
          console.log(
            `${nomApprenant} suit le cours le lundi et le jeudi de 17h30 à 21h30`
          );
          break;
        case "A4":
          console.log(
            `${nomApprenant} suit le cours le mardi et vendredi de 17h30 à 21h30`
          );
          break;
        default:
          console.log(`cet apprenant  n'est enregister`);
          break;
      }
    },
  },
  {
    prenom: "patrick",
    nom: "kudiatu",
    classe: "C2",
    formation: "developpeur web",
    afficherApprenant: function () {
      return ` ${this.prenom} ${this.nom}`;
      // console.log(
      //   `Mon prenom :${this.prenom} Nom:${this.nom} classe:${this.classe}  formation:${this.formation}`
      // );
    },
    afficherCreneau: function () {
      const nomApprenant = this.afficherApprenant();
      switch (this.classe) {
        case "C2":
          console.log(
            `${nomApprenant} suit le cours le lundi et le jeudi de 17h30 à 21h30`
          );
          break;
        case "A4":
          console.log(
            `${nomApprenant} suit le cours le mardi et vendredi de 17h30 à 21h30`
          );
          break;
        default:
          console.log(`cet apprenant  n'est enregister`);
          break;
      }
    },
  },
];

const apprenant2 = {
  prenom: "patrick",
  nom: "Rodrick",
  classe: "A4",
  formation: "developpeur web",
  afficherApprenant: function () {
    console.log(
      `Mon prenom :${this.prenom} Nom:${this.nom} classe:${this.classe}  formation:${this.formation}`
    );
  },
  afficherCreneau: function () {
    const nomApprenant = this.afficherApprenant();
    switch (this.classe) {
      case "C2":
        console.log(
          `${nomApprenant} suit le cours le lundi et le jeudi de 17h30 à 21h30`
        );
        break;
      case "A4":
        console.log(
          `${nomApprenant} suit le cours le mardi et vendredi de 17h30 à 21h30`
        );
        break;
      default:
        console.log(`cet apprenant  n'est enregister`);
        break;
    }
  },
};
apprenant[1].afficherCreneau();
// apprenant2.afficherCreneau();
// apprenant2.afficherApprenant();
// apprenant.afficherApprenant();
// function afficherApprenant1(prenom, nom, classe, formation) {
//   console.log(` ${prenom} ${nom}`);
// }

// afficherApprenant1(apprenant.nom, apprenant.prenom);
