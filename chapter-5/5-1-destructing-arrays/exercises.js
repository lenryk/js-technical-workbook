// 1. Destructure the following array:

let pokemonArray = [
  { name: "Bulbasaur" },
  { name: "Squirtle" },
  { name: "Pikachu" },
  { name: "Pokemon" },
  { name: "Eevee" },
];

let [bulbasaur, squirtle, pikachu, pokemon, eevee] = pokemonArray;

console.log(pokemon);

// The names on the left hand array are the variable names that match up to the index in the array on the right
// Remember to include the let KW on the left

// 2. Destructure the following string so that only the last letter "s" is returned

let myName = "SleepySaurus";

let [, , , , , , , , , , , last] = myName;

console.log(last);

// By using a comma we skip the letter in the string and move on to the next one

// 3. Destructure the following nested array:

let array1 = ["hello", "world", [100, 200]];

let [hello, world, [hundred, twoHundred]] = array1;

console.log(hundred, twoHundred);

// When we want to access nested arrays within the array we just make another array and name the variables inside

// 4. Swap the values of these 2 arrays. What is the value of array2?

let array1 = [{ role: "I.T." }, { role: "game dev" }];

let array2 = (["thin crust", "medium crust", "pan crust"][(array1, array2)] = [
  array2,
  array1,
]);

console.log(array1);

// This is a simple way to swap arrays using the destructuring syntax
