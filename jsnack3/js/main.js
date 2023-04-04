/*  Il software deve chiedere per 10 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
*/
let somma = 0;
let numeri = [9];
for (let i = 0; i < 10; i++){
    sceltaNumero = prompt(`Scegliere il ${i+1}° numero`);
    numero = parseInt(sceltaNumero);
    numeri[i] = numero;
    somma = somma + numeri[i];
}
document.getElementById('output').innerHTML = `La somma dei numeri è: ${somma}`;