/*let persoon = "tom"; //variable*/



let persoon = {
    naam: "tom",
    leeftijd: 30,
    beroep: "developer"
}

//seal
Object.seal(persoon); // zorgt dat veranderingen niet werken hieronder

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

// ik wil weten of dit een eigenschap is van een persoon
console.log(persoon.hasOwnProperty("naam")); // kijken of er al een object is gemaakt van "naam"
console.log(persoon.hasOwnProperty("kleurOgen"));

// constructor
function Persoon(naam, leeftijd){ // Persoon heeft hoofdletter en is dus niet hetzelfde als persoon)
    this.naam = naam;
    this.leeftijd = leeftijd;
}

let Amine : new Persoon("Amine", 30); //parameter naam, leeftijd van de function
let Jonas = new Persoon("Jonas", 22);

// let su = new persoon()
// let fabio = new persoon()

