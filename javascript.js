console.log('Hello World');

function getComputerChoice() {
    let choice = '';
    let randNum = Math.random();

    if (randNum <= .333) {
        choice = 'Rock'
    }
    else if (randNum <= .666) {
        choice = 'Paper'
    }
    else {
        choice = 'Scissors'
    }
    
    return choice;

  
}

console.log(getComputerChoice());