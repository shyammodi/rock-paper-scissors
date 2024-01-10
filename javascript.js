// javascript.js

function getComputerChoice () {
    let choiceInt = Math.floor(Math.random() * 3);
    let choiceName;
    if (choiceInt == 0) {
        choiceName = "Rock";
    }
    else if (choiceInt == 1) {
        choiceName = "Paper";
    }
    else if (choiceInt == 2) {
        choiceName = "Scissors";
    }
    else {
        console.error("Invalid computer choice!")
    }

    return choiceName;
}


let playerSelection;
let playerSelectionCased;
let computerSelection;
let computerSelectionCased;

function getChoices() {
    
    playerSelection = prompt("Enter Rock, Paper, or Scissors");
    playerSelectionCased = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computerSelectionCased = computerSelection.toLowerCase();

    while (playerSelectionCased != "rock" && playerSelectionCased != "paper" && playerSelectionCased != 'scissors') {
        playerSelection = prompt("Enter Rock, Paper, or Scissors");
        playerSelectionCased = playerSelection.toLowerCase();
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            declareTie(playerSelection, computerSelection);
        }
        else if (computerSelection == 'paper') {
            declareLoss(playerSelection, computerSelection);
        }
        else { //scissors
            declareWin(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            declareWin(playerSelection, computerSelection);
        }
        else if (computerSelection == 'paper') {
            declareTie(playerSelection, computerSelection);
        }
        else { //scissors
            declareLoss(playerSelection, computerSelection);
        }
    }
    else { //scissors
        if (computerSelection == 'rock') {
            declareLoss(playerSelection, computerSelection);
        }
        else if (computerSelection == 'paper') {
            declareWin(playerSelection, computerSelection);
        }
        else { //scissors
            declareTie(playerSelection, computerSelection);
        }
    }
}

function declareWin (playerSelection, computerSelection) {
    console.log(playerSelection + " beats " + computerSelection + "! You win this round");
    playerWins++;
}

function declareLoss (playerSelection, computerSelection) {
    console.log("You lose this round! " + computerSelection + " beats " + playerSelection);
    computerWins++;
}

function declareTie (playerSelection, computerSelection) {
    console.log("Tie! Both you and the computer selected " + playerSelection);
}

let playerWins = 0;
let computerWins = 0;
const numRounds = 5;

function game () {
    for (let i = 0; i < numRounds; i++)
    {
        getChoices();
        playRound(playerSelectionCased, computerSelectionCased);
    }
    console.log("*Final score*:\nPlayer Wins: " + playerWins + "\nComputer Wins: " + computerWins)
}

game();