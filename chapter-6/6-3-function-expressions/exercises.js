// 1. A function expression cannot be used unless it is defined true or false?

// You need to assign to to a variable to use it so true

// 2. Function expressions are hoisted? True or false?

// False, they are not hoisted which means you need to define them before they are called

// 3. Write a function express such that:
// The variable is called multiply
// The function takes 3 params x, y, z
// The function will return the value of x,y and z multiplied with each other
// Call the function expression with the following arguments 2, 20, 10

let multiply = (x, y, z) => x * y * z;

console.log(multiply(2, 20, 10));

// In this example I used the arrow function which doesnt need the function keyword
// It also doesnt require a return keyword as it is implied

// 4. Have a look at the following code and answer the questions

let multiply = function (x, y, z) {
  return x * y * z;
};

multiply(2, 20, 10);

function collection() {
  let fruit = {
    a: "apple",
    b: "banana",
    c: "cantaloupe",
  };

  console.log(fruit);
}

// If we call collection before it is declared what is logged and why?
// The fruit object will be logged as the function is hoisted

// Call the function multiply() before its declaration. What is logged and why?
// Reference error as expressions are not hoisted

// 5. In this exercise we will make our own timer using the serInterval() method and date constructor
// Make a function called timer
// The function should log the current local time
// Pass in the timer function expression to the setInterval() method as an argument
// This should log to the console the time at intervals of 1 second

function timer() {
  let time = new Date();
  console.log(time.toLocaleTimeString);
}

setInterval(timer(), 1000);

// Using setInterval we call the timer function and execute it every 1 second
