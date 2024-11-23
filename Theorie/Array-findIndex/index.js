/*
Eenvoudig voorbeeld: Zoek de plek van het getal 5 in deze lijst:*/

/*const cijfers = [3, 5, 8, 10];
const index = cijfers.findIndex(cijfer => cijfer === 5);
console.log(index);*/

// ----------------------------

/*Zoek op een eigenschap: Stel je hebt een lijst met speelgoed:*/
/*Zoek de plek van het speelgoed dat geel is:*/

/*const speelgoed = [
    { naam: 'bal', kleur: 'rood' },
    { naam: 'pop', kleur: 'blauw' },
    { naam: 'auto', kleur: 'geel' }
];

const index = speelgoed.findIndex(item => item.kleur === 'geel');
console.log(index);*/

// ----------------------------

/*3. Wat als het item niet bestaat?
    Zoek de plek van het speelgoed met de kleur 'groen' in de lijst hierboven:*/

const speelgoed = [
    { naam: 'bal', kleur: 'rood' },
    { naam: 'pop', kleur: 'blauw' },
    { naam: 'auto', kleur: 'geel' }
];

const zoekKleur = 'groen';
const index = speelgoed.findIndex(item => item.kleur === zoekKleur);
index >= 0 ? console.log(index) : console.log(`Er is geen speelgoed met de kleur ${zoekKleur}.`)
//als index groter of gelijk is aan 0 (omdat 'kleur niet gevonden' gelijk is aan -1) print index, else print geen




