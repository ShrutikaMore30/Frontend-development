// Q createOrder
//   proceedToPayment
//   showOrderSummary
//   updateWallet


// for handling error gracefully
// creating a promise
//consumer part
const cart= ["shoes", "pants", "kurta"];

createOrder(cart)// orderId
 .then(function(orderId){
    console.log(orderId);
    return orderId;
})
// .catch(function (err){
//     console.log(err.message);
// })

 .then(function(orderId){
    return proceedToPayment(orderId);
 })
 .then(function(paymentInfo){
    console.log(paymentInfo);// no matter what happens it will be called
 })

.catch(function (err){
    console.log(err.message);
});


//producer part
function createOrder(cart){

    const pr=new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
         const err= new Error("Cart is not valid"); 
         reject(err);
        }

        //logic for create order
        const orderId="12345";
        if(orderId){
            setTimeout(function(){
            resolve(orderId);
            },5000);
          
        }

    });

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful")
    })
}

function validateCart(cart){
   return false;  
}


