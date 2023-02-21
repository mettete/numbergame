'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let score = 20;
let highscore = 0;
document.querySelector('.highscore').value = highscore;
let secretNumber = getRndInteger(1, 20);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // guest yoksa
    displayMessage('No value set ');
  } else if (secretNumber === guess) {
    // kazanırsa scoru yaz
    displayMessage('🔥You won🔥');
    if (score > highscore) {
      // şuanki score highscoredan büyükse değiş
      document.querySelector('.highscore').textContent = score;
      //ve yeni scoru highscore yap
      highscore = score;
    }

    document.querySelector('.number').textContent = secretNumber;
    //yeşiş yap ev genişlet
    document.querySelector('body').style.backgroundColor = '#50C878';
    document.querySelector('.number').style.width = '25rem';
  } else {
    // guest varsa ve kazanmamışsa

    displayMessage(guess > secretNumber ? 'Too high ' : 'Too low');

    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      displayMessage('You lost');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = getRndInteger(1, 20);
  console.log(secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.guess').value = '';
});
