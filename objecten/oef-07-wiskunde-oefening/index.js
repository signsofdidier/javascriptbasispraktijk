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
        const pendingList = document.getElementById("pendingList");
        const pendingItem = document.createElement("li");
        pendingItem.classList.add("list-group-item");
        pendingItem.textContent = nieuweBestelling.beschrijf();
        pendingList.appendChild(pendingItem);
    }else if (status === "In behandeling"){
        const processingList = document.getElementById("processingList");
        const processingItem = document.createElement("li");
        processingItem.classList.add("list-group-item");
        processingItem.textContent = nieuweBestelling.beschrijf();
        processingList.appendChild(processingItem);
    }else{
        const shippedList = document.getElementById("shippedList");
        const shippedItem = document.createElement("li");
        shippedItem.classList.add("list-group-item");
        shippedItem.textContent = nieuweBestelling.beschrijf();
        shippedList.appendChild(shippedItem);
    }

    const toastBody = document.getElementById("toastBody");
    /*toastBody.textContent = `Nieuwe bestelling van ${klantnaam}`*/
    toastBody.innerHTML = `<strong>${klantnaam}</strong> heeft een nieuwe bestelling toegevoegd`
    const orderToast = new bootstrap.Toast(document.getElementById("orderToast"));
    orderToast.show();

    document.getElementById("orderForm").reset();
})




