const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/
const onlyTitles = recipes.map((recipe) => recipe.title);

const titlesWithDuration = recipes.map(
  (recipe) => `${recipe.title} (${recipe.duration}min)`
);

const timePerServing = recipes.map(
  (recipe) => recipe.duration / recipe.servings
);

const allTitlesInOneString = recipes.map((recipe) => recipe.title).join(", ");

const recipesThatOnlyTake60minutesOrLess = recipes.filter(
  (recipe) => recipe.duration <= 60
);

const allRecipesWithMoreThan2Servings = recipes.filter(
  (recipe) => recipe.servings > 2
);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter(
  (recipe) => recipe.title.length > 12
);

/*
 2: `filter` exercises
*/

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
