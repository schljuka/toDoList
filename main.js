document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector('#teksttask');
    const lista = document.querySelector('#lista');
    const todoColumn = document.querySelector('#todotask');

    function deleteTask(task) {
        task.remove();
    }



    document.querySelector('#dodaj').addEventListener("click", function () {
        const taskText = taskInput.value;
        const selectedValue = lista.value;


        if (taskText.trim() !== "") {
            const noviTask = document.createElement("div");
            noviTask.textContent = taskText;
            noviTask.className = "task " + selectedValue;

            //označavanje zadatka kao završenog
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener('change', function () {
                toggleCompleted(noviTask);
            });

            //brisanje zadatka
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", function () {
                deleteTask(noviTask);
            });

            noviTask.appendChild(checkbox);
            noviTask.appendChild(deleteButton);

            todoColumn.appendChild(noviTask);

            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

});