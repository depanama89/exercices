// const c = "";
let s, p, h, r;
//
function SurfaceCarre(c) {
  p = 4 * c;
  s = c * c;
  return console.log(`le perimêtre de est ${p} et la surface est ${s}`);
}
SurfaceCarre("5");

function SurfaceTriangle(a, b, c) {
  p = a + b + c;
  r = a * a - b * b;
  h = Math.sqrt(r);
  s = Math.round((1 / 2) * b * h);

  return console.log(`le perimêtre de est ${p} et la surface est ${s}`);
}

SurfaceTriangle(10, 4, 3, 3);

function AfficherMembreFamille() {
  const famille = [
    {
      nom: "Mabiala",
      postnom: "mabios",
      age: 60,
      enfant: 3,
      etat: "marie",
    },
    {
      nom: "Diantete",
      postnom: "jeanine",
      age: 50,
      enfant: 2,
      etat: "marie",
    },
    {
      nom: "Balembo",
      postnom: "rommel",
      age: 40,
      enfant: 1,
      etat: "c",
    },
    {
      nom: "Kudiatu",
      postnom: "mabuisa",
      age: 30,
      enfant: 1,
      etat: "c",
    },
    {
      nom: "Kudiatu",
      postnom: "bona",
      age: 16,
      enfant: 0,
      etat: "c",
    },
  ];

  for (let i = 0; i < famille.length; i++) {
    if (famille[i].age >= 18 && famille[i].etat === "marie") {
      console.log(
        `${famille[i].nom} ,${famille[i].postnom} est un adulte  et il est ${famille[i].etat} avec  ${famille[i].enfant} `
      );
    } else if (famille[i].age >= 18 && famille[i].etat === "c") {
      console.log(
        `${famille[i].nom} ,${famille[i].postnom} est un adulte  et il est ${famille[i].etat} avec  ${famille[i].enfant} `
      );
    } else {
      console.log(
        `${famille[i].nom} ,${famille[i].postnom} est un mineur  et il est ${famille[i].etat} avec  ${famille[i].enfant} `
      );
    }
  }
}

AfficherMembreFamille();
