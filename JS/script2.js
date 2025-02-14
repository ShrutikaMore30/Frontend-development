//functions types => 
// 1.Function Declaration
// 2.Function Expression
// 3.Arrow Function
// 4.Anonymous Function
// 5.Immediately Invoked Function Expression (IIFE)
// 6.Constructor Function -> Used to create objects.
// 7.Generator Function  -> Introduced in ES6, uses function* and yield to pause and resume execution.
// 8.Async Function
// 9.Rest Parameters Function
// 10.Callback Function
// 11.Method


// 1. Function Declaration
// A function with a name that can be called anywhere in the code.

function greet() {
    console.log("Hello, Shrutika!");
}
greet(); 

// 2. Function Expression
// A function assigned to a variable. It’s anonymous (no name) and called via the variable.

const greet1 = function() {
    console.log("Hi there!");
};
greet1(); 

// 3. Arrow Function (Introduced in ES6)
// A shorter way to write functions using =>.

const greet3 = () => {
    console.log("Hey, Shrutika!");
};
greet3(); 

const sayHello = () => console.log("Hello!");


// 4. Anonymous Function
// A function without a name, often used as a callback.

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);


// 5. Immediately Invoked Function Expression (IIFE)
// Functions executed immediately after definition.

(function() {
    console.log("I run immediately!");
})();


// 8. Async Function
// Introduced in ES8 (ES2017), allows asynchronous code using async and await.

async function fetchData() {
    const data = await fetch("https://api.example.com");
    console.log(data);
}

// 9. Rest Parameters Function
// Accepts multiple arguments as an array using ....

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// 10. Callback Function
// A function passed as an argument to another function.

function greet4(callback) {
    console.log("Hello!");
    callback();
}
greet4(() => console.log("This is a callback!"));



// 11.Method (A Special Type of Function)
// A function defined inside an object.

const obj = {
    greet5: function() {
        console.log("Hello from a method!");
    }
};
obj.greet5();



// Types: Function declarations, expressions, arrow functions, generator functions, etc. syntax

// Classifications: First-order and higher-order functions based on functionality.