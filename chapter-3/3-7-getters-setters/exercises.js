// 1. What are acessor properties?

// Getters are setters which allow us to do extra logic before getting a setting a property
// e.g. validation and checks

// 2. What are the 2 types of accessor properties?

// Getters for getting data from an object
// Setters for when setting new values on an object

// 3. Consider the code below:
// Write a getter called getDonutFlavor using the default method syntax
// Inside the method define a variable called flavorList which references the array in flavors property
// For each element in the flavors array, log to the console the flavor on a new line
// Call donut.getDonutFlavor() what is returned?

let donut = {
  units: 100,
  flavors: ["strawberry", "oreo", "java"],
  price: 5.99,
  getDonutFlavor() {
    let flavorsList = this.flavors;
    for (flavor of flavorsList) {
      console.log(flavor);
    }
  },
};

donut.getDonutFlavor();

// In this case the getDonutFlavor is the default getter method that just prints out all the elements in the array

// 4. Using the default method syntax write a setter called setDonutFlavor for the same donut object in exercise 3
// the setDonutFlavor function will receive a string param and push it into the array of the donut.flavors
// Call the setDonutFlavor() method and pass in the string "chocolate"
// The value of donut.flavors property should be ["strawberry", "oreo", "java", "chocolate"]

let donut = {
  units: 100,
  flavors: ["strawberry", "oreo", "java"],
  price: 5.99,
  setDonutFlavor(string) {
    this.flavors.push(string);
  },
};

donut.setDonutFlavor("chocolate");

console.log(donut.flavors);

// setDonutFlavor will add the string to the end of the array when called

// 5. Replace the setDonutFlavor method from exercise 4 with the set keyword
// Console.log the donut.flavors

let donut = {
  units: 100,
  flavors: ["strawberry", "oreo", "java"],
  price: 5.99,
  set donutFlavor(string) {
    donut.flavors.push(string);
  },
};

donut.donutFlavor = "chocolate";

console.log(donut.flavors);

// This time we use the set keyword to define the setter function on the object

// 6. Replace the getDonutFlavor method from excercise 3 with the get syntax method

let donut = {
  units: 100,
  flavors: ["strawberry", "oreo", "java"],
  price: 5.99,
  get flavor() {
    let flavorsList = this.flavors;
    for (flavor of flavorsList) {
      console.log(flavor);
    }
  },
};

donut.flavor;

// This time we use the get keyword before the getter function

// 7. Consider the following empty gamingPC object

let gamingPC = {};

// The graphics card property is defined using the Object.defineProperty() method
// Using the defineProperty method define a setter for the gamingPC object called newCard
// This setter will assign a new value that is assigned to the graphicsCard property
// Assign "GeForce RTX 2070 Super" to the newCard setter
// Log out the graphicsCard property

Object.defineProperty(gamingPC, "graphicsCard", {
  configurable: false,
  enumerable: false,
  writable: true,
  value: "RTX2060",
});

Object.defineProperty(gamingPC, "newCard", {
  set: function (newCard) {
    this.graphicsCard = newCard;
  },
});

gamingPC.newCard = "GeForce RTX 2070 Super";

console.log(gamingPC.graphicsCard);

// 8. Write a getter function which will retrieve the value of the graphicsCard property
// Call the getter getCard

Object.defineProperty(gamingPC, "getCard", {
  get: function () {
    console.log(this.graphicsCard);
  },
});
