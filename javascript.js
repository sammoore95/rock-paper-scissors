let round = 1;

let humanChoice = "";
let computerChoice = "";

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

let result = '';
let gameResult = '';

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");


document.querySelector(".human-prompt").innerText = "Choice for round: " + round;

document.querySelector(".round-result").innerText = `Result: ${result}`
document.querySelector(".human-choice").innerText = "Human Choice: " + humanChoice;
document.querySelector(".computer-choice").innerText = "Computer Choice: " + computerChoice; 
document.querySelector(".score").innerText = `Score: Human-${humanScore} Computer-${computerScore} Tie-${tieScore}`;
document.querySelector(".game-result").innerText = gameResult;


rockButton.addEventListener("click", handleChoice);
paperButton.addEventListener("click", handleChoice);
scissorsButton.addEventListener("click", handleChoice);

function handleChoice() {
    if (round < 6) {
        humanChoice = this.value;
        computerChoice = getComputerChoice();
        document.querySelector(".human-prompt").innerText = "Choice for round: " + round;
        document.querySelector(".human-choice").innerText = "Human Choice: " + humanChoice;
        document.querySelector(".computer-choice").innerText = "Computer Choice: " + computerChoice;
        round++;
        //playRound(humanChoice, computerChoice);
        result = playRound(humanChoice, computerChoice);
        document.querySelector(".score").innerText = `Score: Human-${humanScore} Computer-${computerScore} Tie-${tieScore}`;
        document.querySelector(".round-result").innerText = `Result: ${result}`
    }
    else {
        if (humanScore < computerScore) {
            gameResult = "You loose the game!";
            document.querySelector(".game-result").innerText = gameResult;
        }
        else if (humanScore > computerScore) {
            gameResult = "You win the game!";
            document.querySelector(".game-result").innerText = gameResult;
        }
        else  {
            gameResult = "The game is a tie!";
            document.querySelector(".game-result").innerText = gameResult;
        }
    }
}





 









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
    return choice;
};




function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        tieScore++;
        return "It's a tie!";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return `You loose!`;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return `You win!`;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return `You win!`;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return `You loose!`;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return `You loose!`;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return `You win!`;
    }
};



// function playGame(){
//     // getComputerChoice();
//     // getHumanChoice();
//     // console.log(playRound(humanChoice, computerChoice));
//     // getComputerChoice();
//     // getHumanChoice();
//     // console.log(playRound(humanChoice, computerChoice));
//     // getComputerChoice();
//     // getHumanChoice();
//     // console.log(playRound(humanChoice, computerChoice));
//     // getComputerChoice();
//     // getHumanChoice();
//     // console.log(playRound(humanChoice, computerChoice));
//     // getComputerChoice();
//     // getHumanChoice();
//     // console.log(playRound(humanChoice, computerChoice));
//     if (humanScore === computerScore) {
//         console.log("The game is a tie!");
//     }
//     else if (humanScore > computerScore) {
//         console.log("You win the game!")
//     }
//     else if (humanScore < computerScore) {
//         console.log("You loose the game :(")
//     }
// };

// playGame();

