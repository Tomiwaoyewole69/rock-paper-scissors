const buttons = document.querySelectorAll('button')
const displayResult = document.querySelector('.result')
const displayScore = document.querySelector('.score')
const displayWinner = document.querySelector('.winner')
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3){
    return 'rock'
  }else if (randomNumber >= 1/3 && randomNumber < 2/3){
    return 'paper'
  }else if (randomNumber >= 2/3 && randomNumber < 1){
    return 'scissors'
  }
}

function playRound(humanChoice, computerChoice) {
    // When it is a tie 
    if (humanChoice === computerChoice) {
      displayResult.textContent = "It's a tie"
    }
    // When computer wins
  if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' &&
    computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
    computerScore += 1;
    displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        
    // When player wins
  } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
    playerScore += 1;
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  }
  displayScore.textContent = `Human: ${playerScore}, Computer: ${computerScore}`
  if (playerScore === 5) {
    displayWinner.textContent = 'Human is the winner'
    playerScore = 0
    computerScore = 0
  } else if (computerScore === 5) {
    displayWinner.textContent = 'Computer is the winner'
    playerScore = 0
    computerScore = 0
  } else {
    displayWinner.textContent = ''
  }
  
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)  
    })
})




