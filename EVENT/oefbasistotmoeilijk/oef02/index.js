/*
Oefening: Maak een knop en voeg een click event toe die “Knop is geklikt!” in
de console logt.
Console Test: console.log("Knop is geklikt!"); // Verwachte
Output: Knop is geklikt!*/

const knop = document.getElementById("knop");

knop.addEventListener("click", function (event){
    console.log("Knop is geklikt!");
});