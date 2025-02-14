document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create new list item (task)
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Add toggle functionality to mark as completed or incomplete
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
        span.classList.toggle("incomplete");
    });

    // Create delete icon
    const deleteIcon = document.createElement("button");
    deleteIcon.innerHTML = "&#128465;"; // Trash can icon
    deleteIcon.classList.add("delete-icon");
    li.appendChild(deleteIcon);

    // Add event listener to delete icon
    deleteIcon.addEventListener("click", () => {
        li.remove();
    });

    // Add the task to the list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
