//Crea un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
let invitati = ["Simone", "Mario", "Cristian", "Michele", "Katia", "Alessia", "Annalisa"];

//Chiedi all’utente il suo nome 
let nome = prompt("Come ti chiami?");

//Comunicagli se può partecipare o no alla festa
if (invitati.includes(nome)) {
    document.getElementById("containerOutput").innerHTML += `Ciao <span style="font-weight: bold; text-decoration: underline;"> ${nome}</span>! Sei pronto per la festa più grande dell'anno?`
} else {
    document.getElementById("containerOutput").innerHTML += `Mi dispiace <span style="font-weight: bold; text-decoration: underline;"> ${nome}</span>, mi sa che la musica l'ascolterai da qui fuori... `
}