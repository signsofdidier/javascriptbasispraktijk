/*
Maak een Toggle-knop voor Tekstweergave
– Oefening: Voeg een paragraaf met tekst en een knop toe. Wanneer je op de
knop klikt, moet de paragraaf worden verborgen of weergegeven, afhankelijk
van de huidige zichtbaarheid.*/


const knop = document.getElementById("knop");
const paragraaf = document.getElementById("paragraaf");

knop.addEventListener("click", function (){
   if (paragraaf.classList.contains("d-none")){
       paragraaf.classList.remove("d-none");
   }else {
       paragraaf.classList.add("d-none");
   }
});



// .contains("d-none") ipv .add of .remove // .contains() kijkt of het element al een class heeft van d-none