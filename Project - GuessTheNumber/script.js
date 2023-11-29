const randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// To inject text in between
const p = document.createElement("p");

// empty array to store the user guesses
let prevGuess = [];

// How many guesses user did
let numGuess = 1;

// Always set one variable to 1 for game project to startOver
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
// To check whether user entered valid num or string, is value <=100 > 1 or more
function validateGuess(enteredNum) {
  if (isNaN(enteredNum)) {
    alert("Please enter a valid Number");
  } else if (enteredNum < 1) {
    alert("Please enter a number more than 1");
  } else if (enteredNum > 100) {
    alert("Enter a Number less than 100");
  } else {
    prevGuess.push(enteredNum);
    if (numGuess > 10) {
      displayGuess(enteredNum);
      displayMessage(`Game Over, the random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(enteredNum);
      checkGuessNum(enteredNum);
    }
  }
}

// here to check whether guessed number is matches or is it Low or high
function checkGuessNum(guessedNum) {
  if (guessedNum === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guessedNum < randomNum) {
    displayMessage(`The Number is too low`);
  } else if (guessedNum > randomNum) {
    displayMessage(`The Number is too high`);
  }
}

// updates cleanups the remaining guess slot
function displayGuess(remGuess) {
  userInput.value = "";
  guessSlot.innerHTML += `${remGuess} ,`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

// Display the message to user
function displayMessage(msg) {
  lowOrHi.innerHTML = `${msg}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start a New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${10 - numGuess}`;
  userInput.removeAttribute("disabled");
  startOver.removeChild(p);
  playGame = true;
}
