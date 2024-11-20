/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/*Scrivo la funzione con argomento un array generico
  Poi devo prendere l'iniziale di ciascuno elemento dell'array
  Devo creare un nuovo array con dentro solo le iniziali estratte*/

// Dichiara la funzione qui

function startingLetter(namesArrey) {
  let initial;
  for (let i = 0; i < namesArrey.length; i++){
    initial = namesArrey[i]

  }
  return initial
} 


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]