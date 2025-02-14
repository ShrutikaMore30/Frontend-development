// Summary of this in JavaScript:
//1. Global context: In the global execution context (non-strict mode), this refers to the global object (window in browsers).
//2. Function context: In a regular function (non-strict mode), this refers to the global object or undefined (in strict mode).
//3. Object method: In an object method, this refers to the object the method belongs to.
//4. Arrow functions: Arrow functions inherit this from the surrounding lexical context.
//5. Constructor functions: In a constructor, this refers to the newly created object.
//6. Event handlers: In event handlers, this refers to the DOM element that triggered the event.
//7. Manual setting: Methods like call(), apply(), and bind() allow you to explicitly define what this refers to.

// 1. Global Context (outside any function):
console.log(this);  // In browser: window, in Node.js: global object


//2. Inside a Regular Function (non-strict mode):
function showThis() {
    console.log(this);  // In browser: window
}
showThis();


// 3. Inside a Method (Object's method):
// When this is used inside an object method, it refers to the object itself.
const person = {
    name: "John",
    greet: function() {
        console.log(this.name);  // "John"
    }
};
person.greet();  // Output: John


// 4. Arrow Functions:
// Arrow functions do not have their own this. Instead, they inherit this from the surrounding context. This is called lexical scoping.
const person2 = {
    name: "John",
    greet: () => {
        console.log(this.name);  // `this` refers to the surrounding context, not the object
    }
};
person2.greet();  // Output: undefined (because `this` does not refer to `person`)


// 5. Event Handlers:
// When this is used inside an event handler, it typically refers to the element that triggered the event.
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this);  // Refers to the button element that was clicked
});


// 6. this in Constructors (with new):
// When using this in a constructor function (i.e., when the function is called with new), this refers to the new object being created.

function Person(name) {
    this.name = name;
}
const john = new Person("John");
console.log(john.name);  // Output: John


// 7. Explicit Binding with .call(), .apply(), .bind():
// You can change the value of this explicitly by using .call(), .apply(), or .bind().
function greet() {
    console.log(this.name);
}
const person3 = { name: "John" };
greet.call(person2);  // Output: John
// call() and apply() invoke the function immediately with a specified this.
// bind() creates a new function with a specific this value but does not invoke it immediately.



// 8. this in Class Methods:
// In ES6 classes, this refers to the instance of the class.
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

const jon = new Person("John");
john.greet();  // Output: John