function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let npcChoices = choices[Math.floor(Math.random() * choices.length)]

    return npcChoices
}

//console.log(getComputerChoice())

function playRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice) {
        return "Draw!"
    } else if (computerChoice == 'scissors' && playerChoice == 'rock'){
        return "You win!"
    } else if (computerChoice == 'paper' && playerChoice == 'rock'){
        return "You lose!"
    } 
}

let computerChoice = getComputerChoice()
let playerChoice = "rock"

console.log(computerChoice) //show NPC choice

console.log(playRound(computerChoice,playerChoice))