// 1. What type of object is a function?

// A function is sometimes called a function object

// 2. Functions will have built in functions such as

// length, name, caller

// 3. Answer the following about functions expression employees:

let employees = function information(x) {
  let company = "Dev shop foo";
  employees.num = x;
  employees.salary = function () {
    console.log(num * 89000);
  };
  if (x > 100) {
    console.log(`${company} is a mid sized company`);
  } else if (x < 100) {
    console.log(`${company} is a small sized company`);
  } else {
    console.log(`${company} is a large sized company`);
  }
};

// Access the name property of employees. What is the value of the name property employees?
console.log(employees.name);

// Access the length property. What is the valeue of the length property of employees?

console.log(employees.length);
// 1 as there is one argument passed

// Add a method to the function expression called salary. In the company "Dev shop foo"
// everyone is paid $89,000 per year regardless of their position in the company.
// Calculate the total cost when there are 79 employees

employees(79);
employees.salary();

// 4. Why are functions called objects?

// Because in JavaScript functions are objects as per the typeof()
// We can assign props to them and pass as arguments in other functions
