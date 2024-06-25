console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [ ] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [ ] Assign the second button to a variable.
– [ ] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element



const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});
*/

document.addEventListener("DOMContentLoaded", () => {
  // Assign the input element to a variable
  const input = document.querySelector('[data-js="first-input"]');

  // Assign the uppercase button element to a variable
  const uppercaseButton = document.querySelector(
    '[data-js="button-uppercase"]'
  );

  // Assign the lowercase button element to a variable
  const lowercaseButton = document.querySelector(
    '[data-js="button-lowercase"]'
  );

  uppercaseButton.addEventListener("click", () => {
    input.value = input.value.toUpperCase();
  });

  lowercaseButton.addEventListener("click", () => {
    input.value = input.value.toLowerCase();
  });
});
