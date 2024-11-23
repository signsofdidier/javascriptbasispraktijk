/*
1. Oefening 1: Eenvoudige cijfers
Maak een array met de cijfers van 1 tot 10.
Gebruik filter om alleen de even nummers (2, 4, 6, ...) eruit te halen.*/

/*const cijfers = [1,2,3,4,5,6,7,8,9,10];

const evenCijfers = cijfers.filter(cijfer => {
    return cijfer % 2 === 0;
});

console.log(evenCijfers);*/

// -----------------------------

/*2. Oefening 2: Woorden filteren
Maak een array met woorden zoals ["appel", "banaan", "ananas", "aardbei"] .
    Gebruik filter om alleen de woorden die met een "a" beginnen in een nieuwe lijst
te zetten.*/

/*const fruits = ["appel", "banaan", "ananas", "aardbei"];

const woordenMetA = fruits.filter(fruit => {
    return fruit.startsWith('a');
})

console.log(woordenMetA);*/

// -----------------------------

/*
3. Oefening 3: Leeftijd controleren
Stel je hebt een lijst met leeftijden: [12, 18, 22, 16, 30, 15] .
    Gebruik filter om alleen de leeftijden van mensen die ouder dan 18 zijn te
bewaren.*/

/*const leeftijden = [12, 18, 22, 16, 30, 15];

const volwassenen = leeftijden.filter(leeftijd => {
    return leeftijd > 18;
});

console.log(volwassenen);*/

// -----------------------------

/*
4. Oefening 4: Complexere regels
Stel je hebt een lijst van objecten (bijvoorbeeld speelgoed):

let speelgoed = [
    { naam: "Bal", kleur: "rood" },
    { naam: "Pop", kleur: "blauw" },
    { naam: "Auto", kleur: "blauw" }
];

Gebruik filter om alleen het speelgoed te selecteren dat blauw is.*/

let speelgoed = [
    { naam: "Bal", kleur: "rood" },
    { naam: "Pop", kleur: "blauw" },
    { naam: "Auto", kleur: "blauw" }
];

const blauwSpeelgoed = speelgoed.filter(item => {
    return item.kleur === 'blauw';
})

console.log(blauwSpeelgoed);