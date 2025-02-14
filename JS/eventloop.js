console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 3000);

console.log("End");


// Call Stack: Holds the code that is currently being executed.
// Event Queue: Holds asynchronous tasks (like setTimeout, event listeners).
// Event Loop: Moves tasks from the event queue to the call stack once it’s empty.
