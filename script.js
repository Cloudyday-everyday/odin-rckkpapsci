/* 
1. create a function that randomly
assigns rps opponent's choice
2. take input for rps choice from player
and store into a variable
3. set up conditions for victory or loss
4. set up an alert to let player know if they won or not
*/
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    // 1 = rock, 2 = paper, 3 = scissors
    let seed = Math.random();

    if (seed <= 0.33333){
        return 1
    } else if (seed >= 0.33333 && seed <= 0.66666){
        return 2
    } else {
        return 3
    }

}

function getHumanChoice(){
    let choice = Number(prompt('Rock paper scissors! Please type 1 for rock, 2 for paper, or 3 for scissors'))
    return choice 
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 1 && computerChoice === 3)||(humanChoice===2 && computerChoice===1)||(humanChoice==3 && computerChoice===2)){
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}: You Win!`)
        humanScore++
    } else if (humanChoice===computerChoice){
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}: It's a draw!`)
    } else{
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}: You Lose!`)
        computerScore++
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
}


function playGame(){
    let count = 0
    while (count < 5){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        count++
    }
}

playGame()
