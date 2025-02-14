import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
     return(
        <>
        <h1>Custom App !</h1>
        </>
     )
}
//  const anotherElement= (
//   <a href ="https://google.com" target='_blank'>visit google</a>
//  )

const otherElement="coffee with shruti"
// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'click me to visit google'
 //   otherElement

// )


createRoot(document.getElementById('root')).render(
   
  <App/>
  //reactElement
 
 
)
