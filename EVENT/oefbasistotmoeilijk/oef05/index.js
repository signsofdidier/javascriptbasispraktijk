/*
Toon de Geklikte Coördinaten in de Console
– Oefening: Voeg een click event toe aan de hele pagina die de coo rdinaten
van de klikpositie (x, y) in de console logt.
– Console Test: console.log("Klikpositie: x=100, y=200"); //
Verwachte Output: Klikpositie: x=100, y=200
*/


document.addEventListener("click", function(e){
    console.log(`Klikpositie: x=${e.clientX}, y=${e.clientY}`);
});

// (e) is zelfde als (event)

