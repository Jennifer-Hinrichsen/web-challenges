console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  hideTosError();

  tosCheckbox.addEventListener("change", () => {
    if (tosCheckbox.checked) {
      hideTosError();
    } else {
      showTosError();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!tosCheckbox.checked) {
      showTosError();
      return;
    }

    hideTosError();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);

    form.reset();
    document.getElementById("first-name").focus();

   



  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
