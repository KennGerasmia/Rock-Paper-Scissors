/*
console.log("Hello world!");

let userInput = prompt("Enter rock, paper or scissors");
let userInputToString = String(userInput);
const rndmInputs = ["rock", "paper", "scissors"]

if(userInput == "rock" || userInput == "paper" || userInput == "scissors") {
    let rndmGenerate = Math.floor(Math.random() * 3);
    console.log("Player chose", userInput); //Modify later
    console.log("Enemy chose", rndmInputs[rndmGenerate]); //Modify later

    if (userInput === rndmInputs[rndmGenerate]) {
        console.log("User and Enemy are a tie");
    } else {
        if (userInput == "rock") {
            switch (rndmInputs[rndmGenerate]) {
                case "paper":
                    console.log("Paper beats rock. Enemy wins!");
                    break;
                case "scissors":
                    console.log("Rock beats Scissors. Player wins!");
                    break;
            }
        } else if (userInput == "paper") {
            switch (rndmInputs[rndmGenerate]) {
                case "rock":
                    console.log("Paper beats rock. Player wins!")
                    break;
                case "scissors":
                    console.log("Scissors beats paper. Enemy wins!")
                    break;
            }
        } else if (userInput == "scissors") {
            switch (rndmInputs[rndmGenerate]) {
                case "paper":
                    console.log("Scissors beats paper. Player wins!")
                    break;
                case "rock":
                    console.log("Rock beats scissors. Enemy wins!")
                    break;
            }
        }
    }
} else {
    console.log("Enter a valid answer: rock, paper or scissors")
}
*/

let getComputerChoiceFunction = getComputerChoice();
let getPlayerChoiceFunction = getPlayerChoice();

if(getPlayerChoiceFunction != "Not a valid selection") {
    console.log(playRound(getPlayerChoiceFunction, getComputerChoiceFunction));
} else {
    console.log(getPlayerChoiceFunction);
}

function getComputerChoice() {
    const randomInputs = ["rock", "paper", "scissors"];
    let randomGeneration = Math.floor(Math.random() * 3);
    let randomComputerChoice = randomInputs[randomGeneration];

    return randomComputerChoice;
}

function getPlayerChoice() {
    let askPlayerChoice = prompt("Enter a choice: Rock, Paper or Scissors");
    let convertPlayerChoiceToLowCase = askPlayerChoice.toLowerCase();
    
    if(convertPlayerChoiceToLowCase == "rock" || "paper" || "scissors") {
        return convertPlayerChoiceToLowCase;
    } else {
        return "Not a valid selection";
    }
}

function playRound(getPlayerChoiceParam, getComputerChoiceParam) {
    console.log("Player chose " +getPlayerChoiceFunction +". While enemy chose " +getComputerChoiceFunction +".")
    if(getPlayerChoiceParam === getComputerChoiceParam) {
        return "Both are a tie!";
    } else {
        if (getPlayerChoiceParam == "rock") {
            switch (getComputerChoiceParam) {
                case "paper":
                    return "Paper beats rock. Enemy wins!";
                case "scissors":
                    return "Rock beats Scissors. Player wins!";
            }
        } else if (getPlayerChoiceParam == "paper") {
            switch (getComputerChoiceParam) {
                case "rock":
                    return "Paper beats rock. Player wins!";
                case "scissors":
                    return "Scissors beats paper. Enemy wins!";
            }
        } else if (getPlayerChoiceParam == "scissors") {
            switch (getComputerChoiceParam) {
                case "paper":
                    return "Scissors beats paper. Player wins!";
                case "rock":
                    return "Rock beats scissors. Enemy wins!";
            }
        }
    }
}