// 1. What is a class?

// A class is a function that allows us to create instances of classes
// They are declared with the class keyword
// They are simialr to using functions to create objects but they have their own features

// 2. Declare a class called company

class Company {}

// Class naming convention is the first letter being capitalized

// 3. Have a good look at the following block of code. What will be logged to the console?

let maplesyrup = new IcecreamFlavor("Maple Syrup", false);

class IcecreamFlavor {
  constructor(name, toppings) {
    this.name = name;
    this.toppings = toppings;
  }
}

console.log(maplesyrup);

// This will not log anything as classes are not hoisted
// Therefore they need to be declared before they are called

// 4. Consider the following company class
// Can you add another constructor to this class? (No you cant or you will get a syntax error)
// Instaniate a new object using the Company class called zimbaPay with "Zimba Pay", 1000000, 50

class Company {
  constructor(name, funding, employees) {
    this.name = name;
    this.funding = funding;
    this.employees = employees;
  }
}

let zimbaPay = new Company("Zimba Pay", 1000000, 50);

console.log(Object.getPrototypeOf(zimbaPay));

// 5. Add an instance method equity() tot he following Company class which will return 10%
// of the total funding that a company receives
// Instantiate a new object from the Company class called purpleMoon. And pass in the following
// parameters to it: "Purple Moon", 5000000, 50
// Declare a global variable called equity whose value si the equity() method called on the purpleMoon

class Company {
  constructor(name, funding, employees) {
    this.name = name;
    this.funding = funding;
    this.employees = employees;
  }

  equity() {
    return 0.1 * this.funding;
  }
}

let purpleMoonEnterprise = new Company("Purple Moon", 5000000, 50);

let equity = purpleMoonEnterprise.equity();

console.log(equity);

// 6. Define a classic method

class Company {
  constructor(name) {
    this.name = name;
  }
  static sayName() {
    console.log(`${this.name}`);
  }
}

// A static method is a class that can only be called by the class itself and not an instance
// You must use the keyword static

// 7. Take the following class as an example:
// What can you do to make the static method become available to the artist object?

class MusicLabel {
  constructor(name, genre) {
    this.name = "Avocado Label";
    this.genre = genre;
  }

  static labelMotto() {
    console.log(`Gimmie some ${this.name}`);
  }
}

// To make this work you would have to remove the Static keyword to make it a normal method

// 8. Describe a public instance field

// A property that can be accessed from any instance and outside of it
// e.g. class.property = 5

// 9. Create a class called Player. The class has four public instance fields name, score, punches, throws.
// Initialize these fields to starting values of:

class Player {
  name = "";
  punches = 10;
  throw = 3;
  score;

  constructor(name) {
    this.name = name;
    this.score = this.punches * this.throws;
  }

  startMessage() {
    console.log(`Are you ready to kung-foo ${this.name}?`);
  }
}

let fooFighter = new Player("Player");

console.log(fooFighter);

fooFighter.startMessage();

// The variables at the top are public variables we can change within the constructor

// 10. Consider the following code block and answer the questions:

class InternalDetails {
  #gross_profit;
  #net_profit;
  #tax;
  #expenses;

  constructor(gross_profit, expenses, tax, net_profit) {
    this.#gross_profit = gross_profit;
    this.#expenses = expenses;
    this.#tax = tax;
  }
  getNet() {
    this.#net_profit = this.#gross_profit - (this.#expenses + this.#tax);
    return this.#net_profit;
  }
}

let mooCompany = new InternalDetails(30, 1, 1, 0);

mooCompany.getNet();

// What will mooCompany.getNet() return
// 28
// What happens when you try and access mooCompany.#gross_profit
// Private field error as it can only be accessed from within the class
// Can you set the value of the private #net_profit field of the mooCompany class instance?
// No the value cannot be set outside of the class

// 11. How is a static public field declared?

// With the static keyword infront of the variable name

// 12. What purple do static fields have?

// They remain static across all instances of a class

// 13. Declare a class called WeddingPlanner. The class has 2 static public fields.
// 3 private instance fields. 2 public instance fields.

class WeddingPlanner {
  static llc = "Wedding Gee LLC";
  static tax_number = "31900";
  #company = "Wedding Gee";
  #office = "101 Plum Street, Chicago";
  #planner = "Keanna Rose";
  client_name;
  client_budget;

  constructor(name, budget) {
    this.client_budget = budget;
    this.client_name = name;
  }

  welcomeMessage() {
    console.log(
      `Hi, ${this.client_name}! Welcome to ${
        this.#company
      }, I am your planner ${
        this.#planner
      }. Please confirm that your budget is ${this.client_budget}`
    );
  }
}

let missSpandia = new WeddingPlanner("J. Spandia", 50000);

missSpandia.welcomeMessage();

console.log(Object.getPrototypeOf(missSpandia));

// By using the static KW, these variables are now the same across all instances of the WeddingPlanner class

// 14. What function do private static fields serve?

// Private static fields (variables) are only accessible from within the class
// No changes can be made to them inside or outside the class

// 15. Using the DonutGiveaway class instantiate 2 instaces (donut1 and donut2). Log the object instances to the console.
// Also query the keys of the donut1 object

class DonutGiveaway {
  static #max_instances = 5;
  static #instances = 0;
  flavor;
  constructor(flavor) {
    DonutGiveaway.#instances++;
    if (DonutGiveaway.#instances > DonutGiveaway.#max_instances) {
      throw new Error("Unable to create a new donut instance");
    } else {
      this.flavor = flavor;
    }
  }
}

let donut1 = new DonutGiveaway("Java JavaScript");

let donut2 = new DonutGiveaway("Snappy Semicolon");

console.log(donut1);

console.log(donut2);

console.log(Object.keys(donut1));

// The donut1 object will print "flavor"

// 16. Have a look at the following class and answer the questions

class Dog {
  constructor(legs, tail) {
    this.legs = 4;
    this.tail = 1;
  }
}

class Breed extends Dog {
  breed = "Boston Terrier";
}

let rocko = new Breed();

console.log(rocko);

// The extend keyword adds all the properties to the Breed class and allows it to have its own methods and properties

// 17. Consider the following parent class Dog and answer the questions:
// Create a child class called Breed which extends the Dog class
// Use the appropiate fields such that when an instance is logged to the console the following is returned
// Object with breed: "Boston Terrier", legs: 4, tail: 1

class Dog {
  constructor(legs, tail) {
    this.legs = 4;
    this.tail = 1;
  }
}

class Breed extends Dog {
  constructor(breed) {
    super();
    this.breed = breed;
  }
}

let doggie = new Breed("Boston terrier");

console.log(doggie);

// In this example we have to call the super() function in the child constructor before we can use the this keyword

// 18. Create a class called MusicLabel with one param in its constructor method
// Set the value of the label_name field to "Avocado Label"
// The MusicLabel class has a static method called LabelMotto() which will console.log "Hello and welcome!"
// Create a sub-class called Jazz which extends the MusicLabel class
// It's constructor method takes artist, label_name, and genre as parameters
// Access the genre field which is present in the parent MusicLabel class
// Using this set the values of the arist field to the value passed into the instance
// Set this.genre to the string "Jazz"
// Create an instance of the Jazz class which is called richieZoo using the new keyword and "Richie Zoo"
// Console.log richieZoo instance

class MusicLabel {
  constructor(label_name) {
    this.label_name = "Avocado Label";
  }

  static LabelMotto() {
    console.log("Hello and welcome!");
  }
}

class Jazz extends MusicLabel {
  constructor(artist, label_name, genre) {
    super(label_name);
    this.artist = artist;
    this.genre = "Jazz";
  }
}

let richieZoo = new Jazz("Richie Zoo");

console.log(richieZoo);

// We need to call super() in the constructor of the child class before we can use the this keyword

// 19. What does the instanceOf operator do?

// The instanceOf operator checks if an object is an instance of a specific class

// 20. What does the constructor property of an object indicate?

// It determines the exact class of an object instance
