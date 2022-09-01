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


function displayMenu() {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.style.width = '450px';
    mainContainer.style.height = '650px';

    // Title of game? 
    const gameTitle = document.createElement('h1');
    gameTitle.textContent = 'Rock Paper Scissors Game!';
    gameTitle.id = 'game-title'
    mainContainer.appendChild(gameTitle);


    //Add menu container
    const menu = document.createElement('div');
    menu.id = 'menu';
    mainContainer.appendChild(menu);

    // Rules Image
    const rules = document.createElement('img');
    rules.src = 'images/Rules.png';
    rules.id = 'rules-image';
    menu.appendChild(rules);

    // Instructions for choice of buttons
    const menuInstruction = document.createElement('p');
    menuInstruction.id = 'menu-instructions';
    menuInstruction.textContent = 'Select the amount of Rounds per game.';
    menu.appendChild(menuInstruction);

    // Create buttons 

    const roundOptions = [[1, "One"], [3, "Three"], [5, "Five"]];
    roundOptions.forEach((menuRound) => {
        let menuButton = document.createElement('button');
        console.log(menuRound[0]);
        if (menuRound[0] == 1) {
            menuButton.textContent = `${menuRound[1]} Round`;
        } else {
            menuButton.textContent = `${menuRound[1]} Rounds`;
        }
        menuButton.id = `menu-${menuRound[1]}`
        menuButton.classList = "menu-button";
        menu.appendChild(menuButton);
    });
}


displayMenu();