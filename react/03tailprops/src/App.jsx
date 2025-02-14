import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"

function App() {
  const [count, setCount] = useState(0)
  // let myObj={
  //   username:"shruti",
  //   age:21
  // }

  return (
    <>
    <h1 className=' bg-green-400  text-black p-4 rounded-xl '>Tailwind test</h1>
      <Card username="chai aur code" />
      <Card username="it's shruti"/>
      <Card />
      <Card username="hey hey"/>
    

    </>
  )
}

export default App
 