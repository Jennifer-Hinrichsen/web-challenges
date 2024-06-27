console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);

  event.target.reset();

  const formElements = event.target.elements;
  formElements.firstName.focus();

  const result = Number(data.age) + Number(data.badness);
  console.log(result);

  console.log(
    `The age-badness-sum of '${data.age}' is '${data.badness}' result= '${result}'`
  );
});
