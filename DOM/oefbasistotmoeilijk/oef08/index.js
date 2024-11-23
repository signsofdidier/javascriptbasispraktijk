/*
Tel het Aantal Keer dat op een Knop is Geklikt
– Oefening: Voeg een knop en een paragraaf toe. Wanneer je op de knop klikt,
    moet het aantal keren dat erop is geklikt worden weergegeven in de
paragraaf.
*/

const knop = document.getElementById("knop");
const paragraaf = document.getElementById("paragraaf");
let aantalKlikken = 0;

knop.addEventListener("click", function (){
    aantalKlikken++
    paragraaf.textContent = aantalKlikken;
});
