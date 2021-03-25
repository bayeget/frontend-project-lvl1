import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

const parityCheckGame = () => {
  const questionNumber = getRandomNumber(0, 10);
  let correctAnswer;
  let itsCorrectAnswer;

  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  if (userAnswer === correctAnswer) itsCorrectAnswer = true;
  else itsCorrectAnswer = false;
  
  return [itsCorrectAnswer, userAnswer, correctAnswer];
};


export default parityCheckGame;
