const randomNumber = Math.floor(Math.random() * 10) + 1;

const maxAttempts = 5;
let isGuaranteedCorrect = false;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let userGuess = prompt(`Attempt ${attempt}/${maxAttempts}: Guess a number between 1 and 10`);

    if (userGuess === null) {
        alert("Game cancelled!");
        break;
    }

    userGuess = parseInt(userGuess);

    if (userGuess === randomNumber) {
        alert("You Win!");
        isGuaranteedCorrect = true;
        break; 
    } else if (userGuess > randomNumber) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
}

if (!isGuaranteedCorrect) {
    alert(`Game Over!: ${randomNumber}`);
}
