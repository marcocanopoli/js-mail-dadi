/*
1 - Generare un numero random da 1 a 6, sia per il giocatore 
2 - sia per il computer.
3 - Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//get random numbers for both user and pc
var myNum = getRandomInt(6);
var pcNum = getRandomInt(6);

//chosen numbers messages
alert("Il tuo numero e' " + myNum);
alert("Il numero del PC e' " + pcNum);

//onscreen results messages
var myNumMsg = "Il tuo numero (" + myNum + ") ";
var pcNumMsg = "numero del PC (" + pcNum + "), ";

//highest number wins
if (myNum > pcNum) {
    alert(myNumMsg + "e' maggiore del " + pcNumMsg + "hai vinto!");
} else if (pcNum > myNum) {
    alert(myNumMsg + "e' minore del " + pcNumMsg + "hai perso!");
} else {
    alert(myNumMsg + "e' uguale al " + pcNumMsg + "parita'!");
}

//random int, max included
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }