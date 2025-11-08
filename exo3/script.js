"use strict";
// Mode strict  (slide 51)



// Déclaration du tableau d’objets (slide 40)
let Students = [
  { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

// Fonction principale A() (slide 45 – fonctions)
function A() {
  // Parcourir le tableau des étudiants avec une boucle for...of (slide 44)
  for (let et of Students) {
    let moyenne = (et.note1 + et.note2) / 2 + 5;
    // Appel de la fonction B() avec la moyenne (slide 47 – passage de paramètre)
    let resultat = B(moyenne);

    // Affichage du résultat individuel (slide 33 – console.log)
    if (resultat) {
      console.log(et.matricule + ": ADMIS");
    } else {
      console.log(et.matricule + ": AJOURNÉ");
    }
  }
}

function B(m) {
  // (slides 42 – instructions conditionnelles)
  if (m >= 10) {
    return true;  
  } else {
    return false; 
  }
}
