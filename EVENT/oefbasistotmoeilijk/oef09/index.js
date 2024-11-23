/*
Toon de Inhoud van een Invoerveld tijdens het Typen
– Oefening: Voeg een input event toe aan een invoerveld dat telkens wanneer
de gebruiker iets typt, de huidige inhoud van het veld in de console toont.
– Console Test:
    • console.log("Invoer: Hallo"); // Verwachte Output: Invoer:
Hallo
• console.log("Invoer: Hallo Wereld"); // Verwachte Output:
Invoer: Hallo Wereld
*/

const invoerveld = document.getElementById("invoerveld");

invoerveld.addEventListener("input", function (e){
    console.log(`Invoer: ${e.target.value}`);
})

/*  NIET ZEKER */

