

let myPromise = new Promise((resolve, reject) => {
    let success = false;
    
    if(success) {
      resolve("The operation was successful!");  // Fulfilled Promise
    } else {
      reject("Something went wrong!");  // Rejected Promise
    }
  });
  
  myPromise
    .then((message) => { //The .then() method is used to handle the case where the promise is fulfilled. It logs the success message to the console
      console.log(message); 
    })
    .catch((error) => { //The .catch() method handles the case where the promise is rejected. It logs the error message to the console.
      console.log(error);  
    })
    .finally(() => {
      console.log("The promise is settled (fulfilled or rejected)."); // Executes no matter what
    });