
function computerPlay () {
    let pick = Math.floor(Math.random()*3)
    if (pick === 0) {
       return 'rock'
    } else if (pick === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// let promptPick= prompt("Choose Rock, Paper or Scissors!")
let computerSelection = computerPlay()
let playerSelection = promptPick.toLowerCase()
let playerScore = 0
let computerScore = 0


function playRound (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return `Player chose ${playerSelection} and Computer chose ${computerSelection}! Game is a TIE!`
} else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore = computerScore++
    return `Player chose Rock and Computer chose Paper! Player LOSES!`       
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore++
    return `Player chose Rock and Computer chose Scissors! Player WINS!`
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore = computerScore++
    return `Player chose Paper and Computer chose Scissors! Player LOSES!`    
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore = playerScore++
    return `Player chose Paper and Computer chose Rock! Player WINS!`
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore = computerScore++
    return `Player chose Scissors and Computer chose Rock! Player LOSES!`      
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore++
    return `Player chose Scissors and Computer chose Paper! Player WINS!`
} else {
    return "Please enter the correct selection!"
}
}

console.log(playRound(playerSelection, computerSelection))

function game () {

    for (let i = 0; i < 5; i++) {
        console.log(i, playRound(playerSelection, computerSelection))
    }

}

console.log(game(), playerScore, computerScore)