/*
Oefening 1: Tellen
Tel het aantal letters in een array van strings.*/

/*
const woorden = ['hoi', 'wereld'];
const totaalLetters = woorden.reduce((acc, current) => {
    return acc + current.length;
}, 0);
console.log(totaalLetters); // Verwacht: 9*/

// ------------------------------------------

/*
Oefening 2: Grootste getal vinden
Zoek het grootste getal in een array.*/

/*
const getallen = [2, 6, 0, 7, 26, 3];

const grootsteGetal = getallen.reduce((acc, current) => {
    // als current > acc, return current, anders (else) acc
    return current > acc ? current : acc;
}, getallen[0]);

console.log(grootsteGetal);
*/

// ------------------------------------------

/*Oefening 3: Maak een object
Maak een object dat het aantal keren telt dat elk woord voorkomt in een array.*/

/*const woorden = ['appel', 'banaan', 'appel', 'peer', 'banaan', 'appel'];
const tellen = woorden.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});

console.log(tellen); // Verwacht: { appel: 3, banaan: 2, peer: 1 }*/

/*Start: acc = {} (leeg object), current = 'appel'
Wat gebeurt er in de functie?
acc[current] betekent acc['appel']. Dit bestaat nog niet, dus de waarde is undefined.
(acc[current] || 0) betekent: "Als acc['appel'] bestaat, gebruik die waarde; anders gebruik 0."
Dit wordt: acc['appel'] = 0 + 1, dus acc = { appel: 1 }.
Resultaat na deze stap: { appel: 1 }.*/

