
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Example usage:
const computerPlay = getComputerChoice();
console.log(`Computer's choice: ${computerPlay}`);

