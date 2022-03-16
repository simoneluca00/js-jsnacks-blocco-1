// sanck 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let somma = 0;

for (i = 1; i <= 10; i++) {
    let numeri = parseInt(prompt("Inserisci un numero"));
    // numeri += numeri;
    somma += numeri; 

    if(isNaN(numeri)) {
        alert("Devi inserire valori numerici.")
    }
}

document.getElementById("container_somma").innerHTML += `<span style=" font-weight: bold;">${somma}</span>`;