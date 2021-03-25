import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

const parityCheckGame = () => {
  const questionNumber = getRandomNumber(0, 10);
  let correctAnswer;

  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  
  return [userAnswer, correctAnswer];
};


export default parityCheckGame;
