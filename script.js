//create function named computerPlay that randomly chooses and returns either "Rock, Paper or Scissors"
//create an array named choices
//Randomly choose from the array and store in variable choice
//Return computerselection.

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = Math.floor(Math.random() * choices.length)
    return choices[computerSelection]
}

//create a function named playRound that takes two parameters - playerSelection and computerSelection and then returns a string delcaring the winner.
//if playerSelection equals computerSelection return tie
//else if playerSelection equals "Rock" and computerSelection equals "Scissors" or 
//playerSelection equals "Scissors" and computerSelection equals "Paper" or 
//playerSelection equals "Paper" and computerSelection equals "Rock" then return player wins
//else return player looses
//create two const - playerSelection and computerSelection to pass to the function playRound

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a TIE! Try again."
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {

        return "You win this round, good on you!";
    } else {
        return "You loose :(";
    }

}

const playerSelection = "paper"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


//create function named game that plays through 5 rounds of the game and reports the winner at the end


