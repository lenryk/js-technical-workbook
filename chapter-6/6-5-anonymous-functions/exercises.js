// 1. What is an anonymous function and can you think of any popular examples where they are used?

// Anonymous functions are regularly used in functions that require callback functions
// This saves time and space as we dont have to keep declaring them

// 2. Declare a function expression reference by a variable called fooScore
// The function takes one param
// Inside the function raise x to the power of 5
// Invoke the function and pass in the number 2 as an argument

const fooScore = (x) => {
  return x ** 5;
};

console.log(fooScore(5));

// In this function ** is to the power but we can also use Math.pow()

// 3. Let's code our own countdown timer
// Use the setInterval() method to countdown from 10 to 0 at intervals of 2 seconds

let counter = 10;

setInterval(() => {
  if (counter > 0) console.log(counter);
  counter--;
}, 2000);

// We need an external variable to kepe track of the count
// We can then make the function run every 2 seconds which will minus one number each time

// 4. Use the window.onload() method to execute a function which will log Hello World

window.onload(() => console.log("Hello World"));

// The window.onload() function will only execute once the entire window has finished loading
