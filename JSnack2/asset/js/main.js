// FARE AL CONTRARIO

let parolaUno = prompt("Inserisci una parola");
let parolaDue = prompt("Inserisci un'ulteriore parola");
let risultato = document.getElementById("container_word");
let risultato2 = document.getElementById("container_word2");


if (parolaUno.length > parolaDue.length) {
    risultato.innerHTML = `${parolaDue}`;
    risultato2.innerHTML += `${parolaUno}`;
} else if (parolaUno.length < parolaDue.length) {
    risultato.innerHTML = `${parolaUno}`;
    risultato2.innerHTML += `${parolaDue}`;
} else if (parolaUno.length == parolaDue.length) {
    risultato.innerHTML = `Il numero delle lettere di <span style="text-decoration: underline">${parolaUno}</span> è: ${parolaUno.length}`;
    risultato2.innerHTML = `Il numero delle lettere di <span style="text-decoration: underline">${parolaDue}</span> è: ${parolaDue.length}`;
}
