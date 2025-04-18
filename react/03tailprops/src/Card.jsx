import React from 'react'

// function Card(props){
//     // console.log("props",props);
//     console.log(props.channel)
   function Card({username= "shruu" }){// Card is the Child component.
   
    return(
        <> 
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
       <img className="size-48 " alt="" src="https://images.pexels.com/photos/18488947/pexels-photo-18488947/free-photo-of-cold-drink-with-teaspoon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
        </div>
        <div className="flex items-center">
       <span className="text-2xl font-medium"> {username}</span>
       <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
       </span>
      </div>
      </div>
      </>
    )
}

export default Card

//Child Component: The component that is being used inside another.

//If a component is being imported and used = Child