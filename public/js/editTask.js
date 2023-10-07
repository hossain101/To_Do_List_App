


// function editTask(button) {
//     const listItem = button.parentElement;
//     const taskTextElement = listItem.querySelector("span");
  
//     // Check if we're already in edit mode
//     const isEditMode = taskTextElement.classList.contains("edit-mode");
  
//     if (!isEditMode) {
//       const taskText = taskTextElement.textContent;
  
//       // Replace the task text with an input field
//       taskTextElement.innerHTML = `
//             <input type="text" class="edit-input" value="${taskText}">
//         `;
//       taskTextElement.classList.add("edit-mode");
  
//       // Update the button text to "Save"
//       button.textContent = "Save";
  
//       // Focus on the input field
//       const editInput = taskTextElement.querySelector(".edit-input");
//       editInput.focus();
//     } else {
//       // We are in edit mode, so save changes
//       const editInput = taskTextElement.querySelector(".edit-input");
//       saveEditedTask(listItem, editInput, button);
//     }
//   }
  
//   // Save the edited task
//   function saveEditedTask(listItem, editInput, button) {
//     const newTaskText = editInput.value.trim();
//     if (newTaskText !== "") {
//       listItem.querySelector("span").textContent = newTaskText;
//     }
  
//     // Remove the input field
//     listItem.querySelector(".edit-mode").classList.remove("edit-mode");
  
//     // Restore the button text to "Edit"
//     button.textContent = "Edit";
//   }


 