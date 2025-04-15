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
    computerChoice = choice;
};

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    humanChoice = choice.toLowerCase();  
};

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        return "It's a tie!";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return `You win! Your ${humanChoice} beats computers ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return `You win! Your ${humanChoice} beats computers ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return `You loose! Computer's ${computerChoice} beats your ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return `You win! Your ${humanChoice} beats computers ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    }
};

function playGame(){
    getComputerChoice();
    getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    getComputerChoice();
    getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    getComputerChoice();
    getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    getComputerChoice();
    getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    getComputerChoice();
    getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    if (humanScore === computerScore) {
        console.log("The game is a tie!");
    }
    else if (humanScore > computerScore) {
        console.log("You win the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You loose the game :(")
    }
};

playGame();

