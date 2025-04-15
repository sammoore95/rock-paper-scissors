let humanChoice = '';
let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = '';
    let randNum = Math.random();

    if (randNum <= .333) {
        choice = "rock";
    }
    else if (randNum <= .666) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    
    return choice;
};

computerChoice = getComputerChoice();

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");

    return choice.toLowerCase();  
};

humanChoice = getHumanChoice();

//console.log(getHumanChoice())         //Gets Human Choice
//console.log(getComputerChoice());     //Gets Computer Choice

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        return "It's a tie!";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}.`;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        return `You win! Your ${humanChoice} beats computers ${computerChoice}.`;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        return `You win! Your ${humanChoice} beats computers ${computerChoice}.`;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}.`;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}.`;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        return `You win! Your ${humanChoice} beats computers ${computerChoice}.`;
    }
};


console.log(playRound(humanChoice, computerChoice));