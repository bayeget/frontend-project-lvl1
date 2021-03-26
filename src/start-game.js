import correctAnswerText from './correct-answer-text.js';
import finishGameText from './finish-game-text.js';
import wrongAnswerText from './wrong-answer-text.js';
import { greetingText, getUserName } from './cli.js';
import calcGame from './games/calc-game.js';
import parityCheckGame from './games/parity-check-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';
import primeGame from './games/prime-game.js';

let correctAnswerCount = 0;

const gameStep = (gameName, userName) => {
  let userAnswer;
  let correctAnswer;

  if (gameName === 'brain-even') [userAnswer, correctAnswer] = parityCheckGame();
  else if (gameName === 'brain-calc') [userAnswer, correctAnswer] = calcGame();
  else if (gameName === 'brain-gcd') [userAnswer, correctAnswer] = gcdGame();
  else if (gameName === 'brain-progression') [userAnswer, correctAnswer] = progressionGame();
  else if (gameName === 'brain-prime') [userAnswer, correctAnswer] = primeGame();
  else console.log('Houston we have a problem');

  if (userAnswer === correctAnswer) {
    correctAnswerText();
    correctAnswerCount += 1;
    if (correctAnswerCount === 3) finishGameText(userName);
    else gameStep(gameName, userName, correctAnswerCount);
  } else wrongAnswerText(userAnswer, correctAnswer, userName);
};

const startGame = (gameName) => {
  greetingText();
  const userName = getUserName();

  if (gameName === 'brain-even') console.log('Answer "yes" if the number is even, otherwise answer "no".');
  else if (gameName === 'brain-calc') console.log('What is the result of the expression?');
  else if (gameName === 'brain-gcd') console.log('Find the greatest common divisor of given numbers.');
  else if (gameName === 'brain-progression') console.log('What number is missing in the progression?');
  else if (gameName === 'brain-prime') console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  else console.log('Houston we have a problem');

  gameStep(gameName, userName);
};

export default startGame;
