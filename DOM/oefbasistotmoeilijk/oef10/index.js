/*
Verander de Tekstkleur van een Paragraaf op basis van Invoer
– Oefening: Maak een invoerveld voor een kleur en een knop. Wanneer je op
de knop klikt, moet de tekstkleur van een paragraaf veranderen naar de
opgegeven kleur in het invoerveld.*/

const knop = document.getElementById("knop");
const invoerveld = document.getElementById("invoerveld");
const paragraaf = document.getElementById("paragraaf")

knop.addEventListener("click", function (){
    paragraaf.style.color = invoerveld.value;
})