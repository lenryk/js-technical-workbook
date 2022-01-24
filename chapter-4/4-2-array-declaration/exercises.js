// 1. What are three ways to create arrays?

// Array.of()
// Array literal
// Array constructor

// 2. Create an empty array called items and initalize it with values of 5 different data types.
// What is the length of the array?

const array = [1, 2, true, false, "hello"];

console.log(array.length);

// The length is 5
// The array indexes go up to 4 because they start from 0

// 3. What method can be used to determine if an array is an array?

Array.isArray();

// typeof() will return object for an array which isnt helpful
// This method will specifically tell us if its an array

// 4. Answer the following using the array constructor method
// Using the array constructor initialize an array called employeeList which will have 5 values
// Add an item with the string value "Reno" in the employeeList array at index 0
// What values does the employeeList array contain? Try to guess without console logging

const employeeList = newArray(5);

employeeList[0] = "Reno";

// This will contain "Reno", undefined, undefined, undefined, undefined
// By defining a length the indexes where all set to undefined by default as the placeholder

// 5. What is the difference between these two ways of creating arrays?

let array1 = Array.of(1, 2, 3);

let array2 = new Array(3);

// Array.of will assign all the indexes with values
// The new Array will not assign any values and leave them all undefined

// 6. Consider the following array of objects
// Access the value of the enrolled property of the item at index 4 in the arrayObj array
// Change it's value to true

let arrayObj = [
  { id: 1, enrolled: true },
  { id: 2, enrolled: true },
  { id: 3, enrolled: false },
  { id: 4, enrolled: true },
  { id: 5, enrolled: false },
];

console.log(arrayObj[4].enrolled);

arrayObj[4].enrolled = true;

// Remember to select the index of the array before selecting the property
