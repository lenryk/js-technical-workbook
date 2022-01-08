// 1. Use the rules of operator precedence and associativity to solve the following

let sum = (5 + 8 + 2) * 2;

console.log(sum);

// Will equal 30 as we do the calculation in brackets first followed by the multiplication

// 2. Knowing what you know about increment operators, what will be logged to the console?

let cookies = 10;

console.log(cookies++);

console.log(cookies);

// First console.log will print 10
// Second console.log will print 11
// Post incrementor adds to the variable after logging it

// 3. Using your knowledge of pre-decrement operators, what is the value of cookies in each of the console.logs?

let cookies = 100;

console.log(--cookies);

console.log(cookies);

// First console.log will be 99
// Second console.log will be 99
// Pre reducer subtracts from the variable before logging it

// 4. Try and workout what value of i will be logged to the console

for (let i = 0; i <= 10; i++) {
  console.log(++i);
}

// This will print 1, 3, 5, 7, 9, 11
// The <= means it will print on 10 and then post increment will add on an extra 1

// 5. What will variables num1, num2 and num3 be?

let num1 = 100;

let num2 = 30;

let num3 = 80;

num1 = num2 = num3;

console.log(num3, num2, num1);

// This will output 80, 80, 80
// Assignments work from right to left

// 6. Solve for x

let x = 10;

let y = 20;

x += y *= 3;

console.log(x);

// X will be 70
// Assignments work from right to left

// 7. What are the two main differences between == and ===

// == will only compare if values after same after coercion
// === will check both the type and the value of the two datatypes

// 8. Is variable x strictly not equal to y?

let x;

let y = 10;

console.log(x !== y);

// True because they are not the same data value (0 and 10)

// 9. Compare x and y and explain why the two console.log messages are different?

let x = 0;

let y = false;

console.log(x === y);

console.log(x == y);

// For the first console.log it is false as they are different types of boolean and number
// For the second console.log it is true as both 0 and false are fasly and it is only checking the value of both not the type

// 10. What is returned from the comparisons below?

let x = true;

let y = false;

console.log(x === y);

console.log(x == y);

// First console.log will return false as the value is different
// Second console.log will return false as the value is also different

// 11. What will be returned, true or false?

Symbol() === Symbol();

// False as they are both objects and stored in different areas of memory so they can't be the same

// 12. What will the value of the variable result be?

let a = true;

let b = 0;

let result = a && b;

console.log(result);

// The result will be 0
// true is truthy but 0 is falsy so since one is false overall it will be false which is 0
// JS returns 1 for true and 0 for false

// 13. What will be logged to the console?

let a = {
  fruit: "lemon",
};

let b = {
  juice: "mango",
};

console.log(a && b);

// The result will be object a
// Since the first object is truthy it will stop there and just return the first object

// 14. Complete function createUser() that will check if the username for variable userName is equal to or greater
// than 6 characters and not an empty string. If so return true else return false

let username = "Kauress";

function createUser() {
  return username.length >= 6 && username != "";
}

createUser();

// 15. What is the inverse of !("")

// Since "" is an empty string it is falsy
// The NOT operator (!) will reverse it making it true

// 16. Is msg1 or msg2 logged and why?

const x = "null";

const y = "Bob";

function logThis() {
  if (y === "Bob" && !x) {
    console.log("msg1");
  } else {
    console.log("msg2");
  }
}

logThis();

// It will print msg2
// y === "Bob" is true
// x is true because its a string but the operator makes it false

// 17. What will be the value of c?

var a = 2;

var b = 0;

var c = a || b;

console.log(c);

// c will equal 2 (contents of var a)
// Because a is a digit it will be true
// Since OR (||) operator only requires one to be true it will return true

// 18. What is logged and why?

let user1 = {
  id: 1,
};

let user2 = {
  id: 2,
};

let user3 = {
  id: 3,
};

let x = 10;

if ((x === 10 && typeof x === "number") || !user1) {
  console.log(user2 || user3);
} else {
  console.log("nope");
}

// It will print 2 (contents of user2 variable)
// x === 10 is true
// typeof(x) === "number"
// Since it is an OR (||) statement only one side has to be correct to be true
// user2 || user3 = true as they are both positive numbers

// 19. By looking at the following code, what do you think is returned?

console.log(undefined || null || 0);

// 0 (the last object)
// They are all falsy values

// 20. Assign a string to let desserts such that the output as below
// "ice-cream
//   cupcake
//   brownies"

let mystring = `"ice-cream
                  cupcakes
                  brownies`;

// Template literals allow multi-line strings

// 21. Fill in the function so that the string is "Your mortgage is 2000" is logged

let payment = function () {
  function calculate() {
    console.log("Your mortgage is 2000");
  }
  calculate;
};

payment();

// Standard string output

// 22. What will x1 === x2 result in?

const x1 = 2 * "abc";

const x2 = 2 * "abc";

x1 === x2;

// This will result in false as both are NaN and NaN is not equal to anything
// This is because NaN could represent different strings .e.g 45erewrwe vs 4262wererewrwe both are NaN

// 23. What is logged to the console by both statements and why?

console.log(null === undefined);

console.log(null == undefined);

// First is false as null is a different type from undefined
// Second is true because null and undefined coerced to booleans are both false and false == false

// 24. What is logged to the console by both statements and why?

console.log(null > 0);

console.log(null >= 0);

// False as null is converted to 0 and is less than 0
// True as null is converted to 0 and 0 is equal to 0

// 25. Why is the result below false?

console.log(undefined > 0);

// Undefined is not a number so false
// Undefined represents a lack of value so nothing to compare

// 26. Will statments inside the if block execute? If so, why?

let x;

if (x) {
  // code
}

// No because x is undefined and therefore is falsy

// 27. What does the typeOf operator return after the evaluation of the expression 1/10?

console.log(typeof (1 / 10));

// 1/10 is 1 so it will be a "number"

// 28. Does the following expression evaluate to true or false?

Number.isNaN(0);

// False as 0 is not NaN

// 29. True or False?

new Number(0);

// False as it is making a new number with the number constructor which will result in the number 0
// 0 is falsy

// 30. Name 6 values that evaluate to false/falsy

false;
undefined;
null;
NaN;
0;
("");

// 6 to remember

// 31. True or false? Explain why?

1 == "1"; // true

1 === "1"; // false

// First one is coerced to a number and compared which are the same
// Second one checks the types which are a string and number so are different

// 32. What will console.log display in each case?

console.log(false + 1); // 1

console.log(false == 0); // true

console.log(false === 0); // false

// 33. Change the function by adding one symbol only so that "hello world" is logged

let a = 1;

let b = () => {
  if (a) {
    console.log("hello world");
  }
};

b();

// Removed the bang operator (!) from line 352 which was inversing the boolean
// We could also add another bang operator !! to reverse the boolean value

// 34. Filter this array of values for only truthy values

const myArray = ["10", 80, true, 0, [], undefined, null, "", NaN];

myArray.filter((ele) => ele);

// This will return only true values
// This will be "10", 80, true, []

// 35. Is NaN === NaN true of false?

// False because NaN can never equal itself

// 36. What values of x and y will be logged to the console?

let x = 0;

let y = 1;

if (!x == y) {
  console.log(x);
} else {
  console.log(y);
}

// Prints 0
// This is because x is falsy but inversed to true with the bang operator
// It is then true == y which is 1 and also truthy
// Final comparison is true == true
