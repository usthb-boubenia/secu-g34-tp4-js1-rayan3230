'use strict';
function f1() {
  //Affiche un tableau d'étudiants (slide 40
  const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];
  for(let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}

function f2() {
  // Création et affichage d'un objet (slide 35 - objets)
  const etudiant = { nom: 'John', prenom: 'DOE', age: 30 };
  console.log(etudiant);
}

function f3() {
  const liste = [
    { nom: 'nom1', prenom: 'prenom1', age: 21 },
    { nom: 'nom2', prenom: 'prenom2', age: 22 },
    { nom: 'nom3', prenom: 'prenom3', age: 23 }
  ];

    for(let i = 0; i < liste.length; i++) {
        const s = liste[i];
        console.log(`${s.nom}-${s.prenom}-${s.age}`);
    }
}

