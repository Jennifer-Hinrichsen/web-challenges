console.clear();

const peopleInSpaceElement = document.querySelector(
  '[data-js="people-in-space"]'
);
const peopleListElement = document.querySelector('[data-js="people-list"]');
console.log(peopleInSpaceElement);

async function fetchSpaceData() {
  const url = `http://api.open-notify.org/astros.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
async function updatePeopleInSpace() {
  const spaceData = await fetchSpaceData();
  const peopleInSpace = spaceData.number;

  if (peopleInSpaceElement) {
    peopleInSpaceElement.textContent = peopleInSpace.toString();
  }

  if (peopleListElement) {
    peopleListElement.innerHTML = "";

    // Update the list with names of people in space
    spaceData.people.forEach((person) => {
      const listItem = document.createElement("li");
      listItem.textContent = person.name;
      peopleListElement.appendChild(listItem);
    });
  }
}
updatePeopleInSpace();
