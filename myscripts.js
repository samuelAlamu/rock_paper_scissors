let computerSelection;
let playerSelection;
let PlayerPoint = 0;
let ComputerPoint = 0;
//function for geting computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
//function for playing one round
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your choise:", "");
    playerSelection = playerSelection.toLocaleLowerCase();
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLocaleLowerCase();
    console.log(`Computer's choice: ${computerSelection}`);
    console.log(`Player's choice: ${playerSelection}`);
    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'cissors')) {
        alert(`You selcted = ${playerSelection}`);
        alert("Not valid");
    } else {
        if (playerSelection == computerSelection) {
            console.log(`Even! you both choosed ${playerSelection} `);
            alert(`Even! you both choosed ${playerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
        } else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                console.log(`Computer win! ${computerSelection} beats ${playerSelection}`);
                ComputerPoint += 1;
                alert(`Computer win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
            } else {
                console.log(`Player win! ${playerSelection} beats ${computerSelection}`);
                PlayerPoint += 1;
                alert(`Player win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
            }

        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                console.log(`Player win! ${playerSelection} beats ${computerSelection}`);
                PlayerPoint += 1;
                alert(`Player win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
            } else {
                console.log(`Computer win! ${computerSelection} beats ${playerSelection}`);
                ComputerPoint += 1;
                alert(`Computer win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
            }
        } else if (computerSelection == 'rock') {
            console.log(`Computer win! ${computerSelection} beats ${playerSelection}`);
            ComputerPoint += 1;
            alert(`Computer win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
        } else {
            console.log(`Player win! ${playerSelection} beats ${computerSelection}`);
            PlayerPoint += 1;
            alert(`Player win!! you choosed ${playerSelection} computer choosed ${computerSelection} \n Your point = ${PlayerPoint}\n Computer point = ${ComputerPoint}`);
        }
    }


}
//loop for 5 times playing
for (let index = 0; index < 5; index++) {
    //code
    playRound();
    console.log(`conter =${index}:Player point=${PlayerPoint}, Computer point=${ComputerPoint} `);

}
let my = "Samuel";
document.getElementById("Player").textContent = PlayerPoint;
document.getElementById("Computer").textContent = my;
