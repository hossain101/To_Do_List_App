document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the table body to handle checkbox changes
  document.querySelector("tbody").addEventListener("change", function (event) {
    if (event.target && event.target.type === "checkbox") {
      const todoItem = event.target.closest("tr").querySelector(".todo-item");
      if (event.target.checked) {
        todoItem.style.textDecoration = "line-through";
      } else {
        todoItem.style.textDecoration = "none";
      }
    }
  });

  // Check if the checkboxes are initially checked and apply line-through style
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    const todoItem = checkbox.closest("tr").querySelector(".todo-item");
    if (checkbox.checked) {
      todoItem.style.textDecoration = "line-through";
    }
  });
});




// document.addEventListener("DOMContentLoaded", function () {
//   const isComplete = this.value;
//   console.log(isComplete);
//   // based on the value of isComplete, set the checkbox to checked or unchecked
//   const checkbox = document.querySelector(".form-check-input");
//   if (isComplete) {
//     checkbox.checked = true;
//   } else {
//     checkbox.checked = false;
//   }
// });
  // Add event listener to the table body to handle checkbox changes
// document.addEventListener("DOMContentLoaded", function () {
//   const isComplete = this.value; // Convert the value to a boolean
//   // Add event listener to the table body to handle checkbox changes
//   document.querySelector("tbody").addEventListener("change", function (event) {
//     if (event.target && event.target.type === "checkbox") {
//       const todoItem = event.target.closest("tr").querySelector(".todo-item");
//       if (event.target.checked) {
//         todoItem.style.textDecoration = "line-through";
//       } else {
//         todoItem.style.textDecoration = "none";
//       }
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const checkboxes = document.querySelectorAll("tbody");

//   checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", function () {
//           const taskId = this.value;
//           fetch("/check", {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ checkbox_btn: taskId }),
//           })
//               .then((response) => response.json())
//               .then((data) => {
//                   if (data.completed) {
//                       // Apply line-through style
//                       this.parentElement.style.textDecoration = "line-through";
//                   } else {
//                       // Remove line-through style
//                       this.parentElement.style.textDecoration = "none";
//                   }
//               })
//               .catch((error) => {
//                   console.error("Error updating task:", error);
//               });
//       });
//   });
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const checkboxes = document.querySelectorAll(".form-check-input");

//   checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", function () {
//           const isComplete = this.value === "true"; // Convert the value to a boolean
//           const taskId = this.nextElementSibling.value; // Get the associated taskId from the hidden input

//           fetch("/check", {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ checkbox_btn: isComplete, checkbox_id: taskId }),
//           })
//               .then((response) => response.json())
//               .then((data) => {
//                   if (data.completed) {
//                       // Apply line-through style
//                       this.parentElement.style.textDecoration = "line-through";
//                   } else {
//                       // Remove line-through style
//                       this.parentElement.style.textDecoration = "none";
//                   }
//               })
//               .catch((error) => {
//                   console.error("Error updating task:", error);
//               });
//       });
//   });
// });

