// 1. What is a callback function?

// A function passed to a function that is called from within it

// 2. Finish the following code snippet. The declarations for onSuccess and onFailure callback functions are missing.
// You may add anything inside the body of the callback functions.

function respond(onSuccess, onFailure) {
  let error = true;
  if (error) {
    onFailure(error);
  } else {
    onSuccess();
  }
}

function onSuccess() {
  console.log("Great success!");
}

function onFailure(err) {
  console.log(`The error is ${err}`);
}

respond(onSuccess, onFailure);

// We defined the functions outside of the respond function and pass them in as arguments

// 3. Have a look at the following code and explain what the order of the log statements will be

console.log(1);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

// 1, 2, 4, 3
// The setTimeout callback runs last

// 4. Can you think of a callback function used in the DOM?

// setInterval, addEventListener

// 5. Callback functions can be confusing, nested callbacks are often called callback hell.
// Can you explain what is happening here?

function a(x) {
  b(c);
}

function b(y) {
  c();
}

function c() {
  console.log("hi");
}

a(b);

// A is being called with the function b passed as an argument
// a is calling function b with function c passed as an argument
// function b is calling function c
// function c is logging "hi"

// 6. Code a function called input which takes a param called text and a callback function as a second param.
// When the finction input() is called it should return a string argument passed to it reversed.
// For example the string "hello world!" is retruned as "!dlrow olleh"

function input(text, callback) {
  console.log(callback(text));
}

function stringReverse(text) {
  return text.split("").reverse().join("");
}

input("hello world!", stringReverse);

// In this exercise we create our own callback function called stringReverse
// We then pass a string and our callback to the input() function with executes the callback with the string input
