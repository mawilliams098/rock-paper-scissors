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
const content = document.createElement("div");
const tally = document.createElement("h4");
const winnerList = document.createElement("ul");
content.insertAdjacentElement('afterbegin', tally);
document.body.appendChild(content); 
content.appendChild(winnerList);

function updateDOM(resultString) {
    const roundWinner = document.createElement("li");
    roundWinner.textContent = resultString;
    tally.textContent = `Round ${roundCount} Results - Player: ${playerWins} Computer: ${computerWins}`;
    winnerList.appendChild(roundWinner);
}

function playRound(playerSelection, computerSelection) {
    let resultString;
    roundCount++;
    
    if (playerSelection === computerSelection) {
        resultString = `It's a tie between ${translate(playerSelection)}!`;
        updateDOM(resultString);
    } else if (playerSelection === 2 && computerSelection === 0) {
        ++playerWins;
        resultString = "You win! Scissors beats Paper";
        updateDOM(resultString);
    } else if (computerSelection === 2 && playerSelection === 0) {
        ++computerWins;
        resultString = "You lose! Scissors beats paper";
        updateDOM(resultString);
    } else if (computerSelection < playerSelection) {
        ++computerWins;
        resultString = `You lose! ${translate(computerSelection)} beats ${translate(playerSelection)}`;
        updateDOM(resultString);
    } else {
        ++playerWins;
        resultString = `You win! ${translate(playerSelection)} beats ${translate(computerSelection)}`;
        updateDOM(resultString);
    } 

    if (playerWins === 5) {
        alert("You won overall!");
    } else if (computerWins === 5) {
        alert("Computer won the most games!");
    } 
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = getPlayerInput(button.id);
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})