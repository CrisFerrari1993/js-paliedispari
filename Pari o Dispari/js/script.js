/*
//Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.
*/

// Definisco Variabile per bottone
let genera = document.getElementById('genera');
//creo evento listenere al bottone
genera.addEventListener('click', function(){

    //definisco variabile scelta utente e numero selezionato
    const userChoice = document.getElementById('choice').value;
    console.log(userChoice);
    const userNum = document.getElementById('numero').value;
    console.log(userNum); 
    }
);