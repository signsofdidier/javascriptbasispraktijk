/*
Laat een Bericht Zien bij Focus en Blur op een Invoerveld
– Oefening: Voeg focus en blur events toe aan een invoerveld. Log
“Invoerveld gefocust” bij focus en “Invoerveld verlaten” bij blur.
– Console Test:
    • console.log("Invoerveld gefocust"); // Verwachte Output:
Invoerveld gefocust
• console.log("Invoerveld verlaten"); // Verwachte Output:
Invoerveld verlaten
*/

let inputveld = document.getElementById("inputveld");

inputveld.addEventListener('focus', function (event){
    console.log("Invoerveld gefocust");
})

inputveld.addEventListener('blur', function (event){
    console.log("Invoerveld verlaten");
})


/*
Of KORTER

let inputveld = document.getElementById("inputveld");

inputveld.addEventListener('focus', () => console.log("Invoerveld gefocust"));
inputveld.addEventListener('blur', () => console.log("Invoerveld verlaten"));

*/
