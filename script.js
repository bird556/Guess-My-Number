'use strict';

// document.querySelector('.message').textContent = '✨ Correct Number';
// document.querySelector('.number').textContent = '25';
//

// const numberThirty = (document.querySelector('.number').textContent = '30');
// console.log(!!numberThirty, typeof numberThirty);

// document.querySelector('.number').addEventListener('click', function () {
//   //   document.querySelector('.number').textContent = '30';
// });

// Number Guess
let numberGuess = Math.trunc(Math.random() * 20) + 1;
// let numberGuess = 10;
// console.log(numberGuess, typeof numberGuess);
// document.querySelector('.number').textContent = numberGuess;
// console.log(Math.trunc(Math.random() * 20) + 1);

// cheer audio
const cheerAudio = new Audio('audio/cheer.wav');
//

//slap audio
const slapAudio = new Audio('audio/Slap.mp3');

// message display
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// score display
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// highscore display
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
//
// reveal guess display
const displayNumberGuess = function (number) {
  document.querySelector('.number').textContent = number;
};
//
// SCORE

let score = 20;
let highscore = 0;

//
//
//
//
//
//
//
//
//
//
// CHECK BUTTON FUNCTION
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // -------------------------------------------------------------------------
  // IF NO VALUE IS PUT IN INPUT ❌❌❌❌
  if (!guess) {
    displayMessage('💢 Enter a number between 1 and 20');
  }
  //   IF USER IS WRONG 💢💢💢
  else if (guess !== numberGuess) {
    if (score > 1) {
      displayMessage(guess > numberGuess ? 'Too High !!' : 'Too Low !!');
      score--;
      displayScore(score);
      // YOU LOST TRY AGAIN
    } else {
      displayScore(0);
      displayMessage('You Lost.');
      document.body.style.backgroundColor = '#9d0303';
      slapAudio.play();
      slapAudio.currentTime = 0.4;
      slapAudio.volume = 0.3;
    }
  }
  //   IF USER IS CORRECT ✨✨✨✨😎😎
  else if (guess === numberGuess) {
    displayMessage('✨ Correct Number');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    displayNumberGuess(numberGuess);
    // Cheer Audio
    cheerAudio.play();
    cheerAudio.volume = 0.5;
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }
});

// Reset Game Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  numberGuess = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumberGuess('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
});
