// using then promise chaining
const cart = ["shoes", "kurta", "top", "pants"];

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        console.log("Creating order...");
        setTimeout(() => {
            if (cart.length === 0) {
                reject("Cart is empty! Order cannot be placed.");
            } else {
                const orderId = "ORD12345";
                console.log("Order created with ID:", orderId);
                resolve(orderId);
            }
        }, 2000);
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        console.log("Processing payment for order:", orderId);
        setTimeout(() => {
            const paymentInfo = { status: "Success", amount: 500 };
            console.log("Payment successful:", paymentInfo);
            resolve(paymentInfo);
        }, 2000);
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise((resolve) => {
        console.log("Order Summary:", paymentInfo);
        setTimeout(() => {
            console.log("Order summary displayed.");
            resolve();
        }, 1000);
    });
}

function updateWalletBalance() {
    return new Promise((resolve) => {
        console.log("Wallet balance updated!");
        resolve();
    });
}

// Calling the functions using promise chaining
createOrder(cart)
  .then(function(orderId) {
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function() {
    return updateWalletBalance();
  })
  .catch(function(error) {
    console.error("An error occurred:", error);
  });

  // arrow function
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance())
.catch((error) => console.error("An error occurred:", error));


