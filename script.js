// For this script Paper = 0, Rock = 1, Scissors = 2

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let draw = getRandomInt(3);
    return draw;
}

function getPlayerInput(buttonId) {
    if (buttonId === "paper") {
        return 0;
    }
    else if (buttonId === "rock") {
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

// Manipulate the DOM
let playerWins = 0;
let computerWins = 0;
let roundCount = 0;

const buttons = document.querySelectorAll("button");
const results = document.createElement("div");
const winnerList = document.createElement("ul");
document.body.appendChild(results); 
results.appendChild(winnerList);



function playRound(playerSelection, computerSelection) {
    const roundWinner = document.createElement("li");
    if (playerSelection === computerSelection) {
        roundWinner.textContent = `It's a tie between ${translate(playerSelection)}!`;
        winnerList.appendChild(roundWinner);
        return "tie"; 
    } else if (playerSelection === 2 && computerSelection === 0) {
        roundWinner.textContent = "You win! Scissors beats Paper";
        winnerList.appendChild(roundWinner);
        return "player";
    } else if (computerSelection === 2 && playerSelection === 0) {
        roundWinner.textContent = "You lose! Scissors beats paper";
        winnerList.appendChild(roundWinner);
        return "computer";
    } else if (computerSelection < playerSelection) {
        roundWinner.textContent = `You lose! ${translate(computerSelection)} beats ${translate(playerSelection)}`;
        winnerList.appendChild(roundWinner);
        return "computer";
    } else {
        roundWinner.textContent = `You win! ${translate(playerSelection)} beats ${translate(computerSelection)}`;
        winnerList.appendChild(roundWinner);
        return "player"
    }
   
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = getPlayerInput(button.id);
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        ++roundCount;

        if (winner == "player") {
            ++playerWins;

        } else if (winner == "computer") {
            ++computerWins;
        } else {
            // announce that it was a tie 
        }

        if (playerWins === 5 || computerWins == 5) {
            // announce the overall winner
        }
    })
})


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