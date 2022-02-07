let playerChoice = prompt('Please choose either rock, paper or scissors').toLowerCase();
let playerWinRound = 'You have won this round!'
let computerWinRound = 'Computer has won this round!'
let playerScore = 0
let computerScore = 0

function computerChoice() {
    let choices  = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRounds(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return alert('It\'s a draw!')
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        alert(playerWinRound)
        playerScore++
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert(playerWinRound)
        playerScore++
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        alert(playerWinRound)
        playerScore++
    } else {
        alert(computerWinRound)
        computerScore++
    }
} 

playRounds(playerChoice, computerChoice());

