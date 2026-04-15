// Select elements from the page
const addBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add event listener to button
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  // Check if input is not empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task when clicked
  li.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Add task to list
  taskList.appendChild(li);

  // Clear single input
  taskInput.value = "";
});

function clearTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    document.getElementById("taskList").innerHTML = "";
  }
}
