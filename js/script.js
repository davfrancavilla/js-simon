$('document').ready(function(){

    // genero l'array con i numeri casuali
    var randomNumbers = [];
    while (randomNumbers.length<5){
        var number = getRandomInt(1,10);
        if (!randomNumbers.includes(number)){ // controllo che il numero random generato non sia già presente nell'array
            randomNumbers.push(number);
        }
    }
    alert(randomNumbers);
    setTimeout(game, 30000, randomNumbers);
});

// funzione con il funzionamento del gioco
function game(pcNumbers){
    var userNumbers = []; // array con i numeri indovinati
    var userTries = []; // array con tutti i numeri provati dall'utente
    var i = 0;
    while (i<5){
        var userNumber = prompt('Inserisci un numero');
        if (userNumber == "" || isNaN(userNumber)){ // avviso l'utente se ha inserito un non numero oppure una stringa vuota
            alert('Inserire un numero');
        } else if (userTries.includes(userNumber)){ // avviso l'utete se ha inserito un numero già inserito in precedenza
            alert('Non puoi inserire più volte lo stesso numero');
        } else {
            if (pcNumbers.includes(parseInt(userNumber))){ // se il numero è presente nell'array con i numeri casuali viene inserito nell'array con i numeri indovinati e in quello con in numeri provati
                userTries.push(userNumber);
                userNumbers.push(userNumber);
                i++;
            } else  { // altrimenti viene inserito soltanto nei numeri provati
                userTries.push(userNumber);
                i++;
            }
        }
    }
    // stampa del punteggio finale
    alert('Hai indovinato ' + userNumbers.length + ' numeri: ' + userNumbers);
}

// funzione che genera numeri casuali
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
