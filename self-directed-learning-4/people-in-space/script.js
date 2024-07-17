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

    let filteredPeople = spaceData.people;
    const btnAll = document.querySelector('[data-js="btn-All"]');
    const btnISS = document.querySelector('[data-js="btn-ISS"]');
    const btnTiangong = document.querySelector('[data-js="btn-Tiangong"]');
    btnAll.addEventListener("click", () => {
      filteredPeople = spaceData.people;
      updateList(filteredPeople);
    });

    btnISS.addEventListener("click", () => {
      filteredPeople = spaceData.people.filter(
        (person) => person.craft === "ISS"
      );
      updateList(filteredPeople);
    });

    btnTiangong.addEventListener("click", () => {
      filteredPeople = spaceData.people.filter(
        (person) => person.craft === "Tiangong"
      );
      updateList(filteredPeople);
    });
    updateList(filteredPeople);

    function updateList(people) {
      // Zuerst alle vorhandenen Listenelemente löschen while = Schleifenstruktur, die wiederholt wird, bis Bedingung wahr ist
      while (peopleListElement.firstChild) {
        peopleListElement.removeChild(peopleListElement.firstChild);
      }
      people.forEach((person) => {
        const listItem = document.createElement("li");
        listItem.textContent = person.name;
        peopleListElement.appendChild(listItem);
      });
    }
    // Update the list with names of people in space
    //  spaceData.people.forEach((person) => {
    //   const listItem = document.createElement("li");
    //  listItem.textContent = person.name;
    //   peopleListElement.appendChild(listItem);
    // });
  }
}
updatePeopleInSpace();
