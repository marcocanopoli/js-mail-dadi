/*
1 Chiedi all'utente la sua email,
2 controlla che sia nella lista di chi può accedere,
3 stampa un messaggio appropriato sull'esito del controllo.
*/

//var
//invited emails array
var invited = ["abc@gmail.com", "abc@gmail.outlook.com", "abc@yahoo.com", "abc@hotmail.com", "abc@icloud.com", "123@gmail.com", "123@gmail.outlook.com", "123@yahoo.com", "123@hotmail.com", "123@icloud.com"]
//boolean for access
var grantedAccess = false;

//email to verify
var userMail = prompt("Inserisci la tua mail per verificare l'accesso");

//array iteration
for (var i = 0; i < invited.length; i++) {
    if (userMail == invited [i]) {
        grantedAccess = true;
    }
}

//print results
if (grantedAccess) {
    alert("Email verificata, accesso CONSENTITO!");
} else {
    alert("Email verificata, accesso NEGATO!");
}
