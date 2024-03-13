// For this script Paper = 0, Rock = 1, Scissors = 2

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let draw = getRandomInt(3);
    return draw;
}

function getPlayerInput() {
    let input = window.prompt();
    input = input.toLowerCase();
    if (input === "paper") {
        return 0;
    }
    else if (input === "rock") {
        return 1;
    } else {
        return 2;
    }
}

function playRound(playerSelection, computerSelection) {

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

for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}