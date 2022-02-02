// 1. Declare a function called oddNum. It takes 1 param called x

function oddNum() {}

// 2. In the body of the function do the following
// If a passed in argument is an odd number log "x is an odd number"
// If a passed in argument is an even number log "x is an even number"

function oddNum(x) {
  return x % 2 === 0 ? `${x} is not an odd number` : `${x} is an odd number`;
}

oddNum(2);

// By using the remainder operator % we can check if a number is odd or even

// 3. Declare a function called prime. The function takes 1 param called x.
// The function is empty and does nothing as yet

function prime() {}

// 4. In the body of the prime() function do the following:
// Evaluate whether the passed in argument is a prime number or not
// The function will log the string "x is a prime number" if it is prime
// The function will log the string "x is bot a prime number" if it is prime

function prime(x) {
  let counter = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) counter++;
  }
  console.log(
    counter === 2 ? `${x} is a prime number` : `${x} is not a prime number`
  );
}

prime(3);

// In this function we check if every number from 1 to itself can be divided into it
// If the counter reaches more than 2 then the number is not prime
// Prime numbers can only be divded by 1 and themselves

// 5. Determine the value of this in the following function:

function outer() {
  "use strict";
  let x = 10;
  function inner(x) {
    let y = x + 10;
    console.log(this);
  }
  inner();
}

// In this function the this logged will undefined as we are in strict mode

// 6. Code a function whuch will calculate the factorial of any number

function factorial(n) {
  return Array.from([...Array(n).keys()], (x) => x + 1).reduce(
    (acc, curr) => (acc *= curr),
    1
  );
}

factorial(5);

// Using [...Array(5).keys()] we create a Python range() equivilent that starts from 0

// 7. Write a function which accepts an array as a parameter.
// Check if the pram is strictly an array
// Remove duplicates from the array if any

function arrayCheck(arr) {
  if (Array.isArray(arr)) {
    return [...new Set(arr)];
  }
}

const testArr = [1, 1, 2, 3];
const badArr = "test";

console.log(arrayCheck(testArr));

// [...new Set(arr)] is a great trick to remove duplicates from an array by turning it into a set and converting back to an array

// 8. Write a function to swap the values of two variables a and b

function swap(a, b) {
  [a, b] = [b, a];
}

// Using the destructuring method we can quickly swap values of arrays without needing a temp variable

// 9. What is the difference between a function parameter and an argument

// Arguments are what are passed to the function
// Params are variables created at the initiation of the function when it runs

// 10. Analyze the following block of code, what do you think will be logged to the console?

function outer() {
  let inner = function (x) {
    console.log(x);
  };
  inner();
}

outer();

// This will print undefined as the argument x is undefined

// 11. How do you think we should rectify the probem in exercise 10?

// We need to pass an x in the function call outer() and set a param in the outer function declaration
// We also need to pass the argument to inner so it can be called from within the function inner

// 12. Code a function called stringVal()
// The function should take 3 params
// The function will log to the console the 3 params
// The function should take in the following string arguments ("Hello", "there", "world", "!")
// What do you think is logged to the console and why?

function stringVal(a, b, c) {
  console.log(`${a} ${b} ${c}`);
}

stringVal("Hello", "there", "world", "!");

// This will print "Hello there world"
// The last argument will be skipped as it is not defined as a param in the function

// 13. Write a statement of code that will log the number of arguments passed to a function

function clients([a, b, c], [x, y]) {
  console.log(clients.length);
}

clients([1, 2, 3], ["a", "b"]);

// Every object has a built in method .length() including function
// When called on a function it will return the number of arguments passed to that function
// In this case the length is 2

// 14. Have a look at the following function and try to gauge what is returned

function someMath(a, b, c) {
  return a * b + c;
}

console.log(someMath(10, 13));

// This will return NaN as a * b will be 130
// c is not added as an argument so will have no value
// calling c inside the function will set it to undefined
// adding undefined to a number will result in NaN
