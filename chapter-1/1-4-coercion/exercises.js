// 1. What does the following return?

console.log("41" == 41);

// This will coerce the number into a string so it will be "41" == "41" and therefore equal

// 2. Evaluate the expression 12 * 6 + "a"

// This will log "72a"
// The number gets calculated based on the operations order then will be converted to a string
// This will then be added on to the "a"

// 3. Evaluate the following. Why do you think the answer is different from question 2?

let a = "a" + 4 + 7;

console.log(a);

// This will be a string data type of "a47"
// Because of the order it adds them to the current string instead of doing the math and adding 11 to the string

// 4. Explicility coerce the boolean value false into a string using the String() function

String(false);

// This will return a string of "false"

// 5. What does the following return? If the return value is a strign data type explicity coerce it into a number

let x = 4 * "4" + "9";

// This will return "169" as 4 * "4" is done first then 9 is concatinated on
// Multiplication operator converts the string into a number

// 6. Are the results in A and B different? If so explain why

console.log(800 + "8");

console.log(800 + +"8");

// The first output will be "8008"
// The second output will be "8008"
// This is because the + operator converts the number into a string
// In the second one the unary operator converts the "8" into 8 and then concats it onto 800 to give "8008"

// 7. Rewrite the following expression with numerical values isntead of bolleas and an empty string

let x = Number(""); // "" will be 0 in number format

let y = Number(true); // true will be 1 in number format

let z = Number(true); // true will be 1 in number format

let result = z || y <= z ? true : false;

// This will return true as z and y are both 1

// 8. Write a function called boolBlazer which takes 2 params x = non boolean and y = boolean
// Coerce the x param by using Number() function
// Compares x and y using the equality == or unequality !== operator
// If comparison true log "Is equal"
// If comparison false log "Is not equal"
// Pass arguments "hello" and "true" to function boolBlazer()

function boolBlazer(x, y) {
  Number(x) === y ? console.log("Is equal") : console.log("Not equal");
}

boolBlazer("hello", true);
