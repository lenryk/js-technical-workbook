// 1. What is strict mode and why should you use it?

// Strict mode enforces more errors instead of failing silently
// It can help you write cleaner code and stop errors

// 2. What is happening here and how can we stop it?

x = 6;

console.log(x);

// x has not been declared with var, let or const so will throw an error in strict mode
// Without strict mode this would be fine but strict mode requires a variable declaration

// 3. The following block of code is not in strict mode.
// What all from this block of code is not allowed while in strict mode?

customer = {};

function customerDetails() {
  customer.nom = "Shadow Zilla";

  customer.id = "808";

  customer.job = "Candy";

  return customer;
}

Object.defineProperty(customer, "job", {
  value: "Designer",

  writable: false,
});

console.log(`${customer.nom} is great ${customer.job}`);

// Assignment to an underclared variable
// Writing to a read only property of an object
// Deleting a property of an object
