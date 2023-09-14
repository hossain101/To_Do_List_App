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
});
