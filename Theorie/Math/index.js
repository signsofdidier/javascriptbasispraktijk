/*
1. Maak een dobbelsteen
Schrijf een programma dat een willekeurig getal tussen 1 en 6 geeft.*/
/*
console.log(Math.floor(Math.random() * 6) + 1);*/
// plus 1 omdat Math.floor afrond naar 5 ipv 6

// ----------------------------------------------

/*
2. Maak een loterijspel
Kies een willekeurig getal tussen 1 en 100 en toon het in de console.*/

/*
const willekeurigGetal = (Math.floor(Math.random() * 100) + 1);
console.log(willekeurigGetal);*/

// ----------------------------------------------

/*
3. Teken een driehoek met Math
Gebruik Math.sqrt om de schuine zijde van een rechthoekige driehoek te berekenen
als de andere twee zijden 3 en 4 zijn.
    Formule: Schuine zijde = √(3² + 4²).*/

/*const zijde1 = 3;
const zijde2 = 4;
const schuineZijde = (Math.sqrt(Math.pow(zijde1,2) + Math.pow(zijde2,2)));
console.log(schuineZijde); // 5*/

// ----------------------------------------------
/*
4. Vergelijk getallen
Vraag een gebruiker om drie getallen in te voeren. Gebruik Math.max en Math.min om
het grootste en kleinste getal te vinden.*/

/*let getallen = [];

for(let i = 1; i<=3 ; i++){
    let getal = parseInt(prompt(`Geef getal ${i} in`));
    getallen.push(getal);
}

const grootste = Math.max(...getallen);
const kleinste = Math.min(...getallen);

/!*Math.max(...getallen) en Math.min(...getallen) gebruiken de spread operator (...), waardoor de array getallen wordt "uitgepakt" in losse argumenten voor Math.max() en Math.min().*!/

console.log(`Het grootste getal is ${grootste} en het kleinste getal is ${kleinste}`);*/

//-------------------------------------------------

/*5. Schrijf een afrondingsprogramma
Laat een gebruiker een decimaal getal invoeren, en rond het naar boven, beneden en
naar het dichtstbijzijnde getal af.*/

let decimaalGetal = parseFloat(prompt("Geef een decimaal getal in:"));

console.log(Math.round(decimaalGetal)); // afronden naar boven of onder bvb 0,5 gaat naar boven en alles eronder naar beneden
console.log(Math.ceil(decimaalGetal)); // afronden naar boven
console.log(Math.floor(decimaalGetal)); // afronden naar onder
