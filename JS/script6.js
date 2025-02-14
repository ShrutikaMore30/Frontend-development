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

// Define operation functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

// Use operate function with add and multiply operations
console.log(operate(5, 3, add));       // Output: 8
console.log(operate(5, 3, multiply));  // Output: 15

// Create and use multiplier functions
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(4)); // Output: 12
