/*
Toon Tekst in een Paragraaf bij Klikken op een Knop
– Oefening: Maak een knop en een lege paragraaf. Wanneer je op de knop
klikt, moet de tekst “Hallo Wereld!” in de paragraaf worden weergegeven.
*/

let knop = document.getElementById("klikKnop");
let paragraaf = document.getElementById("legeParagraaf");

knop.addEventListener('click', function (e){
    paragraaf.textContent = "Hallo Wereld!";
})