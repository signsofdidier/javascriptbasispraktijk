/*
Toon de Inhoud van een Tekstveld in een Paragraaf bij Klikken
– Oefening: Voeg een invoerveld, een knop, en een lege paragraaf toe.
    Wanneer je op de knop klikt, moet de tekst uit het invoerveld worden
weergegeven in de paragraaf.*/

const invoerveld = document.getElementById("invoerveld");
const knop = document.getElementById("knop");
const paragraaf = document.getElementById("legeParagraaf");

knop.addEventListener("click", function (){
    paragraaf.textContent = invoerveld.value; // de paragraaf text inhoud = invoerveld z'n inhoud (value)
})