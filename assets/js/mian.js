// CALCOLA IL COSTO DEL TUO BIGLIETTO

//chiedere all'utente il numero di chilometri che vuole percorrere
var kms = prompt("Ciao, indica per favore inserisci la lunghezza del tuo viaggio dicendoci quanti chilometri intendi percorrere");
if (isNaN(kms)){
    alert("Per favore inserisci la distanza come numero dei chilometri che intendi percorrere")
};
console.log(kms);

//chiedere l'età del passeggero.
var age = prompt(" Per favore inserisci la tua età");
if (isNaN(age)){
    alert("Per favore esprimere l' eta con un numero")
};
console.log(age);

/* calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */
var standardPrice = Math.ceil(kms) * 0.21;
document.getElementById("normal_price").innerHTML = standardPrice.toFixed(2);

var youngPrice = standardPrice - ((standardPrice / 100) *20);
var oldPrice = standardPrice - ((standardPrice / 100) *40);

var salePrice = document.getElementById("sale_price");

if (age < 18){
    salePrice.innerHTML = "Dato che hai meno di 18 anni il prezzo del tuo biglietto è " + youngPrice + "!"
} else if (age > 65 ){
    salePrice.innerHTML = "Dato che hai più di 65 anni il prezzo del tuo biglietto è " + oldPrice + "!"
} else {
    salePrice.innerHTML = "Mi dispiace ma non abbiamo una promozione attiva in questo momento per te"
};