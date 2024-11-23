/*Oefening: Voeg een mouseout event toe aan een p-element dat “Bedankt voor
je bezoek!” in de console logt wanneer de muis wordt weggehaald.
– Console Test: console.log("Bedankt voor je bezoek!"); // Verwachte
Output: Bedankt voor je bezoek!*/

let mouseOut = document.getElementById("tekst");

mouseOut.addEventListener("mouseout", function (event){
    console.log("Bedankt voor je bezoek!");
})