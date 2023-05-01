let i;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

while (i = true) {
    let gameFunction = playGame();
    console.log(gameFunction.join(""));

    if (gameFunction[1] == "Player wins!") {
        playerScore++;
        if (playerScore == 5) {
            console.log("PLAYER WON THE GAME!")
            console.log("Player's score is: " + playerScore);
            console.log("Enemy's score is: " + computerScore);
            break;
        }
    } else if (gameFunction[1] == "Enemy wins!") {
        computerScore++;
        if (computerScore == 5) {
            console.log("ENEMY WON THE GAME!")
            console.log("Player's score is: " + playerScore);
            console.log("Enemy's score is: " + computerScore);
            break;
        }
    }

    console.log("Player's score is: " + playerScore);
    console.log("Enemy's score is: " + computerScore);
}


//The Land of the Functions//
function playGame() {
    let computerChoiceFunction = getComputerChoice();
    let playerChoiceFunction = getPlayerChoice();

    if (playerChoiceFunction === "rock" ||
        playerChoiceFunction === "paper" ||
        playerChoiceFunction === "scissors") {
        return playRound(playerChoiceFunction, computerChoiceFunction);
    } else {
        return [playerChoice, " is not a valid selection"];
    }
}

function playRound(playerChoiceParam, computerChoiceParam) {
    console.log("Player chose " + playerChoiceParam + ". While enemy chose " + computerChoiceParam + ".")
    if (playerChoiceParam === computerChoiceParam) {
        return ["Both are a tie!"];
    } else {
        if (playerChoiceParam == "rock") {
            switch (computerChoiceParam) {
                case "paper":
                    return ["Paper beats rock. ", "Enemy wins!"];
                case "scissors":
                    return ["Rock beats Scissors. ", "Player wins!"];
            }
        } else if (playerChoiceParam == "paper") {
            switch (computerChoiceParam) {
                case "rock":
                    return ["Paper beats rock. ", "Player wins!"];
                case "scissors":
                    return ["Scissors beats paper. ", "Enemy wins!"];
            }
        } else if (playerChoiceParam == "scissors") {
            switch (computerChoiceParam) {
                case "paper":
                    return ["Scissors beats paper. ", "Player wins!"];
                case "rock":
                    return ["Rock beats scissors. ", "Enemy wins!"];
            }
        }
    }
}

function getComputerChoice() {
    const randomInputs = ["rock", "paper", "scissors"];
    let randomGeneration = Math.floor(Math.random() * 3);
    let randomComputerChoice = randomInputs[randomGeneration];

    return randomComputerChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Enter a choice: rock, paper or scissors");
    let playerChoiceToLowerCase = playerChoice.toLowerCase();

    return playerChoiceToLowerCase;
}