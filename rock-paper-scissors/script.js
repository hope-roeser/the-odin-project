let computerScore = 0;
let playerScore = 0;

//generates computer's selection
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerSelection = choices[random];
    return computerSelection;
}

//plays a single round 
function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie! You both chose " + playerSelection + ".";
    } else if ( computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++;
            return "You lose! Paper beats rock.";
        } else {
            playerScore++;
            return "You win! Scissors beats paper.";
        }
    } else if (computerSelection =="rock") {
        if (playerSelection == "scissors") {
            computerScore++;
            return "You lose! Rock beats scissors.";
        } else {
            playerScore++;
            return "You win! Paper beats rock.";
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            computerScore++;
            return "You lose! Scissors beats paper.";
        } else {
            playerScore++;
            return "You win! Rock beats scissors.";
    }
    }
}

//plays  5 round game 
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors.");
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection.toLowerCase()));
        console.log(playerScore);
        console.log(computerScore);
    };
    if (playerScore > computerScore) {
        return "You win!";
    } else if (computerScore > playerScore) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());
