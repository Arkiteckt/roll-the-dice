const prompt = require ('prompt-sync')({sigint: true });

let rigged = Number(prompt("Enter the number you would like to rig: (between 1 and 6) "));

let roll = Math.ceil(Math.random()*7); //1-7

/*
//rigged is 6
1 = 1/7
2 = 2/7
3 = 3/7
4 = 4/7
5 = 5/7
6 = 2/7

*/

if (roll === 7)
{
    console.log(rigged);

}
else {
    console.log(roll);
}