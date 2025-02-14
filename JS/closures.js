//Closure: Extends the life of variables in lexical scope, allowing nested functions to "remember" them even after the parent function has finished.


// function x(){
//     var a=7;
//     var b=9;
//     console.log(b)
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z=x();
// console.log(z)
// z()
// x()
// z()

function outerFunction() {
    let outerVariable = "I am from outerFunction!";

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from outerFunction
    }

    return innerFunction; // Returns the inner function
}

const closureFunction = outerFunction(); // Call outerFunction
closureFunction(); // Executes innerFunction, which still has access to outerVariable




function z(){
    var b=900;
    function x(){
        var a=8;
        function y(){
            console.log(a,b);
        }
        y();
        console.log(a,b);
    }
    x();
    console.log(b);   // reference error for a is not defined
}
z();// aatun baherch access kru shktoy bahrun aatl access kru shkt nahi

