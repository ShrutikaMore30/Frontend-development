// First-Class Functions refer to the ability to treat functions as values in JavaScript. Functions can be assigned to variables, passed around, and returned just like any other value.

// First-Order Functions are functions that don’t deal with other functions (no passing or returning of functions). They simply take basic values as arguments and return results.


// What are First-Class Functions in JavaScript?

// In JavaScript, first-class functions mean that functions are treated as first-class citizens. 
// The ability to use function as values,
//  passed inside another fuction, 
//  return out from the fuction ,
//  use them to assign as variables.


// 1.Functions can be stored in variables or constants:

const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Shrutii"));


// 2.Functions can be passed as arguments to other functions:

function executeFunction(func) {
    return func();
}
const sayHi = () => "Hi!";
console.log(executeFunction(sayHi)); 


// Functions can be returned from other functions:

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); 



// Functions can be stored in data structures like arrays or objects:
const operations = [
    (x) => x + 1,
    (x) => x * 2, 
];

// Calling each function in the array with a sample value (e.g., 3)
console.log(operations )//Output: 4 (3 + 1))
console.log(operations ); ///ut: 6 (3 * 2)

