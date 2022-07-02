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
        return "tie"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {

        return "win";
    } else {
        return "loose";
    }

}

//create function named game that plays through 5 rounds of the game and reports the winner at the end
//create for loop 
//create variable to store the score
//determine winner
//return winner


function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissor: ");
        const computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a Tie!");
            i--;
        } else if (playRound(playerSelection, computerSelection) === "win") {
            console.log("You won this round! well done")
            playerScore++;
        } else {
            console.log("You lost this round! :\(");
        }
    }
    if (playerScore >= 3) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!")
    }
}

game();