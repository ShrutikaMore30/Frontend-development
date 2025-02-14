// setTimeout
// It’s a way to execute a function after a certain amount of time (in milliseconds)

console.log("Before setTimeout");

setTimeout(() => {
  console.log("Executed after 4 seconds");
}, 4000);

console.log("After setTimeout");


// function x(){
//     for(let i=1; i<=5; i++){ //let block scope
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
//     console.log("shruti");
// }
//  x();


//  function x(){
//     for(var i=1; i<=5; i++){ // var points same location of memory
//         function close(x){
//         setTimeout(function(){
//             console.log(x);
//         },x*1000)
//     }
//     close(i);
// }
// console.log("shruti");
//  }
//  x();
