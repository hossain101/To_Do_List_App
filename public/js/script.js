const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const editContainer = document.querySelector(".edit-container"); // New

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            <button class="edit-button" onclick="editTask(this)">Edit</button>

            
            
        `;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

// Edit a task
// function editTask(button) {
//   const listItem = button.parentElement;
//   const taskText = listItem.querySelector("span").textContent;
//   taskInput.value = taskText;
//   editingTask = listItem;
//   editContainer.style.display = "block";
// }

// // Save the edited task
// function saveTask() {
//   const newTaskText = taskInput.value.trim();
//   if (newTaskText !== "") {
//     editingTask.querySelector("span").textContent = newTaskText;
//     taskInput.value = "";
//     editingTask = null;
//     editContainer.style.display = "none";
//   }
// }

// // Cancel editing
// function cancelEdit() {
//   taskInput.value = "";
//   editingTask = null;
//   editContainer.style.display = "none";
// }

// function editTask(button) {
//   const listItem = button.parentElement;
//   const taskTextElement = listItem.querySelector('span');
//   const editInput = document.createElement('input');
//   editInput.type = 'text';
//   editInput.value = taskTextElement.textContent;

//   // Replace the task text with the input field
//   taskTextElement.textContent = '';
//   taskTextElement.appendChild(editInput);

//   // Focus on the input field
//   editInput.focus();

//   // Add an event listener to save changes when pressing Enter
//   editInput.addEventListener('keyup', function (event) {
//       if (event.key === 'Enter') {
//           saveEditedTask(listItem, editInput);
//       }
//   });

//   // Add a blur event listener to save changes when clicking outside the input
//   editInput.addEventListener('blur', function () {
//       saveEditedTask(listItem, editInput);
//   });
// }

// function saveEditedTask(listItem, editInput) {
//   const newTaskText = editInput.value.trim();
//   if (newTaskText !== '') {
//       listItem.querySelector('span').textContent = newTaskText;
//   }
//   // Remove the input field
//   listItem.removeChild(editInput);
// }

// Edit a task
function editTask(button) {
  const listItem = button.parentElement;
  const taskTextElement = listItem.querySelector("span");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskTextElement.textContent;

  // Create a Save button
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.className = "save-button";

  // Replace the "Edit" button with the "Save" button
  listItem.replaceChild(saveButton, button);

  // Replace the task text with the input field
  taskTextElement.textContent = "";
  taskTextElement.appendChild(editInput);

  // Focus on the input field
  editInput.focus();

  // Add an event listener to save changes when pressing Enter
  editInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      saveEditedTask(listItem, editInput, saveButton);
    }
  });

  // Add a blur event listener to save changes when clicking outside the input
  editInput.addEventListener("blur", function () {
    saveEditedTask(listItem, editInput, saveButton);
  });

  // Add a click event listener to the Save button
  saveButton.addEventListener("click", function () {
    saveEditedTask(listItem, editInput, saveButton);
  });
}

// Save the edited task
// Save the edited task
function saveEditedTask(listItem, editInput, saveButton) {
  const newTaskText = editInput.value.trim();
  if (newTaskText !== "") {
    listItem.querySelector("span").textContent = newTaskText;
  }

  // Remove the input field
  listItem.removeChild(editInput);

  // Replace the "Save" button with the "Edit" button
  listItem.replaceChild(createEditButton(), saveButton);
}

// Create an "Edit" button
function createEditButton() {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-button";
  editButton.addEventListener("click", function () {
    editTask(this); // Call the editTask function when clicking "Edit" again
  });
  return editButton;
}
// Delete a task
function deleteTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}
