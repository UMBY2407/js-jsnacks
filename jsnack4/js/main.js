/*  In un array sono contenuti i nomi degli invitati alla festa del grande
    Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
    no alla festa.
*/

let listaInvitati = ["Davide", "Marco", "Umberto", "Andrea", "Nicole", "Alessia", "Cristian"];
let nomeUtente = prompt("Benvenuto alla festa! Qual'è il tuo nome?");
let invito;
for (let i = 0; i < listaInvitati.length; i++){
    if(nomeUtente == listaInvitati[i]){
        invito = `${nomeUtente} è nella lista! Benvenuto/a alla festa!`;
        break;
    }else{
        invito = `Mi spiace, ma ${nomeUtente} non è nella lista!`;
    }
}
document.getElementById('output').innerHTML= `${invito}`;