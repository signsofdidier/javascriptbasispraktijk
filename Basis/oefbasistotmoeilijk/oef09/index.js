/*
Schrijf een functie isPrime(n) die controleert of een getal een priemgetal is.
    Retourneer true als het een priemgetal is, anders false.
– Console Test:
    • console.log(isPrime(7)); // Verwachte Output: true
• console.log(isPrime(10)); // Verwachte Output: false*/

function isPrime(n) {
    // Controleer voor getallen kleiner dan 2 (0 en 1 zijn geen priemgetallen)
    if (n <= 1) return false;

    // Controleer voor delers van 2 tot √n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Als n deelbaar is door i, is het geen priemgetal
        }
    }

    return true; // Als er geen delers zijn gevonden, is het een priemgetal
}

// Testen van de functie
console.log(isPrime(7));  // Verwachte output: true
console.log(isPrime(10)); // Verwachte output: false
