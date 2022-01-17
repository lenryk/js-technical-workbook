// 1. Iterate through the following object using the for-in statement and console.log the value of each key:

let coffee = {
  roast: "medium",
  blend: "Ethopian",
  servings: 100,
  morningMsg: function () {
    console.log(`Ooh! The smell of an ${this.blend} blend in the mornings`);
  },
};

for (value in coffee) {
  console.log(coffee[value]);
}

// The for..in loop will take the names of the keys and log them to the console
// Remember to declare the variable in the for.. in loop just like a normal for loop

// 2. What method will return an array of the properties inside the coffee object?

// Object.keys()

// 3. What 3 methods can you use to convert an object to an array then iterate trhough the converted array?

// Object.keys()
// Object.entries()
// Object.values()

// 4. What does the Object.vales() method do? Apply it on the coffee object. What is returned?

console.log(Object.values(coffee));

// This will return all of the values stored on the coffee object such as:
// "medium", "Ethopian", 100, func

// 5. Consider the coffee object modified as below. What does the Object.entries() method do?
// Apply it on the coffee object. What will be the output?

console.log(Object.entries(coffee));

// The output will be an array of nested arrays containing the key : values
// [['roast', 'medium'],['blend', 'Ethopian'],['servings', 100],['morningMsg', ƒ]]

// 6. Check if object ob is empty#

const ob = {};
if (Object.keys(ob).length === 0) "Object is empty";

// In this exercise we conver the keys to an array which of course will be empty because it doesnt have any
// The conditional then prints the string saying it is empty
