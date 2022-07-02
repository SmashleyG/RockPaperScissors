//create function named computerPlay that randomly chooses and returns either "Rock, Paper or Scissors"
//create an array named choices
//Randomly choose from the array and store in variable choice
//Return selected value.

function computerSelection() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerSelected = Math.floor(Math.random() * choices.length)
    return choices[computerSelected]
}

console.log(computerSelection())

//create function named PlayerPlay that request the user to input the choice of "Rock, Paper or Scissors"  
//create function named game that compares computerSelection and playerSelection and returns the winner. 
//modify function game so that more than 1 game can be played 

