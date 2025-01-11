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
    while (inputValid == false) {
        let input = prompt("type rock, paper, or scissors")
        if (typeof input != "string") continue
        if (input == "rock" || input == "paper" || input == "scissors") {
            inputValid = true
        }
    }
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
    return result
}

for (let i = 0; i <= 4; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    textBox.innerText = playRound(humanSelection, computerSelection)
}

let winner = (humanScore > computerScore) ? "HUMAN WONN" : "COMPUTER WON"
textBox.innerText = "COMPUTER: " + computerScore + "\nHUMAN: " + humanScore + "\n" + winner;
