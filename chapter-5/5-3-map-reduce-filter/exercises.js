// 1. Consider the following code and use the map() method to acheive the output of array2 logged to the console

let array1 = [10, 20, 30, 40];

let array2 = [];

array2 = array1.map((ele) => ele * 2).reverse();

console.log(array2);

// We use map so we dont mutate the original array
// We then reverse the array so its contents is all backwards

// 2. Using the map() method transform the values of the following array by tripling them.
// Make sure that the return values are rounded off to 2 decimal places

let numbersArray = [1.01, 89.99, 4562.79, 120];

let newArray = numbersArray.map((ele) => (ele * 3).toFixed(2));

console.log(newArray);

// The .toFixed() method will adjust the decimal based on the number

// 3. Multiply all the values in the following array with each other and then double the result

let arr = [1, 10, 10, 2];

console.log(arr.reduce((acc, curr) => acc * curr, 2));

// The syntax for reduce is .reduce(callback, initialStartingVal)

// 2. For the following array calculate the total population in all the cities

let cities = [
  {
    name: "Albuquerque",
    population: 2304004,
  },
  {
    name: "Toronto",
    population: 547569284,
  },
  {
    name: "Kuwait",
    population: 39302848,
  },
  {
    name: "Vancouver",
    population: 7834751,
  },
];

console.log(cities.reduce((acc, curr) => acc + curr.population, 0));

// Always remember a starting value
// If the first item in the array is text it will ruin the result

// 3. Filter the following data and return users that are of the "admin" type

let userData = [
  {
    email: "user1@hello.com",
    name: "user 1",
    type: "regular",
  },
  {
    email: "user2@hello.com",
    name: "user 2",
    type: "admin",
  },
  {
    email: "user3@hello.com",
    name: "user 3",
    type: "admin",
  },
  {
    email: "user4@hello.com",
    name: "user 4",
    type: "regular",
  },
];

let keyword = "admin";

console.log(userData.filter((ele) => ele.type === keyword));

// In this case we match the type property of the object to the keyword which we are searching for
// This returns a new array from the filter method and logs to screen

// 4. For the following array, filter the words which have the characters "er" in them

let wordArray = [
  "dog",
  "pineapple",
  "letter",
  "technology",
  "chatter",
  "donut",
];

console.log(wordArray.filter((ele) => ele.includes("er")));

// Using include we can check the entire string to see if there are any matches for "er"

// 5. In the following array filter the prime numbers.
// A prime number is not divisible by any number other than 1 and by itself

let numbers = [2, 4, 5, 7, 12, 13, 17, 19, 24, 29, 31, 33, 41, 43, 47, 53];

console.log(
  numbers.filter((ele) => {
    for (let i = 2; ele > i; i++) {
      if (ele % i === 0) return ele;
    }
    return false;
  })
);

// This will remove prime numbers leaving just the non-primes
// We do this by checking what we can divide by
