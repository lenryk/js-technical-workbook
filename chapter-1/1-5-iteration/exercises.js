// 1. Iterate through the numbers 1 to 10 and print i

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Iterate through the numbers 1 to 5 and multiply i by 3

for (let i = 1; i <= 5; i++) {
  console.log(i * 3);
}

// 3. Can you explain what is happening in the code below?

for (var i = 10; i >= 0; i--);
{
  console.log(i);
}

// This will not work as intended as the semi-colon stops the for loop from accessing the code to execute
// This is invalid syntax

// 4. Analyze the following code and explain why the for loop does not execute after the first iteration

for (const i = 0; i <= 10; i++) {
  console.log(i);
}

// The variable is a const so it cannot be re-assigned

// 5. A company has a list of employees and their salary in separate arrays. You are tasked with the job
// of printing out the nameof each employee and the employees salary as a string format
// "Employee name: Employee salary"

let employees = ["Lara", "Sukhi", "Evee", "Simi", "Beno", "Jay"];

let employeeSalary = [1000, 1300, 957.89, 3230.14, 750, 13900];

for (let i = 0; i < employees.length; i++) {
  console.log(`${employees[i]}: ${employeeSalary[i]}`);
}

// 6. Using a nested for loop print the following pattern
// *
// **
// ***
// ****
// *****
// ******

for (let i = 1; i <= 6; i++) {
  for (let n = 1; n <= i; n++) {
    document.write("*");
  }
  document.write("<br>");
}

// Alternative solution

for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

// 7. Solve for num in the following block of code

let num = 0;

for (let i = 0; i <= 2; i++) {
  for (let k = 0; k <= 2; k++) {
    num++;
  }
}

console.log(num);

// Num will print 9 as each for loop will run 3 times
// 3 * 3 = 9

// 8. Is the following statement true or false?

// "A while loop will execute for as long as a conditional statement becomes false"
// True - a while loop will continue until the statement becomes false

// 9. Write the conditional clause in this while loop that will cause the browser window to crash

let x = true;

while (x) {
  console.log("Infinite loop");
}

// 10. Write a function called magicBall() that will display 3 random numbers to a user.
// Use a while loop to complete the code

function magicNumber() {
  let counter = 1;

  while (counter <= 3) {
    counter++;
    console.log(Math.floor(Math.random() * 10));
  }
}

magicNumber();

// 11. Code a do-while loop which will print the number 0 five times
let x = 5;

do {
  console.log(0);
  x--;
} while (x >= 0);

// Code in the do block is always executed
// The while statement is evaluated after

// 12. Write a do-while loop that will execute once and log a string "Love and Peace"

do {
  console.log("Love and Peace");
} while (false);

// The do section will execute once
// The false will cause the while loop not to execute because it is not true

// 13. Modify the function in question 2, to infintely execute a do-while loop.
// You may change the value of x

do {
  console.log("Love and Peace");
} while (true);

// Similar to a while loop since the boolean is true it will loop forever

// 14. Write a function that takes x as a param
// x refers to the number of tickets sold at a local cinema
// within the body of the function use a do-while loop to inform the attendant how many seats
// are available given a fixed number of seats

function ticketSold(x) {
  let availableSeats = 30;

  let tickets = x;

  do {
    availableSeats--;
    tickets--;
    console.log(`Available seats: ${availableSeats} tickets left: ${tickets}`);
  } while (availableSeats >= 1 && tickets >= 1);
}

ticketSold(40);

// 15. What is the key difference between the break and continute statements?

// Break will stop the entire loop
// Continue will just skip the single iteration

// 16. Print out all odd numbers from 0 - 10 using the break statement

for (let i = 1; true; i += 2) {
  if (i === 9) {
    break;
  }
  console.log(i);
}

// The break keyword will exit the entire loop

// 17. Iterate over each letter of the 3 letter words in the following array.
// Logging all the letters in a word on a new line except for vowels.
// Use a continue statement

const words = ["umbrella", "apple", "paint", "never", "outmost"];
const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < words.length; i++) {
  let current = words[i];
  for (let j = 0; j < current.length; j++) {
    if (vowels.includes(current[j])) continue;
    console.log(current[j]);
  }
}

// The contiue will skip the current iteration where it is called and move to the next
// This stops it from logging the vowels
