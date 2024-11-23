/*
Verander de Achtergrondkleur met een Double-click Event
– Oefening: Voeg een double-click event toe aan een div die de
achtergrondkleur verandert naar lightblue en in de console
“Achtergrondkleur veranderd!” logt.
– Console Test: console.log("Achtergrondkleur veranderd!"); //
Verwachte Output: Achtergrondkleur veranderd!
*/


const kleurVeranderen = document.getElementById("klikDiv");

kleurVeranderen.addEventListener('dblclick', function(event){
    document.body.style.backgroundColor="lightblue";
    console.log("Achtergrondkleur veranderd!");
})