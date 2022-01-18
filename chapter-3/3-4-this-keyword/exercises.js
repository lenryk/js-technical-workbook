// 1. Can you explain what this is in JavaScript?

// It is a context keyword that references the object it is called in e.g. function, constructor or global context

// 2. Consider the following function. What will the value of this keyboard be?

function log() {
  console.log(this);
}

log();

// The this keyword will reference the global object window

// 3. What will the this keyword refer to when in strict mode?

function log() {
  "use strict";
  console.log(this);
}

log();

// In strict mode, this will equal undefined

// 4. Declare an ojbect called HR with 3 key : values and 1 method
// company : "Zimpak Software"
// hiring : false
// employees : 100
// message : (prints name of company and no of employees and value of hiring if less than 100)

const HR = {
  company: "Zimpak Software",
  hiring: false,
  employees: 100,
  message() {
    let message = this.employees < 100 ? "hiring" : "not hiring";
    console.log(
      `${this.company} has ${this.employees} employees and is ${message}`
    );
  },
};

// The this keyword references the properties within the object
// We can change the properties by assigning them new values

// 5. Carrying on from 4 change the value of employees to 20.
// Outside of the object declaration. What does the message method return now?
// Think about what the context of this keyword will be and the call-site of this.

HR.employees = 20;

HR.message();

// We have changed the employees property to 20 which will cause the message output to change
// "Zimpak Software has 20 employees and is hiring"

// 6. Consider the following class called Company
// Declare a new boejct called moogle from the Company class
// Pass in three arguments for the name, hiring and employees props
// Call the message method on your newly created object
// What is the value of this now?

class Company {
  constructor(name, hiring, employees) {
    this.company = name;
    this.hiring = hiring;
    this.employees = employees;
  }
  message() {
    if (this.employees >= 400) {
      console.log(`${this.company} is currently not hiring`);
    } else {
      console.log(`${this.company} is currently hiring`);
    }
  }
}

const moogle = new Company("Moogle", true, 500);

moogle.message();

// The this keyword now references the Moogle object and its data properties

// 7. What does call() do?

// Call() allows us to change what this points to
// This means we can write methods that can be used on different objects

// 8. Consider the following code block
// Declare an object and use the call() method in such a way that we following message will be logged
// "Welcome to Pataya. We have 4 stars and serve Thai cusine"

function restaurant(stars, cuisine) {
  console.log(
    `Welcome to ${this.name}. We have ${stars} stars and serve ${cuisine} cuisine.`
  );
}

const pataya = {
  name: "Pataya",
};

restaurant.call(pataya, 4, "Thai cusine");

// By using the call() on the function we are telling it what params to accept for the "this" keyword
// The first param is the object we pass in for the this.name
// The second and third params are for the function itself

// 9. Consider the following object
// Invoke the apply() method on a function such that the message that is looged to the screen is
// "Bret Lee is playing in miniLeague with 400 points for the Summer"

function player(league, season) {
  console.log(
    `${this.name} is playing in ${league} with ${this.points} points for this ${season}`
  );
}

let bretLee = {
  name: "Bret Lee",
  points: 400,
};

player.apply(bretLee, ["miniLeague", "Summer"]);

// The first param we pass to apply is the object itself to get the this.name and this.points variables
// The second param is an array for the function params

// 10. Define the bind() method. What does it do?

// The bind() method creates a new function that has the this keyword provided with a given value

// 11. Complete the following:
// Write a function gymMembership that takes a variable fee as a parameter.
// This function will calculate the total remaining amount of a gym memebership fee that has been paid
// We want to deduct a certain amount per month which is unkown as yet
// Use the this keyword which will refer to the total amount remaining
// The function should console.log this.name and the remianing value after deducting the monthly fees

// Declare an object called sukhi with a property name "sukshi" and total value 1000
// Bind the gymMembership method to the sukhi object and pass an argument the number 100
// Assign this to a variable called getFee
// Call getFee() what is logge to the console?

function gymMembership(fee) {
  console.log(`${this.name} has a remaining blance of: ${this.total - fee}`);
}

let sukhi = {
  name: "sukhi",
  total: 1000,
};

const getree = gymMembership.bind(sukhi, 90);
getFee();

// Since we are using the Bind() function it will return a new function so we must save it to a var
