//Crea un array vuoto
const myArray = [];



//Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

    // validazione basilare
    while (isNaN(numero) || numero == "") {
        alert("Inserisci solo valori numerici (NO lettere o spazi vuoti).")
        numero = parseInt(prompt("Inserisci un numero:"));
    }

    //Se è dispari inseriscilo nell’array
    if (numero % 2 === 1) {
        myArray.push(numero);
    }
}

document.getElementById("containerOutput").innerHTML = `La lista è formata dai numeri dispari che hai inserito: <div style="font-weight: bold;">${myArray.join(", ")}</div>`;

