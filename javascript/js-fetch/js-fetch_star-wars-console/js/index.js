console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);

  data.results.forEach((person) => {
    console.log(`name: ${person.name[2]}, eyecolor: ${person.eye_color}`);
  });
}

fetchData();
