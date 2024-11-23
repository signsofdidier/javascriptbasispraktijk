
class Persoon{
    constructor(naam,leeftijd) {
        this.naam = naam;
        this.leeftijd = leeftijd;
    }
    groet(){
        console.log(`Hallo, dit is ${this.naam} en is ${this.leeftijd} jaar oud`);
    }
}

const persoon1 = new Persoon("Rita", 33);
const persoon2 = new Persoon("Mark", 42);

persoon1.groet();
persoon2.groet();