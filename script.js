'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered! 🤬';

    // player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // Too high
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Number too high';
    score--;
    document.querySelector('.score').textContent = score;

    //Too low
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Number too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});