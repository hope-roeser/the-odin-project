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

function declareWinner() {
    if (computerScore < playerScore) {
        return 'You win!'
    } else {
        return 'You lose!'
    }
}


const pScore = document.querySelector('#playerScore');
const player = document.createElement('p');
player.classList.add('content');
pScore.appendChild(player);

const cScore = document.querySelector('#computerScore');
const comp = document.createElement('p');
comp.classList.add('content');
cScore.appendChild(comp);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(computerPlay(), button.id);
        player.textContent = playerScore;
        comp.textContent = computerScore;
        if (playerScore === 5 || computerScore === 5) {
            alert(declareWinner());
        }
        console.log(playerScore);
        console.log(computerScore);
    });
});

