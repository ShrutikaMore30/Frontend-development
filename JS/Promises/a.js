const cart =["shoes","kurta","top","pants"];
//call back function
createOrder(cart, function (orderId){// here we passing the function to another function
    proceedToPayment(orderId, function (paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance()
        });
    });// creatOrder API would have called it whenever it wants to
});



// using then promise chaining
createOrder(cart)
  .then(function(orderId){
     return proceedToPayment(orderId);
   })
  .then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
   })
  .then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
  });
 
// arrow function
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(paymentInfo => updateWalletBalance(paymentInfo))
  .catch((error) => console.error("An error occurred:", error));





















// const GITHUB_API= 'https://api.github.com/users/Ronixa584'

// //fetch is the api given by browser to us to make external calls
// //fetch function return as a promise
// const user= fetch(GITHUB_API);