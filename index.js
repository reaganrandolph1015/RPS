function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let npcChoices = choices[Math.floor(Math.random() * choices.length)]

    return npcChoices
}

//console.log(getComputerChoice())

function playRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice) {
        return "Draw!"
    } else if (computerChoice === 'scissors' && playerChoice === 'paper'){
        return "You lose!"
    } else if (computerChoice === 'scissors' && playerChoice === 'rock'){
        return "You win!"
    } else if (computerChoice === 'paper' && playerChoice === 'rock'){
        return "You lose!"
    } else if (computerChoice === 'paper' && playerChoice === 'scissors'){
        return "You win!"
    } else if (computerChoice === 'rock' && playerChoice === 'scissors'){
        return "You lose!"
    } else if (computerChoice === 'rock' && playerChoice === 'paper'){
        return "You win!"
    }
}

const computerChoice = getComputerChoice()
let playerChoice = "rock"

//console.log(computerChoice) //show NPC choice

//console.log(playRound(computerChoice,playerChoice)) //1 round functionality

function game() {
    let playerScore = 0
    let computerScore = 0
    let playerChoice = prompt("Rock, paper, scissors?")
    console.log(playerScore, computerScore)
    console.log(computerChoice)
    playRound(computerChoice, playerChoice)
    
    
    if (playRound() === "You win!") {
        playerScore++
    } else if (playRound() === "You lose!") {
        computerScore++
    }
    console.log(playRound(computerChoice, playerChoice))
    return(playerScore, computerScore)
} 

console.log(game())