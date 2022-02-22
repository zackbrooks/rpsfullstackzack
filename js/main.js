
document.querySelector('#reset').addEventListener('click',function(){
    document.querySelector('#playerScore').innerHTML = 0
    document.querySelector('#computerScore').innerHTML = 0
    document.querySelector('#results').innerHTML = `Select an option above to start the game. Good luck!`
    document.querySelector('#rock').disabled = false
    document.querySelector('#paper').disabled = false
    document.querySelector('#scissors').disabled = false
    playerScore = 0
    computerScore = 0
})

document.querySelector('#rock').addEventListener('click', function(){
    playerSelection = 'Rock'
    computerSelection = computerPlay()
    game()
    // playRound (playerSelection, computerSelection)
})

document.querySelector('#paper').addEventListener('click', function(){
    playerSelection = 'Paper'
    computerSelection = computerPlay()
    game()
    // playRound (playerSelection, computerSelection)
})

document.querySelector('#scissors').addEventListener('click', function(){
    playerSelection = 'Scissors'
    computerSelection = computerPlay()
    game()
    // playRound (playerSelection, computerSelection)
})


// let promptPick= prompt("Choose Rock, Paper or Scissors!")
let computerSelection = computerPlay()
let playerSelection 
let playerScore = 0
let computerScore = 0
let userName = prompt("What is your first name?")
if (userName == null) {
    userName = "Player"
}
let playerName = userName[0].toUpperCase() + userName.slice(1).toLowerCase()
document.querySelector('#user').innerHTML = playerName

// function playRound (playerSelection, computerSelection) {
// if (playerSelection === computerSelection) {
//     document.querySelector('#results').innerHTML = `Player chose ${playerSelection} and Computer chose ${computerSelection}! Game is a TIE!`
// } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//             ++computerScore
//     document.querySelector('#results').innerHTML = `Player chose Rock and Computer chose Paper! Player LOSES!`       
// } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//              ++playerScore
//     document.querySelector('#results').innerHTML = `Player chose Rock and Computer chose Scissors! Player WINS!`
// } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//             ++computerScore
//     document.querySelector('#results').innerHTML = `Player chose Paper and Computer chose Scissors! Player LOSES!`    
// } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//                 ++playerScore
//     document.querySelector('#results').innerHTML = `Player chose Paper and Computer chose Rock! Player WINS!`
// } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//             ++computerScore
//     document.querySelector('#results').innerHTML = `Player chose Scissors and Computer chose Rock! Player LOSES!`      
// } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//                 ++playerScore
//     document.querySelector('#results').innerHTML = `Player chose Scissors and Computer chose Paper! Player WINS!`
// } else {
//     document.querySelector('#results').innerHTML = "Please enter the correct selection!"
// }
// }

function game () {
    playRound(playerSelection, computerSelection)
    if (playerScore === 5) {
        document.querySelector('#rock').disabled = true
        document.querySelector('#paper').disabled = true
        document.querySelector('#scissors').disabled = true
        document.querySelector('#results').innerHTML = `Congratulations ${playerName} have beat the game! Click "Play Again" to give it another shot!`
    } else if (computerScore === 5) {
        document.querySelector('#results').innerHTML = `Oh NO! ${playerName} lost the game to Jigsaw! Click "Play Again" to give it another shot!`
        document.querySelector('#rock').disabled = true
        document.querySelector('#paper').disabled = true
        document.querySelector('#scissors').disabled = true
    } 
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector('#playerScore').innerHTML = playerScore
        document.querySelector('#computerScore').innerHTML = computerScore
        document.querySelector('#results').innerHTML = `${playerName} chose ${playerSelection} and Jigsaw chose ${computerSelection}! Game is a TIE! \n No one wins the round.`
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
                ++computerScore
                document.querySelector('#computerScore').innerHTML = computerScore
        document.querySelector('#results').innerHTML = `${playerName} chose ${playerSelection} and Jigsaw chose ${computerSelection}! ${playerName} loses the round!`       
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
                 ++playerScore
                 document.querySelector('#playerScore').innerHTML = playerScore
        document.querySelector('#results').innerHTML = `${playerName} chose ${playerSelection} and Jigsaw chose ${computerSelection}! ${playerName} wins the round!`
    } 
    }




function computerPlay () {
    let pick = Math.floor(Math.random()*3)
    if (pick === 0) {
       return 'Rock'
    } else if (pick === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}
