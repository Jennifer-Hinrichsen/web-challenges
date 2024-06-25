console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
document.addEventListener("DOMContentLoaded", () => {
  // Assign the input element to a variable
  const inputElement = document.querySelector('[data-js="first-input"]');
  // Assign the button element to a variable
  const buttonElement = document.querySelector('[data-js="button-uppercase"]');

  // Add an event listener to the button
  // Convert the input value to uppercase
  buttonElement.addEventListener("click", () => {
    inputElement.value = inputElement.value.toUpperCase();
  });
});
