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

    const userNum = parseInt(document.getElementById('numero').value);
    // funzione numero casuale pc
    function pcNum(min, max){
        let num = Math.floor(Math.random(min) * max) + min;
        return num
    }
    // definisco variabile per il numero scelto dal pc
    let pcChoice = parseInt(pcNum(1,5));
    console.log('il numero scelto dla pc è: ' + pcChoice);    
    // visualizzo su console scelta user
    console.log('La tua scelta é: ' + userChoice);
    console.log('Il numero che hai scelto è: ' + userNum);
    
    //funzione che somma i numeri
    function sum(pcChoice, userNum) {
        let risultato = pcChoice + userNum;
        return risultato;
    }

    let total = sum(pcChoice, userNum);

    console.log('La somma delle scelte è: ' + total);

    //funzione che determina se la somma è pari o dispari
    function pariODispari(){
        if (total % 2 !== 0){
            return 'dispari'
        } else {
            return 'pari'
        }
    };

    console.log(pariODispari());

    //definisco variabilke al verdetto finale
    let verdetto = pariODispari();

    if (userChoice === verdetto) {
        return document.getElementById('resoult').innerHTML = `Hai vinto! Tu hai scelto ${userChoice} e la somma del tuo numero ${userNum} piu quella del PC ${pcChoice} ha dato come risultato ${total} che è un numero ${pariODispari()} `;
    } else {
        return document.getElementById('resoult').innerHTML = `Hai perso! tu hai scelto ${userChoice} e la somma del tuo numero ${userNum} piu quella del PC ${pcChoice} ha dato come risultato ${total} che è un numero ${pariODispari()}`;
    }
    //dichiaro il riusltato dsella somma in una variabile
 }
);