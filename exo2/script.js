"use strict";
// Mode strict  (slide 51)


// f1 : Tableau simple de chaînes (slide 33 et 45)
function f1() {
  let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  console.log(etudiants);
}

// tableau d'objets vu dans le slide 40
function f2() {
  let etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
  };
  console.log(etudiant); 
}

function f3() {
  let etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

// les boucles ; vue dans le slide 44
  for (let et of etudiants) {
    console.log(et.nom + "-" + et.prenom + "-" + et.age);
  }
}
