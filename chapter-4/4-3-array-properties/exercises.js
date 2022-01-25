// 1. What is the length of this array?

let employeeList = new Array(5);

console.log(employeeList.length);

// This will return 5 as it starts counting from 1

// 2. Loop over the following array and log to the console the value of the array items at each index

let arrayObj = [
  { id: 1, enrolled: true },
  { id: 2, enrolled: true },
  { id: 3, enrolled: false },
  { id: 4, enrolled: true },
  { id: 5, enrolled: false },
];

for (let i = 0; i < arrayObj.length; i++) {
  console.log(arrayObj[i]);
}

// This simply prints out the contents of each index

// 3. Is it a good practice to add methods and properties to the protoype array object?

// No, it is not good practice as thsi can interfere with other frameworks and libraries
