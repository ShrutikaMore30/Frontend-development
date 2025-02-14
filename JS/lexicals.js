//Lexical Scope: Determines which variables a function can access based on where it is defined in the code.

function outer() {
    const outerVar = "I am from the outer function";

    function inner() {
        console.log(outerVar); // Accesses outerVar from the parent scope
    }

    inner(); // Call inner
}

outer(); // Logs: "I am from the outer function"
