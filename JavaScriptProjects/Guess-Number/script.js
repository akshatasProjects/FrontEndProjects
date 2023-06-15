'use strict';

// --------Handling Click Event

let guess_number = Math.trunc(Math.random() * 20) + 1;
let score_points = 20;
let highScore = 0;

/* IMPLEMENT A GAME REST FUNCTIONALITY, SO THAT THE PLAYER 
CAN MAKE NEW GUESS! HERE IS HOW

1. Select the element with 'again' class and 
attach a click event handler.

2. In the handler function, restore initial values of 
the score and number variables.

3. Restore the initial conditions of the message number, 
score and guess the input field.

4. Also restore the original background color(#222) 
and number width(15rem)

*/
document.querySelector('.again').addEventListener('click', function () {
  score_points = 20;
  guess_number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = score_points;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // When Player Wins the game
  } else if (guess === guess_number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = guess_number;

    document.querySelector('body').style.backgroundColor = '#06b347';
    document.querySelector('.number').style.width = '30rem';

    // high score will be set equal to score points if score point is high
    if (score_points > highScore) {
      highScore = score_points;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   when guess is high
  else if (guess > guess_number) {
    if (score_points > 1) {
      document.querySelector('.message').textContent = '📈 Too High ';
      score_points--;
      document.querySelector('.score').textContent = score_points;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //   when guess is low
  } else if (guess < guess_number) {
    if (score_points > 1) {
      document.querySelector('.message').textContent = '📈 Too low';
      score_points--;
      document.querySelector('.score').textContent = score_points;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //   } else {
    //     document.querySelector('.message').textContent = 'Not Correct';
  }
});
