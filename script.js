function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = Math.floor(Math.random() * choices.length)
    return choices[computerSelection]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return "tie"

    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {

        return "win";

    } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")) {

        return "lost";
    }
}

function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissor: ").toLowerCase();
        const computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) === "tie") {
            console.log("It's a Tie! redo round");
            i--;
        } else if (playRound(playerSelection, computerSelection) === "win") {
            console.log(`Round ${i + 1}: You won this round! well done`);
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "lost") {
            console.log(`Round ${i + 1}:You lost this round! :\(`);
        } else {
            console.log("Incorrect choice, choose again")
            i--;
        }
    }

    if (playerScore >= 3) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

//game();

