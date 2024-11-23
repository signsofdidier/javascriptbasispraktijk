// 1. Maak een functie genereerStudent die een willekeurige naam en een willekeurig cijfer tussen 1 en 10 genereert
// en retourneert als een object.
// 2. Maak een functie genereerKlas die een array met 5 willekeurige studenten (gegenereerd met genereerStudent) retourneert.

// Oplossing voor genereerStudent functie
function genereerStudent() {
    const namen = ["Lisa", "Tom", "Anna", "Sven", "Jana"];
    const randomNaam = namen[Math.floor(Math.random() * namen.length)];
    const randomCijfer = Math.floor(Math.random() * 10) + 1;
    return { naam: randomNaam, cijfer: randomCijfer };
}

// Oplossing voor genereerKlas functie
function genereerKlas() {
    const klas = [];
    for (let i = 0; i < 5; i++) {
        klas.push(genereerStudent());
    }
    return klas;
}
