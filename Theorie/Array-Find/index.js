// VIND HET EERSTE GETAL IN DE LIJST

/*
1. Vind een getal
Je hebt een lijst met cijfers: [5, 10, 15, 20, 25] . Zoek het eerste getal dat groter is dan 12.
<details> <summary>Oplossing</summary>*/

/*const cijfers = [5, 10, 15, 20, 25];

const groterDan12 = cijfers.find(cijfer => cijfer > 12);
console.log(groterDan12);*/

//---------------------------------------

/*
2. Vind een naam
Zoek in de lijst ["Tom", "Jerry", "Spike"] naar de naam "Jerry".

*/

/*const namen = ["Tom", "Jerry", "Spike"];
const gevondenNaam = namen.find((naam) => naam === "Jerry");
console.log(gevondenNaam); // "Jerry"*/

//---------------------------------------

/*3. Geen resultaat
Probeer een getal groter dan 50 te vinden in [10, 20, 30, 40] . Wat krijg je?*/
// er is geen dus je krijgt undefined

/*
const cijfers = [10, 20, 30, 40];
const groterDan50 = cijfers.find((cijfer) => cijfer > 50);
console.log(groterDan50); // undefined
*/

//---------------------------------------

/*
4. Uitdagender oefening
Je hebt een lijst met objecten:

    const mensen = [
        { naam: "Alice", leeftijd: 25 },
        { naam: "Bob", leeftijd: 30 },
        { naam: "Charlie", leeftijd: 35 },
    ];

Zoek de persoon die ouder is dan 28.*/

const mensen = [
    { naam: "Alice", leeftijd: 25 },
    { naam: "Bob", leeftijd: 30 },
    { naam: "Charlie", leeftijd: 35 },
];

const ouderDan28 = mensen.find(persoon => persoon.leeftijd > 28);
console.log(ouderDan28);