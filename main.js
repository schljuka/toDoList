document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector('#teksttask');
    const lista = document.querySelector('#lista');
    const todoColumn = document.querySelector('#todotask');

    document.querySelector('#dodaj').addEventListener("click", function () {
        const taskText = taskInput.value;
        const selectedValue = lista.value;

        if (taskText.trim() !== "") {
            const noviTask = document.createElement("div");
            noviTask.textContent = taskText;
            noviTask.className = "task " + selectedValue;

            todoColumn.appendChild(noviTask);

            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });
});