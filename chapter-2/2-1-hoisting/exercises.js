// 1. What is hoisting?

// Added to a new memory structure before the code is initialized
// This allows us to use functions before we have declared them

// 2. Examine the following function assignment. Will it get hoisted?

let calculateSurfaceArea = function (h, w, l) {
  let area = 2 * (h * w) + 2 * (h * 1) + 2 * (w * l);
  return area;
};

// This is a function expression e.g. assigning it to a variable
// Since this is not a declaration it will not get hoisted

// 3. Explain why the two console.log statements return different values?

console.log(x); // undefined

var x = 100;

console.log(x); // 100

// First one is logged before the variable has been assigned so it is undefined
// The second log is after the variable has been assigned which is now 100

// 4. Examine the following code and analyze what is happening in reference to hoisting

console.log(furniture);

var material = "Bamboo";

// The variable furniture has not been assigned so will cause an error

// 5. Analyze the following code what is logged to the console?

for (var i = 0; i <= 4; i++) {
  console.log(i);

  setTimeout(function () {
    console.log("The number being logged is" + i);
  }, 1000);
}

// The first console.log will print 0, 1, 2, 3, 4
// The second console.log will print "The number being logged is 5" x 5 times
// This is because when the 2nd console.log is called after 1 second the for loop has already ran
// To fix this issue we need to change var to let as it will change the variables scope from global to block

// 6. Define the Temporal Dead Zone (TDZ)

// Its where variables get hoisted when declared but not assigned data

// 7. Answer the following questions related to the following block of code

console.log(giraffe);

const giraffe = "Masai giraffe";

{
  const giraffe = "Nubian giraffe";
}

console.log(giraffe);

// The first console.log will throw an error as we are trying to log something before it has been declared and lie in the TDZ
// The second console.log will log "Masai giraffe"

// 8. Have a look at the code snippet and explain why the number 20 is logged to the console:

sum(10, 10);

function sum(x, y) {
  let add = x + y;
  console.log(add);
}

// Due to hoisting the function is hoisted to the top meaning we can call it before it has been declared

// 9. A variable sum has been declared and assigned a value of 100. What will the console.log statement return now?

function sum(x, y) {
  let add = x + y;
  console.log(add);
}

sum(1, 2);

var sum = 100;

console.log(typeof sum);

// It will now print "number" as variable assignment takes predecent over function declaration

// 10. Will fruit be hoisted? If so what will the typeof() operator return?

console.log(typeof fruit);

var fruit = function () {
  let fruitJam = true;
  let toast = true;
  if (fruitJam && toast) {
    console.log("I like fruit jam and toast");
  }
};

// No because it is a function assignment and not function declaration
// Function assignments will not get hoisted
