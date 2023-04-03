//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.
let parola1 = prompt("inserire la prima parola");
let parola2 = prompt("inserire la seconda parola");
if(parola1.length > parola2.length){
    document.getElementById('output').innerHTML = `${parola2}   ${parola1}`;
}else if(parola1.length < parola2.length){
    document.getElementById('output').innerHTML = `${parola1}   ${parola2}`;
}else {
    document.getElementById('output').innerHTML = `${parola1}   ${parola2} sono di ugual lunghezza`;
}