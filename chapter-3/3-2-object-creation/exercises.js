// 1. Use the object literal notation to declare a variable called author

const author = {
  name: "John Smith",
  genre: "Fantasy",
  year: "2021",
  introduction() {
    console.log(`${this.name} ${this.year}`);
  },
};

// This keyword gives us access to the object instance and therefore its variables
// Also not the shorthand method syntax that doesn't require the function keyword

// 2. Use an object literal enhancement to initailize an object using these variables

let role = "frontend";

let employed = true;

let vacation = "89";

let message = function () {
  console.log(`${role} position has ${vacation} days of vacation`);
};

const myObj = {
  role,
  employed,
  vacation,
  message,
};

// The point here is we just name the variable and we dont have to do key: value as the value is already in the variable

// 3. Create an object literal using an ES6 object literal enhancement that allows you to add dynamic keys
// to an object such that the final object is:
// Object {
// Tier-1: "90%";
// Tier-2: "80%";
// Tier-3: "70%";
// }

let tier = "Tier";

let i = 1;

const object = {
  [tier + "-" + i++]: "90%",
  [tier + "-" + i++]: "80%",
  [tier + "-" + i++]: "70%",
};

// 4. Use the new keyword to instantiate a new randomNumber object using the built-in Object constructor
// Add a luckydraw property wholse value is the boolean true
// Add a method called value which will generate a random number between 0 - 10
// Check if random number are generated by calling value method on randomNumber object

const randomNumber = new Object();

randomNumber.luckydraw = true;

randomNumber.value = function () {
  return Math.floor(Math.random() * 11);
};

randomNumber.value();

// 5. Code the following constructor function
// Declare a constructor function called Dessert which takes 4 params
// name, calories, flavor and helpings
// Define the value of there params within the object using the this keyword
// Add a method called totalCal within the constructor function which will log the number of cals by helpings
// Create a cake object using the constructor function which has the following properties
// name: Bamboozle
// calories: 1000
// flavour: "chocolate"
// helpings: 3.5
// Call the totalCal() method to see what is logged

const Dessert = function (name, calories, flavor, helpings) {
  (this.name = name),
    (this.calories = calories),
    (this.flavor = flavor),
    (this.helpings = helpings),
    (this.totalCal = function () {
      console.log(`${this.calories * this.helpings}`);
    });
};

const cake = new Dessert("Bamboozle", 1000, "chocolate", 3.5);

cake.totalCal(); // 3500

// This will output 3500
// Note how we have to set everything to this as per the object instance
// Also note how we cant use the shorthand function syntax as we did in exercise 1

// 6. Consider the following object

let department = {
  name: "Entertainment",
  fulltime: true,
};

// Create a child object called musicDepartment using the Object.create() method
// Add the following key : value pairs to it
// employees: 200
// remote: true
// Delete the name property from the musicDepartment child object
// What key : value pairs exist inside musicDepartment now?

const musicDepartment = Object.create(department, {});

musicDepartment.employees = 200;

musicDepartment.remote = true;

delete musicDepartment.name;

console.log(musicDepartment);

// All the keys remain as the name is inherited and cant be deleted without removing it from the parent (department)

// 7. What must you do to completely delete the name propert from the musicDepartment child object?

// You would have to delete the original property from the department object constructor

// 8. SuperStore would like to have a central source of truth for all child companies.
// Create a superstore object and copy over all the key value pairs from the food, hardware and clothing objects

let food = {
  food_name: "Gill SuperStore",
  food_locations: ["Albuquerque", "Orlando", "Toronto"],
};
let hardware = {
  hardware_name: "Supermax Hardware",
  hardware_locations: ["Cairo"],
};
let clothing = {
  clothing_name: "Cloth mania",
  clothing_locations: ["Vietnam", "Jakarta"],
};

const superstore = Object.assign({}, food, hardware, clothing);

// The important thing here is we are assigning the 3 objects to an empty array so it will copy everything over
// We also need to make sure all the key names are unique

// 9. A class is a special type of function declared using the Class keyword: True or False?

// True - you need to use the class keyword to create one

// 10. What is the purpose of using a class?

// To create a blueprint for new object instances

// 11. Create the following Player class
// Takes 3 params energy, power and level
// Add a powerControl() method to the Player class
// Create an object called ryu from the Player class with the following values
// energy: 200
// power: 500
// level: 1
// What is displayed when you console.log ryu?
// Use the Object.create() method to create a new object called chunLi from the ryu object

class Player {
  constructor(energy, power, level) {
    (this.energy = energy), (this.power = power), (this.level = level);
  }

  powerControl() {
    console.log(`Remaining power left is ${this.power - this.energy}`);
  }
}

const ryu = new Player(200, 500, 1);

ryu.powerControl();

console.log(ryu);

// This is similar to an object blueprint as we still have to use this keyword to assign properties

// 12. Use the Object.create() method to create a new object called chunLi from the ryu object

const chunLi = Object.create(ryu, {});

// This is also similar to what we did in the previous exercises just using the ryu object