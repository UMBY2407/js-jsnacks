/*  In un array sono contenuti i nomi degli invitati alla festa del grande
    Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
    no alla festa.
*/

let listaInvitati = ["Davide", "Marco", "Umberto", "Andrea"];
let nomeUtente = prompt("Benvenuto alla festa! Qual'è il tuo nome?");
let invito;
for (let i =0; i<4; i++){
    if(nomeUtente == listaInvitati[i]){
        invito = "Il tuo nome è nella lista!";
        break;
    }else{
        invito = "Mi spiace, ma il tuo nome non è nella lista!";
    }
}
document.getElementById('output').innerHTML= `${invito}`;