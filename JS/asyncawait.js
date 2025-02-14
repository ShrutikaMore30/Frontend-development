// async function example() {
//     return "Hello";
//   }  
//   console.log(example());  // Logs: Promise { 'Hello' }
  

// async function fetchData() {
//     return "Data fetched";
//   } 
//   fetchData().then((result) => {
//     console.log(result);  // Logs: Data fetched
//   });
  

// //Simulating an asynchronous task using setTimeout
// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data fetched after 2 seconds");
//       }, 2000);
//     });
//   }
//    // Async function using await
//   async function getData() {
//     let data = await fetchData();  // Wait for fetchData to resolve
//     console.log(data);  // Logs: Data fetched after 2 seconds
//   } 
//   getData();


  //for error handaling
  async function fetchData() {
    throw new Error("Something went wrong");
  }
  async function getData() {
    try {
      let result = await fetchData();  // This will throw an error
      console.log(result);
    } catch (error) {
      console.log(error.message);  // Logs: Something went wrong
    }
  }
  getData();


  
  
  


// async: Declares a function as asynchronous. It always returns a Promise.
// await: Pauses the execution of an async function until the Promise resolves or rejects.
// Error Handling: Use try/catch blocks to handle errors in asynchronous functions.
// Chaining: Unlike callbacks and .then(), async/await allows you to 
// write asynchronous code that looks and behaves more like synchronous code.
  