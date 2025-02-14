
const p1=new Promise((resolve, reject) =>{
    setTimeout(()=>{
     resolve("Promise Resolved Value!!");
    },1000);  //5000
 });

 const p2=new Promise((resolve, reject) =>{
    setTimeout(()=>{
     resolve("Promise Resolved Value!!");
    },5000);  //1000
 });
 
 
 async function handlePromise(){
      console.log("hello shruti")
     //here JS Engine was wait for promise to resolved actully not wait 
     //handlePromise function suspend the execution it will continue once thet promise is resolved

      const val=await p1;
      console.log("Namaste JS");
      console.log(val);
 
      const val2=await p2;
      console.log("Namaste JS 2");
      console.log(val2);
 }
 handlePromise();
 
 

