/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


function numbersOfVocals (string){ 
  const vocals = ['a', 'e', 'i', 'o', 'u'] 
  const stringArray = string.split("");
  let counter = 0;
    for (let i = 0; i < stringArray.length; i++){      
      if (vocals.includes(stringArray[i]))
      counter++  
    }
  return counter
}


// Invoca la funzione qui e stampa il risultato in console

console.log(numbersOfVocals(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)