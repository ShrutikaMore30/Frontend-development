const cart = ["shoes", "kurta", "top", "pants"];

function createOrder(cart, callback) {
    console.log("Creating order...");
    setTimeout(() => {
        const orderId = "ORD12345"; // Simulated order ID
        console.log("Order created with ID:", orderId);
        callback(orderId);
    }, 2000);
}

function proceedToPayment(orderId, callback) {
    console.log("Processing payment for order:", orderId);
    setTimeout(() => {
        const paymentInfo = { status: "Success", amount: 500 };
        console.log("Payment successful:", paymentInfo);
        callback(paymentInfo);
    }, 2000);
}

function showOrderSummary(paymentInfo, callback) {
    console.log("Order Summary:", paymentInfo);
    setTimeout(() => {
        console.log("Order summary displayed.");
        callback();
    }, 1000);
}

function updateWalletBalance() {
    console.log("Wallet balance updated!");
}

// Now calling the functions as per your code
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});
























// const GITHUB_API= 'https://api.github.com/users/Ronixa584'

// //fetch is the api given by browser to us to make external calls
// //fetch function return as a promise
// const user= fetch(GITHUB_API);