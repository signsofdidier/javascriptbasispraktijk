/*
Creëer een Dynamische Rekenmachine met Twee Invoervelden
– Oefening: Voeg twee invoervelden en vier knoppen toe (voor optellen,
    aftrekken, vermenigvuldigen en delen). Wanneer je op een knop klikt, moet
het resultaat van de bewerking van de twee invoervelden worden
weergegeven in een paragraaf.*/

var optellen = document.getElementById("optellen");
var aftrekken = document.getElementById("aftrekken");
var vermenigvuldigen = document.getElementById("vermenigvuldigen");
var delen = document.getElementById("delen");

/*var rekenmachineResultaat = document.getElementById("rekenmachineResultaat");*/
var resultParagraaf = document.getElementById("resultParagraaf");
resultParagraaf.classList.add("px-3", "py-2", "fs-2", "border", "border-3", "border-secondary", "rounded-2", "mt-4");

/* Wissen knop en styling */
var wissen = document.getElementById("wissen");
wissen.addEventListener("mouseover", function (e){
    wissen.style.backgroundColor = "#E23D28";
});
wissen.addEventListener("mouseout", function (e){
    wissen.style.backgroundColor = "";
});

/* Optellen */
optellen.addEventListener("click", function (){

    let invoerveld1 = parseFloat(document.getElementById("invoerveld1").value);
    let invoerveld2 = parseFloat(document.getElementById("invoerveld2").value);
    let resultaat = invoerveld1 + invoerveld2;


    // Maak een p child aan en geef deze en styling via classes
    /*let resultParagraaf = document.createElement("p");*/

    resultParagraaf.textContent = resultaat;


    // voeg de aangemaakte p tag toe aan de parent (indien de p nog niet in de html staat)
    /*rekenmachineResultaat.appendChild(resultParagraaf);*/

    /*document.getElementById("resultParagraaf").textContent = resultaat;*/
});

/* Aftrekken */
aftrekken.addEventListener("click", function (){

    let invoerveld1 = parseFloat(document.getElementById("invoerveld1").value);
    let invoerveld2 = parseFloat(document.getElementById("invoerveld2").value);
    let resultaat = invoerveld1 - invoerveld2;

    resultParagraaf.textContent = resultaat;
});

/* Vermenigvuldigen */
vermenigvuldigen.addEventListener("click", function (){

    let invoerveld1 = parseFloat(document.getElementById("invoerveld1").value);
    let invoerveld2 = parseFloat(document.getElementById("invoerveld2").value);
    let resultaat = invoerveld1 * invoerveld2;

    resultParagraaf.textContent = resultaat;
});

/* Delen */
delen.addEventListener("click", function (){

    let invoerveld1 = parseFloat(document.getElementById("invoerveld1").value);
    let invoerveld2 = parseFloat(document.getElementById("invoerveld2").value);
    let resultaat = invoerveld1 / invoerveld2;

    resultParagraaf.textContent = resultaat.toFixed(2);
});

/* Wissen van inputvelden en resultaat */
wissen.addEventListener("click", function(e){
    invoerveld1.value = "";
    invoerveld2.value = "";
    resultParagraaf.textContent = "0";
})


