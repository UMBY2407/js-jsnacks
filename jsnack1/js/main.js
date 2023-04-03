//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
let promptNumero1 = prompt("inserire il primo numero");
let promptNumero2 = prompt("inserire il secondo numero");
numero1 = parseInt(promptNumero1);
numero2 = parseInt(promptNumero2);
if(numero1 > numero2){
    document.getElementById('output').innerHTML = `Il numero più grande è ${numero1}`;
}else if(numero1 < numero2){
    document.getElementById('output').innerHTML = `Il numero più grande è ${numero2}`;
}else {
    document.getElementById('output').innerHTML = `I due numeri sono uguali`;
}