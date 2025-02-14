//console.log("hey shruti how are you");
//comments
//  = / * + - % ** ++ --

//Javascript Data types
/* const str = " A string";// string
const num = 8; // Number
const flt =3.14; // float
const bool = true;
const list = [ "Item 1", 2, "Three" , 3.14, [] ] ;// Array=list
const thing = null; 
const notDefined = undifined ;// currently holds not value
const getAge = function() { return 31; } // function
const obj = {
   'name': 'shruti',
} */


// const age = 8;
// if(age >= 18){
//    console.log("you can vote");
// }
// else{
//    console.log("you can not vote")
// }
// if(age >= 21){
//    console.log("you can drink");
// }
//  else if (age > 18 & age < 21 ){
//    console.log("you can not drink");
// }
// else{
//    console.log("you are very small to drink");
// }

// while(true){
//   let number = prompt("Guess the number:");
//       number == Number(number);
//    const randomNumber = Math.ceil(Math.random()*10);

//    if(number == randomNumber){
//       alert("YOU WIN");
//       break;
//    }
//    else{
//       console.log("You guessed ", number,"But the right number was ", randomNumber);
//    }

// }

document.getElementById('random-btn').addEventListener('click', () => {
  const randomId = Math.floor(Math.random() * 898) + 1;  // Pokémon IDs range from 1 to 898
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('pokemon-card').innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">
        <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <p>ID: ${data.id}</p>
        <p>Height: ${data.height / 10} meters</p>
        <p>Weight: ${data.weight / 10} kg</p>
        <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
      `;
    })
    .catch(error => console.error('Error:', error));
});


