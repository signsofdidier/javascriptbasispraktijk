// Class altijd bovenaan
class Bestelling{
    constructor(productnaam, klantnaam, status) {
        this.productnaam = productnaam;
        this.klantnaam = klantnaam;
        this.status = status;
    }

    beschrijf(){
        return `Productnaam: ${this.productnaam}, Klantnaam: ${this.klantnaam}, Status: ${this.status}`
    }
}


document.getElementById("orderForm").addEventListener("submit", function(event){
    const productnaam = document.getElementById("productName").value;
    const klantnaam = document.getElementById("customerName").value;
    const status = document.getElementById("orderStatus").value;

    // Maak een nieuwe bestelling aan
    const nieuweBestelling = new Bestelling(productnaam, klantnaam, status);

    event.preventDefault();

    if (status === "In afwachting"){
        // haal de functie met daarin het id van de ul list en de bestelling constructor
        addOrderToList("pendingList", nieuweBestelling);
    }else if (status === "In behandeling"){
        addOrderToList("processingList", nieuweBestelling);
    }else{
        addOrderToList("shippedList", nieuweBestelling);
    }

    /* Toast rechts boven */
    const toastBody = document.getElementById("toastBody");
    /*toastBody.textContent = `Nieuwe bestelling van ${klantnaam}`*/
    toastBody.innerHTML = `<strong>${klantnaam}</strong> heeft een nieuwe bestelling toegevoegd`
    const orderToast = new bootstrap.Toast(document.getElementById("orderToast"));
    orderToast.show();

    document.getElementById("orderForm").reset();
})

// functie voor het toevoegen van een listItem (buiten de eventlisteren)
function addOrderToList(listId, bestelling){
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = bestelling.beschrijf();
    list.appendChild(listItem);
}



