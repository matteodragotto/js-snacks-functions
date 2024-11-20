/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const firstLetter = 'A'
let arrayA = []

function startsWithA(namesArray, initial){
  for (let i = 0; i < namesArray.length; i++){
    if (namesArray[i].substring(0, 1) === initial) {
      
      arrayA.push = namesArray[i]
    }
  }
  return arrayA
}


// Invoca la funzione qui e stampa il risultato in console

console.log(startsWithA(names, firstLetter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]