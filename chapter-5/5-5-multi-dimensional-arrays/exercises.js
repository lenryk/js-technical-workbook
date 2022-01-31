// 1. Flatten the following array down to 1 level using the flat() method

let nestedArray = [[0, [1, 2]], 3, [9], [10, 12]];

console.log(nestedArray.flat(1));

// The (1) says how many levels to flatten it
// 1: [0, [1,2], 3, 9, 10, 12]
// 2: [0, 1, 2, 3, 9, 10, 12]

// 2. Using the data below, declare a two dimensional array called weather which will
// contain 4 nested arrays representing the weeks of a month. Each array contains the temperature from Mon - Fri

const weather = [
  [35, 30, 32, 31, 33],
  [30, 32, 33, 31, 30],
  [29, 30, 31, 29, 30],
  [29, 28, 30, 29, 30],
];

console.log(weather);

// This is a simple 1 level nested array
// Just arrays within a bigger array

// 3. Consider the following two dimensional array called weather
// It contains 4 nested arrays with 5 values each representing the temperatures from Mon - Fri

const weather = [
  [35, 30, 32, 31, 33],
  [30, 32, 33, 31, 30],
  [29, 30, 31, 29, 30],
  [29, 28, 30, 29, 30],
];

weather
  .flat()
  .filter((ele) => ele >= 33)
  .reduce((acc, curr) => acc + curr, 0);

// In this chaining method we make the entire array flat
// Filter the array for temps over or equal to 33
// We then add up all the totals

// 4.
