function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mapIntToDraw(num) {
    let draw;
    if (num === 0) {
        draw = "Rock";
    } else if (num === 1) {
        draw = "Paper";
    } else {
        draw = "Scissors";
    }

    return draw; 
}

function getComputerChoice() {
    let num = getRandomInt(3);
    let draw = mapIntToDraw(num);
    console.log(draw);
    return draw;
}

// function playRound(playerSelection, computerSelection) {
//     return null; 
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))
