/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const d = new Date();

function hello(personName) {
  if (d.getHours > 7 && d.getHours < 13) {
    return 'Buongiorno' + ' ' + personName
  } else if (d.getHours > 13 && d.getHours < 17) {
    return 'Buon pomeriggio' + ' ' + personName
  } else {
    return 'Buonasera' + ' ' + personName
  }    
} 


// Invoca la funzione qui e stampa il risultato in console

console.log(hello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.