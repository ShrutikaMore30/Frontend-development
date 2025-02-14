//example fetch
//error handling try catch

const API_URL ="https://api.gthub.com/users/akshaymarch7";

async function handlePromise(){
   
    try{
    const data= await fetch(API_URL);
    const jsonValue=await data.json();
    console.log(jsonValue);
}   catch(err){
    console.log(err);
}
}

handlePromise();
//handlePromise().catch((err)=>console.log(err));//older way og handling error


//interview
//async is the keyword for handling promises
//async await is new way to write code
