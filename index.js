function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let npcChoices = choices[Math.floor(Math.random() * choices.length)]

    return npcChoices
}

console.log(getComputerChoice())

function playRound(){
    let computerChoice = getComputerChoice()
    let playerChoice = prompt('Rock, paper, scissors?')

    if (computerChoice == playerChoice) {
        return "Draw!"
    } else if (computerChoice == 'rock' && playerChoice == 'scissors'){
        return "You lose!"
    } else if (computerChoice == 'scissors' && playerChoice == 'rock'){
        return "You win!"
    }
}
console.log(playRound())