/*1. Array samenvoegen: Maak twee arrays, bijvoorbeeld [1, 2, 3] en [4, 5, 6] , en
gebruik de spread operator om ze samen te voegen tot één array. Print het resultaat.*/

/*const cijfers1 = [1, 2, 3];
const cijfers2 = [4, 5, 6];
const resultaat = [...cijfers1, ...cijfers2];

resultaat.forEach(cijfer => console.log(cijfer));*/

//---------------------------------------

/*2. Object kopiëren: Maak een object, bijvoorbeeld { naam: "Eva", leeftijd: 30 } , en
maak een kopie van dit object. Voeg een nieuwe eigenschap toe, bijvoorbeeld stad:
    "Rotterdam" , en print het nieuwe object.*/

/*const persoon = { naam: "Eva", leeftijd: 30 }
const persoonInfo = {...persoon, stad: "Rotterdam"}

console.log(persoonInfo);*/


//---------------------------------------

/*
3. Gebruik in functies: Maak een array van getallen, bijvoorbeeld [10, 20, 30] , en schrijf
een functie die de som van de getallen in de array berekent door de spread operator te
gebruiken.*/



/*const som = getallen.reduce((total, getal) => {
    return total + getal;
});*/

function somVanGetallen(...getallen) {
    return getallen.reduce((totaal, getal) => totaal + getal, 0);
}
let getallen = [10, 20, 30];
console.log(somVanGetallen(...getallen)); // Verwacht: 60