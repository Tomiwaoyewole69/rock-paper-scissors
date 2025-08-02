function getComputerChoice(){
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3){
    return 'rock'
  }else if (randomNumber >= 1/3 && randomNumber < 2/3){
    return 'paper'
  }else if (randomNumber >= 2/3 && randomNumber < 1){
    return 'scissors'
  }
}

function getHumanChoice() {
  const userInput = prompt('Enter a moves').toLowerCase()
  return userInput;
}

  
function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    // When it is a tie 
    if (humanChoice === computerChoice) {
      console.log('It is a tie')
    }
    // When computer wins
    if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && 
      computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')){
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        
    // When human wins
    }else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' &&    computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }  
  }
  for (let i = 1; i <= 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }
  console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
  if (humanScore > computerScore){
    console.log('Human is the winner')
  }else{
    console.log('Computer is the winner')
  }
}
playGame()