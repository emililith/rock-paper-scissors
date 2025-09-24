const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor((Math.random() * choices.length))]
}

function getHumanChoice() {
    let humanChoice = prompt("Please input your choice of rock, paper, or scissors", "rock");
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    //what are our options?
    //rock, paper
    //rock, scissors
    //paper, scissors
    //rock, rock; paper, paper; scissors, scissors
    //////or this can be broken down into 3 possiblities.? human wins, computer wins, and tie

    if (humanChoice === computerChoice) {
        console.log("Tie!")
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        //when does the human win? when human,computer is rock,scissors ; scissors,paper ; paper,rock
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore ++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore ++;
    }
    return [humanScore, computerScore]
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
    }
    if (humanScore > computerScore) {
        console.log("You win the game")
    } else if (computerScore > humanScore) {
        console.log("You lose the game")
    }   else {
        console.log("Tie game")
    }
}