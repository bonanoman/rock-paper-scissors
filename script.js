function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)
    if (x == 0) {
        return "rock"
    } else if (x == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let inputValid = false
    let input = null
    while (inputValid == false) {
        input = prompt("type rock, paper, or scissors").toLowerCase()
        if (typeof input != "string") continue
        if (input == "rock" || input == "paper" || input == "scissors") {
            inputValid = true
        }
    }
    return input
}

let humanScore = 0
let computerScore = 0
let textBox = document.getElementById("js-text");

function playRound(/**@type {String} */ humanChoice, /**@type {String} */ computerChoice) {
    let result = null
    if (humanChoice == computerChoice) {
        result = "TIE"
    } else if ((humanChoice == "rock" && computerChoice == "scissors")
         || (humanChoice == "paper" && computerChoice == "rock")
         || (humanChoice == "scissors" && computerChoice == "paper")) {
        result = "HUMAN WON"
        humanScore++
    } else {
        result = "COMPUTER WON"
        computerScore++
    }
    console.log(result)
    textBox.innerText = result
    console.log(textBox.innerText)
}

for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
    confirm("Next game?");
}

let winner = (humanScore > computerScore) ? "HUMAN WON" : (computerScore > humanScore) ? "COMPUTER WON" : "TIE"
textBox.innerText = "COMPUTER: " + computerScore + "\nHUMAN: " + humanScore + "\n" + winner;
