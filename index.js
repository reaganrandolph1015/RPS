function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let npcChoices = choices[Math.floor(Math.random() * choices.length)]

    return npcChoices
}

console.log(getComputerChoice())