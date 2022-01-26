// 1. Consider the following array
// What is the length of it?
// Write a function called myAlphabetLength which console.logs the length of the array
// Within the function use an if-conditional statement that checks if the number of items within the array is less than 4

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

// This is 7 elements long

function myAlphabetLength(array) {
  console.log(array.length);
  if (array.length < 4) console.log("My length is also less than 4");
}

myAlphabetLength(myAlphabet);

// 2. Declare and initialize an array called "Planets" with 5 string values
// console.log each item in the array
// Also console.log the index in each iteration

let planets = ["Earth", "Pluto", "Jupiter", "Saturn", "Mars"];

for (let i = 0; i < planets.length; i++) {
  console.log(planets[i], i);
}

// This will loop through the array and print out all the elements and the index number

// 3. Declare and initialize an array called wowDataTypes
// The array must have 5 different data types
// Iterate over the array and console.log each item in the array, its index and data type

let wowDataTypes = [false, "", 500, null, {}];

for (let i = 0; i < wowDataTypes.length; i++) {
  console.log(`${wowDataTypes[i]}, ${i}, ${typeof wowDataTypes[i]}`);
}

// 4. console.log each item in this array WITHOUT using a for loop

let myArr = [1, 2, "One", true];

myArr.forEach((ele) => {
  console.log(ele);
});

// This is a quick and simple way to iterator over an array
// Can also just use console.log

// 5. Loop over the 2 arrays and if there are any common occurences log them to the screen

let student1Courses = ["Math", "Englsh", "Programming"];

let student2Courses = ["Geography", "Spanish", "Programming"];

student1Courses.forEach((ele) => {
  student2Courses.forEach((ele2) => {
    if (ele === ele2) console.log(ele, ele2);
  });
});

// By using a nested loop we can check everything within both arrays and compare them to each other

// 6. Compare the 2 arrays and find common food if any

let food = ["Noodle", "Pasta", "Ice-cream"];

let food1 = ["Fries", "Ice-cream", "Pizza"];

food.forEach((ele) => {
  food1.forEach((ele2) => {
    if (ele === ele2) console.log(ele, ele2);
  });
});

// By using a nested loop we can check everything within both arrays and compare them to each other

// 7. Compare the 3 arrays and find any common elements:

let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

[values1, values2, values3].flat();

// When we put them in the array they will all be nested
// Using .flat() takes them out of their nesting and back into the array

// 8. For each item in this array console.log the letters in each item

let furniture = ["Table", "Chairs", "Couch"];

furniture.forEach((ele) => {
  for (char of ele) console.log(char);
});

// Using a nested loop we can print out all the individual chars of the element

// 9. Does the push() method modify / mutate the original array?

// Yes it does, it adds it on to the end

// 10. What will be logged?

let villagers = ["Coco", "Merengue", "Drago", "Flip", "Hazel", "Rocket"];

villagers[2] = "Poppy";

console.log(villagers);

// This will log ["Coco", "Merengue", "Poppy", "Flip", "Hazel", "Rocket"]

// 11. Remove the letter e from the string "icecream"

console.log("icecream".replaceAll("e", ""));

// Two ways to do it

// 12. pop() will mutate the original array's length and return the array. True or false?

// True

// 13. Using the concat() method, concat these 2 arrays and remove any extra occurence of an element

let arr = [1, 2, 3];
let arr1 = [1, 5, 6];

const newArray = arr.concat(arr1);

console.log(newArray);

// 14. Consider the following array of objects for a small indie bakery
// Write some code that when the barket array is queried or console.logged it is now

let bakery = [
  {
    cookie: "oreo",
    calories: 350,
  },
  {
    cookie: "fudge",
    calories: 450,
  },
  {
    cookie: "burger",
    calories: 700,
  },
];

bakery[0]["twoHelpings"] = 700;
bakery[1]["twoHelpings"] = 900;
bakery[2]["twoHelpings"] = 1400;

bakery[2]["cookie"] = "butter";

console.log(bakery);

// Remember to select the array index element before the object prop name

// 15. Remove the first element from this array

let amazingArray = [{}, null, undefined, ""];

amazingArray.shift();

// This will remove whatever is at the index 0

// 16. What is the difference between splice() and slice()

// splice mutates the original array and can be used to import and remove data
// slice extracts data from an array and returns a new array

// 17. Splice the following array and remove the item "new code" from the companies array:

let companies = [
  "cultivating coders",
  "purple moon",
  "enterprise skills",
  "new code",
  "soft code",
];

companies.splice(3, 1);

// The first param in splice is the index to delete and the second number is how many to delete
// Splice() will return what was deleted from the array

let techX = companies.splice(0, 1);

let techZ = { ...techX };

techZ["students"] = 8200;

console.log(techZ);

// The spread operator ... allows us to convert an array to an object

// 18. Have a look at the following code for insects and find if the insects object has an insect called "Diptera"

let insects = [
  {
    taxanomy: "insecta",
    name: "Archaeognatha",
    species: 513,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Plecoptera",
    species: 3743,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Thysanoptera",
    species: 5864,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Trichoptera",
    species: 14391,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Diptera",
    species: 155477,
    exoskeleton: true,
  },
];

console.log(insects.some((ele) => ele.name === "Diptera"));

// This scans every array element and accesses the name property to check if it is equal to "Diptera"
// If one is then it will return true for the entire array

// 19. Add the follow object to insects object in question 18
// {
//   taxanomy: "insecta",
//   name: "Mantodea",
//   species: 2400,
//   exoskeleton: true
// }

insects.push({
  taxanomy: "insecta",
  name: "Mantodea",
  species: 2400,
  exoskeleton: true,
});

// Using this we push an entire object to the next element in the array

// 20. Carrying on from question 19 the insects object which is as below. Query whether the species property
// in each object of the insect array has a value greater than 1000

let insects = [
  {
    taxanomy: "insecta",
    name: "Archaeognatha",
    species: 513,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Plecoptera",
    species: 3743,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Thysanoptera",
    species: 5864,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Trichoptera",
    species: 14391,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Diptera",
    species: 155477,
    exoskeleton: true,
  },
  {
    taxanomy: "insecta",
    name: "Mantodea",
    species: 2400,
    exoskeleton: true,
  },
];

console.log(insects.every((ele) => ele > 1000));

// This every runs the test on every index in the array and returns true of all are met
// If just one fails it will return false

// 21. Consider the following array references by let eshoppe which is an array of objects for a single page shopping cart being built

let eshoppe = [
  {
    name: "Pens",
    units: 403,
    prices: "$1.99",
  },
  {
    name: "Cotton socks",
    units: 432,
    prices: "$3.99",
  },
  {
    name: "Shirts",
    units: 1010,
    prices: "$12.99",
  },
  {
    name: "Stickers",
    units: 8200,
    prices: "$1.99",
  },
  {
    name: "Coffee Mug",
    units: 2140,
    prices: "$10.99",
  },
];

console.log(
  eshoppe.sort(
    (a, b) => parseInt(a.prices.substring(1)) - parseInt(b.prices.substring(1))
  )
);

// In this exercise we use sort to arrange the array based on the prices property
// Sort takes a and b params which indicates the current and next element
// To compare them we minus and depending on the returned number depends how they are orderes (e.g. negative is lower, positive is higher)
// Since parseInt and Number need a number to start with we have to make a substring that cuts off the $ symbol first

console.log(eshoppe.sort((a, b) => (a.name < b.name ? -1 : 1)));

// With this sort we are comparing alpahbet numbers
// Instead of minuses we have to compare individual chars and tell the function what to do if it is greater or lower
// In this case if the char from a is less than b we return -1 else 1 which works out the order result

// 22. For the following array use the fill() method such that the array returned is
// [199.99, 89.75, 10, 10, 8200.99, 79.95]

let prices = [199.99, 89.75, 62.25, 13.99, 8200.99, 79.98];

prices.fill(10, 2, 4);

// Using fill we can select rows inside the array to be replaced
// The format is fill(value, start, end)

// 23. For the same prices array in 22, find the index of the 8200.99 using the findIndex method

let prices = [199.99, 89.75, 62.25, 13.99, 8200.99, 79.98];

prices[prices.findIndex((num) => num === 8200.99)] = 9900;

// This this findIndex it takes a function to search the array and return the index number

// 24. First sort() and then reverse() the following array

let items = ["Calculator", "Laptop", "Console", "USB", "Keyboard"];

items.sort();
items.reverse();

// 25. Consider the following question from Toptal and try to work out what will be console.logged

var arr1 = "john".split("");

var arr2 = arr1.reverse();

var arr3 = "jones".split("");

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// This will print
// "array 1: length=5 last=j,o,n,e,s"
// "array 2: length=5 last=j,o,n,e,s"
// Since we pass by reference it will affect the original arr1

// 26. The reverse() method reverses the contents of an array, thereby mutating the original array.
// Can you come up with a way of reversing without mutating?

let num1 = [100, 818, 319000, 79];

let num2 = [...num1].reverse();

console.log(num1, num2);

// By cloning the array first we can stop the original from being mutated
