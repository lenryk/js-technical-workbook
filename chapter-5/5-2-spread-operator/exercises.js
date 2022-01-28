// 1. What will be the output of the following code?

let a = [1, 2, 3];

let b = [4, 5, 6, ...a];

let c = [...a, ...b];

console.log(c);

// This will log
// 1,2,3,4,5,6,1,2,3

// 2. Join these two arrays using the spead operator and reference the result via resultArray

let arrayA = [
  { num: 1, max: 10 },
  { num: 2, max: 10 },
  { num3: 3, max: 450 },
];

let arrayB = [{ fruit: "apple" }, { fruit: "mango" }, { fruit: "blueberry" }];

let resultArray = [...arrayA, ...arrayB];

console.log(resultArray.some((ele) => ele.fruit === "mango"));

// Another way to join these two arrays together is using the concat method
// We can check all the fruits for the name mango and it will return true if one of them is
