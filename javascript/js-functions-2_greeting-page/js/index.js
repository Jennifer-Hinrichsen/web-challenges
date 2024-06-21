console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const hour = new Date().getHours();

console.log(hour);

function getGreeting(hour) {
  // Code here
  if (hour > 6 && hour <= 12) {
    return "Good Morning";
  } else if (hour > 13 && hour <= 19) {
    return "Good Afternoon";
  } else if (hour > 19 && hour <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
console.log(getGreeting(hour));

getGreeting(hour);

/*function getDayColor() {*/
// Code here
const weekday = new Date().getDay();
console.log(weekday);

/*switch (currentDay) {
    case 1:
      return "red";
    case 2:
      return "blue";
  }*/
function getDayColor(weekday) {
  // Code here
  if (weekday === 0) {
    return "red";
  } else if (weekday >= 1 && weekday < 6) {
    return "blue";
  } else {
    return "lightblue";
  }
}

getDayColor(weekday);
console.log(getDayColor());
display.textContent = getGreeting(hour);
document.body.style.backgroundColor = getDayColor(weekday);
