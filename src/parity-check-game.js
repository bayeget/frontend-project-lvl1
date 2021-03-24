import readlineSync from 'readline-sync';
import { greeting, userName } from './cli.js';
import randomize from './randomize-number.js';

greeting();

const name = userName();
let correctAnswerCount = 0;

const finishGame = () => {
  console.log(`Congratulations, ${name}!`);
};

const gameStep = () => {
  const questionNumber = randomize();
  let correctAnswer;

  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct');
    correctAnswerCount += 1;
    if (correctAnswerCount === 3) finishGame();
    else gameStep();
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
};

const startGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameStep();
};

export default startGame;
