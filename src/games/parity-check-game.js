import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
let correctAnswer;

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const generateQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(0, 10);

  if (isEven(questionNumber)) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return [questionNumber, correctAnswer];
};

const parityCheckGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default parityCheckGame;
