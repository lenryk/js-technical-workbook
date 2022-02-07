// 1. What is the purpose of the rest parameter?

// To allow a function to accept an indefinite amount of parameters

// 2. Have a look at the following function with 9 parameters. Re-factor the function using rest syntax.

function adder(...arguments) {
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i] + arguments[i]);
  }
}

adder(1, 2, 3, 4, 5, 6, 7, 8, 9);

// In this function we have to change the params to use ... which is the rest param when used in functions
// It also needs a name so we can reference the array it creates within the function

// 3. Have a look at the following function with 9 params. Re-factor the function using rest syntax.
// The function should sum up all the arguments passed to it

function sum(...arguments) {
  console.log(arguments.reduce((acc, curr) => acc + curr));
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// In this function we used the rest syntax in the arguments
// We then reduced the array with the reduce method

// 4. Analyze the following function, what is returned?
// If an error is thrown how will you fix it?

function workshopAttendees(a, ...b, c) {
    return true;
}

// When using the rest syntax we have to put it as the last param or it will cause problems
// In this example it is putting every param including c into the b variable
// So c will always be empty!

// 5. Can you think of any differences between a rest parameter and the arguments object which is inherently present in all functions?

// The rest parameter is an array of values while the arguments object is an object
// The arguments object contains all the arguments while the rest array only contains the ones passed to it


// 6. What is the difference between rest and spread parameters?

// Rest is used only in functions declarations
// Spread is used to spread out arrays into functions when calling them

// 7. Write a function that will multiply any amount of arguments passed to it by 8

function multiply(...arguments) {
    console.log(arguments.reduce((acc, curr) => acc *= curr, 1))
}

multiply(5,5)

// We accept unlimited arguments using the ...rest syntax in the declaration
// We then reduce the array with the numbers in them using the reduce method

