import './App.css'
import Card from "./Card"

function App() { //app is parent component
 

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
 
//Parent Component: The component that calls/uses another component.

//If a component is importing and using another component = Parent

//"Importer is Parent, Imported is Child."