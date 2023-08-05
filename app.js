let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    }else if (randomChoice === 1){
        return "paper";
    }else {
        return "scissors";
    }
}

function playRound(playerChoice, randomChoice) {
    if (playerChoice === randomChoice) {
        return ("It's a Tie");
    } else if (
        (playerChoice === "paper" && randomChoice === "rock")||
        (playerChoice === "rock" && randomChoice === "scissors")||
        (playerChoice === "scissors" && randomChoice === "paper")
    ) {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    // for(let round = 1; round <= 5; round ++){
    //     const playerChoice = window.prompt("Enter your Choice", "rock");
    //     const randomChoice = computerChoice();
    //     const result = playRound(playerChoice, randomChoice);
    //     console.log(result);

        if (result === "player wins") {
            playerScore++;
        } else if (result === "computer wins"){
            computerScore++;
        }    
    }
    
    if (playerScore > computerScore){
        console.log("player wins the game");
    } else if (playerScore < computerScore){
        console.log("computer wins the game");
    } else {
        console.log("It's a Tie nobody wins");
    }
}
game();