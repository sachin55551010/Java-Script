let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#userInput');
const submitButton = document.querySelector('#btn');
const guessSlot = document.querySelector('.Guesses')
const remainingSlot = document.querySelector('.LastResult')
const lowHi = document.querySelector('.LowHi')
const startOver = document.querySelector('.ResultPara')

const p = document.createElement('p');

let prevguess = [];
let numOfGuesses = 1;
let playGame = true;
if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
       const guess = parseInt(userInput.value);
       validateGuess(guess);
    })
}
//-----------------------creating Methods----------------------------------------

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`);
    }
    else if (guess <= 0) {
        alert(`please enter number biiger than zero`);
    }
    else if (guess > 100) {
        alert(`please enter number 100 or less`);
    }
    else {
        prevguess.push(guess);
        if (numOfGuesses === 10) {
            cleanupGuess(guess);
            displayMessage(`Game Over, The Number was ${randomNumber}`);
            endGame();
        }
        else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Won! You Guessed it Right`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too High Please enter Lower Number`)
    }
    else if (guess < randomNumber) {
        displayMessage(`Numner is Low Please enter Higher Number`)
    }
}

function cleanupGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} : `;
    numOfGuesses++;
    remainingSlot.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
    lowHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<input type="submit" id="newGame" value="Start Again" class="button">`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled');
        playGame = true;
    })
}

