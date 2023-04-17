let i;
let askPlayerChoice;
let scorePlayer = 0;
let scoreComputer = 0;

while (i = true) {
    let getGameFunction = game();
    console.log(getGameFunction.join(""));

    if (getGameFunction[1] == " Player wins!") {
        scorePlayer++;
        if (scorePlayer == 5) {
            console.log("PLAYER WON THE GAME!")
            console.log("Player's score is: " + scorePlayer);
            console.log("Enemy's score is: " + scoreComputer);
            break;
        }
    } else if (getGameFunction[1] == " Enemy wins!") {
        scoreComputer++;
        if (scoreComputer == 5) {
            console.log("ENEMY WON THE GAME!")
            console.log("Player's score is: " + scorePlayer);
            console.log("Enemy's score is: " + scoreComputer);
            break;
        }
    }

    console.log("Player's score is: " + scorePlayer);
    console.log("Enemy's score is: " + scoreComputer);
}


//The Land of the Functions//
function game() {
    let getComputerChoiceFunction = getComputerChoice();
    let getPlayerChoiceFunction = getPlayerChoice();

    if (getPlayerChoiceFunction === "rock" || getPlayerChoiceFunction === "paper" || getPlayerChoiceFunction === "scissors") {
        return playRound(getPlayerChoiceFunction, getComputerChoiceFunction);
    } else {
        return [askPlayerChoice, " is not a valid selection"];
    }
}

function playRound(getPlayerChoiceParam, getComputerChoiceParam) {
    console.log("Player chose " + getPlayerChoiceParam + ". While enemy chose " + getComputerChoiceParam + ".")
    if (getPlayerChoiceParam === getComputerChoiceParam) {
        return ["Both are a tie!"];
    } else {
        if (getPlayerChoiceParam == "rock") {
            switch (getComputerChoiceParam) {
                case "paper":
                    return ["Paper beats rock.", " Enemy wins!"];
                case "scissors":
                    return ["Rock beats Scissors.", " Player wins!"];
            }
        } else if (getPlayerChoiceParam == "paper") {
            switch (getComputerChoiceParam) {
                case "rock":
                    return ["Paper beats rock.", " Player wins!"];
                case "scissors":
                    return ["Scissors beats paper.", " Enemy wins!"];
            }
        } else if (getPlayerChoiceParam == "scissors") {
            switch (getComputerChoiceParam) {
                case "paper":
                    return ["Scissors beats paper.", " Player wins!"];
                case "rock":
                    return ["Rock beats scissors.", " Enemy wins!"];
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
    askPlayerChoice = prompt("Enter a choice: rock, paper or scissors");
    let convertPlayerChoiceToLowCase = askPlayerChoice.toLowerCase();

    return convertPlayerChoiceToLowCase;
}