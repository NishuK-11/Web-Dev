// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  // Check if the input is empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.addEventListener("click", () => {
    // Toggle completed class
    taskSpan.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  // Add elements to the list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = "";
}

// Event listener for the Add Task button
addTaskBtn.addEventListener("click", addTask);

// Allow adding tasks by pressing Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
