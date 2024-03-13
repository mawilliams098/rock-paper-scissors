function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let draw = getRandomInt(3);
    return draw;
}

function getPlayerInput() {
    return null;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie!"; 
    } else if (playerSelection === 2 && computerSelection === 0) {
        return "You win!";
    } else if (computerSelection === 2 && playerSelection === 0) {
        return "Computer wins!";
    } else if (computerSelection < playerSelection) {
        return "Computer wins!";
    } else {
        return "You win!";
    }
}

const playerSelection = 0;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

