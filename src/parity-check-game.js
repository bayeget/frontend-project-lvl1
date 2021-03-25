import readlineSync from 'readline-sync';
import { greetingText, userName } from './cli.js';
import correctAnswerText from './correct-answer-text.js';
import finishGameText from './finish-game-text.js';
import getRandomNumber from './get-random-number.js';
import wrongAnswerText from './wrong-answer-text.js';

greetingText();

const name = userName();
let correctAnswerCount = 0;

const gameStep = () => {
  const questionNumber = getRandomNumber();
  let correctAnswer;

  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  if (userAnswer === correctAnswer) {
    correctAnswerText();
    correctAnswerCount += 1;
    if (correctAnswerCount === 3) finishGameText(name);
    else gameStep();
  } else wrongAnswerText(userAnswer, correctAnswer);
};

const startParityCheckGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameStep();
};

export default startParityCheckGame;
