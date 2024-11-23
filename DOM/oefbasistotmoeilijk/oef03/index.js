/*
Verander de Achtergrondkleur van een div bij Klikken
– Oefening: Voeg een div toe met een knop. Wanneer je op de knop klikt, moet
de achtergrondkleur van de div veranderen naar lightblue.*/


let veranderKleur = document.getElementById("veranderKleur");
let knop = document.getElementById("knop");

veranderKleur.addEventListener("click", function (e){
    knop.style.backgroundColor = "lightblue";
});