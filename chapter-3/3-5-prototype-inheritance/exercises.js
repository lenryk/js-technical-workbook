// 1. Explain prototype inheritance in JavaScript

// Prototype inheritence is a JS feature where other objects can be generated from extending other objects
// This means that a templates objects properties and methods can be cloned and extended onto other objects
// Therefore a prototype is an object instance from which other objects can be created

// 2. How will you query the prototype of the book object? And what is returned?

Object.getPrototypeOf(book);

// 3. Consider the following object:
// Make a new object called cheesePizza whose property is the pizza object using the Object.create() method
// What will be the output when logging the object?
// Use the Object.getPrototypeOf() method to access the prototype of the cheesePizza object

let pizza = {
  base: "wheat",
  sauce: "tomato",
  cheese: "parmesan",
};

const cheesePizza = Object.create(pizza);

console.log(cheesePizza);

console.log(Object.getPrototypeOf(cheesePizza));

// 4. Explain the prototype chain

// The prototype chain is the chain where JavaScript looks for properties on an object

// 5. Consider an object called book with the following properies and methods
// Declare an object called scienceFictionBook and set its educational key to the boolean value false
// Set the book object to be the prototype of the scienceFictionBook
// What will be the value of scienceFictionBook.discount?

const book = {
  educational: true,
  diagrams: true,
  author: "J.K",
  discount: 0,
  sale: function () {
    if (this.educational) {
      this.discount = 0.5;
    }
  },
};

const scienceFictionBook = {
  educational: false,
};

Object.setPrototypeOf(scienceFictionBook, book);

console.log(scienceFictionBook.discount);

// The params for the setPrototypeOf are (object to set prototype, object to set it to)
// When we log the scienceFictionBook it will have all the props from the book object now

// 6. Consider the following and answer the questions

function SchoolFranchise(accredited, teachers, online) {
  this.accredited = true;
  this.teachers = false;
  this.online = true;
}

function JuniorHigh(name, type) {
  SchoolFranchise.call(this);
  this.type = "Junior High";
  this.name = name;
}

let huronPublic = new JuniorHigh("Huron");

console.log(huronPublic);
