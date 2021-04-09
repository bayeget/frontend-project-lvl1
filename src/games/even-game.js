import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const generateQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(0, 10);

  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const evenGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default evenGame;
