/*
Maak een Tekstveld Leeg bij Klikken op een Knop
– Oefening: Maak een invoerveld en een knop. Wanneer je op de knop klikt,
    moet de tekst in het invoerveld worden gewist.*/

const invoerveld = document.getElementById("invoerveld");
const knop = document.getElementById("knop");

knop.addEventListener("click", function (){
    invoerveld.value = ""; // Leegmaken van het invoerveld
})