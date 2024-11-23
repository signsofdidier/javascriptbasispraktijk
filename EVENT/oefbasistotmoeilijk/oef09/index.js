/*
Tel het Aantal Keer dat op een Knop is Geklikt
– Oefening: Voeg een click event toe aan een knop die bijhoudt hoe vaak erop
is geklikt en dit aantal in de console logt.
– Console Test:
    • console.log("Knop geklikt: 1 keer"); // Verwachte Output:
Knop geklikt: 1 keer
• console.log("Knop geklikt: 2 keer"); // Verwachte Output:
Knop geklikt: 2 keer
*/

let knop = document.getElementById("telKnop");
let klikTeller = 0;

knop.addEventListener('click', function (e){
    klikTeller++;
    console.log(`Knop geklikt: ${klikTeller} keer`);
});

