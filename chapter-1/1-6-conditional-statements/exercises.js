// 1. Write the syntax of an if - else block

if (true) {
  // Code
} else {
  // Code
}

// 2. Write a conditional statement that will check if
// The undefined an null data types are strictly equal (===) to each other
// Undefined and null are loosely equal (==) to each other

if (null === undefined) console.log("Strictly not equal");
else console.log("Loosely equal");

// First if statement will be false as the types are different
// Second if statement will be true as they will be converted to booleans which are both 0

// 3. Code a function that will accept a user's age as input.
// The function must log different messages depending on the user's age
// Use if, else if and else statements

function ageCheck(age) {
  if (age > 0 && age <= 18) console.log("Please get parental permission");
  else if (age >= 19 && age <= 30)
    console.log("You will get an email within seven days");
  else if (age >= 31 && age <= 40)
    console.log("Please check your email in 3 days");
  else if (age >= 41 && age <= 50) console.log("Please login in a few hours");
  else if (age >= 51 && age <= 60) console.log("You are now enrolled");
  else console.log("Please continue to login");
}

ageCheck(72);

// 4. Refactor exercise 3 to use switch statements

function ageCheck(age) {
  switch (age) {
    case age > 0 && age <= 18:
      console.log("You will get an email within seven days");
      break;
    case age >= 19 && age <= 30:
      console.log("Please get parental permission");
      break;
    case age >= 31 && age <= 40:
      console.log("Please check your email in 3 days");
      break;
    case age >= 41 && age <= 50:
      console.log("Please login in a few hours");
      break;
    case age >= 51 && age <= 60:
      console.log("You are now enrolled");
      break;
    default:
      console.log("Please continue to login");
  }
}

// 5. What is returned from the following code statement?

console.log("0" == false ? true : false);

// This will print true as false is equal to "0" when converted to a string

// 6. Refactor the following block of code which will check if x is smaller than variables y
// and z. Change the function in the following ways
// Declare the variables in global scope
// User a ternarny operator

let x = 10;

let y = 20;

let z = 30;

console.log(x < y ? "x is smaller than y" : "");
console.log(x < z ? "x is smaller than z" : "");

// We use a ternary operator with the structure
// condition ? true : false
