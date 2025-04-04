

const displayWord = document.getElementById("displayWord");
const attemptsDisplay = document.getElementById("attempts");
const letterInput = document.getElementById("letterInput");
const checkButton = document.getElementById("checkButton");
const messageDisplay = document.getElementById("message");
const gallows = document.querySelector(".gallows");
const btnNew = document.querySelector(".newGame");


document.querySelector('body').style.backgroundColor = '#2ba7ad'


let wordToGuess = getRandomWord().toUpperCase();
let guessedWord = Array(wordToGuess.length).fill("_");

let attempts = 0;
let attemptsLeft = 7;


gallows.classList.add('hidden');


function updateDisplay() {

    document.getElementById("displayWord").textContent = guessedWord.join(" ");
    document.getElementById("attempts").textContent = attemptsLeft;
}
function newGame() {
    wordToGuess = getRandomWord().toUpperCase();
    guessedWord = Array(wordToGuess.length).fill("_");
    attempts = 0;
    attemptsLeft = 7;
    if (!guessedWord.includes("_"))
        gallows.classList.add('hidden');
    gallows.src = `${attempts}.drawio.svg`;
    messageDisplay.textContent = "Mettez une lettre";
    checkButton.disabled = false;
    letterInput.disabled = false;

    updateDisplay();
}

function checkLetter() {

    let input = letterInput.value.toUpperCase();
    letterInput.value = "";
    if (input && wordToGuess.includes(input)) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === input) {
                guessedWord[i] = input;
            }
        }
        messageDisplay.textContent = "Bonne lettre!";
    } else {
        attemptsLeft--;
        attempts++;
        messageDisplay.textContent = "Mauvaise lettre!";
    }

    if (!guessedWord.includes("_")) {
        messageDisplay.textContent = " Tu as gagné !";
        endGame();

    }
    gallows.src = `${attemptsLeft}.drawio.svg`;

    if (attemptsLeft === 0) {
        messageDisplay.textContent = `Perdu ! : ${wordToGuess}`;
        endGame();
    }
    function endGame() {
        checkButton.disabled = true;
        letterInput.disabled = true;
    }
    updateDisplay();
    if (!guessedWord.includes("_"))
        gallows.classList.remove('hidden');
    gallows.src = `${attempts}.drawio.svg`;

}
checkButton.addEventListener("click", checkLetter);
btnNew.addEventListener("click", newGame);

updateDisplay();

newGame();
