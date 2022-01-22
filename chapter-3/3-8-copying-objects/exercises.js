// 1. What is the difference between shallow and deep copying

// Shallow copying is copying the first level of elements on an object by value
// Any data types with memory reference e.g. objects, arrays will still have references to the original object
// Deep copying is copying over the entire object by value

// 2. What are some ways to create a shallow copy?

const myObj = {
  obj: 1,
};

const newObj1 = Object.assign({}, myObj);
const newObj2 = { ...myObj };

// Object.assign
// Spread operator
// For loop copy

// 3. Create a copy of the following object using the spread operator
// Name the copied object: toronto_clone
// Once you create a copy of the city object, check whether your clone contains all the key : value pairs
// Change the value of the North property in the nested street object to "St. George"  in the copied object
// Change the value of the name property in your object to "Toronto clone"
// Log both the city and toronto_clone objects
// Can you explain why the two objects have the same value for the North property in the nested object?

let city = {
  name: "Toronto",
  coordinates: "43.6532 N, 79.3832 W",
  streets: {
    North: "Bathurst",
    South: "Queens",
    West: "Bathurst",
    East: "Spadina",
  },
  population: 3190000,
};

const toronto_clone = { ...city };

console.log(toronto_clone);

toronto_clone.streets.North = "St. George";

toronto_clone.name = "Toronto clone";

console.log(city, toronto_clone);

// Simple ... spread operator syntax to clone the object
// Anything that is on the first level will be copied by value e.g the name prop
// Anything deeper than the first level will still be a reference to the old object location
// This is why streets.North changes on both objects

// 4. Have a look at the following code and answer the question

let a = {};

let b = {};

console.log(a == b);

// This is false as it is comparing the objects memory location which are both different

// 5. For the following object, complete the following tasks:
// Using Object.assign() copy over the contents of object a to another object declared as b
// Change the value of b.one to the string "zoo"
// What is a.one?

let a = {
  one: "one",
  two: "two",
  three: "three",
};

const b = Object.assign({}, a);

b.one = "zoo";

console.log(a.one);

// a.one will still be "one" as we have made a shallow copy of the props when assigning them to an empty object

// 6. Make a deep copy called truck_copy of the following object

let peterbilt = {
  company: "Peterbilt Motors Company",
  type: "on-highway",
  class_number: 8,
  load: {
    light: "10 tonne",
    medium: "20 tonne",
    heavy: "30 tonne",
  },
};

let deep = JSON.parse(JSON.stringify(peterbilt));

// By using this we can now alter anything at a 2nd level or lower and it wont have a memory reference
