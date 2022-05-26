const prompt = require ('prompt-sync')({sigint: true });

let dice = (prompt("How many sides the dice should have: "));

console.log(Math.ceil(Math.random()*6));

//Math.random *6 gives us a range between 0 and 5. Adding the 1 gives us 6

//Create a new file, custom-roll.js
//that prompts the user for how many sides the dice should have
//then simulates a roll of a dice with that many sides