// 1. What is an IIFE and what is a use case for using IIFEs?

// IIFE stands for immediately invoked function expression
// We can call anon functions within () to immediately invoke it

// 2. Code an IIFE that will console.log the string "hello world"

(function () {
  console.log("hello world");
})(
  // The parentheses have to be around the entire function

  // 3. Why are IIFE's used?

  // To stop naming conflicts and to keep things in scope

  // 4. What is the context of this in the following function:

  function () {
    console.log(this);
  }
)();

// This will reference the global window object

// 5. Have a look at the following code and do the following tasks
// Convert the function logPerson to an IFFE
// What will be logged to the console first?

let person = "Rena";

(function () {
  let person = "Robbie";
  console.log(person);
})();

console.log(person);

// We wrap the function in parentheses to invoke it immediately

// 6. Have a look at the following block of code
// What will be logged to the console inside the IIFE and outside the IIFE

let x = 10;

(function (x) {
  x++;
  console.log(x);
})(x);

console.log(x);

// Inside the function it will log 11
// Outside it will log 10
// We pass the variable x into the IIFE straight after with the (x)
