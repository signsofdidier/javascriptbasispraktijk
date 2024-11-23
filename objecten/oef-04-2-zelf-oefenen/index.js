class Voertuig{
    constructor(model, bouwjaar, type) {
        this.model = model;
        this.bouwjaar = bouwjaar;
        this.type = type;
    }
}

class Auto extends Voertuig{
    constructor(model, bouwjaar, type, versnelling, aandrijving) {
        super(model, bouwjaar, type);
        this.versnelling = versnelling;
        this.aandrijving = aandrijving;
    }

    beschrijf(){
        return `Model: ${this.model} - Bouwjaar: ${this.bouwjaar} - Type: ${this.type} - Versnelling: ${this.versnelling} - Aandrijving: ${this.aandrijving}`
    }
}


const toevoegen = document.getElementById("autoForm");
toevoegen.addEventListener("submit", function (event){
    event.preventDefault();

    const model = document.getElementById("model").value;
    const bouwjaar = document.getElementById("bouwjaar").value;
    const type = document.getElementById("type").value;
    const versnelling = document.getElementById("versnelling").value;
    const aandrijving = document.getElementById("aandrijving").value;

    const nieuweAuto = new Auto(model, bouwjaar, type, versnelling, aandrijving);

    const autoList = document.getElementById("autoList");
    const listItem = document.createElement("li");
    listItem.textContent = nieuweAuto.beschrijf();
    listItem.classList.add("list-group-item", "text-unstyle", "d-flex", "justify-content-between", "align-items-center");
    autoList.appendChild(listItem);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(){
        listItem.remove();
    });

    document.getElementById("autoForm").reset();
});
