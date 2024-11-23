/*
const getallen = [1, 2, 3, 4];
const verdubbeldeGetallen = getallen.map(function(getal) {
    return getal * 2;
});*/

/*
const getallen = [1, 2, 3, 4];

const verdubbelGetallen = getallen.map(getal => {
    return getal * 2;
})

console.log(verdubbelGetallen);
*/

//----------------------------

/*
const nummers = [2, 4, 6];
// Verwacht resultaat: [6, 12, 18]

const nieuweNummers = nummers.map(nummer => {
    return nummer * 3;
})

console.log(nieuweNummers);*/

//----------------------------

// Zet woorden om in hoofdletters met map
// Maak nieuweWoorden, neem woorden -> voor elk woord in de map, return iets dat dat woord doet
/*const woorden = ["boom", "vis", "fiets"];
// Verwacht resultaat: ["BOOM", "VIS", "FIETS"]
const nieuweWoorden = woorden.map(woord => {
    return woord.toUpperCase();
});

console.log(nieuweWoorden);*/

//----------------------------

/*Maak objecten simpeler
Je hebt een lijst met objecten, elk met een naam en leeftijd. Gebruik map() om alleen de
namen eruit te halen:*/

/*const mensen = [
    { naam: "Jan", leeftijd: 30 },
    { naam: "Sara", leeftijd: 25 },
    { naam: "Tom", leeftijd: 35 },
];
// Verwacht resultaat: ["Jan", "Sara", "Tom"]
const namen = mensen.map(persoon => {
    return persoon.naam;
})

console.log(namen);*/

//----------------------------

/*Dubbele lengte van strings
Gebruik map() om een lijst met woorden te verdubbelen in lengte door het woord twee
keer achter elkaar te plakken:*/

const woorden = ["hoi", "doei", "dag"];
// Verwacht resultaat: ["hoihoi", "doeidoei", "dagdag"]

const dubbeleWoorden = woorden.map(woord => {
    return woord + woord;
})

console.log(dubbeleWoorden);

