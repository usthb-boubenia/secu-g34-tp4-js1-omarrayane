"use strict";
// Mode strict  (slide 51)

// Déclaration du tableau d’objets (slide 40)
const Students = [
    {
        matricule: 1000,
        nom: "JHON",
        prenom: "DOE",
        note1: 14,
        note2: 5
    },
    {
        matricule: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7,
        note2: 1
    },
    {
        matricule: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        note1: 13,
        note2: 3
    }
];

// declaration de la fonction B avec parametre et retour ( slide 45)
function B(moy) {
     // (slides 42 – instructions conditionnelles)
    if (moy >= 10){
        return true;
    }else{
        return false;
    }
}

// Fonction principale A() (slide 45 – fonctions)
function A() {
  //  une boucle for...of (slide 44)
  for (let student of Students) {
    let moyenne = (student.note1 + student.note2) / 2 + 5;
    // Appel de la fonction B() avec la moyenne (slide 47 – passage de paramètre)
    let resultat = B(moyenne);

    // Affichage du résultat (slide 33 – console.log) et le if...else (slide 42)
    if (resultat) {
      console.log(student.matricule + ": ADMIS");
    } else {
      console.log(student.matricule + ": AJOURNÉ");
    }
  }
}


