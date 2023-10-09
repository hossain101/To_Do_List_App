// const taskInput = document.getElementById("task");
// const taskList = document.getElementById("task-list");
// const editContainer = document.querySelector(".edit-container"); // New

// // Add a new task
// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText !== "") {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//             <span>${taskText}</span>
//             <button class="edit-button" onclick="editTask(this)">Edit</button>
//             <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            
//         `;
//     taskList.appendChild(listItem);
//     taskInput.value = "";
//   }
// }

// // Edit a task
// // Edit a task
// function editTask(button) {
//   const listItem = button.parentElement;
//   const taskTextElement = listItem.querySelector("span");

//   // Check if we're already in edit mode
//   const isEditMode = taskTextElement.classList.contains("edit-mode");

//   if (!isEditMode) {
//     const taskText = taskTextElement.textContent;

//     // Replace the task text with an input field
//     taskTextElement.innerHTML = `
//           <input type="text" class="edit-input" value="${taskText}">
//       `;
//     taskTextElement.classList.add("edit-mode");

//     // Update the button text to "Save"
//     button.textContent = "Save";

//     // Focus on the input field
//     const editInput = taskTextElement.querySelector(".edit-input");
//     editInput.focus();
//   } else {
//     // We are in edit mode, so save changes
//     const editInput = taskTextElement.querySelector(".edit-input");
//     saveEditedTask(listItem, editInput, button);
//   }
// }

// // Save the edited task
// function saveEditedTask(listItem, editInput, button) {
//   const newTaskText = editInput.value.trim();
//   if (newTaskText !== "") {
//     listItem.querySelector("span").textContent = newTaskText;
//   }

//   // Remove the input field
//   listItem.querySelector(".edit-mode").classList.remove("edit-mode");

//   // Restore the button text to "Edit"
//   button.textContent = "Edit";
// }
// //Delete a task
// function deleteTask(button) {
//   const listItem = button.parentElement;
//   taskList.removeChild(listItem);
// }
