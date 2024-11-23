/*
Schrijf een functie vervangKlinkers(tekst) die alle klinkers in een string
vervangt door het teken *.
– Console Test: console.log(vervangKlinkers("Hallo Wereld")); //
Verwachte Output: "H*ll* W*r*ld"*/


function vervangKlinkers(tekst){
    return tekst.replace(/[a,e,i,o,u,A,E,I,O,U]/g, "*");
}

console.log(vervangKlinkers("Hallo Wereld"));

/* UITLEG */

/*
Begin- en eindschuine streep (/ ... /): Deze omgeven het patroon en geven aan dat de tekst binnenin een reguliere expressie is. Ze markeren dus het begin en het einde van de expressie.

Vierkante haken ([aeiouAEIOU]): Dit is een karakterklasse. Alles tussen de vierkante haken specificeert een set karakters die de expressie zal zoeken. In dit geval worden alle klinkers (zowel kleine letters als hoofdletters) opgezocht: a, e, i, o, u en A, E, I, O, U.

g vlag: De g staat voor globaal (global) en zorgt ervoor dat het patroon in de hele string wordt gezocht. Zonder de g zou alleen het eerste voorkomen van een klinker worden vervangen.*/