/*let persoon = "tom"; //variable*/

let persoon = {
    naam: "tom",
    leeftijd: 30,
    beroep: "developer"
}
console.log(typeof (persoon));

// creëren en wijzigen van een object
persoon.naam = "Tim"; // overschrijven van tom
console.log(persoon);

// deleten uit een object
delete persoon.beroep;
console.log(persoon);

// properties ophalen
console.log(Object.keys(persoon)); //van object persoon pakken we de keys

//properties tonen op scherm
console.log(persoon['naam']);
/*Dit gaat niet*/console.log(persoon[0]); // dit gaat niet, undefined

//values ophalen
console.log(Object.values(persoon)); // values van persoon nemen

//subarray (meerdimensioneel)
console.log(Object.entries(persoon));



// let su = new persoon()
// let fabio = new persoon()

