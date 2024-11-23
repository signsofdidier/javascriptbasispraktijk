let tasks = [];  // Hier slaan we alle taken op in een array

// Functie om een nieuwe taak toe te voegen
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value; // neem de inhoud value van taskInput veld

    if (task) { // Controleer of het invoerveld niet leeg is
        tasks.push(task); // Voeg taak toe aan array met .push
        taskInput.value = ""; // Maak het invoerveld leeg
        updateTaskList(); // Werk de lijst bij
        showAlert("Taak toegevoegd!", "success");
    }
}

// neem id van de knop en doe iets als je klikt met de voorgemaakte functie 'addTask'
// Event listener voor de knop "Taak toevoegen"
document.getElementById("addTaskButton").addEventListener("click", addTask);

// Functie om de takenlijst bij te werken
function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Maak de lijst leeg om deze te herladen

    tasks.forEach(function(task, index){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerText = task;

        // Verwijder-knop voor elke taak
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.innerText = "Verwijderen";
        deleteButton.onclick = function (){
            removeTask(index);
        }

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Functie om een specifieke taak te verwijderen
function removeTask(index) {
    tasks.splice(index, 1); // Verwijder taak uit array
    updateTaskList(); // Werk de lijst bij
}

// Functie om een melding weer te geven
function showAlert(message, type) {
    // Selecteer het alertBox-element
    var alertBox = document.getElementById("alertBox");

    // Voeg de Bootstrap alert HTML toe met dynamisch type en bericht
    alertBox.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                             ${message}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`;

    // Zorg ervoor dat de alert na 2 seconden automatisch verdwijnt
    setTimeout(function() {
        var alert = bootstrap.Alert.getOrCreateInstance(alertBox.querySelector('.alert'));
        alert.close();
    }, 2000);
}
