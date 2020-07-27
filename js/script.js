$('document').ready(function(){
    var randomNumbers = [];
    while (randomNumbers.length<5){
        var number = getRandomInt(1,10);
        if (!randomNumbers.includes(number)){
            randomNumbers.push(number);
        }
    }
    alert(randomNumbers);
    setTimeout(game, 30000, randomNumbers);
});

function game(pcNumbers){
    var userNumbers = [];
    var userTries = [];
    var i = 0;
    while (i<5){
        var userNumber = prompt('Inserisci un numero');
        if (userNumber == "" || isNaN(userNumber)){
            alert('Inserire un numero');
        } else if (userTries.includes(userNumber)){
            alert('Non puoi inserire più volte lo stesso numero');
        } else {
            if (pcNumbers.includes(parseInt(userNumber))){
                userTries.push(userNumber);
                userNumbers.push(userNumber);
                i++;
            } else  {
                userTries.push(userNumber);
                i++;
            }
        }
    }
    alert('Hai indovinato ' + userNumbers.length + ' numeri: ' + userNumbers);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
