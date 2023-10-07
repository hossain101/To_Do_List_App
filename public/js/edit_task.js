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

    // saveButtons[index].addEventListener("click", () => {
    //   const editedText = todoItems[index].querySelector("input").value;

    //   //Send the edited text to the server
    //   fetch("/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ index, editedText }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.success) {
    //         // Update the UI with the edited text
    //         todoItems[index].textContent = data.editedText;
    //       } else {
    //         // Handle error here if needed
    //         console.error("Error editing task");
    //       }

    //       // Show edit button and hide save button
    //       editBtn.style.display = "inline-block";
    //       saveButtons[index].style.display = "none";
    //     });
   // });
  });
});
