/*
Schrijf een functie factorial(n) die het faculteit van n berekent. Het faculteit
van een getal n is het product van alle positieve gehele getallen kleiner dan of
gelijk aan n.
– Console Test: console.log(factorial(5)); // Verwachte Output: 120
*/

// 5*4*3*2*1
/*
let n = 5;
let factor = 1;

for(let i = n; i>0 ; i-- ){
    factor *= i;
}
console.log(factor);*/

function factorial(n){
    let factor = 1;

    for(let i = n; i>0 ; i-- ){
        factor *= i;
    }

    return factor;
}

console.log(factorial(5));