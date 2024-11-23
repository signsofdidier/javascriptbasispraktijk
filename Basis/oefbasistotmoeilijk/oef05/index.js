/*
Schrijf een functie keerOm(tekst) die een string omkeert en de omgekeerde
string retourneert.
– Console Test: console.log(keerOm("JavaScript")); // Verwachte
Output: "tpircSavaJ"
*/

function keerOm(tekst){
    const tekstArray = Array.from(tekst);
    const tekstReverse = tekstArray.reverse();
    return tekstReverse.join('');
}

console.log(keerOm("JavaScript"));