// snack 1:
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let numeroUno = parseInt(prompt("Inserisci un numero"));
let numeroDue = parseInt(prompt("Inserisci un ulteriore numero"));
let risultato = document.getElementById("container_number");


if (isNaN(numeroUno) || isNaN(numeroDue)) {
    alert("Devi inserire valori numerici");
} else {
    
    if ( numeroUno > numeroDue ) {
        risultato.innerHTML = `${numeroUno}`;
    } else if (numeroDue > numeroUno) {
        risultato.innerHTML = `${numeroDue}`;
    } else if (numeroUno === numeroDue) {
        risultato.innerHTML = `sei troppo avanti per questo test`;
    } 
}


