/*
Toon een Bericht bij Mouseover
– Oefening: Voeg een mouseover event toe aan een tekst die “Je beweegt over
de tekst!” in de console logt.
– Console Test: console.log("Je beweegt over de tekst!"); //
Verwachte Output: Je beweegt over de tekst!*/

let tekstHover = document.querySelector("#tekst");

tekstHover.addEventListener('mouseover', function (event){
    console.log("Je beweegt over de tekst!")
});