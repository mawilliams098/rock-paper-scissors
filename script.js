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

function translate(numDraw) {
    let draw;
    if (numDraw === 0) {
        draw = "Paper";
    } else if (numDraw === 1) {
        draw = "Rock";
    } else {
        draw = "Scissors"
    }
    return draw;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie between ${translate(playerSelection)}!`)
        return "tie"; 
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("You win! Scissors beats Paper")
        return "player";
    } else if (computerSelection === 2 && playerSelection === 0) {
        console.log("You lose! Scissors beats paper")
        return "computer";
    } else if (computerSelection < playerSelection) {
        console.log(`You lose! ${translate(computerSelection)} beats ${translate(playerSelection)}`)
        return "computer";
    } else {
        console.log(`You win! ${translate(playerSelection)} beats ${translate(computerSelection)}`)
        return "player"
    }
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerInput();
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner == "player") {
            ++playerWins;
        } else if (winner == "computer") {
            ++computerWins;
        }
    }

    // Report results 
    if (playerWins > computerWins) {
        console.log("You won the most games!")
    } else if (computerWins > playerWins) {
        console.log("Computer won the most games!")
    } else {
        console.log("It's an overall tie!")
    }
}