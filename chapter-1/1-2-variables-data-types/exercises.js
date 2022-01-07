// 1. When should you use var, let and const?
// Avoid var at all costs due to scoping issues. Use let for any variable that is going to be changed.
// Used const for any constant variable that isn't going to be changed

// 2. What is logged to the console in the following code block?

const game = "Kings Quest";

game = "super Mario";

console.log(game);
// An error as we are trying to re-assign a const variable

// 3. What will the two console.log statements return here?

let num1 = 1;

function foo() {
  let num1 = 10;
  console.log(num1);
}

console.log(num1);
foo();

// First console.log will log 1 as it is called before the function and will check the global scope for a variable called num1
// Second console.log will call 10 as it will be checking the function scope from within foo for a variable called num1

// 4. What is the value of i inside the for-loop at each iteration and outside the for-loop once iteration has ended?

function countI() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log("this is " + i);
}

countI();

// The console.log inside will print 0, 1, 2, 3, 4, 5
// The second console.log will print undefined as i is only scoped to the if for loop statement as defined with the {}

// 5. What is the value of a and b when function scoping() is called and why?

function scoping() {
  let a = 10;

  if (a <= 10) {
    var b = 5;
    a = a + 1;
  }

  console.log(a);
  console.log(b);
}

scoping();

// a = 11 because it has function scope and can be accessed anywhere within the function (even within the if block)
// b = 5 because it is defined with var

// 6. Analyze the following block of code. What is the value of book?

{
  let book = "JavaScript is fun";

  book = "JavaScript is fun sometimes";
}

let book = "Python is fun";

console.log(book);

// The variable book will be "Python is fun" as it is the only one with the same name within the same scope as the console.log()

// 7. Analyze the following block of code on lexical scope and guess-estimate what will happen

let outer = function () {
  if (1 < 2) {
    var x = 10;
  }

  if (2 < 3) {
    var xSum = 1 + x;

    console.log(xSum);
  }

  function foo() {
    const z = 1000;

    console.log(x);
  }

  foo();
};

outer();

// xSum will equal 11 (because it is a var it can be accessed outside of the block scope)
// x will equal 10 (because it is a var it can be accessed outside of the block scope)

// 8. What is happening here with the wrapper string object?

let primitive = "september";

primitive.vowels = 3;

primitive.vowels; // undefined

// We are trying to access a property that has been disposed off so it will equal undefined
// When we set a property on a primitive value (string in this case) it gets deleted after we acces it as the temporary object gets deleted

// 9. What will the two console.log messages be?

console.log(typeof "universe");

console.log(typeof new String("universe"));

// The first console.log will return string as it is a primitive data type
// The second console.log will return object as we have called the String constructor object

// 10. What will be logged to the console after applying the toUpperCase() method on the primitive string value and why?

let game = "Super Mario";

game.toUpperCase(); // SUPER MARIO

console.log(`This is a great game! ${game}`); // This is a great game! Super Mario

// This will return This is a great game! Super Mario because toUpperCase() does not mutate the original string

// 11. Look at the following code. What method should you use to get the desired output?

let bigNum = 19393494928383494949505n;

// Some code here

// output is "19393494928383494949505n"

// We could use .toString() or String() as both will convert the bigint into a string
