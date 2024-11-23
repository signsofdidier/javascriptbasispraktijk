
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

function addOrderToList(listId, bestelling){
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = bestelling.beschrijf();
    list.appendChild(listItem);

    // delete knop
    const deleteListItem = document.createElement("button");
    deleteListItem.classList.add("btn", "btn-danger", "btn-sm");
    deleteListItem.textContent = "Delete";
    listItem.appendChild(deleteListItem);
    listItem.classList.add("d-flex", "justify-content-between", "align-items-center");
    deleteListItem.addEventListener("click", function(){
        listItem.remove();
    });
}



document.getElementById("orderForm").addEventListener("submit", function(event){
    const productnaam = document.getElementById("productName").value;
    const klantnaam = document.getElementById("customerName").value;
    const status = document.getElementById("orderStatus").value;

    const nieuweBestelling = new Bestelling(productnaam, klantnaam, status);

    event.preventDefault();

    if (status === "In afwachting"){
        addOrderToList("pendingList", nieuweBestelling);
    }else if (status === "In behandeling"){
        addOrderToList("processingList", nieuweBestelling);
    }else{
        addOrderToList("shippedList", nieuweBestelling);
    }


    document.getElementById("orderForm").reset();
});

