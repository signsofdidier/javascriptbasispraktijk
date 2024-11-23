// 1. Schrijf een functie dobbelsteen() die een willekeurig getal tussen 1 en 6 (inclusief) retourneert.

// Gebruik Math.random() om een willekeurig getal tussen 0 (inclusief) en 1 (exclusief) te krijgen.
// Vermenigvuldig dit resultaat met 6, zodat het bereik verandert naar 0 tot net onder 6.
// Rond dit getal naar beneden af met Math.floor() om een geheel getal te krijgen tussen 0 en 5.
// Voeg 1 toe aan het resultaat om het bereik te verschuiven naar 1 tot en met 6, zodat het een geldige dobbelsteenwaarde is.

function dobbelsteen(){
    return Math.floor(Math.random() * 6) + 1;
}

console.log(dobbelsteen());

// 2. Schrijf een functie willekeurigeNamenLijst() die een array met willekeurige namen teruggeeft. De array moet 3 namen bevatten, en elke naam kan een willekeurig gekozen naam zijn uit een lijst die je zelf aanmaakt (bijvoorbeeld ["Anna", "Bram", "Celine", "David"])

//     Maak een array namen met een paar naamopties, bijvoorbeeld ["Anna", "Bram", "Celine", "David"].
//     Maak een lege array lijst om de willekeurige namen op te slaan.
//     Gebruik een for-lus om drie namen te kiezen:
//     Genereer een willekeurige index tussen 0 en de lengte van de namen-array.
//     Kies een naam uit de namen-array met de willekeurige index.
//     Voeg de gekozen naam toe aan de lijst.
//     Retourneer de lijst na de lus.

function willekeurigeNamenLijst(){
    const namen = ["Anna", "Bram", "Celine", "David"];
    const lijst = [];
    for (let i = 0; i < 3; i++){
        const randomIndex = Math.floor(Math.random() * namen.length);
        lijst.push(namen[randomIndex]);
    }
    return lijst;
}

console.log(willekeurigeNamenLijst());
