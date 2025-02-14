// Functions can be classified into:

// 1.Based on Functionality: First-order, Higher-order.
// 2.Based on Syntax: Declarations, Expressions, Arrow functions, etc.
// 3.Based on Behavior: Pure, Impure, Recursive, Callback.
// 4.Based on Usage: Constructor, Async, Generator.
// 5.Based on Input and Output: Parameterized, Default Parameter, Variadic.


// a. First-Order Functions
// These do not take functions as arguments and do not return functions.
// They operate on basic values like numbers, strings, or objects.

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // Output: 6


// b. Higher-Order Functions
// These either take other functions as arguments or return other functions.
// Common in functional programming.

// Takes a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

// Returns a function
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}


// a. Pure Function
// Produces no side effects and depends only on its inputs.
// Same input always gives the same output.

function add(a, b) {
    return a + b;
}

// b. Impure Function
// Produces side effects or depends on external variables.

let count = 0;
function increment() {
    count++;
    return count;
}


// c. Recursive Function
// A function that calls itself.
const n=12;
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


// d. Callback Function
// A function passed as an argument to another function to be executed later.

function processUserInput(callback) {
    const name = "Shruti";
    callback(name);
}
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
});



// a. Parameterized Function
// Accepts parameters.

function greet(name) {
    return `Hello, ${name}!`;
}


// b. Default Parameter Function
// Uses default values for parameters.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}


// c. Variadic Function
// Accepts a variable number of arguments using the ... rest parameter.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


