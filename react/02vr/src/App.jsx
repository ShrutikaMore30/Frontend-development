import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter]=useState(0)//setCounter is method
  
  //let Counter = 5

  const addValue =()=>{
    //console.log("clicked",Math.random());
    //console.log("clicked",Counter);
    if(Counter<20){
    Counter= Counter+1
    setCounter(Counter)
  }
};
  const removeValue =()=>{
    {
    if(Counter>0)
    setCounter(Counter-1)
  }
};
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {Counter}</h2>

     <button
     onClick= {addValue}>Add Value</button>
     <br />
     <button
     onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
