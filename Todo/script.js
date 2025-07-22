document.addEventListener("DOMContentLoaded", loadTodos);

function makeCard(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addCardToDOM(taskText);
  saveTodo(taskText);
  taskInput.value = "";
}

function addCardToDOM(taskText) {
  const card = document.createElement("div");
  card.className = "task-card";

  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  const taskEditInput = document.createElement("input");
  taskEditInput.type = "text";
  taskEditInput.style.display = "none";

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";
  editBtn.onclick = function () {
    if (editBtn.innerText === "✏️") {
      taskEditInput.value = taskSpan.innerText;
      taskSpan.style.display = "none";
      taskEditInput.style.display = "inline";
      editBtn.innerText = "✅";
    } else {
      const newText = taskEditInput.value.trim();
      if (newText) {
        updateTodo(taskSpan.innerText, newText); // update localStorage
        taskSpan.innerText = newText;
      }
      taskSpan.style.display = "inline";
      taskEditInput.style.display = "none";
      editBtn.innerText = "✏️";
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.onclick = function () {
    card.remove();
    deleteTodo(taskSpan.innerText);
  };

  card.appendChild(taskSpan);
  card.appendChild(taskEditInput);
  card.appendChild(editBtn);
  card.appendChild(deleteBtn);

  document.getElementById("task-container").appendChild(card);
}

// --- Local Storage Helpers ---

function saveTodo(task) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(task) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(t => t !== task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateTodo(oldTask, newTask) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const index = todos.indexOf(oldTask);
  if (index > -1) {
    todos[index] = newTask;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function loadTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(task => addCardToDOM(task));
}
