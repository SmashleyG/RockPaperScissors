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



function removeScreen(screen) {

    const gameTitle = document.querySelector('h1');
    if (gameTitle) {

        gameTitle.remove();

    }

    const removeScreen = document.querySelector(`#${screen}`);
    removeScreen.remove();

}

function actionPlayerSelection(images, startButton, playersSelection){
    let selected = null; 

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.style.border = '3px solid transparent';
        img.style.borderRadius = '8px';
        
        img.addEventListener('click', () => {
            images.forEach(i => i.style.border = '3px solid transparent');
            img.style.border = '3px solid #00f';
            playersSelection.src = img.src;
            selected = img.id;
            startButton.disabled = false;
        });
    });

    return () => selected; // return selection.
}


// Game Screen
function displayGameScreen(rounds) {
    let mainContainerOne = document.querySelector('#main-container');

    // Set main container size
    mainContainerOne.style.width = '800px'
    mainContainerOne.style.height = '700px'


    mainContainerOne.addEventListener('transitionend', () => {
        // Game container

        const gameContainer = document.createElement('div');
        gameContainer.id = 'game-container';
        mainContainerOne.appendChild(gameContainer);

        // Header container 
        const header = document.createElement('div');
        header.id = 'header';
        gameContainer.appendChild(header);

        // Rounds left 
        const roundsLeft = document.createElement('h2');
        roundsLeft.id = 'rounds-left'
        roundsLeft.textContent = `Rounds left: ${rounds} `;
        header.appendChild(roundsLeft);

        // Back button
        const backButton = document.createElement('button');
        backButton.textContent = 'Back';
        header.appendChild(backButton);

        backButton.addEventListener('click', () => {

            removeScreen(gameContainer.id);
            displayMenuScreen();

        });
        
        // Battle screen
        const battleScreen = document.createElement('div');
        battleScreen.id = 'battle-screen';
        gameContainer.appendChild(battleScreen);

        // Player Interface
        const playerInterface = document.createElement('div');
        playerInterface.id = 'player-interface';
        battleScreen.appendChild(playerInterface);

        // Players Score
        const playerScore = document.createElement('h1');
        playerScore.id = 'player-score';
        playerScore.textContent = `Players Score: `;
        playerInterface.appendChild(playerScore);

        // Players Selection
        const playersSelection = document.createElement('img');
        playersSelection.id = 'players-selection';
        playersSelection.src = `images/Rock.png`;
        playersSelection.style.height = '172px';
        playersSelection.style.width = '250px';
        playerInterface.appendChild(playersSelection);

        //
        const verse = document.createElement('p');
        verse.id = 'vs';
        verse.textContent = 'vs';
        verse.style.alignSelf = 'center';
        verse.style.fontSize = '50px'
        battleScreen.appendChild(verse);

        // Computers Interface
        const computerInterface = document.createElement('div');
        computerInterface.id = 'computer-interface';
        battleScreen.appendChild(computerInterface);

        // Computers Score
        const computerScore = document.createElement('h1');
        computerScore.id = 'computer-score';
        computerScore.textContent = `Computer Score: `;
        computerInterface.appendChild(computerScore);

        const computersSelection = document.createElement('img');
        computersSelection.id = 'computers-selection';
        computersSelection.src = 'images/Paper.png';
        computersSelection.style.height = '172px';
        computersSelection.style.width = '250px';
        computerInterface.appendChild(computersSelection);

        // Players action selection
        const playersActionSelectionMenu = document.createElement('div');
        playersActionSelectionMenu.id = 'players-action-selection-menu';
        gameContainer.appendChild(playersActionSelectionMenu);

        //Players action selection
        const playerActionPaper = document.createElement('img');
        playerActionPaper.id = 'players-action-paper';
        playerActionPaper.src = 'images/Paper.png';
        playerActionPaper.style.height = '76.8px';
        playerActionPaper.style.width = '76.8px';
        playersActionSelectionMenu.appendChild(playerActionPaper);

        //Players action selection
        const playerActionScissor = document.createElement('img');
        playerActionScissor.id = 'players-action-scissor';
        playerActionScissor.src = 'images/Scissors.png';
        playerActionScissor.style.height = '76.8px';
        playerActionScissor.style.width = '76.8px';
        playersActionSelectionMenu.appendChild(playerActionScissor);

        //Players action selection
        const playerActionRock = document.createElement('img');
        playerActionRock.id = 'players-action-rock';
        playerActionRock.src = 'images/Rock.png';
        playerActionRock.style.height = '76.8px';
        playerActionRock.style.width = '76.8px';
        playersActionSelectionMenu.appendChild(playerActionRock);

        const actionImages = [playerActionPaper, playerActionScissor, playerActionRock];
        
        //Create start round button
        const startGameButton = document.createElement('button');
        startGameButton.textContent = 'Start Round';
        startGameButton.disabled = true;
        startGameButton.style.marginTop = '20px';
        startGameButton.style.padding = '10px 20px';
        startGameButton.style.fontSize = '16px';
        startGameButton.style.cursor = 'pointer';
        playersActionSelectionMenu.appendChild(startGameButton);

        const getSelectedAction = actionPlayerSelection(actionImages, startGameButton, playersSelection);

        startGameButton.addEventListener('click', () => {
            const selectedAction = getSelectedAction();
            if (!selectedAction) return;

            console.log("Player selected: ", selectedAction);
            startGameButton.disabled = true;
        });



    }, { once: true });

}


// Menu Screen
function displayMenuScreen() {
    let mainContainer = document.querySelector('#main-container');

    mainContainer.style.width = '450px';
    mainContainer.style.height = '650px';

    // Title of game? 
    const gameTitle = document.createElement('h1');
    gameTitle.textContent = 'Rock Paper Scissors Game!';
    gameTitle.id = 'game-title'
    mainContainer.appendChild(gameTitle);


    //Add menu container
    const menu = document.createElement('div');
    menu.id = 'menu-container';
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

    // Create menu buttons
    const roundOptions = [[1, "One"], [3, "Three"], [5, "Five"]];
    roundOptions.forEach((menuRound) => {
        let menuButton = document.createElement('button');

        if (menuRound[0] == 1) {
            menuButton.textContent = `${menuRound[1]} Round`;
        } else {
            menuButton.textContent = `${menuRound[1]} Rounds`;
        }
        menuButton.id = `menu - ${menuRound[1]} `
        menuButton.classList = "menu-button";
        menu.appendChild(menuButton);

        menuButton.addEventListener('click', () => {


            removeScreen(menu.id);

            displayGameScreen(menuRound[0]);

        });
    });


}

displayMenuScreen();