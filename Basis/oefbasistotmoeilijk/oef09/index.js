/*
Schrijf een functie telWoorden(zin) die het aantal woorden in een zin telt en
het resultaat retourneert.
– Console Test: console.log(telWoorden("Dit is een voorbeeldzin."));
// Verwachte Output: 4
*/

function telWoorden(zin){
    return zin.split(' ').length;
}

console.log(telWoorden("Dit is een voorbeeldzin."))