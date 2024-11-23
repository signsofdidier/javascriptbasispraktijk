/*
Verander de Tekst van een Knop na Klikken
– Oefening: Voeg een knop toe. Wanneer je op de knop klikt, moet de tekst van
de knop veranderen naar “Geklikt!”.*/

const knop = document.getElementById("knop");

knop.addEventListener("click", function (){
    knop.textContent = "Geklikt!";
});