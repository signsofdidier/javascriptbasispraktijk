// math.random()
// hoeveel cijfers(digits) de getallen in de oefenening moeten bevatten
// 1 tot 3 cijfers, of precies 3 cijfers (if else)
//


//2. Vraag hoeveel oefeningen er moeten komen

//4. elk antwoordveld toont een som bijv. 110 + 152 =

// alle variabelen opsommen
// maak oefening voor 1 vakje
// math.random() tussen 0 en 1 dus * 10 voor 1 digit, *100 voor 2 digits.
//

/*class Oefening{
    constructor(digitsMin, digitsMax, exerciseContainer) {
        this.digitsMin = digitsMin;
        this.digitsMax = digitsMax;
        this.exerciseContainer = exerciseContainer;
    }

    beschrijf(){
        return `${this.productnaam}, Klantnaam: ${this.klantnaam}, Status: ${this.status}`
    }
}*/

const scoreboard = document.getElementById("scoreboard");
const recordMessage = document.getElementById("record-message");
const settingsForm = document.getElementById("settings-form");



/* De knop voor oefeningen aan te maken */
document.getElementById("settings-form").addEventListener("submit", function (event) {
    event.preventDefault(); // voorkomt dat het formulier wordt verzonden

    // Haal de huidige waarden op van de inputvelden
    /*const digitsMin = parseInt(document.getElementById("digits-min").value);
    const digitsMax = parseInt(document.getElementById("digits-max").value);

    function randomDigit(digitsMin, digitsMax){
        if (digitsMin > 10){
            return Math.floor(Math.random() * 10);
        }
    }
    console.log(randomDigit(digitsMin));
    console.log(randomDigit(digitsMax));*/

    /* variable voor hoeveelheid oefeningen value */
    const numQuestions = parseInt(document.getElementById("numQuestions").value);

    /*For loop voor alle oefeningen aan te maken volgende de ingegeven hoeveelheid*/
    for (let i = 1; i<=numQuestions; i++){

        /*Create alle elementen voor de excercise div*/
        const exerciseContainer = document.getElementById("exercise-container");
        exerciseContainer.classList.remove("d-none");
        const excerciseCol = document.createElement("div");
        excerciseCol.classList.add("col");
        const excerciseDiv = document.createElement("div");
        excerciseDiv.classList.add("px-4", "py-3", "bg-white", "rounded-2", "border", "border-2");
        const excerciseParagraaf = document.createElement("p");
        excerciseParagraaf.textContent = "110 + 152 =";
        const excerciseInputGroupDiv = document.createElement("div");
        excerciseInputGroupDiv.classList.add("input-group", "mb-3");
        const excerciseInput = document.createElement("input");
        excerciseInput.classList.add("form-control");
        excerciseInput.type = "text";
        excerciseInput.placeholder = "Uw antwoord:";
        const excerciseSubmitButton = document.createElement("button");
        excerciseSubmitButton.classList.add("btn", "btn-outline-secondary");
        excerciseSubmitButton.type = "submit";
        excerciseSubmitButton.textContent = "Submit";

        /*Voeg alle childs toe aan de parents*/
        exerciseContainer.appendChild(excerciseCol);
        excerciseCol.appendChild(excerciseDiv);
        excerciseDiv.appendChild(excerciseParagraaf);
        excerciseDiv.appendChild(excerciseInputGroupDiv);
        excerciseInputGroupDiv.appendChild(excerciseInput);
        excerciseInputGroupDiv.appendChild(excerciseSubmitButton);
    }

    /* Teller */
    let count = 120;
    const countdown = setInterval(function() {
        count--;
        const timerElement = document.getElementById("timer");
        timerElement.textContent = count;

        if (count === 0) {
            clearInterval(countdown); // Stop de intervaltimer
            timerElement.style.color ="red";
            alert("Tijd is op.");
        }
    }, 1000);

});

