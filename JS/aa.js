//You can use async/await for any code that involves asynchronous operations. Here are common scenarios where async/await is particularly useful:



// //1. Fetching Data from APIs
// const fetchData = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await response.json();
//       console.log(data); // Logs the fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   fetchData();


//   //2. Working with Timers (setTimeout)
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const timerExample = async () => {
//   console.log("Waiting...");
//   await delay(2000); // Waits for 2 seconds
//   console.log("2 seconds passed!");
// };
// timerExample();


//   //3.Interacting with Databases
//   //If you're working with a backend and performing CRUD operations.
// const getUser = async (userId) => {
//   try {
//     const user = await db.findUserById(userId); // Simulated database call
//     console.log("User details:", user);
//   } catch (error) {
//     console.error("Error retrieving user:", error);
//   }
// };
// getUser(123);

//  // 4. Processing Multiple Promises with Promise.all
//  // When you need to handle multiple asynchronous operations concurrently.
//  const fetchUserAndPosts = async () => {
//     try {
//       const [user, posts] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json()),
//         fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => res.json()),
//       ]);
  
//       console.log("User:", user);
//       console.log("Posts:", posts);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   fetchUserAndPosts();
  

// // 5. Sequential Async Operations
// // If you need to process tasks in a specific order.
// const task1 = async () => "Task 1 completed";
// const task2 = async () => "Task 2 completed";
// const task3 = async () => "Task 3 completed";

// const runTasks = async () => {
//   console.log(await task1());
//   console.log(await task3());
//   console.log(await task2());
// };
// runTasks();


// // 6. File Operations (Node.js Example)
// // Using fs.promises for reading or writing files asynchronously.
// const fs = require("fs/promises");
// const readFileExample = async () => {
//   try {
//     const content = await fs.readFile("example.txt", "utf-8");
//     console.log(content);
//   } catch (error) {
//     console.error("Error reading file:", error);
//   }
// };
// readFileExample();/


// // 7. Error Handling with Try/Catch
// // Gracefully handling errors during asynchronous operations.
// const riskyOperation = async () => {
//   throw new Error("Something went wrong!");
// };
// const handleError = async () => {
//   try {
//     await riskyOperation();
//   } catch (error) {
//     console.error("Caught an error:", error);
//   }
// };
// handleError();


// // 8. Calling APIs in Loops
// // Processing a series of asynchronous operations sequentially (e.g., fetching multiple users).
// const fetchUser = async (id) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   return response.json();
// };
// const fetchUsers = async () => {
//   for (let i = 1; i <= 3; i++) {
//     const user = await fetchUser(i);
//     console.log(`User ${i}:`, user);
//   }
// };
// fetchUsers();



// 9. Event-Driven Code (e.g., Waiting for Events)
// When waiting for user interactions or specific events.

const waitForClick = (button) =>
    new Promise((resolve) => {
      button.addEventListener("click", () => {
        // Get the value entered by the user
        const userInput = document.getElementById("userInput").value;
        resolve(`User clicked! Input was: ${userInput}`);
      });
    });
  
  const handleClick = async () => {
    console.log("Waiting for the Submit button to be clicked...");
    const button = document.getElementById("submitButton"); // Reference to the Submit button
    const message = await waitForClick(button); // Wait for the Submit button to be clicked
    console.log(message); // Log the message, including the user's input
  };
  
  handleClick();
  

// //   10. Dynamic Importing of Modules
// // Lazy-loading modules with import().
// const loadModule = async () => {
//   const { myFunction } = await import("./myModule.js");
//   myFunction();
// };

// loadModule();