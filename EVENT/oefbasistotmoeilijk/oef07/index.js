/*
Voer een Actie uit bij Scrollen
– Oefening: Voeg een scroll event toe aan de pagina die in de console logt
wanneer de gebruiker naar beneden scrolt. Toon het huidige scrollniveau.
– Console Test: console.log("Scrollniveau: 150px"); // Verwachte
Output: Scrollniveau: 150px
*/


window.document.addEventListener('scroll', function(e){
    console.log(`Scrollniveau ${window.scrollY}px`);
})

