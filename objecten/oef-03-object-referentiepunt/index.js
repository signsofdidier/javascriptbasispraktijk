// voor 2015 zie oef01
// let Auto = {
//
// }*/

//es6 2005
class Persoon{
    constructor(naam,voornaam,leeftijd,geboortedatum){
        this.naam = naam;
        this.voornaam = voornaam;
        this._leeftijd = leeftijd;
        this.geboortedatum = geboortedatum;
    }

    //getters en setters

    // neem variable leeftijd
    get leeftijd(){
        return this._leeftijd;
    }
    // check met if statement als leeftijd groter is dan 0
    set leeftijd(eenLeeftijd){
        if (eenLeeftijd > 0){
            this._leeftijd = eenLeeftijd; // omdat leeftijd groter is dan 0 mag de leeftijd effectief de leeftijd invoeren
        }else{
            console.log("LEeftijd moet een positief getal zijn");
        }
    }


    //functie (method)
    beschrijf(){
        return `${this.naam} - ${this.voornaam} - ${this._leeftijd} - ${this.geboortedatum}`;
    }
}

// De class start ALTIJD met een HOOFDLETTER
class Student extends Persoon{ // breidt uit op vorige class
    constructor(naam, voornaam, leeftijd, geboortedatum, studentNummer){
        super(naam, voornaam, leeftijd, geboortedatum) // oproepen van cunstructor van Persoon
        this.studentNummer = studentNummer;
    }
    beschrijf(){
        return `${super.beschrijf()} - ${this.studentNummer}`
    }
}

//BEGIN PROGRAMMA
// 1 instantie van het object Persoon

let aantalPersonen = parseInt(prompt("Hoeveel personen wens je in te geven?"));
let personen = [];

for (let i = 0; i < aantalPersonen ; i++){
    let naam = prompt(`Geef de naam van persoon ${i+1}`); // i + 1 is omdat persoon0 persoon1 moet worden bij een vraag.
    let voornaam = prompt(`Geef de voornaam van persoon ${i+1}`);
    let leeftijd = prompt(`Geef de leeftijd van persoon ${i+1}`);
    let geboortedatum = prompt(`Geef de geboortedatum van persoon ${i+1}`);

    let persoon = new Persoon(naam, voornaam, leeftijd,geboortedatum); // gaat de blauwdruk gebruiken (constructor)
    personen.push(persoon); // zet de gegevens van push onder elkaar in de array
}

/*console.log(personen);*/

console.log("Beschrijving van de ingegeven persoon");

// loop door de string en bekijk ze 1 voor 1 met forEach
personen.forEach((persoon, index)=>{
    console.log(`Persoon ${index + 1}: ${persoon.beschrijf()}`); // index + 1 = persoon1 ipv 0
});

nieuweStudent = new Student("Vanassche", "Didier", "33", "1991-07-30", "1")

console.log(nieuweStudent.beschrijf());
