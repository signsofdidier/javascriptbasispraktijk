/*
Voeg een Nieuw Item Toe aan een Lijst bij Klikken op een Knop
– Oefening: Maak een ongeordende lijst (ul), een invoerveld, en een knop.
    Wanneer je op de knop klikt, moet de tekst uit het invoerveld als een nieuw
item aan de lijst worden toegevoegd.
*/


const lijst = document.getElementById("lijst");
const invoerveld = document.getElementById("invoerveld");
const knop = document.getElementById("knop");

knop.addEventListener("click", function () {
    // Maak een nieuw list-item aan binnen de functie zodat het uniek is per klik
    const listItem = document.createElement("li");

    // Stel de inhoud van het list-item in op de waarde van het invoerveld
    listItem.textContent = invoerveld.value;

    // Voeg het nieuwe list-item toe aan de lijst
    lijst.appendChild(listItem);

    // Optioneel: voeg klassen toe aan het list-item of de lijst
    listItem.classList.add("list-unstyled");
    lijst.classList.add("p-0");

    // Optioneel: maak het invoerveld leeg na toevoegen
    invoerveld.value = "";
});
