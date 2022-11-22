/*
Scrivere un programma che chieda all’utente:
    Il numero di chilometri da percorrere
    Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    il prezzo del biglietto è definito in base ai km (0.2762 € al km)
    va applicato uno sconto del 17.5% per i minorenni
    va applicato uno sconto del 33.3% per gli over 65.

    MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le 
specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire
i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina, sempre rispettando le due cifre decimali.
*/



//Dichiaro quanti anni ho
const inputAgeElement = document.querySelector ('input#age');  
//dichiaro quanti kilometri voglio percorrere
const inputKilometersElement =  document.querySelector ('input#kilometers');

let button = document.querySelector('div.buttons a.btn');

let ticket;
let priceKm = 0.2762    ;



let discountMinors = 20 * ticket / 100;
let discountOver = 40 * ticket /100; 


let priceDiscount;

button.addEventListener('click', function(){

console.log(inputAgeElement.value);
console.log(inputKilometersElement.value);

ticket = inputKilometersElement * priceKm ;
console.log(ticket);

if ( inputAgeElement < 18 ){
    priceDiscount = ticket - discountMinors;
    console.log(priceDiscount);
    document.getElementById("output").innerHTML = priceDiscount.toFixed(2) + '&euro;';

}else if ( inputAgeElement > 65 ){
    priceDiscount = ticket - discountOver;
    console.log(priceDiscount);
    document.getElementById("output").innerHTML = priceDiscount.toFixed(2) + '&euro;';
} else{
    document.getElementById("output").innerHTML = ticket.toFixed(2) + ' &euro; ';
}

});




