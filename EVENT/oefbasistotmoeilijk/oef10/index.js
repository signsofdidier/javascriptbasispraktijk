/*
Voeg een Event toe die het Type Toets laat Zien
– Oefening: Voeg een keydown event toe aan de hele pagina die het type toets
(bijv. “Enter”, “Space”, “a”, etc.) in de console logt wanneer een toets wordt
ingedrukt.
– Console Test:
    • console.log("Toets ingedrukt: Enter"); // Verwachte Output:
Toets ingedrukt: Enter
• console.log("Toets ingedrukt: a"); // Verwachte Output:
Toets ingedrukt: a
DOM*/


document.addEventListener("keyup", function (event){
        console.log(`Toets ingedrukt: ${event.key}`);
});

