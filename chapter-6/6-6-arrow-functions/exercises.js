// 1. Convert the following function to an arrow function

function employee(hours) {
  return hours;
}

employee(10);

const employee = (hours) => hours;

employee(10);

// With the arrow function we dont need to include the return statement or curly brackets

// 2. Convert the following function to an arrow function

function employee(hours) {
  hours *= 1.5;
  return hours;
}

const employee = (hours) => (hours *= 1.5);

employee(10);

// In this function we can just add the multiplication directly on to the variable

// 3. When should you use arrow functions?

// When using them for callback functions such as within .filter() and .map() array methods
//

// 4. Fix this function so that the setInterval() method logs numbers from 0 onwards

function timer() {
  seconds = 0;
  setInterval(() => {
    console.log(this.seconds++);
  }, 1000);
}

timer();

// This worked fine for me as it is
// Could have problems with the this keyword not accessing the seconds variable from outside the callback function

// 5. Analyze the following code, what do you think will be retruned when the method productDetails() is called?

let headset = {
  model: "Oculus Quest",
  company: "Facebook",
  productDetails: () => {
    return `${this.company}${this.model}`;
  },
};

console.log(headset.productDetails());

// This will return undefined undefined as both this keywords cannot be accessed
