// 1. Consider the following array

let words = ["ae", "baed", "led", "ce", "kaede"];

// Filter the words that have the characters "ae"
// Map the filtered words to a length > 3

console.log(
  words.filter((ele) => ele.includes("ae")).map((ele) => ele.length > 3)
);

// 2. Let's make our own planner for switching over into freelancing.
// The goal is to find out how much money freelancing makes per week

let tasks = [
  {
    day: "Monday",
    minutes: 480,
    tasks: "client work, coding",
  },
  {
    day: "Tuesday",
    minutes: 80,
    tasks: "reading, coding",
  },
  {
    day: "Wednesday",
    minutes: 300,
    tasks: "writing, working out",
  },
  {
    day: "Thursday",
    minutes: 280,
    tasks: "client work, coding",
  },
  {
    day: "Friday",
    minutes: 380,
    tasks: "client work",
  },
  {
    day: "Saturday",
    minutes: 180,
    tasks: "coding",
  },
  {
    day: "Sunday",
    minutes: 40,
    tasks: "reading, working out",
  },
];

// Filter out all the days that have a client work task
// Calculate the number of hours worked on these days
// Filter out the days in which you've worked more than 5 hours
// For days that you worked more than 5 hours calc the total $ earned @ $35 an hour
// Return th eaccumulated $ sum of the hours worked in total

console.log(
  tasks
    .filter((ele) => ele.tasks.includes("client work") && ele.minutes > 300)
    .reduce((acc, curr) => acc + (curr.minutes / 60) * 35, 0)
    .toFixed(2)
);

// We start by filtering tasks on the object that have "client work" in the desc
// We can also use the same filter to check the minutes are over 300 which is 5 hours
// We then divide the minutes to get our hours and times it by 35 to get our pay
// They are amm summed in the reduce function and return a total number
