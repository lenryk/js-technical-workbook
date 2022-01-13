// 1. Mrs Shear is a grade 3 teacher. She wants to ensure that students in her class learn in groups of 3.
// Write a function called grouping() which takes a number as a param.
// Within the function use a try-catch block to throw an error if the number passed into the function
// is not divisible by 3. If it is divisible by 3 then return the number of groupings that are formed.
// The finally block must let Mrs Shear know that the function is over.

function grouping(n) {
  try {
    if (n % 3 === 0) {
      console.log(`Number of groupings are ${n / 3}`);
    } else {
      throw new Error("Not divisible by 3");
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Function finished");
  }
}

// 2. Describe 3 types of errors encountered while coding

// ReferenceError when a variable doesnt exist
// RangeError when you access an out of range index in an array
// Type Error when a variable is not the expected data type

// 3. Explain what type of error is thrown and why?

let num = 1;

console.log(s.toUpperCase());

// This will throw a TypeError as s is not a string data type
