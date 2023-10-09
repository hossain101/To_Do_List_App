document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit-btn");
  const saveButtons = document.querySelectorAll(".save-btn");
  const todoItems = document.querySelectorAll(".todo-item");

  editButtons.forEach((editBtn, index) => {
    editBtn.addEventListener("click", () => {
      // Hide edit button, show save button, and replace text with input field
      editBtn.style.display = "none";
      saveButtons[index].style.display = "inline-block";

      const originalText = todoItems[index].textContent;
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = originalText;
      todoItems[index].textContent = "";
      todoItems[index].appendChild(inputField);

    
    });

  });
});

