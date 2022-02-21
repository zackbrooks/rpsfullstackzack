
document.querySelector('#reset').addEventListener('click',function(){
    document.querySelector('#playerScore').innerHTML = 0
    document.querySelector('#computerScore').innerHTML = 0
    document.querySelector('#results').innerHTML = `Select an option above to start the game. Good luck!`
    playerScore = 0
    computerScore = 0
})

document.querySelector('#rock').addEventListener('click', function(){
    playerSelection = 'rock'
    computerSelection = computerPlay()
    playRound (playerSelection, computerSelection)
    console.log(`Clicked Rock`, playerScore, computerScore)
})

document.querySelector('#paper').addEventListener('click', function(){
    playerSelection = 'paper'
    computerSelection = computerPlay()
    playRound (playerSelection, computerSelection)
    console.log(`Clicked Paper`, playerScore, computerScore)
})

document.querySelector('#scissors').addEventListener('click', function(){
    playerSelection = 'scissors'
    computerSelection = computerPlay()
    playRound (playerSelection, computerSelection)
    console.log(`Clicked Scissors`, playerScore, computerScore)
})


// let promptPick= prompt("Choose Rock, Paper or Scissors!")
let computerSelection = computerPlay()
let playerSelection 
let playerScore = 0
let computerScore = 0


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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        ++playerScore 
        ++computerScore
        document.querySelector('#playerScore').innerHTML = playerScore
        document.querySelector('#computerScore').innerHTML = computerScore
        document.querySelector('#results').innerHTML = `Player chose ${playerSelection} and Computer chose ${computerSelection}! Game is a TIE!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
                ++computerScore
                document.querySelector('#computerScore').innerHTML = computerScore
        document.querySelector('#results').innerHTML = `Player chose ${playerSelection} and Computer chose ${computerSelection}! Player LOSES!`       
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
                 ++playerScore
                 document.querySelector('#playerScore').innerHTML = playerScore
        document.querySelector('#results').innerHTML = `Player chose ${playerSelection} and Computer chose ${computerSelection}! Player WINS!`
        if (playerScore === 5) {
            document.querySelector('#results').innerHTML = `Congratulations! You have WON!`
        }
    } 
    }




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
