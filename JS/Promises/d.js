//what is async await
//How async await works behind the scenes ? examples
//In older way js engine will not wait for promise to be resolved
// but whwn we use async await

const p=new Promise((resolve, reject) =>{
   setTimeout(()=>{
    resolve("Promise Resolved Value!!");
   },5000);
   
});

async function handlePromise(){
     console.log("hello shruti")
    //here JS Engine was wait for promise to resolved
     const val=await p;
     console.log("Namaste JS");
     console.log(val);

     const val2=await p;
     console.log("Namaste JS 2");
     console.log(val);
}
handlePromise();



