// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const gamer = () => {
  let strength = 100;
  const readyPlayerOne = () => {
    strenght = 120;
    let power = 88;
    console.log(power);
  }
  // console.log(power); // returns an error since power is only within the readyPlayerOne block/function scope
  readyPlayerOne(); // logs power since it is within its scope
}

// gamer();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
