//Palidroma
/* 1-   Chiedere all’utente di inserire una parola
   2-   Creare una funzione per capire se la parola inserita è palindroma
*/
// definisco il bottone

const checkButton = document.getElementById('send');

//aggiungo l'event listener al bottone

checkButton.addEventListener('click', function(){

        //definizioe input dell'user 
            const fraseUser = document.getElementById('userInput').value;
            console.log(fraseUser);

        // scompongo la frase
            let fraseScomposta = fraseUser.split('');
            console.log(fraseScomposta);
        //inverto la frase o parola
            let fraseInvertita = fraseScomposta.reverse('');
            console.log(fraseInvertita);
        //riunisco le parole in una stringa
            fraseInvertita = fraseInvertita.join('');
            console.log(fraseInvertita);
        // controllo se la frase inserita sia palindroma o meno
            if (fraseUser == fraseInvertita){
                return document.querySelector('.resoult').innerHTML = `La frase è palindroma perchè ${fraseUser} letta al contrario è ${fraseInvertita}`
            } else {
                return document.querySelector('.resoult').innerHTML = `La frase non è palindroma perchè ${fraseUser} letta al contrario è ${fraseInvertita}`
            };
    }
);